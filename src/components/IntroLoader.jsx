import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const brandName = "Tobjoe Africa";

function IntroLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef(null);
  const wordRef = useRef(null);
  const flashRef = useRef(null);
  const markRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!visible) {
      onComplete();
      return undefined;
    }

    const context = gsap.context(() => {
      const letters = wordRef.current.querySelectorAll("span");
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          setVisible(false);
          onComplete();
        },
      });

      timeline
        .set(letters, { opacity: 0, y: 22, rotateX: -55, filter: "blur(12px)" })
        .set(markRef.current, { opacity: 0, scale: 0.86, rotate: -10 })
        .set(frameRef.current, { opacity: 0, scaleX: 0.45 })
        .to(frameRef.current, {
          opacity: 1,
          scaleX: 1,
          duration: 0.7,
          ease: "power4.out",
        })
        .to(
          markRef.current,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.55,
            ease: "back.out(1.7)",
          },
          "-=0.35",
        )
        .to(
          letters,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            stagger: 0.045,
            duration: 0.42,
          },
          "-=0.2",
        )
        .to(wordRef.current, {
          textShadow:
            "0 0 46px rgba(212, 175, 55, 0.95), 0 0 90px rgba(177, 18, 38, 0.38)",
          color: "#f4d76c",
          duration: 0.45,
        })
        .to(
          ".intro-line",
          {
            scaleX: 1.2,
            opacity: 0.85,
            duration: 0.36,
            stagger: 0.04,
          },
          "-=0.28",
        )
        .call(() => {
          window.dispatchEvent(
            new CustomEvent("tobjoe:camera-shutter-placeholder"),
          );
        })
        .to(flashRef.current, { opacity: 1, duration: 0.08 })
        .to(flashRef.current, { opacity: 0, duration: 0.32 })
        .to(
          rootRef.current,
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.9,
            ease: "power4.inOut",
          },
          "-=0.04",
        );
    }, rootRef);

    return () => context.revert();
  }, [onComplete, visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-100 grid place-items-center overflow-hidden bg-black text-white [clip-path:inset(0_0_0_0)]"
      aria-label="Tobjoe Africa cinematic intro"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent_30rem),linear-gradient(120deg,rgba(177,18,38,0.18),transparent_42%)]" />
      <div
        ref={frameRef}
        className="absolute h-[62vh] w-[min(760px,82vw)] border-y border-[#D4AF37]/45"
      />
      <div className="intro-line absolute inset-x-0 top-[34%] h-px origin-center scale-x-50 bg-linear-to-r from-transparent via-[#D4AF37]/70 to-transparent opacity-35" />
      <div className="intro-line absolute inset-x-0 bottom-[34%] h-px origin-center scale-x-50 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-25" />
      <div className="relative text-center">
        <div
          ref={markRef}
          className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/55 bg-[#D4AF37]/10 text-sm font-black text-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.22)]"
        >
          <img src="/tobjoeAfrica.png" className="h-full w-full rounded-full object-contain p-1" alt="Tobjoe Africa Logo" />
        </div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-white/50">
          Capturing Stories
        </p>
        <h1
          ref={wordRef}
          className="text-5xl font-semibold tracking-[0.04em] text-[#D4AF37] sm:text-7xl"
        >
          {brandName.split("").map((letter, index) => (
            <span className="inline-block" key={`${letter}-${index}`}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
        <span className="screen-reader-only">
          Camera shutter sound placeholder triggered.
        </span>
      </div>
      <div
        ref={flashRef}
        className="pointer-events-none absolute inset-0 bg-white opacity-0"
      />
    </div>
  );
}

export default IntroLoader;

