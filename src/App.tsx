import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title=
    i18n.language === "ar"
      ? "تبريد بتكلفة تشغيل أقل. | دوسان للطاقة"
      : "Cooling that costs less to run. | Dosan Energy";
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return <HomePage />;
}

export default App;
