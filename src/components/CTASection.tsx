import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
      <section className="relative bg-[#030712] text-white py-[clamp(96px,13vw,196px)] px-[clamp(16px,5vw,64px)] overflow-hidden isolate rounded-none">
          {/* Background Image */}
          <div className="absolute -inset-y-[8%] inset-x-0 z-0 bg-[url('https://dosanenergy.com/assets/dosan-cta.webp')] bg-cover bg-center bg-no-repeat will-change-transform translate-y-[0.55%] scale-[1.0156]"></div>
          {/* Overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(rgba(0,55,67,0.7)_0%,rgba(0,55,67,0.52)_46%,rgba(0,55,67,0.76)_100%)]"></div>
          <div className="absolute left-0 top-0 bottom-0 w-[min(72%,960px)] z-[1] pointer-events-none bg-[linear-gradient(90deg,rgba(0,55,67,0.86)_0%,rgba(0,55,67,0.74)_52%,rgba(0,55,67,0)_100%)]"></div>
          {/* Content */}
          <div className="relative z-[2] max-w-[1400px] mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-[clamp(24px,3vw,40px)]">
              {/* Left Content */}
              <div className="flex flex-col">
                  <h2 className="m-0 mb-[14px] max-w-[16ch] text-[clamp(23.8px,3vw,38.7px)] leading-[1.06] tracking-[clamp(-1.4px,-0.12vw,-0.5px)] font-bold text-white">{t("CTA.title")}</h2>
                  <p className="m-0 max-w-[46ch]  text-[clamp(12.5px,0.8vw,15px)] leading-[1.6] text-white">{t("CTA.desc")}</p>
              </div>
              {/* Right Content */}
              <div className="flex items-center gap-[clamp(12px,2vw,24px)]">
                  <button className="inline-flex items-center justify-center gap-2 font-semibold leading-none whitespace-nowrap rounded-md cursor-pointer transition-all duration-200 ease-out opacity-100 scale-100 outline-none h-[52px] px-[28px] text-[15px] bg-[#1dcca0] text-[#00201a] border-none active:scale-95 hover:bg-[#1ab890]">{t("CTA.btn")}</button>
              </div>
            </div>
          </div>
      </section>
  )
}

export default CTASection