import SlingButton from "../Animations/SlingButton";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const SlideToTop = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const sendMessage = () => {
    console.log(t("slide"));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 1772);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <div
      className={`
        fixed bottom-6 z-50 mb-15
        transition-all duration-500 ease-out
        ${isArabic ? "left-6 ml-4 right-auto mr-0" : "right-6 mr-4 left-auto ml-0"}
        ${
          show
            ? "translate-y-0 opacity-100 scale-100"
            : "pointer-events-none translate-y-8 opacity-0 scale-75"
        }
      `}
    >
      <SlingButton
        onSend={sendMessage}
        padColor="#0b333b"
        iconColor="#2ad1ad"
        accentColor="#219d82"
        wellColor="#083540"
        bandColor="#083540"
        size={35}
        strokeWidth={3}
        armAt={48}
        maxPull={160}
        launchSpeed={2600}
        recoil={0.2}
        flight={120}
        particles={14}
        spread={60}
        axis="any"
        tapSends
        disabled={false}
      />
    </div>
  );
};

export default SlideToTop;
