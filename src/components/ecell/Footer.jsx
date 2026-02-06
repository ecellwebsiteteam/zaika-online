import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Matter from "matter-js";
import "../utils/gsap-setup"

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const objectContainerRef = useRef(null);
  const physicsEngineRef = useRef(null);

  const config = {
    gravity: { x: 0, y: 1 },
    restitution: 0.5,
    friction: 0.15,
    frictionAir: 0.02,
    density: 0.002,
    wallThickness: 200,
    mouseStiffness: 0.6,
  };

  const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
  };

  const initPhysics = (container) => {
    const engine = Matter.Engine.create();
    engine.gravity = config.gravity;
    engine.constraintIterations = 10;
    engine.positionIterations = 20;
    engine.velocityIterations = 16;
    engine.timing.timeScale = 1;

    const containerRect = container.getBoundingClientRect();
    const wallThickness = config.wallThickness;

    const walls = [
      Matter.Bodies.rectangle(
        containerRect.width / 2,
        containerRect.height + wallThickness / 2,
        containerRect.width + wallThickness * 2,
        wallThickness,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        containerRect.height / 2,
        wallThickness,
        containerRect.height + wallThickness * 2,
        { isStatic: true }
      ),
      Matter.Bodies.rectangle(
        containerRect.width + wallThickness / 2,
        containerRect.height / 2,
        wallThickness,
        containerRect.height + wallThickness * 2,
        { isStatic: true }
      ),
    ];
    Matter.World.add(engine.world, walls);

    const objects = container.querySelectorAll(".object");
    const bodies = [];
    objects.forEach((obj, index) => {
      const objRect = obj.getBoundingClientRect();
      const startX =
        Math.random() * (containerRect.width - objRect.width) +
        objRect.width / 2;
      const startY = -500 - index * 200;
      const startRotation = (Math.random() - 0.5) * Math.PI;

      const body = Matter.Bodies.rectangle(
        startX,
        startY,
        objRect.width,
        objRect.height,
        {
          restitution: config.restitution,
          friction: config.friction,
          frictionAir: config.frictionAir,
          density: config.density,
        }
      );

      Matter.Body.setAngle(body, startRotation);
      bodies.push({
        body,
        element: obj,
        width: objRect.width,
        height: objRect.height,
      });
      Matter.World.add(engine.world, body);
    });

    setTimeout(() => {
      const topWall = Matter.Bodies.rectangle(
        containerRect.width / 2,
        -wallThickness / 2,
        containerRect.width + wallThickness * 2,
        wallThickness,
        { isStatic: true }
      );
      Matter.World.add(engine.world, topWall);
    }, 6000);

    const mouse = Matter.Mouse.create(container);
    // Ensure Matter doesn't hijack page scrolling
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    mouse.element.removeEventListener("wheel", mouse.mousewheel);
    mouse.element.removeEventListener("touchmove", mouse.mousemove);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: config.mouseStiffness,
        render: { visible: false },
      },
    });
    // Prevent Matter's internal handlers from calling preventDefault on wheel/touch
    if (
      mouseConstraint &&
      mouseConstraint.mouse &&
      mouseConstraint.mouse.element
    ) {
      mouseConstraint.mouse.element.addEventListener("wheel", () => {}, {
        passive: true,
      });
      mouseConstraint.mouse.element.addEventListener("touchmove", () => {}, {
        passive: true,
      });
    }
    mouseConstraint.mouse.element.oncontextmenu = () => false;

    let dragging = null;
    let originalInertia = null;

    Matter.Events.on(mouseConstraint, "startdrag", (event) => {
      dragging = event.body;
      if (dragging) {
        originalInertia = dragging.inertia;
        Matter.Body.setInertia(dragging, Infinity);
        Matter.Body.setVelocity(dragging, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(dragging, 0);
      }
    });

    Matter.Events.on(mouseConstraint, "enddrag", () => {
      if (dragging) {
        Matter.Body.setInertia(dragging, originalInertia || 1);
        dragging = null;
        originalInertia = null;
      }
    });

    Matter.Events.on(engine, "beforeUpdate", () => {
      if (!dragging) return;
      const found = bodies.find((b) => b.body === dragging);
      if (!found) return;

      const minX = found.width / 2;
      const maxX = containerRect.width - found.width / 2;
      const minY = found.height / 2;
      const maxY = containerRect.height - found.height / 2;

      Matter.Body.setPosition(dragging, {
        x: clamp(dragging.position.x, minX, maxX),
        y: clamp(dragging.position.y, minY, maxY),
      });
      Matter.Body.setVelocity(dragging, {
        x: clamp(dragging.velocity.x, -20, 20),
        y: clamp(dragging.velocity.y, -20, 20),
      });
    });

    container.addEventListener("mouseleave", () => {
      mouseConstraint.constraint.bodyB = null;
      mouseConstraint.constraint.pointB = null;
    });
    document.addEventListener("mouseup", () => {
      mouseConstraint.constraint.bodyB = null;
      mouseConstraint.constraint.pointB = null;
    });

    Matter.World.add(engine.world, mouseConstraint);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    function updatePositions() {
      bodies.forEach(({ body, element, width, height }) => {
        const x = clamp(
          body.position.x - width / 2,
          0,
          containerRect.width - width
        );
        const y = clamp(
          body.position.y - height / 2,
          -height * 3,
          containerRect.height - height
        );
        element.style.left = x + "px";
        element.style.top = y + "px";
        element.style.transform = `rotate(${body.angle}rad)`;
      });
      requestAnimationFrame(updatePositions);
    }
    updatePositions();

    return engine;
  };

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    // Initialize physics when footer comes into view (matching original main.js)
    if (footerRef.current) {
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top bottom", // matching original
        once: true,
        onEnter: () => {
          if (objectContainerRef.current) {
            // reveal objects just-in-time
            objectContainerRef.current.style.opacity = "1";
            physicsEngineRef.current = initPhysics(objectContainerRef.current);
          }
        },
      });
    }

    // Handle window resize (matching original approach)
    const handleResize = () => {
      if (physicsEngineRef.current && objectContainerRef.current) {
        const newContainer =
          footerRef.current?.querySelector(".object-container");
        if (newContainer) {
          objectContainerRef.current = newContainer;
          physicsEngineRef.current = initPhysics(newContainer);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbxbk8kYAwiz5L7cDv3SCq2444LLOL0WeP2H0284ZIJpLJ_BbcIjYxzqFzJeewZhxx6H/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => console.log("success from website"))
      .catch((error) => console.log("error from website: " + error));
  };

  const floatingObjects = [
    "hello",
    "instagram",
    "facebook",
    "linkedin",
    "twitter",
    "contact",
    "sponsor",
    "home",
    "hello",
    "instagram",
    "facebook",
    "linkedin",
    "twitter",
    "contact",
    "sponsor",
    "home",
    "events",
  ];

  return (
    <section ref={footerRef} className="footer h-screen relative">
      <div
        className="object-container"
        ref={objectContainerRef}
        style={{ opacity: 0 }}
      >
        {floatingObjects.map((text, index) => (
          <div key={index} className="object">
            {text}
          </div>
        ))}
      </div>

      <div className="footer-left pointer-events-none">
        <h1 className="font-[vampire]" >ECell</h1>
        <br />
        <p className="footer-text-left">
          © 2025 ECell. All rights reserved.
          <br /> "Sparking Interests, Building Futures"
          <br />
          Made with love by the E-Cell Web Team
        </p>
      </div>

      <div className="footer-right pointer-events-none ">
        <div className="footer-text-above">
          <h3 className="footer-heading">Stay Connected</h3>
          <p className="footer-description">
            Get exclusive insights, startup stories, and entrepreneurial wisdom
            delivered straight to your inbox. Join 10,000+ innovators already
            subscribed.
          </p>
        </div>

        {/* form */}
        <div className="form-container">
          <div className="form-content">
            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>

        <div className="footer-text-below">
          <p className="footer-cta">🚀 Ready to build the future?</p>
          <p className="footer-subtext">
            Join our community of entrepreneurs, innovators, and dreamers. Get
            weekly insights, exclusive content, and networking opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
