import { useTranslation } from "react-i18next";

const Insights = () => {
  const { t } = useTranslation();

  return (
    <section id="insights" className="bg-white py-[clamp(80px,11vw,168px)] px-[clamp(16px,5vw,64px)]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-[20px] mb-[clamp(30px,4vw,56px)]">
          <div>
            <p className="m-0 mb-[14px] text-[12px] font-medium tracking-[1.4px] uppercase text-[#328f7b] ">
              {t("Insights.tag")}
            </p>
            <h2 className="m-0 text-[clamp(22.9px,2.4vw,33.6px)] leading-[1.08] tracking-[-1px] font-bold text-[#043742]">
              {t("Insights.title")}
            </h2>
          </div>
          <a
            className="text-[12px] font-semibold text-[#328f7b] hover:text-[#1dcca0]  transition-colors cursor-pointer"
          >
           {t("Insights.allInsights")}
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[clamp(28px,4vw,56px)] items-start">
          
          {/* Featured Main Article */}
          <a href="/ar/insights/" className="block text-white group">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a] mb-[20px] rounded-[10px]">
              <img
                src="https://dosanenergy.com/assets/dosan-oxycom-units.webp"
                alt={t("Insights.featured.title")}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover block rounded-[10px] group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="flex gap-[16px] mb-[12px] text-[11.5px] font-semibold tracking-[0.8px] uppercase text-slate-400">
              <span className="text-[#1dcca0]">{t("Insights.featured.category")}</span>
              <span>{t("Insights.featured.badge")}</span>
              <span>{t("Insights.featured.readTime")}</span>
            </div>
            <h3 className="m-0 mb-[12px] text-[clamp(17.3px,1.7vw,25.2px)] leading-[1.16] tracking-[-0.7px] font-semibold text-[#043742]  transition-colors [text-wrap:pretty]">
              {t("Insights.featured.title")}
            </h3>
            <p className="m-0 max-w-[56ch] text-[16px] leading-[1.65] text-slate-500">
              {t("Insights.featured.desc")}
            </p>
          </a>

          {/* Side Articles */}
          <div className="flex flex-col">
            
            {/* Article 1 */}
            <a
              href="/ar/insights/"
              className="grid grid-cols-[84px_1fr] gap-[18px] py-[20px] border-t border-slate-200 rounded-[10px] group transition-transform duration-500 ease-out   hover:translate-x-3 hover:bg-[#edf7f4]"
            >
              <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#0f172a]">
                <img
                  src="https://dosanenergy.com/assets/dosan-damac-precooll.webp"
                  alt={t("Insights.article1.title")}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block rounded-[10px] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <span className="block mb-[6px] text-[11px] font-semibold tracking-[0.8px] uppercase text-[#328f7b]">
                  {t("Insights.article1.category")}
                </span>
                <h4 className="m-0 text-[16px] leading-[1.35] font-semibold text-[#043742]  transition-colors">
                  {t("Insights.article1.title")}
                </h4>
              </div>
            </a>

            {/* Article 2 */}
            <a
              href="/ar/insights/"
              className="grid grid-cols-[84px_1fr] gap-[18px] py-[20px] border-t border-slate-200 rounded-[10px] group transition-transform duration-500 ease-out hover:translate-x-3 hover:hover:bg-[#edf7f4]"
            >
              <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#0f172a]">
                <img
                  src="https://dosanenergy.com/assets/dosan-psau-chillers.webp"
                  alt={t("Insights.article2.title")}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block rounded-[10px] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <span className="block mb-[6px] text-[11px] font-bold tracking-[0.8px] uppercase text-[#328f7b]">
                  {t("Insights.article2.category")}
                </span>
                <h4 className="m-0 text-[16px] leading-[1.35] font-semibold text-[#043742]  transition-colors">
                  {t("Insights.article2.title")}
                </h4>
              </div>
            </a>

            {/* Article 3 (last — with bottom border) */}
            <a
              href="/ar/insights/"
              className="grid grid-cols-[84px_1fr] gap-[18px] py-[20px] border-t border-b border-slate-200  rounded-[10px] group transition-transform duration-500 ease-out hover:translate-x-3 hover:bg-[#edf7f4]"
            >
              <div className="relative aspect-square overflow-hidden rounded-[10px] ">
                <img
                  src="https://dosanenergy.com/assets/dosan-analytics-hero.webp"
                  alt={t("Insights.article3.title")}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block rounded-[10px] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <span className="block mb-[6px] text-[11px] font-semibold tracking-[0.8px] uppercase text-[#328f7b]">
                  {t("Insights.article3.category")}
                </span>
                <h4 className="m-0 text-[16px] leading-[1.35] font-semibold text-[#043742] transition-colors">
                  {t("Insights.article3.title")}
                </h4>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Insights;
