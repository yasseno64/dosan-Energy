import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../Animations/AnimatedSection";

interface ToolItem {
  id: "tool1" | "tool2";
  borderColor: string;
  tagColor: string;
}

const TOOLS: ToolItem[] = [
  {
    id: "tool1",
    borderColor: "border-emerald-600",
    tagColor: "text-emerald-700",
  },
  {
    id: "tool2",
    borderColor: "border-[#1dcca0]",
    tagColor: "text-emerald-700",
  },
];

const CalculatorsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section id="calculators" className="bg-white py-[clamp(68px,9vw,132px)] px-[clamp(16px,5vw,64px)]">
      <AnimatedSection>
        <div className="max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(28px,4vw,64px)] items-center">
          {/* content */}
          <div className="opacity-100 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <p className="m-0 mb-[14px] text-[12px] font-medium tracking-[1.4px] uppercase text-[#0d7a63]">
              {t("Calculators.tag")}
            </p>
            <h2 className="m-0 mb-[18px] text-[clamp(19.8px,2.4vw,35px)] leading-[1.05] tracking-[-1.3px] font-bold text-slate-700 [text-wrap:pretty]">
              {t("Calculators.title")}
            </h2>
            <p className="m-0 mb-[22px] max-w-[48ch] text-[16px] leading-[1.62] text-[#969ea8]">
              {t("Calculators.desc")}
            </p>
            <a className="group inline-flex items-center gap-[10px] text-[13px] font-semibold text-[#096653] hover:text-[#0a7c65] transition-colors cursor-pointer">
              {t("Calculators.cta")}
              <span
                className={`inline-block transition-transform duration-300 ${
                  isArabic ? "group-hover:-translate-x-2.5" : "group-hover:translate-x-2.5"
                }`}
              >
                {isArabic ? "←" : "→"}
              </span>
            </a>
          </div>

          {/* calculators */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-[1px] bg-slate-200 rounded-lg overflow-hidden cursor-pointer">
            {TOOLS.map((tool) => (
              <a
                key={tool.id}
                className={`group/card bg-white p-[26px_24px] border-t-2 ${tool.borderColor} text-slate-900 transition-all hover:bg-slate-100`}
              >
                <span className={`block text-[11px] font-semibold tracking-[0.9px] uppercase ${tool.tagColor}`}>
                  {t(`Calculators.tools.${tool.id}.tag`)}
                </span>
                <h3 className="m-[12px_0_8px] text-[15px] font-semibold text-[#3c636b]">
                  {t(`Calculators.tools.${tool.id}.title`)}
                </h3>
                <p className="m-0 mb-[16px] text-[14px] leading-[1.6] text-slate-600">
                  {t(`Calculators.tools.${tool.id}.desc`)}
                </p>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#3c636b] group-hover/card:text-[#0d7a63] transition-colors">
                  {t(`Calculators.tools.${tool.id}.cta`)}
                  <span
                    className={`inline-block transition-transform duration-300 ${
                      isArabic ? "group-hover/card:-translate-x-1.5" : "group-hover/card:translate-x-1.5"
                    }`}
                  >
                    {isArabic ? "←" : "→"}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CalculatorsSection;
