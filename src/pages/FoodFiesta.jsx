import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { motion } from 'framer-motion';
import { Menu, X, Utensils, Music, Calendar, MapPin, ChefHat, Pizza, Instagram, Linkedin, Clock, Star, Trophy, Briefcase } from 'lucide-react';
import { ImagesSlider } from '../components/ui/images-slider';
import { EmblaCarousel } from '../components/ui/embla-carousel';


/* 
  Neo-Brutalist Theme Constants:
  Yellow: #FFD700
  Red: #FF3333
  Blue: #007BFF
  Black: #000000
*/

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFD700] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20">
          {/* Logo Section - Left Align */}
          <div className="flex items-center gap-2 justify-self-start">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
              <img
                src="public\FF_logo2026.png"
                alt="Food Fiesta Logo"
                className="rounded-full"
              />
            </div>
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tighter truncate max-w-[200px] sm:max-w-none"
              style={{ fontFamily: "'Bangers', cursive" }}
            >
              FOOD FIESTA
            </h1>
          </div>

          {/* Desktop Navigation - Center Align */}
          <div className="hidden md:flex justify-self-center items-center space-x-12">
            {["Home", "Event", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black font-bold text-xl hover:underline decoration-4 decoration-[#ff3333] underline-offset-4"
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Register Button - Right Align */}
          <div className="hidden md:flex justify-self-end items-center">
            <Button
              className="bg-[#ff3333] text-white font-bold border-2 border-black hover:bg-[#cc0000] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg px-6 tracking-wide"
              style={{ fontFamily: "'Bangers', cursive" }}
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSd99b2QEWfRWLBgnomGPladGO6EfRgYiBoId5ETIU5STjDKMw/viewform?pli=1",
                  "_blank",
                )
              }
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Toggle - Right Align on Mobile */}
          <div className="flex items-center md:hidden justify-self-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              {isOpen ? (
                <X className="block h-8 w-8" />
              ) : (
                <Menu className="block h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFD700] border-t-4 border-black absolute top-full left-0 w-full shadow-2xl z-40">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {["Home", "Event", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black text-2xl font-black uppercase tracking-wide py-3 text-center border-b-4 border-black/10 hover:bg-white/20 rounded-xl transition-colors"
                style={{ fontFamily: "'Bangers', cursive" }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <Button
                className="w-full bg-[#ff3333] tracking-widest text-white text-xl font-black border-4 border-black py-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                style={{ fontFamily: "'Bangers', cursive" }}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd99b2QEWfRWLBgnomGPladGO6EfRgYiBoId5ETIU5STjDKMw/viewform?pli=1",
                    "_blank",
                  )
                }
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};



const Hero = () => {
  const heroImages = [
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292909/img1_unt6rg.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292909/img2_zurxa4.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292908/img3_fx9vak.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292909/img4_b8xzft.jpg"
  ];

  return (
    <section id="home" className="relative pt-20 border-b-4 border-black"> 
       <ImagesSlider className="h-[45rem]" images={heroImages}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-50 flex flex-col justify-center items-center text-center px-4"
          >
             {/* Background Decorative Elements within slider context if needed, or keep simple */}
             <div className="absolute top-20 right-[-50px] w-40 h-40 bg-[#007BFF] rounded-full border-4 border-black opacity-80 animate-pulse hidden md:block"></div>
             <div className="absolute bottom-20 left-[-50px] w-64 h-64 bg-[#ff3333] rounded-full border-4 border-black opacity-80 animate-bounce hidden md:block" style={{ animationDuration: '3s' }}></div>

             <div className="relative z-10 bg-white p-8 md:p-12 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-5xl mx-auto">
                <span className="inline-block py-1 px-3 rounded border-2 border-black bg-[#FFD700] font-bold text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
                   🎉 THE TASTIEST EVENT OF THE YEAR
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-6 relative" style={{ fontFamily: "'Bangers', cursive", textShadow: "4px 4px 0 #FFD700" }}>
                  FOOD FIESTA <span className="text-[#ff3333]">2026</span>
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-black font-bold max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Comic Neue', cursive" }}>
                  Satisfy your cravings with the craziest culinary carnival! Street food, gourmet bites, and music beats all in one place.
                </p>
                
                <div className="mt-10 flex justify-center items-center">
                   <Button size="lg" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd99b2QEWfRWLBgnomGPladGO6EfRgYiBoId5ETIU5STjDKMw/viewform?pli=1', '_blank')} className="text-xl px-12 py-8 bg-[#FFD700] text-black font-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all transform hover:bg-[#FFD700] active:scale-95 tracking-wide" style={{ fontFamily: "'Bangers', cursive" }}>
                    Register Now ✨
                   </Button>
                </div>
             </div>
          </motion.div>
       </ImagesSlider>
    </section>
  );
};

const Marquee = () => {
    return (
        <div className="bg-black text-[#FFD700] py-3 border-y-4 border-black overflow-hidden whitespace-nowrap sticky top-20 z-40 transform rotate-[-1deg] w-[105%] -ml-[2.5%] flex antialiased shadow-lg">
            <div className="animate-marquee inline-block font-black text-2xl min-w-full px-4 flex-shrink-0 tracking-widest" style={{ fontFamily: "'Bangers', cursive" }}>
                REGISTER NOW • LIVE MUSIC • AMAZING FOOD • FUN GAMES • CHEF SPECIALS • REGISTER NOW • LIVE MUSIC • AMAZING FOOD • FUN GAMES • CHEF SPECIALS • 
            </div>
            <div className="animate-marquee inline-block font-black text-2xl min-w-full px-4 flex-shrink-0 tracking-widest" style={{ fontFamily: "'Bangers', cursive" }}>
                REGISTER NOW • LIVE MUSIC • AMAZING FOOD • FUN GAMES • CHEF SPECIALS • REGISTER NOW • LIVE MUSIC • AMAZING FOOD • FUN GAMES • CHEF SPECIALS • 
            </div>
        </div>
    )
}

const Features = () => {
  const features = [
    { title: "Culinary Stalls", icon: <ChefHat className="w-10 h-10" />, desc: "Fresh, hygienic & pure vegetarian delicacies by student chefs.", color: "bg-[#ff3333]" },
    { title: "Business Stalls", icon: <Briefcase className="w-10 h-10" />, desc: "Innovative ideas & entrepreneurial initiatives on display.", color: "bg-[#007BFF]" },
    { title: "Yuva Vibes", icon: <Music className="w-10 h-10" />, desc: "Celebrate with music, fun games, and the spirit of Pratistha.", color: "bg-[#FFD700]" },
  ];

  return (
    <section id="event" className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
               <h2 className="text-5xl font-black text-black mb-4" style={{ fontFamily: "'Bangers', cursive" }}>WHAT TO EXPECT?</h2>
               <div className="h-2 w-32 bg-black mx-auto"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {features.map((f, i) => (
                   <Card key={i} className={`transform hover:-translate-y-2 transition-all duration-300 ${f.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
                       <CardHeader>
                           <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                               {f.icon}
                           </div>
                           <CardTitle className="text-3xl text-white" style={{ textShadow: "2px 2px 0 #000" }}>{f.title}</CardTitle>
                       </CardHeader>
                       <CardContent>
                           <p className="text-lg font-bold text-black bg-white/50 p-2 rounded border-2 border-black/20">
                               {f.desc}
                           </p>
                       </CardContent>
                   </Card>
               ))}
           </div>
       </div>
    </section>
  )
}



// ... (other code)

const Timeline = () => {
  const events = [
      {
          date: "FEB 4, 2026",
          title: "REGISTRATION DEADLINE",
          desc: "Last day to register your team (Max 5 members). Fee: ₹250.",
          icon: <Clock className="w-8 h-8" />,
          badge: "CLOSED",
          color: "bg-white"
      },
      {
          date: "FEB 5 - 15, 2026",
          title: "SHORTLISTING & FEES",
          desc: "Shortlisted teams pay stall fee (₹250) to confirm.",
          icon: <Calendar className="w-8 h-8" />,
          badge: "IN PROGRESS",
          color: "bg-white"
      },
      {
          date: "FEB 16, 2026",
          title: "EVENT DAY: YUVA",
          desc: "10:00 AM - 5:00 PM. Culinary & Business Stalls.",
          icon: <Star className="w-8 h-8" />,
          badge: "UPCOMING",
          color: "bg-[#ff3333]", 
          textColor: "text-white",
          fullWidth: true
      }
  ];

  return (
      <section className="py-20 bg-[#FFD700] border-t-4 border-black relative overflow-hidden">
           {/* Decor */}
           <div className="absolute top-10 right-10 text-6xl font-black text-black/10 rotate-12 pointer-events-none select-none hidden md:block" style={{ fontFamily: "'Bangers', cursive" }}>POW!</div>
           <div className="absolute bottom-10 left-10 text-6xl font-black text-black/10 -rotate-12 pointer-events-none select-none hidden md:block" style={{ fontFamily: "'Bangers', cursive" }}>ZAP!</div>

           <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16 relative z-10">
                  <h2 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase" style={{ fontFamily: "'Bangers', cursive" }}>
                      Event <span className="text-[#ff3333] inline-block transform -rotate-2">Timeline</span>
                  </h2>
                  <div className="h-2 w-32 bg-black mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  {events.map((e, i) => (
                      <div key={i} className={`relative group ${e.fullWidth ? 'md:col-span-2' : ''}`}>
                           {/* Badge */}
                           {e.badge && (
                              <div className={`absolute -top-6 -right-4 z-20 ${e.badge === 'CLOSED' ? 'bg-[#ff3333] text-white' : 'bg-[#FFD700] text-black'} border-4 border-black px-4 py-1 transform rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm`}>
                                  {e.badge}
                              </div>
                           )}
                           
                           <div className={`${e.color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 items-start transition-transform hover:-translate-y-1 h-full`}>
                              <div className={`flex-shrink-0 w-16 h-16 ${e.color === 'bg-white' ? 'bg-[#ff3333]' : 'bg-white'} border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                                  <div className={e.color === 'bg-white' ? 'text-white' : 'text-black'}>
                                      {e.icon}
                                  </div>
                              </div>
                              <div>
                                  <div className="inline-block bg-black text-[#FFD700] px-3 py-1 font-bold text-sm mb-2 transform -rotate-1">
                                      {e.date}
                                  </div>
                                  <h3 className={`text-3xl font-black mb-2 uppercase ${e.textColor || 'text-black'}`} style={{ fontFamily: "'Bangers', cursive" }}>
                                      {e.title}
                                  </h3>
                                  <p className={`font-bold text-lg ${e.textColor || 'text-black'}`} style={{ fontFamily: "'Comic Neue', cursive" }}>
                                      {e.desc}
                                  </p>
                              </div>
                           </div>
                      </div>
                  ))}
              </div>

              <div className="mt-16 text-center relative z-10 w-full flex justify-center">
                  <Button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd99b2QEWfRWLBgnomGPladGO6EfRgYiBoId5ETIU5STjDKMw/viewform?pli=1', '_blank')} className="text-lg md:text-xl px-6 py-6 md:px-10 md:py-8 w-full md:w-auto whitespace-normal h-auto leading-tight bg-white text-black font-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-gray-50 transition-all tracking-wide" style={{ fontFamily: "'Bangers', cursive" }}>
                      REGISTER YOUR STALL
                  </Button>
              </div>
           </div>
      </section>
  )
}

const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292909/img1_unt6rg.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292909/img2_zurxa4.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292908/img3_fx9vak.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292909/img4_b8xzft.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292909/img5_mvhdto.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292908/img6_apxo6z.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292908/img7_x1onrx.jpg",
    "https://res.cloudinary.com/dameech1u/image/upload/v1770292908/img8_fz1qrp.jpg"
  ];

  return (
    <section id="gallery" className="py-20 bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded border-2 border-black bg-[#FFD700] font-bold text-sm mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[2deg]">
             📸 MEMORIES FROM 2025
          </span>
          <h2 className="text-5xl font-black text-black mb-4" style={{ fontFamily: "'Bangers', cursive" }}>LAST YEAR WAS CRAZY!</h2>
          <div className="h-2 w-32 bg-black mx-auto"></div>
        </div>
        
        <div className="mt-8">
           <EmblaCarousel images={images} />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
    const handleWhatsAppRedirect = (number) => {
        const message = encodeURIComponent("Hey! I have a query regarding Food Fiesta 2026.");
        window.open(`https://wa.me/${number}?text=${message}`, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-[#fceba7] relative">
             <div className="max-w-4xl mx-auto px-4 relative z-10 w-full text-center">
                 <Card className="bg-white border-4 border-black p-4 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                     <CardHeader>
                         <div className="w-20 h-20 bg-[#25D366] rounded-full border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                             <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                             </svg>
                         </div>
                         <CardTitle className="text-4xl md:text-6xl mb-4 text-black" style={{ fontFamily: "'Bangers', cursive" }}>GOT QUESTIONS?</CardTitle>
                         <CardDescription className="text-xl md:text-2xl font-bold text-black max-w-lg mx-auto mb-6">
                            Reach out to our organizers for any queries!
                         </CardDescription>
                         <div className="flex flex-col gap-2 text-center items-center justify-center font-bold text-lg mb-6 text-black">
                           <p>Varshit Jain: <span className="text-[#007BFF] font-black" style={{ fontFamily: "'Bangers', cursive" }}>+91 98197 56206</span></p>
                           <p>Rushabh Jain: <span className="text-[#ff3333] font-black" style={{ fontFamily: "'Bangers', cursive" }}>+91 91362 74647</span></p>
                         </div>
                     </CardHeader>
                     <CardContent className="pb-8 flex flex-col md:flex-row gap-4 justify-center">
                        <Button 
                            className="w-full md:w-auto text-xl py-8 px-8 bg-[#25D366] text-white border-4 border-black hover:bg-[#128C7E] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all tracking-wide"
                            style={{ fontFamily: "'Bangers', cursive" }}
                            onClick={() => handleWhatsAppRedirect("919819756206")}
                        >
                            CHAT W/ VARSHIT
                        </Button>
                        <Button 
                            className="w-full md:w-auto text-xl py-8 px-8 bg-white text-black border-4 border-black hover:bg-gray-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all tracking-wide"
                            style={{ fontFamily: "'Bangers', cursive" }}
                            onClick={() => handleWhatsAppRedirect("919136274647")}
                        >
                            CHAT W/ RUSHABH
                        </Button>
                     </CardContent>
                 </Card>
             </div>
             
             {/* Decor */}
             <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full border-4 border-black hidden lg:block animate-bounce" style={{ animationDuration: '4s' }}></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 transform rotate-12 border-4 border-black hidden lg:block animate-pulse"></div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t-8 border-[#FFD700]">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h2 className="text-4xl" style={{ fontFamily: "'Bangers', cursive" }}>FOOD FIESTA</h2>
                    <p className="text-gray-400 font-bold mt-2" style={{ fontFamily: "'Comic Neue', cursive" }}>© 2026 E-Cell. All Rights Reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/company/entrepreneurship-and-innovationcell/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#007BFF] rounded border-2 border-white flex items-center justify-center text-black font-bold hover:scale-110 transition-transform">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/ecellsakec/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ff3333] rounded border-2 border-white flex items-center justify-center text-black font-bold hover:scale-110 transition-transform">
                        <Instagram className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

function App() {
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:20px_20px] font-sans selection:bg-[#FFD700] selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Gallery />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
