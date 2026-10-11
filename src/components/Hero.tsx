import { useEffect, useReducer, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/dosan-hero.webp";

const SCROLL_LENGTH_VH = 140;
const START_SCALE = 1.4;
const END_SCALE = 1;

type State = { progress: number };
type Action = { type: "SET_PROGRESS"; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PROGRESS":
      return state.progress === action.payload
        ? state
        : { progress: action.payload };
    default:
      return state;
  }
};

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

const Hero = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [{ progress }, dispatch] = useReducer(reducer, { progress: 0 });

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const distance = el.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / distance);

      dispatch({ type: "SET_PROGRESS", payload: p });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const eased = 1 - Math.pow(1 - progress, 2);
  const imgScale = START_SCALE - (START_SCALE - END_SCALE) * eased;
  {/* scroll hint */}
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 133) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#030712]"
      style={{ height: `${100 + SCROLL_LENGTH_VH}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#030712]">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `scale(${imgScale})` }}
        >
          <img
            src={heroImage}
            alt="Dosan Energy Oxycom Units"
            className="w-full h-full object-cover object-[50%_42%] block"
          />
        </div>

        {/* Overlays */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.82]"
          style={{
            background:
              "linear-gradient(rgba(0,55,67,0.5) 0%, rgba(0,55,67,0.12) 38%, rgba(0,55,67,0.82) 100%)",
          }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-[min(64%,900px)] z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,55,67,0.82) 0%, rgba(0,55,67,0.5) 46%, rgba(0,55,67,0) 100%)",
          }}
        />

        <div className="absolute top-[clamp(92px,13vh,132px)] left-0 bottom-0 w-full z-[5] flex flex-col justify-end px-[clamp(16px,5vw,64px)] pb-[clamp(36px,6vh,88px)] pointer-events-none">
          <p className="m-0 mb-[clamp(10px,1.8vh,18px)] flex items-center gap-[10px] text-[12px] font-semibold tracking-[1.4px] uppercase text-white">
            <span className="block w-[20px] h-[2px] bg-[#1dcca0]" />
            {t("Hero.smallTItle")}
          </p>

          <h1 className="m-0 max-w-[15ch] text-[min(clamp(31.3px,4.8vw,66.1px),8.8vh)] leading-none tracking-[clamp(-2px,-0.18vw,-0.6px)] font-bold text-white [text-wrap:balance]">
            {t("Hero.title")}
          </h1>

          <p className="mt-[clamp(14px,2.4vh,32px)] m-0 max-w-[52ch] text-[clamp(14px,1.1vw,16px)] leading-[1.55] text-white/90">
            {t("Hero.desc")}
          </p>

          <div className="flex flex-wrap gap-[12px] mt-[clamp(16px,2.6vh,34px)] pointer-events-auto">
            <button className="inline-flex items-center justify-center gap-2 h-[52px] px-[28px] font-semibold leading-none rounded-md transition active:scale-95 bg-[#1dcca0] text-[#00201a] text-[14px]">
              {t("Hero.btn1")}
            </button>
            <button className="inline-flex items-center justify-center gap-2 h-[52px] px-[28px] font-semibold leading-none rounded-md transition active:scale-95 bg-transparent text-white text-[14px] [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.55)] hover:bg-[#c9c9c9]">
              {t("Hero.btn2")}
            </button>
          </div>
        </div>

        <div className="absolute right-[clamp(16px,5vw,64px)] top-[clamp(100px,14vh,140px)] z-[5] flex items-center gap-[10px] pointer-events-none">
          <span className="block w-[18px] h-[1px] bg-[#1dcca0]" />
          <span className="text-[11px] font-semibold tracking-[1.6px] uppercase text-white/75">
            {t("Hero.smallText")}
          </span>
        </div>

        {!isHidden && (
          <div className="absolute right-[clamp(16px,5vw,64px)] bottom-[clamp(22px,3vh,34px)] z-[5] flex items-center gap-[10px] pointer-events-none transition-transform duration-500 ease-out ">
            <span className="text-[11px] font-semibold tracking-[1.6px] uppercase text-white/60">
              {t("Hero.scrollHint")}
            </span>
            <span className="text-[#1dcca0] animate-bounce font-bold">↓</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
