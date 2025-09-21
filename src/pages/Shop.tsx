import { useTranslation } from "react-i18next";

const Shop = () => {
  const { t } = useTranslation();

    return (
      <h1 className="text-xl font-bold text-center bg-green-600 text-white">{t("header.shop")}</h1>
    )
};

export default Shop;