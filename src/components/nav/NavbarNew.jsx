import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ contentRef }) => {
  const navigate = useNavigate();
  const menuToggleRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const menuPreviewImgRef = useRef(null);
  const menuOpenRef = useRef(null);
  const menuCloseRef = useRef(null);
  const linkRefs = useRef([]);
  const socialRefs = useRef([]);

  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const menuLinks = [
    { name: "Home", path: "/", img: "/images/img-1.jpg" },
    { name: "Events", path: "/events", img: "/images/img-2.jpg" },
    { name: "Team", path: "/team", img: "/images/img-3.jpg" },
    { name: "Newsletters", path: "/newsletters", img: "/images/img-4.jpg" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ecellsakec/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/entrepreneurship-and-innovationcell/posts/?feedView=all",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Twitter",
      url: "https://x.com/ecellsakec",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Sakec",
      url: "https://sakec.ac.in/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  const cleanupPreviewImages = () => {
    if (!menuPreviewImgRef.current) return;
    const previewImages = menuPreviewImgRef.current.querySelectorAll("img");
    if (previewImages.length > 3) {
      for (let i = 0; i < previewImages.length - 3; i++) {
        menuPreviewImgRef.current.removeChild(previewImages[i]);
      }
    }
  };

  const resetPreviewImage = () => {
    if (!menuPreviewImgRef.current) return;
    menuPreviewImgRef.current.innerHTML = "";
    const defaultPreviewImg = document.createElement("img");
    defaultPreviewImg.src = "/images/img-1.jpg";
    defaultPreviewImg.alt = "Preview";
    menuPreviewImgRef.current.appendChild(defaultPreviewImg);
  };

  useEffect(() => {
    // Set initial states
    if (menuOpenRef.current && menuCloseRef.current) {
      gsap.set(menuCloseRef.current, {
        opacity: 0,
        x: -5,
        y: 10,
        rotation: 5,
      });
    }

    if (linkRefs.current.length > 0) {
      gsap.set(linkRefs.current, { y: "120%", opacity: 0.25 });
    }

    if (socialRefs.current.length > 0) {
      gsap.set(socialRefs.current, { y: "120%", opacity: 0.25 });
    }

    if (menuContentRef.current) {
      gsap.set(menuContentRef.current, {
        x: -100,
        y: -100,
        scale: 1.5,
        rotation: -15,
        opacity: 0.25,
      });
    }

    if (menuOverlayRef.current) {
      gsap.set(menuOverlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
    }

    if (contentRef?.current) {
      gsap.set(contentRef.current, {
        opacity: 1,
      });
    }

    // Reset preview image
    resetPreviewImage();
  }, []);

  const animateMenuToggle = (isOpening) => {
    const open = menuOpenRef.current;
    const close = menuCloseRef.current;
    if (!open || !close) return;

    // Animate the current text out
    gsap.to(isOpening ? open : close, {
      x: isOpening ? -5 : 5,
      y: isOpening ? -10 : 10,
      rotation: isOpening ? -5 : 5,
      opacity: 0,
      delay: 0.25,
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate the new text in
    gsap.to(isOpening ? close : open, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const openMenu = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    document.body.classList.add("menu-open");

    animateMenuToggle(true);

    if (menuContentRef.current) {
      gsap.to(menuContentRef.current, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.1,
        opacity: 1,
        ease: "power4.inOut",
      });
    }

    if (contentRef?.current) {
      gsap.to(contentRef.current, {
        rotation: 10,
        x: 300,
        y: 450,
        scale: 1.5,
        opacity: 0,
        duration: 0.9,
        ease: "power4.inOut",
      });
    }

    const allLinks = [...linkRefs.current, ...socialRefs.current].filter(
      Boolean
    );
    if (allLinks.length > 0) {
      gsap.to(allLinks, {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });
    }

    if (menuOverlayRef.current) {
      gsap.to(menuOverlayRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 175%, 0% 100%)",
        duration: 1.0,
        ease: "power3.inOut",
        onComplete: () => {
          setIsOpen(true);
          setIsAnimating(false);
        },
      });
    }
  };

  const closeMenu = () => {
    if (isAnimating || !isOpen) return;
    setIsAnimating(true);

    animateMenuToggle(false);

    if (menuContentRef.current) {
      gsap.to(menuContentRef.current, {
        rotation: -15,
        x: -100,
        y: -100,
        scale: 1.5,
        duration: 1.25,
        opacity: 0.25,
        ease: "power4.inOut",
      });
    }

    if (contentRef?.current) {
      gsap.to(contentRef.current, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.25,
        ease: "power4.inOut",
      });
    }

    if (menuOverlayRef.current) {
      gsap.to(menuOverlayRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "power4.inOut",
        onComplete: () => {
          setIsOpen(false);
          setIsAnimating(false);
          document.body.classList.remove("menu-open");
          const allLinks = [...linkRefs.current, ...socialRefs.current].filter(
            Boolean
          );
          if (allLinks.length > 0) {
            gsap.set(allLinks, { y: "120%" });
          }
          resetPreviewImage();
        },
      });
    }
  };

  const handleMenuToggle = () => {
    if (!isOpen) openMenu();
    else closeMenu();
  };

  const handleLinkHover = (imgSrc) => {
    if (!isOpen || isAnimating || !menuPreviewImgRef.current) return;

    const previewImages = menuPreviewImgRef.current.querySelectorAll("img");

    // Prevent adding the same image again
    if (
      previewImages.length > 0 &&
      previewImages[previewImages.length - 1].src.endsWith(imgSrc)
    ) {
      return;
    }

    const newPreviewImg = document.createElement("img");
    newPreviewImg.src = imgSrc;
    newPreviewImg.alt = "Preview";
    newPreviewImg.style.opacity = "0";
    newPreviewImg.style.transform = "scale(1.25) rotate(10deg)";

    menuPreviewImgRef.current.appendChild(newPreviewImg);
    cleanupPreviewImages();

    gsap.to(newPreviewImg, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.75,
      ease: "power2.out",
    });
  };

  const handleLinkClick = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <>
      <nav>
        <div
          className="logo px-3 py-1 cursor-pointer rounded-xl border border-white/20 backdrop-blur-md 
                bg-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 
                hover:bg-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
        >
          <Link to="/" className="flex items-center">
            <img src="/ecell-logo.png" alt="logo" className="w-8 h-6 mr-1" />
            <span className="text-white text-l">EIC SAKEC</span>
          </Link>
        </div>
        <div
          className="menu-toggle "
          ref={menuToggleRef}
          onClick={handleMenuToggle}
        >
          <p
            className="logo px-3 py-1 cursor-pointer rounded-xl border border-white/20 backdrop-blur-md 
                bg-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.01)] transition-all duration-300 
                hover:bg-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            id="menu-open"
            ref={menuOpenRef}
          >
            Menu
          </p>
          <p
            className="logo px-3 py-1 cursor-pointer rounded-xl border border-white/20 backdrop-blur-md 
                bg-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.01)] transition-all duration-300 
                hover:bg-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            id="menu-close"
            ref={menuCloseRef}
          >
            Close
          </p>
        </div>
      </nav>

      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-content" ref={menuContentRef}>
          <div className="menu-items">
            <div className="col-lg">
              <div className="menu-preview-image" ref={menuPreviewImgRef}></div>
            </div>
            <div className="col-sm">
              <div className="menu-links">
                {menuLinks.map((link, index) => (
                  <div key={link.name} className="link">
                    <a
                      href={link.path}
                      ref={(el) => (linkRefs.current[index] = el)}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.path);
                      }}
                      onMouseEnter={() => handleLinkHover(link.img)}
                      data-img={link.img}
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="menu-socials">
                {socialLinks.map((social, index) => (
                  <div key={social.name} className="social">
                    <a
                      href={social.url}
                      ref={(el) => (socialRefs.current[index] = el)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="menu-footer">
            <div className="col-lg text-white/50">
              <a href="#">Sponsors</a>
            </div>
            <div className="col-sm text-right text-white/50">
              <a href="https://www.sakec.ac.in/entrepreneurship-cell/food-fiesta-2026/" target="_blank" rel="noopener noreferrer">Food Fiesta</a>
              <a href="#" className="max-w-full">
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
