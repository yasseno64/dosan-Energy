import { useTranslation } from "react-i18next";
import AnimatedSection from "../Animations/AnimatedSection";

interface PartnerItem {
  id: "enerco" | "hisense" | "oxycom";
  logo: string;
  image: string;
  highlighted?: boolean;
}

const PARTNERS_DATA: PartnerItem[] = [
  {
    id: "oxycom",
    logo: "https://dosanenergy.com/assets/partner-oxycom.png",
    image: "https://dosanenergy.com/assets/dosan-oxycom-units.webp",
    highlighted: true,
  },
  {
    id: "hisense",
    logo: "https://dosanenergy.com/assets/partner-hisense.png",
    image: "https://dosanenergy.com/assets/dosan-vrf-hero.webp",
  },
  {
    id: "enerco",
    logo: "https://dosanenergy.com/assets/partner-enerco.png",
    image: "https://dosanenergy.com/assets/dosan-coating-hero.webp",
  },
];

const Partners = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="partners"
      dir={isArabic ? "rtl" : "ltr"}
      className={`bg-[#f5f5f2] py-16 px-4 md:px-12 lg:px-16 font-sans ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <AnimatedSection>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 text-emerald-600 text-xs sm:text-sm font-semibold tracking-wider mb-2">
              <span className="w-5 h-px bg-emerald-600" />
              <span>{t("Partners.tag")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight max-w-[520px]">
              {t("Partners.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PARTNERS_DATA.map((partner) => {
              const title = t(`Partners.items.${partner.id}.title`);
              const badge = t(`Partners.items.${partner.id}.badge`);
              const desc = t(`Partners.items.${partner.id}.desc`);

              return (
                <div
                  key={partner.id}
                  className="group bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col hover:-translate-y-2 justify-between shadow-sm hover:shadow-lg hover:border-2 border-emerald-400/80 ring-1 ring-emerald-400/30"
                >
                  <div>
                    <div className="h-12 flex items-center mb-6 hover:scale-105 hover:shadow-xl w-fit me-auto s">
                      <img
                        src={partner.logo}
                        alt={title}
                        className="max-h-8 w-auto object-contain transition-transform duration-900 scale-105 group-hover:scale-110"
                      />
                    </div>

                    <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-5 bg-slate-100">
                      <img
                        src={partner.image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>

                    <span className="text-emerald-700 text-xs font-medium block mb-1">
                      {badge}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Partners;
