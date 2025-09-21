import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  }

    return (
      <header>
        <nav className="flex justify-around">
          <NavLink to="/pejt-se-solit-front-end">{t("header.home")}</NavLink>
          <NavLink to="/shop">{t("header.shop")}</NavLink>
          <NavLink to="/contact">{t("header.contact")}</NavLink>

          <select onChange={onClickLanguageChange}>
            <option value="en">{t("languages.english")}</option>
            <option value="si">{t("languages.slovenian")}</option>
          </select>
        </nav>
      </header>
    )
};

export default Header;