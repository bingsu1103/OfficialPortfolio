import { useTranslation } from "react-i18next";

const Certificate = () => {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-2 p-3 max-sm:p-0 mt-3">
            <ul className="flex flex-col gap-3 font-bold text-sm p-3 max-sm:px-0">
                <li>{t("achieve.score")} - <span className="text-[#FE5F56]">NULL</span></li>
                <li>{t("achieve.htmlcss")} <span className="text-[#FE5F56]">{t('achieve.f8')}</span></li>
                <li>{t("achieve.reactultimate")} <span className="text-[#FE5F56]">{t('achieve.udemy')}</span> </li>
                <li>{t("achieve.reactprotypescript")} <span className="text-[#FE5F56]">{t('achieve.udemy')}</span></li>
                <li>{t("achieve.reacttestfresher")} <span className="text-[#FE5F56]">{t('achieve.udemy')}</span></li>
            </ul>
            <ul className="flex flex-col gap-3 font-bold text-sm p-3">
                <li><span className="text-[#FE5F56]">300+</span>{t("achieve.leetcode")}</li>
                <li>{t("achieve.itclass")} <span className="text-[#FE5F56]" >{t("achieve.informatics")}</span>{t("achieve.itclass2")}</li>
                <li>{t("achieve.itprogram")}<span className="text-[#FE5F56]">{t("achieve.itrelated")}</span>{t("achieve.itprogram2")}</li></ul>
        </div>
    )
}
export default Certificate;
