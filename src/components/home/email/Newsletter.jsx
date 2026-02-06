import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_zedbv98';
  const EMAILJS_PUBLIC_KEY = 'QXWEgS_qxSF3W0m3E';
  const EMAILJS_TEMPLATE_ID = 'template_iwi0gbo'; // You'll create this

  const sendConfirmationEmail = async (userEmail) => {
    try {
      const templateParams = {
        to_email: userEmail,
        to_name: userEmail.split('@')[0], // Use email username as name
        from_name: 'ECELL SAKEC', // Replace with your company name
        subject: 'Welcome to Our Newsletter!',
        message: `
Thank you for subscribing to our newsletter! 

We're excited to have you join our community. You'll receive:
• Latest updates and news
• Exclusive content and offers  
• Industry insights and tips

If you have any questions, feel free to reply to this email.

Welcome aboard!

Best regards,
Your Company Team
        `.trim(),
        reply_to: 'noreply@yourcompany.com' // Replace with your email
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      return { success: true };
    } catch (error) {
      console.error('EmailJS failed:', error);
      return { 
        success: false, 
        error: error.text || 'Failed to send confirmation email' 
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Send confirmation email
      const result = await sendConfirmationEmail(email);

      if (result.success) {
        setIsSubscribed(true);
        
        // Optional: Also save to your database/mailing list
        // await addToMailingList(email);
        
        // Reset after 4 seconds to show the success message longer
        setTimeout(() => {
          setIsSubscribed(false);
          setEmail('');
        }, 4000);
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error('Subscription failed:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Optional: Add to your mailing list database
  const addToMailingList = async (userEmail) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/mailing-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: userEmail,
          subscribed_at: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        console.error('Failed to add to mailing list');
      }
    } catch (error) {
      console.error('Error adding to mailing list:', error);
    }
  };

  return (
    <div className="w-full bg-black text-white px-8 py-20 mt-16 relative overflow-hidden">
      <div className="newsletter-container max-w-3xl mx-auto mb-20 text-center border-2 border-white/20 rounded-3xl p-10 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="newsletter-bg absolute inset-0 rounded-2xl -z-10"></div>
        
        {/* Content */}
        <div className="newsletter-icon text-white/90 mb-5 text-2xl">
          📧
        </div>
        
        <h3 className="newsletter-title text-white/95 text-2xl font-semibold mb-3">
          Newsletter Subscription
        </h3>
        
        <p className="newsletter-subtitle  text-white/80 text-base mb-8 leading-relaxed">
          Subscribe to our newsletter and get a confirmation email instantly!
        </p>
        
        {/* Form or Success Animation */}
        <div className="min-h-[80px] flex items-center justify-center">
          {isSubscribed ? (
            // Success Animation
            <div className="success-animation text-center">
              <div className="checkmark-container mb-4">
                <svg 
                  className="checkmark w-16 h-16 mx-auto text-green-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="checkmark-circle" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                  />
                  <path 
                    className="checkmark-check" 
                    d="m9 12 2 2 4-4" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="success-text">
                <h4 className="text-white text-xl font-semibold mb-2 animate-fade-in">
                  Thanks for subscribing!
                </h4>
                <p className="text-white/80 text-sm animate-fade-in-delay">
                  We've sent a confirmation email to <strong>{email}</strong>
                </p>
                <p className="text-white/60 text-xs mt-2 animate-fade-in-delay">
                  Check your inbox (and spam folder) for the welcome message
                </p>
              </div>
            </div>
          ) : (
            // Email Form
            <div className="w-full">
              <div className="email-form flex gap-0 max-w-md mx-auto border-2 border-white/30 rounded-full overflow-hidden w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(''); // Clear error when typing
                  }}
                  className="email-input flex-1 px-6 py-4 border-none bg-transparent text-white text-base outline-none placeholder-white/60"
                  placeholder="Enter your email here"
                  disabled={isSubmitting}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                />
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !email.trim()}
                  className="subscribe-btn cursor-target bg-white/20 text-white border border-white/30 px-8 py-4 text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-white/30 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="loading-spinner w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              
              {/* Error message */}
              {error && (
                <div className="mt-4 text-red-300 text-sm bg-red-900/30 border border-red-500/30 rounded-lg px-4 py-2 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    {error}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Instructions */}
        <div className="mt-6 text-xs text-white/40">
          You'll receive a welcome email with subscription confirmation
        </div>
      </div>
    </div>
  );
};

export default Newsletter;