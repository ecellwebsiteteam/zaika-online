// import React from "react";
// import "./TeamSection.css";
// import member1 from "../assets/team/cat1.jpg";

// const TeamSection = () => {
//   const newsletters = [
//     {
//       id: 1,
//       title: "Design Weekly",
//       image: member1,
//       description: "Latest trends & insights in modern design"
//     },
//     {
//       id: 2,
//       title: "Tech Digest",
//       image: member1,
//       description: "Cutting-edge technology news & tutorials"
//     },
//     {
//       id: 3,
//       title: "Creative Minds",
//       image: member1,
//       description: "Inspiration for creative professionals"
//     },
//   ];

//   return (
//     <div className="cards-container">
//       {newsletters.map((newsletter) => (
//         <div key={newsletter.id} className="newsletter-card">
//           <img
//             src={newsletter.image}
//             alt={newsletter.title}
//             className="card-image"
//           />

//           <div className="floating-content">
//             <h3 className="newsletter-title">{newsletter.title}</h3>
//             <p className="newsletter-description">{newsletter.description}</p>

//             <div className="action-indicator">
//               <svg viewBox="0 0 24 24" className="arrow-icon">
//                 <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TeamSection;
import React, { useEffect, useState, useCallback } from "react";
import "./TeamSection.css";
import pg1 from "../../assets/team/pg1.png";
import pg2 from "../../assets/team/pg2.png";
import pg3 from "../../assets/team/pg3.png";
import pg4 from "../../assets/team/pg4.png";
import pg5 from "../../assets/team/pg5.png";
import pg6 from "../../assets/team/pg6.png";
import pg7 from "../../assets/team/pg7.png";
import pg8 from "../../assets/team/pg8.png";

const TeamSection = () => {
  const newsletters = [
    {
      id: 1,
      title: "Design Weekly",
      description: "Latest trends & insights in modern design",
      image: pg1,
    },
    {
      id: 2,
      title: "Tech Digest",
      description: "Weekly updates from the tech world",
      image: pg2,
    },
    {
      id: 3,
      title: "Startup Spotlight",
      description: "Highlighting the most innovative startups",
      image: pg3,
    },
    {
      id: 4,
      title: "Innovation Hub",
      description: "Ideas and insights to fuel creativity",
      image: pg4,
    },
    {
      id: 5,
      title: "Creative Minds",
      description:
        "Exploring design, art, and creative strategies for professionals.",
      image: pg5,
    },
    {
      id: 6,
      title: "Future Tech",
      description:
        "Emerging technologies, AI, blockchain, and cutting-edge developments.",
      image: pg6,
    },
    {
      id: 7,
      title: "Growth Strategies",
      description:
        "Tips and strategies for startups, business growth, and productivity.",
      image: pg7,
    },
    {
      id: 8,
      title: "Trends & Insights",
      description:
        "Curated insights on design, tech, and business trends shaping the industry.",
      image: pg8,
    },
  ];

  const [lightboxImage, setLightboxImage] = useState(null);

  const handleOpen = useCallback((src) => {
    setLightboxImage(src);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Page heading + description */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
          marginBottom: "50px",
        }}
      >
        <h1
        className="font-[vampire] px-5 text-[3rem]  md:text-[4.5rem]"
          style={{
            // fontSize: "4.5rem",
            fontWeight: "800",
            marginBottom: "10px",
            color: "#ebebffff",
            lineHeight: "1.2",
          }}
        >
          Our Newsletters
        </h1>
        <p
        className="font-[font1] px-14 text-l"
          style={{
            color: "#7c7878ff",
            lineHeight: "1.6",
          }}
        >
          Subscribe to our curated newsletters to get the latest insights,
          trends, and updates from design, technology, and startups delivered
          straight to your inbox.
        </p>
      </div>

      {/* Newsletter cards */}
      <div className="team-section">
        {newsletters.map((item) => (
          <div key={item.id} className="team-card-wrapper">
            <div className="team-card">
              <img
                src={item.image}
                alt={item.title}
                className="team-image"
                onClick={() => handleOpen(item.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpen(item.image);
                  }
                }}
              />
              <button
                className="read-more-btn"
                onClick={() => handleOpen(item.image)}
              >
                Read More
              </button>
            </div>
            <h3 className="team-title font-[vampire] text-white text-2xl pt-5 ">{item.title}</h3>
            <p className="team-desc font-[font1] ">{item.description}</p>
          </div>
        ))}
      </div>
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={handleClose}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Expanded"
              className="lightbox-image"
            />
            <button
              className="lightbox-close"
              onClick={handleClose}
              aria-label="Close image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
