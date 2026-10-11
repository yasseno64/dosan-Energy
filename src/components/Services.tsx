import React from "react";
import { useTranslation } from "react-i18next";

import AnimatedSection from "../Animations/AnimatedSection"

interface ServiceItem {
  id: string;
  imgSrc: string;
  title: string;
  desc: string;
  alt?: string;
}

interface CardItemProps {
  item: ServiceItem;
  tabIndex?: number;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "kitchen",
    imgSrc: "https://dosanenergy.com/assets/dosan-oxycom-units.webp",
    title: "هواء التعويض للمطابخ",
    desc: "هواء تعويض مبرد ومُرشّح للمطابخ التجارية.",
    alt: "هواء التعويض للمطابخ",
  },
  {
    id: "idec",
    imgSrc: "https://dosanenergy.com/assets/dosan-hero.webp",
    title: "تقنية IDEC من Oxycom",
    desc: "تبريد تبخيري غير مباشر — الشريك الحصري لـ Oxycom في المملكة.",
    alt: "تقنية IDEC من Oxycom",
  },
  {
    id: "precooll",
    imgSrc: "https://dosanenergy.com/assets/dosan-damac-precooll.webp",
    title: "التبريد المسبق للمبردات PreCooll",
    desc: "تبريد مسبق أدياباتي لهواء المكثفات — حتى ٢٥ درجة مئوية.",
    alt: "التبريد المسبق للمبردات PreCooll",
  },
  {
    id: "vrf",
    imgSrc: "https://dosanenergy.com/assets/dosan-vrf-hero.webp",
    title: "أنظمة VRF من Hisense",
    desc: "تدفق متغير لمركّب التبريد للمباني متعددة المناطق، بحسابات مسبقة.",
    alt: "أنظمة VRF من Hisense",
  },
  {
    id: "coatings",
    imgSrc: "https://dosanenergy.com/assets/dosan-coating-hero.webp",
    title: "طلاءات توفير الطاقة للتكييف",
    desc: "طلاءات Enercoat للملفات ضمن أعمال تحسين الكفاءة.",
    alt: "طلاءات توفير الطاقة للتكييف",
  },
  {
    id: "analytics",
    imgSrc: "https://dosanenergy.com/assets/dosan-analytics-hero.webp",
    title: "تحليلات المباني وكشف الأعطال",
    desc: "كشف الأعطال وتشخيصها على الأنظمة العاملة.",
    alt: "تحليلات المباني وكشف الأعطال",
  },
  {
    id: "mep",
    imgSrc: "https://dosanenergy.com/assets/dosan-mep-hero.webp",
    title: "خدمات MEP",
    desc: "التركيب والتشغيل والصيانة بعقد واحد.",
    alt: "خدمات MEP",
  },
  {
    id: "engineering",
    imgSrc: "https://dosanenergy.com/assets/dosan-psau-chillers.webp",
    title: "الهندسة والتصميم",
    desc: "حسابات الأحمال والاختيار والمخططات.",
    alt: "الهندسة والتصميم",
  },
];

const CardItem: React.FC<CardItemProps> = ({ item, tabIndex }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const { id, imgSrc } = item;

  const title = t(`Services.items.${id}.title`, { defaultValue: item.title });
  const desc = t(`Services.items.${id}.desc`, { defaultValue: item.desc });
  const alt = t(`Services.items.${id}.alt`, { defaultValue: item.alt || title });
  const href = `/${isArabic ? "ar" : "en"}/services/${id}/`;

  return (
    <a
      href={href}
      tabIndex={tabIndex}
      className="group relative block flex-none w-[clamp(260px,26vw,380px)] h-[clamp(320px,34vw,460px)] overflow-hidden rounded-[10px] text-white transition-all"
    >
      
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover rounded-[10px] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />

      <span className="absolute inset-0 bg-gradient-to-b from-[#003743]/15 via-[#003743]/35 to-[#003743]/86 pointer-events-none" />

      <span
        dir={isArabic ? "rtl" : "ltr"}
        className={`absolute left-0 right-0 bottom-0 p-[clamp(18px,2vw,26px)] flex flex-col gap-2 ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <span className="text-[clamp(14.1px,1.2vw,18.2px)] font-semibold leading-snug tracking-tight">
          {title}
        </span>
        <span className="text-sm leading-relaxed text-white/80">{desc}</span>
        <div className="group cursor-pointer hover:text-[#1cd2ad] text-[#0D7A62]">
          <p className="mt-7 text-xs">
            {isArabic ? (
              <>
                {t("Services.explore", { defaultValue: "استكشف" })}
                <span className="mr-3 inline-block transition-transform duration-300 group-hover:-translate-x-3">
                  ←
                </span>
              </>
            ) : (
              <>
                {t("Services.explore", { defaultValue: "Explore" })}
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-3">
                  →
                </span>
              </>
            )}
          </p>
        </div>
      </span>
    </a>
  );
};

const ServicesHeader: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="mx-auto w-full max-w-[1400px] px-[clamp(16px,4vw,64px)] pt-[clamp(28px,6vw,72px)] pb-[clamp(24px,4vw,48px)] flex flex-col md:flex-row md:items-end md:justify-between gap-6"
    >
      <div className={`order-1 ${isArabic ? "text-right" : "text-left"}`}>
        <div className="flex items-center justify-start gap-2 text-[#1cd2ad] text-xs md:text-sm mb-2">
          <span className="w-6 h-px bg-[#1cd2ad]" />
          {t("Services.tag", { defaultValue: isArabic ? "الخدمات" : "Services" })}
        </div>
        
        <h2 className="text-white text-[clamp(28px,4vw,42px)] font-bold leading-tight">
          {t("Services.title", { defaultValue: isArabic ? "مجالات أعمالنا" : "Our Scope of Work" })}
        </h2>
      </div>

      <div className={`order-2 max-w-md ${isArabic ? "text-right md:text-right" : "text-left md:text-left"}`}>
        <p className="text-white/70 text-sm md:text-[15px] leading-relaxed">
          {t("Services.subtitle", {
            defaultValue: isArabic
              ? "خمس طرق لتخفيض تكلفة التبريد — فريق واحد مسؤول."
              : "Five ways to cut cooling costs — one team accountable.",
          })}
        </p>
        <a
          href={isArabic ? "/ar/contact/" : "/en/contact/"}
          className="mt-4 inline-flex items-center gap-3 text-white/90 text-sm hover:text-[#1cd2ad] transition-colors group"
        >
          {t("Services.cta", {
            defaultValue: isArabic ? "اطلب تقييمًا لموقعك" : "Request a site assessment",
          })}
          <span
            className={`inline-block transition-transform duration-300 ${
              isArabic ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
            }`}
          >
            {isArabic ? "←" : "→"}
          </span>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full bg-[#043742]">
      <div className="m-0">
        <ServicesHeader />
      </div>

      <div className="m-0 marquee-wrapper overflow-hidden w-full" dir="ltr">
        <div className="flex w-max animate-marquee marquee-track will-change-transform">
          <div className="flex gap-[clamp(16px,2vw,28px)] pr-[clamp(16px,2vw,28px)]">
            {SERVICES_DATA.map((service) => (
              <CardItem key={service.id} item={service} />
            ))}
          </div>

          <div
            className="flex gap-[clamp(16px,2vw,28px)] pr-[clamp(16px,2vw,28px)]"
            aria-hidden="true"
          >
            {SERVICES_DATA.map((service) => (
              <CardItem key={`dup-${service.id}`} item={service} tabIndex={-1} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </section>
  );
};

export default Services;