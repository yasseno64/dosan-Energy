"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "../Animations/CountUp";
import AnimatedSection from "../Animations/AnimatedSection";

interface MetricConfig {
  key: string;
  value: number;
  separator?: string;
}

const metrics: MetricConfig[] = [
  { key: "alfanar", value: 117 },
  { key: "damac", value: 35 },
  { key: "extra", value: 49623, separator: "," },
  { key: "coolingCost", value: 66 },
  { key: "tempDrop", value: 20 },
];

const Static = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#14171a] text-white"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundImage: `
          radial-gradient(
            circle 260px at ${mouse.x}px ${mouse.y}px,
            rgba(29, 204, 160, ${isHovering ? 0.13 : 0}),
            transparent 100%
          ),
          radial-gradient(
            circle at 18% 42%,
            rgba(15, 173, 149, 0.12),
            transparent 24%
          ),
          linear-gradient(
            90deg,
            #14171a 0%,
            #14171a 38%,
            #14171a 100%
          )
        `,
      }}
    >
      <AnimatedSection>
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col items-start gap-4 lg:mb-16">
            <span className="inline-flex rounded-full px-3 py-1 text-[12px] font-medium text-[#0D7A62]">
              {t("Static.tag")}
            </span>

            <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-start">
              <h2 className="text-start text-[clamp(2.2rem,3vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white max-w-[400px]">
                {t("Static.title")}
              </h2>

              <span
                className="max-w-[38ch] text-start text-xs font-bold leading-[2] tracking-[-0.04em]"
                style={{ color: "rgba(255, 255, 255, 0.62)" }}
              >
                {t("Static.subtitle")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-5">
            
{metrics.map((metric, index) => (
  <div
    key={metric.key}
    className="flex min-h-[210px] flex-col justify-end animate-metric"
    style={{
      animationDelay: `${index * 0.3}s`,
    }}
  >
    <div className="text-[clamp(2rem,3vw,4rem)] font-bold leading-none tracking-[-0.06em] text-white transition-colors duration-300 hover:text-[#1dcca0]">
      <CountUp
        from={0}
        to={metric.value}
        separator={metric.separator || ""}
        direction="up"
        duration={1}
        delay={index * 0.3}
      />
      {t(`Static.metrics.${metric.key}.unit`)}
    </div>

    <div className="mt-4 mb-[150px] space-y-1 text-start">
      <p className="text-xs leading-relaxed text-gray-400">
        {t(`Static.metrics.${metric.key}.label`)}
      </p>
    </div>
  </div>
))}

          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Static;
