import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const changeLanguage = (language: "ar" | "en") => {
    i18n.changeLanguage(language);
  };

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#043742] text-white/74 px-[clamp(16px,5vw,64px)] pb-[clamp(36px,5vw,60px)]"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Main Columns Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,170px),1fr))] gap-[clamp(26px,4vw,56px)] py-[clamp(36px,5vw,64px)] border-t border-white/14">

          {/* Column 1: Logo & Brand Info */}
          <div className="flex flex-col">
            <img
              src="https://new.dosanenergy.com/assets/dosan-logo.png"
              alt="Dosan Energy"
              className={`w-[280px] h-[43px] object-contain mb-4 brightness-0 invert ${isArabic ? "object-right" : "object-left"}`}
            />
            <p className="m-0 mb-4 max-w-[32ch] text-[14px] leading-[1.7] text-white/74">
              {t("footer.tagline")}
            </p>
            <p className="m-0 text-[14px] leading-[1.8] text-white/74">
              {t("footer.address")}
              <br />
              <a id="contact" href="tel:+966544311180" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                +966 54 431 1180
              </a>
              <br />
              <a href="mailto:info@dosanenergy.com" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                info@dosanenergy.com
              </a>
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="m-0 mb-[14px] text-[11px] font-semibold tracking-[0.9px] uppercase text-white">
              {t("footer.servicesHeading")}
            </p>
            <div className="flex flex-col gap-[10px] text-[14px]">
              <a href="/services/kitchen/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.kitchen")}
              </a>
              <a href="/services/idec/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.idec")}
              </a>
              <a href="/services/precooll/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.precooll")}
              </a>
              <a href="/services/vrf/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.vrf")}
              </a>
              <a href="/services/coatings/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.coatings")}
              </a>
              <a href="/services/analytics/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.analytics")}
              </a>
              <a href="/services/mep/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.mep")}
              </a>
              <a href="/services/engineering/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.services.engineering")}
              </a>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <p className="m-0 mb-[14px] text-[11px] font-semibold tracking-[0.9px] uppercase text-white">
              {t("footer.companyHeading")}
            </p>
            <div className="flex flex-col gap-[10px] text-[14px]">
              <a href="/about/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.company.about")}
              </a>
              <a href="/projects/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.company.projects")}
              </a>
              <a href="/partners/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.company.partners")}
              </a>
              <a href="/insights/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.company.insights")}
              </a>
              <a href="/contact/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.company.contact")}
              </a>
            </div>
          </div>

          {/* Column 4: Calculators & Language */}
          <div>
            <p className="m-0 mb-[14px] text-[11px] font-semibold tracking-[0.9px] uppercase text-white">
              {t("footer.calculatorsHeading")}
            </p>
            <div className="flex flex-col gap-[10px] text-[14px]">
              <a href="/calculators/vrf/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.calculators.vrf")}
              </a>
              <a href="/calculators/idec/" className="text-white/74 hover:text-[#1dcca0] transition-colors">
                {t("footer.calculators.idec")}
              </a>
              {/* Language Switcher */}
              <span className="flex gap-[10px] mt-[6px] text-white font-semibold">
                {isArabic ? (
                  <>
                    <button
                      type="button"
                      onClick={() => changeLanguage("ar")}
                      className="text-white font-semibold cursor-pointer"
                    >
                      العربية
                    </button>
                    <button
                      type="button"
                      onClick={() => changeLanguage("en")}
                      className="text-white/50 font-normal hover:text-[#1dcca0] transition-colors cursor-pointer"
                    >
                      English
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => changeLanguage("en")}
                      className="text-white font-semibold cursor-pointer"
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => changeLanguage("ar")}
                      className="text-white/50 font-normal hover:text-[#1dcca0] transition-colors cursor-pointer"
                    >
                      AR
                    </button>
                  </>
                )}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap gap-[18px] justify-between pt-[22px] border-t border-white/14 text-[12px]">
          <span>{t("footer.copyright")}</span>
          <div className="flex flex-wrap gap-[18px]">
            <a href="/privacy/" className="text-white/62 hover:text-[#1dcca0] transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="https://dosanenergy.com/sitemap.xml" className="text-white/62 hover:text-[#1dcca0] transition-colors">
              {t("footer.sitemap")}
            </a>
            <a
              href="https://www.linkedin.com/company/dosanenergy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/62 hover:text-[#1dcca0] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/dosanenergy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/62 hover:text-[#1dcca0] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;