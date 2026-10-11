import { useState,useRef  } from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../Animations/AnimatedSection";
import project1 from "../assets/dosan-hero.webp";
import project2 from "../assets/dosan-damac-precooll.webp";
import project3 from "../assets/dosan-psau-chillers.webp";
import project4 from "../assets/dosan-oxycom-units.webp";

interface ProjectItem {
  id: "alfanar" | "damac" | "sattam" | "extra";
  image: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "alfanar",
    image: project1,
  },
  {
    id: "damac",
    image: project2,
  },
  {
    id: "sattam",
    image: project3,
  },
  {
    id: "extra",
    image: project4,
  },
];

interface ProjectProps {
  id: string;
  image: string;
}

const Project = ({ id, image }: ProjectProps) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [isHovered, setIsHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
const [imageSide, setImageSide] = useState<"right" | "left">("right");

  const handleMouseMove = (
  e: React.MouseEvent<HTMLAnchorElement>
) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  setMouse({
    x: mouseX,
    y: mouseY,
  });

  const imageWidth = 290;
  const gap = 50;
  const padding = 20;

  const spaceRight = window.innerWidth - e.clientX;
  const spaceLeft = e.clientX;

  if (spaceRight < imageWidth + gap + padding) {
    setImageSide("left");
  } else if (spaceLeft < imageWidth + gap + padding) {
    setImageSide("right");
  }
};

  const title = t(`Projects.items.${id}.title`);
  const category = t(`Projects.items.${id}.category`);
  const location = t(`Projects.items.${id}.location`);

  const hoverTranslate = isArabic
    ? "group-hover:-translate-x-2"
    : "group-hover:translate-x-2";

  return (
    <a
      className="relative cursor-pointer grid grid-cols-[minmax(0,1fr)_auto] gap-[clamp(16px,3vw,40px)] items-baseline py-[clamp(24px,3.4vw,42px)] border-t border-slate-200 text-white group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className={`transition-all duration-300 ${hoverTranslate}`}>
        <h3 className="text-[#043742] font-bold text-2xl">
          {title}
        </h3>

        <span className="block mt-2 text-[11px] font-semibold tracking-[1.2px] uppercase text-[#116c55]">
          {category}
        </span>
      </div>

      <div className={`transition-all duration-300 ${hoverTranslate} flex items-center gap-2`}>
        <span className="text-[13px] text-[#676767]">
          {location}
        </span>

        <span className="text-[13px] text-[#1dcca0]">
          {isArabic ? "←" : "→"}
        </span>
      </div>

      <div className={`block md:hidden ${isArabic ? "mr-9" : "ml-9"} transition-all duration-300 ${hoverTranslate}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block rounded-[10px]"
        />
      </div>

      {/* Desktop hover image */}
      <img
        src={image}
        alt=""
        className={`
          hidden md:block
          pointer-events-none
          absolute
          z-50
          w-[290px]
          h-[220px]
          object-cover
          rounded-[10px]
          shadow-2xl
          transition-opacity
          duration-150
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        style={{
          left: imageSide === "right"
      ? `${mouse.x + 50}px`
      : `${mouse.x - 290 - 50}px`,
          top: `${mouse.y}px`,
          transform: "translateY(-50%)",
        }}
      />
    </a>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="bg-white py-[clamp(80px,11vw,168px)] px-[clamp(16px,5vw,64px)]"
    >
      <AnimatedSection>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-[clamp(28px,4vw,56px)]">
            <div>
              <p className="m-0 mb-3 flex items-center gap-[10px] text-[12px] font-medium tracking-[1.6px] uppercase text-[#1dcca0]">
                <span className="block w-[22px] h-[1px] bg-[#1dcca0]"></span>
                {t("Projects.tag")}
              </p>

              <h2 className="m-0 max-w-[20ch] text-[clamp(22.9px,2.4vw,33.6px)] leading-[1.08] tracking-[-2px] font-bold text-[#043742]">
                {t("Projects.title")}
              </h2>
            </div>

            <p className="sm:hidden md:block m-0 text-[11px] font-semibold tracking-[1.2px] uppercase text-slate-500">
              {t("Projects.hoverHint")}
            </p>
          </div>

          <div className="flex flex-col">
            {PROJECTS_DATA.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;