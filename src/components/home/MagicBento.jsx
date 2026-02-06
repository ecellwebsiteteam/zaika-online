
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import Card from "./card"
import "./MagicBento.css"

const DEFAULT_PARTICLE_COUNT = 12
const DEFAULT_SPOTLIGHT_RADIUS = 300
const DEFAULT_GLOW_COLOR = "132, 0, 255"
const MOBILE_BREAKPOINT = 768

const cardData = [
  {
    color: "#060010",
    title: "Foodpreneur Zone",
    description:
      "Turn your culinary creativity into a business. Experiment with flavours, pricing, branding, and customer experience in a real-world setup.",
    label: "Foodpreneurship",
  },
  {
    color: "#060010",
    title: "Live Food Stalls",
    description:
      "Set up your own stall, showcase your signature dish, and compete in a vibrant student-driven food carnival.",
    label: "Stalls",
  },
  {
    color: "#060010",
    title: "Sales Experience",
    description:
      "Understand real customer behavior, manage sales, and learn what it takes to run a food business successfully.",
    label: "Business",
  },
  {
    color: "#060010",
    title: "Community & Celebration",
    description:
      "A perfect blend of food, fun, and entrepreneurship—connect with fellow students, creators, and innovators.",
    label: "Fiesta",
  },
];


const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
})

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect()
  const relativeX = ((mouseX - rect.left) / rect.width) * 100
  const relativeY = ((mouseY - rect.top) / rect.height) * 100

  card.style.setProperty("--glow-x", `${relativeX}%`)
  card.style.setProperty("--glow-y", `${relativeY}%`)
  card.style.setProperty("--glow-intensity", glow.toString())
  card.style.setProperty("--glow-radius", `${radius}px`)
}

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef(null)
  const isInsideSection = useRef(false)

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return

    const spotlight = document.createElement("div")
    spotlight.className = "global-spotlight"
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `
    document.body.appendChild(spotlight)
    spotlightRef.current = spotlight

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return

      const section = gridRef.current.closest(".bento-section")
      const rect = section?.getBoundingClientRect()
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

      isInsideSection.current = mouseInside || false
      const cards = gridRef.current.querySelectorAll(".card")

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        cards.forEach((card) => {
          card.style.setProperty("--glow-intensity", "0")
        })
        return
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius)
      let minDistance = Number.POSITIVE_INFINITY

      cards.forEach((card) => {
        const cardElement = card
        const cardRect = cardElement.getBoundingClientRect()
        const centerX = cardRect.left + cardRect.width / 2
        const centerY = cardRect.top + cardRect.height / 2
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2
        const effectiveDistance = Math.max(0, distance)

        minDistance = Math.min(minDistance, effectiveDistance)

        let glowIntensity = 0
        if (effectiveDistance <= proximity) {
          glowIntensity = 1
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity)
        }

        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius)
      })

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      })

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      isInsideSection.current = false
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        card.style.setProperty("--glow-intensity", "0")
      })
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current)
    }
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor])

  return null
}

const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
)

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null)
  const isMobile = useMobileDetection()
  const shouldDisableAnimations = disableAnimations || isMobile

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            textAutoHide={textAutoHide}
            enableBorderGlow={enableBorderGlow}
            enableStars={enableStars}
            shouldDisableAnimations={shouldDisableAnimations}
            particleCount={particleCount}
            glowColor={glowColor}
            enableTilt={enableTilt}
            clickEffect={clickEffect}
            enableMagnetism={enableMagnetism}
          />
        ))}
      </BentoCardGrid>
    </>
  )
}

export default MagicBento
