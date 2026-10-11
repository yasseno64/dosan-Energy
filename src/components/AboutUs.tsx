import { useTranslation } from "react-i18next";
import AnimatedSection from "../Animations/AnimatedSection";
const AboutUS = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section id="about" className="bg-slate950 py-[clamp(80px,11vw,168px)] px-[clamp(16px,5vw,64px)]">
        <AnimatedSection>
      <div className="max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(32px,5vw,80px)] items-stretch">
        {/* Content */}
        <div className="flex flex-col gap-6 opacity-100 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="flex flex-col">
            <p className="m-0 mb-[18px] text-[12px] font-medium tracking-[1.4px] uppercase text-[#1dcca0]">
              {t("AboutUs.tag")}
            </p>
            <h2 className="m-0 text-[clamp(22.4px,2.5vw,35.8px)] leading-[1.08] tracking-[-1.1px] font-bold text-[#043742] ">
              {t("AboutUs.title")}
            </h2>
          </div>
          <p className="m-0 text-[16px] leading-[1.62] text-[#848c99]">
            {t("AboutUs.desc1")}
          </p>
          <p className="m-0 text-[16px] leading-[1.62] text-[#848c99]">
            {t("AboutUs.desc2")}
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 mt-2">
            <div className="border-t border-slate-800 pt-[14px]">
              <span className="block text-[14px] font-semibold text-[#345d66]">
                {t("AboutUs.features.engineering.title")}
              </span>
              <span className="block mt-1 text-[13px] text-slate-400">
                {t("AboutUs.features.engineering.desc")}
              </span>
            </div>
            <div className="border-t border-slate-800 pt-[14px]">
              <span className="block text-[14px] font-semibold text-[#345d66]">
                {t("AboutUs.features.mep.title")}
              </span>
              <span className="block mt-1 text-[13px] text-slate-400">
                {t("AboutUs.features.mep.desc")}
              </span>
            </div>
            <div className="border-t border-slate-800 pt-[14px]">
              <span className="block text-[14px] font-semibold text-[#345d66]">
                {t("AboutUs.features.analytics.title")}
              </span>
              <span className="block mt-1 text-[13px] text-slate-400">
                {t("AboutUs.features.analytics.desc")}
              </span>
            </div>
            <a className="group inline-flex items-center gap-[10px] mt-2 text-[15px] font-semibold text-[#345d66] cursor-pointer hover:text-[#1dcca0] ">
              {t("AboutUs.cta")}{" "}
              <span
                className={` inline-block transition-transform duration-300 ${isArabic ? "group-hover:-translate-x-2.5" : "group-hover:translate-x-2.5"}`}>
                {" "}
                {t("AboutUs.arr")}
              </span>
            </a>
          </div>
        </div>

        {/* image */}
        <div className="relative self-stretch min-h-[clamp(320px,42vw,560px)] overflow-hidden rounded-[10px] bg-slate-900 opacity-100 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <img
            src="https://dosanenergy.com/assets/dosan-hero.webp"
            alt="dosan"
            className="w-full h-full object-cover block rounded-[10px] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          />
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutUS;
