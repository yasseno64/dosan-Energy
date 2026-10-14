import { useState,useEffect,useReducer } from "react";
import { useTranslation } from "react-i18next";

const links = [
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "partners", href: "#partners" },
  { key: "calculators", href: "#calculators" },
  { key: "insights", href: "#insights" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];


const SCROLL_THRESHOLD = 10; 

type NavState = { scrolled: boolean };
type NavAction = { type: "SET_SCROLLED"; payload: boolean };

const navReducer = (state: NavState, action: NavAction): NavState => {
  switch (action.type) {
    case "SET_SCROLLED":
      return state.scrolled === action.payload
        ? state
        : { scrolled: action.payload };
    default:
      return state;
  }
};



const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const changeLanguage = (language: "ar" | "en") => {
    i18n.changeLanguage(language);
    setMenu(false);
  };



  const [{ scrolled }, dispatch] = useReducer(navReducer, { scrolled: false });

useEffect(() => {
  const onScroll = () => {
    dispatch({
      type: "SET_SCROLLED",
      payload: window.scrollY > SCROLL_THRESHOLD,
    });
  };

  onScroll(); 
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);





  return (
    <header
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: 100,
        height: scrolled ? "64px" : "86px",
        display: "flex",
        alignItems: "center",
        gap: "clamp(12px, 2vw, 32px)",
        padding: "0 clamp(14px, 3vw, 44px)",
        background: scrolled ? "rgba(6, 56, 69, 0.92)" : "transparent",
        borderBottom: scrolled? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        backdropFilter: "saturate(140%) blur(10px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0, 0, 0, 0.25)" : "none",
        transition:
          "height 320ms cubic-bezier(0.22,1,0.36,1), background 320ms, box-shadow 320ms",
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center flex-shrink-0">
        <img
          className="h-[32px] block brightness-0 invert "
          src="https://new.dosanenergy.com/assets/dosan-logo.png"
          alt="dosan Logo"
        />
      </a>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex"
        style={{
          alignItems: "center",
          gap: "clamp(10px, 1.4vw, 26px)",
          flex: "1 1 0%",
          minWidth: "0px",
          overflowX: "auto",
        }}
      >
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flex: "0 0 auto",
              fontSize: "13.5px",
              fontWeight: "500",
              letterSpacing: "0.3px",
              color: "rgb(255,255,255)",
              whiteSpace: "nowrap",
              padding: "6px 0px",
              borderBottom: "1px solid transparent",
            }}
            className="underline decoration-transparent hover:decoration-[#24a88b] decoration-[1.3px] underline-offset-7 "
          >
            {t(`navbar.${link.key}`)}
          </a>
        ))}
      </nav>

      {/* Desktop Utilities */}
      <div className="hidden md:flex items-center gap-4">
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "11.5px",
            fontWeight: "600",
            letterSpacing: "0.8px",
            color: "rgb(255,255,255)",
          }}
        >
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
                className="text-white/50 font-normal cursor-pointer"
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
                className="text-white/50 font-normal cursor-pointer"
              >
                AR
              </button>
            </>
          )}
        </span>

        <button
          type="button"
          className="
            text-[14px]
            inline-flex
            items-center
            justify-center
            gap-2
            h-[36px]
            px-[12px]
            py-0
            font-semibold
            leading-none
            text-[#00201a]
            bg-[#1dcca0]
            whitespace-nowrap
            border-none
            rounded-md
            cursor-pointer
            outline-none
            transition-[background,box-shadow,transform]
            duration-150
            active:scale-95
          "
        >
          {t("navbar.rateWebsite")}
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMenu(true)}
        className="
          md:hidden
          ml-auto
          flex
          items-center
          justify-center
          w-10
          h-10
          text-white
          rounded-md
          hover:bg-white/10
          transition
        "
        aria-label="Open menu"
        aria-expanded={menu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            w-screen
            h-[100dvh]
            bg-[#043742]
            md:hidden
            p-5
            flex
            flex-col
            justify-between
            overflow-y-auto
          "
          dir={isArabic ? "rtl" : "ltr"}
        >
          {/* Top Section */}
          <div>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <a href="#" onClick={() => setMenu(false)}>
                <img
                  src="https://new.dosanenergy.com/assets/dosan-logo.png"
                  alt="dosan ENERGY"
                  className="
                    h-8
                    w-auto
                    object-contain
                    brightness-0
                    invert
                  "
                />
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMenu(false)}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  text-white
                  rounded-md
                  hover:bg-white/10
                  transition
                "
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="mt-2 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenu(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    py-4
                    border-b
                    border-white/10
                    text-white
                    font-bold
                    text-base
                    hover:text-[#1cd2ad]
                    transition
                  "
                >
                  <span>{t(`navbar.${link.key}`)}</span>

                  <span className="text-[#1cd2ad] text-lg">
                    {isArabic ? "←" : "→"}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="pt-4 border-t border-white/10">
            <button
              className="
                bg-[#1dcca0]
                text-[#00201a]
                w-full
                h-[42px]
                rounded-md
                font-bold
                text-sm
                transition
                active:scale-95
              "
            >
              {t("navbar.requestEvaluation")}
            </button>

            {/* Mobile Language Switcher */}
            <span
              style={{
                marginTop:"20px",
                marginBottom:"20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11.5px",
                fontWeight: "600",
                letterSpacing: "0.8px",
                color: "rgb(255,255,255)",
              }}
            >
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
                    className="text-white/50 font-normal cursor-pointer"
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
                    className="text-white/50 font-normal cursor-pointer"
                  >
                    AR
                  </button>
                </>
              )}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
