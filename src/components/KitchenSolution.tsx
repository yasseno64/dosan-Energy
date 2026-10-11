import { useTranslation } from "react-i18next";

import AnimatedSection from "../Animations/AnimatedSection";


interface feature {
  title: string;
  desc: string;
}

const features: feature[] = [
  { title: "KitchenSolution.feature1", desc: "KitchenSolution.feature1" },
  { title: "KitchenSolution.feature2", desc: "KitchenSolution.feature2" },
  { title: "KitchenSolution.feature3", desc: "KitchenSolution.feature3" },
];

const KitchenSolution = () => {
  const { t } = useTranslation();
  return (
      <section id="insights" className="bg-[#f5f5f2] py-[clamp(80px,11vw,186px)] px-[clamp(16px,5vw,64px)]">
        <AnimatedSection>
      <div className="max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(32px,5vw,72px)] items-center">
        {/* content */}
        <div className="opacity-100 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <p className="m-0 mb-[14px] text-[12px] font-medium tracking-[1.4px] uppercase text-[#1dcca0]">
            {t("KitchenSolution.overline")}
          </p>
          <h2 className="m-0 mb-4 text-[clamp(22.9px,2.4vw,35px)] leading-[1.08] tracking-[-1.1px] font-bold text-[#043742] [text-wrap:pretty]">
            {t("KitchenSolution.title")}
          </h2>
          <p className="m-0 mb-[22px] max-w-[50ch] text-[16px] leading-[1.62] text-[#79828f]">
            {t("KitchenSolution.desc")}
          </p>
          <div className="flex flex-col mb-[28px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-[auto_1fr] gap-[14px] items-baseline py-[15px] border-t border-slate-200"
              >
                <span className="block w-[18px] h-[1px] bg-[#1dcca0] -translate-y-[5px]"></span>
                <span className="text-[15px] leading-[1.6] text-[#79828f]">
                  {t(feature.title)}
                </span>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center justify-center gap-2 font-semibold leading-none whitespace-nowrap rounded-md transition-all duration-200 ease-out active:scale-95 outline-none h-[52px] px-[28px] text-[15px] bg-[#1dcca0] text-[#00201a] border-none hover:bg-[#20dfaf]">
                {t("KitchenSolution.btnPrimary")}
            </button>
            <button className="inline-flex items-center justify-center gap-2 font-semibold leading-none whitespace-nowrap rounded-md transition-all duration-200 ease-out active:scale-95 outline-none h-[52px] px-[28px] text-[15px] bg-transparent text-[#0d7a63] border border-[#0d7a63] hover:bg-[#ffffff]">
                {t("KitchenSolution.btnSecondary")}
            </button>
          </div>
        </div>
        {/* image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-900 rounded-[10px] opacity-100 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img src="https://dosanenergy.com/assets/dosan-khayal-restaurant.webp"  className="w-full h-full object-cover object-[50%_72%] block rounded-[10px] transition-transform duration-500 ease-out hover:scale-105"/>
        </div>
      </div>
    </AnimatedSection>
    </section>
  );
};

export default KitchenSolution;
