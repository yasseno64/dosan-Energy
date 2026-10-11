import React from "react";
import { useTranslation } from "react-i18next";

interface ClientItem {
  id: string;
  name: string;
  logoSrc: string;
}

const CLIENTS_DATA: ClientItem[] = [
  {
    id: "almarai",
    name: "Almarai",
    logoSrc: "https://dosanenergy.com/assets/clients/almarai.png",
  },
  {
    id: "damac",
    name: "DAMAC",
    logoSrc: "https://dosanenergy.com/assets/clients/damac.png",
  },
  {
    id: "edgnex",
    name: "EDGNEX Data Centers by DAMAC",
    logoSrc: "https://dosanenergy.com/assets/clients/edgnex-data-centers.png",
  },
  {
    id: "alfanar",
    name: "Alfanar",
    logoSrc: "https://dosanenergy.com/assets/clients/alfanar.png",
  },
  {
    id: "extra",
    name: "eXtra",
    logoSrc: "https://dosanenergy.com/assets/clients/extra.png",
  },
  {
    id: "ncb",
    name: "NCB Al Ahli",
    logoSrc: "https://dosanenergy.com/assets/clients/ncb-al-ahli.png",
  },
  {
    id: "engie",
    name: "ENGIE",
    logoSrc: "https://dosanenergy.com/assets/clients/engie.png",
  },
  {
    id: "sattam-univ",
    name: "Prince Sattam Bin Abdulaziz University",
    logoSrc:
      "https://dosanenergy.com/assets/clients/prince-sattam-bin-abdulaziz-university.png",
  },
  {
    id: "othaim",
    name: "Abdullah Al Othaim Markets",
    logoSrc:
      "https://dosanenergy.com/assets/clients/abdullah-al-othaim-markets.png",
  },
  {
    id: "tera-mall",
    name: "Tera Mall",
    logoSrc: "https://dosanenergy.com/assets/clients/tera-mall.png",
  },
  {
    id: "blvd-world",
    name: "BLVD World",
    logoSrc: "https://dosanenergy.com/assets/clients/blvd-world.png",
  },
  {
    id: "sela",
    name: "Sela",
    logoSrc: "https://dosanenergy.com/assets/clients/sela.png",
  },
  {
    id: "shahia",
    name: "Shahia Food",
    logoSrc: "https://dosanenergy.com/assets/clients/shahia-food.png",
  },
  {
    id: "dunkin",
    name: "Dunkin' Donuts",
    logoSrc: "https://dosanenergy.com/assets/clients/dunkin-donuts.png",
  },
  {
    id: "deraah",
    name: "Deraah",
    logoSrc: "https://dosanenergy.com/assets/clients/deraah.png",
  },
  {
    id: "fipco",
    name: "FIPCO",
    logoSrc: "https://dosanenergy.com/assets/clients/fipco.png",
  },
  {
    id: "khayal",
    name: "Khayal Restaurant",
    logoSrc: "https://dosanenergy.com/assets/clients/khayal-restaurant.png",
  },
  {
    id: "century",
    name: "Century Burger",
    logoSrc: "https://dosanenergy.com/assets/clients/century-burger.png",
  },
  {
    id: "american-school",
    name: "American International School, Riyadh",
    logoSrc:
      "https://dosanenergy.com/assets/clients/american-international-school.png",
  },
];

const ClientLogoCard: React.FC<{
  client: ClientItem;
  isDuplicate?: boolean;
}> = ({ client, isDuplicate = false }) => {
  const { t } = useTranslation();
  const clientName = t(`ClientsMarquee.clients.${client.id}`, {
    defaultValue: client.name,
  });

  return (
    <div className="flex-none w-[clamp(150px,15vw,220px)] h-[clamp(84px,9vw,120px)] grid place-items-center px-[clamp(8px,1vw,14px)] bg-[#f5f5f2]">
      <img
        src={client.logoSrc}
        alt={isDuplicate ? "" : clientName}
        aria-hidden={isDuplicate}
        loading="lazy"
        decoding="async"
        className="max-w-full max-h-[clamp(44px,4.8vw,66px)] w-auto h-auto object-contain block rounded-[var(--image-radius,8px)] bg-[#f5f5f2]"
      />
    </div>
  );
};

const ClientsMarquee: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="clients" className=" bg-[#f5f5f2]">
      {/* Header */}
      <div className="flex flex-col items-start max-w-[1400px] mx-auto mb-[clamp(24px,3.4vw,44px)] px-[clamp(16px,5vw,64px)] text-start">
        <p className="mt-15 mb-3 flex items-center gap-[10px] text-xs md:text-sm font-medium tracking-[1.6px] uppercase text-emerald-600">
          <span className="block w-[22px] h-[1px] bg-emerald-600" />
          {t("ClientsMarquee.tag")}
        </p>
        <h2 className="m-0 max-w-[28ch] text-[clamp(21.3px,2.3vw,32px)] leading-[1.08] -tracking-[1px] font-bold text-slate-900 text-start">
          {t("ClientsMarquee.title")}
        </h2>
      </div>

      {/* Marquee Track - White background */}
      <div
        className="overflow-hidden border-y border-slate-200 py-[clamp(22px,3vw,40px)] bg-[#f5f5f2] marquee-wrapper"
        dir="ltr"
      >
        <div className="flex w-max animate-marquee marquee-track will-change-transform hover:[animation-play-state:paused]">
          {/* Group 1 */}
          <div className="flex items-center gap-[clamp(28px,4vw,64px)] pr-[clamp(28px,4vw,64px)]">
            {CLIENTS_DATA.map((client) => (
              <ClientLogoCard key={client.id} client={client} />
            ))}
          </div>

          {/* Group 2 (Duplicated for Seamless Infinite Loop) */}
          <div
            className="flex items-center gap-[clamp(28px,4vw,64px)] pr-[clamp(28px,4vw,64px)] mb-19"
            aria-hidden="true"
          >
            {CLIENTS_DATA.map((client) => (
              <ClientLogoCard
                key={`dup-${client.id}`}
                client={client}
                isDuplicate
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;

