import { useTranslation } from "react-i18next";

const AppFooter = () => {
    const { t } = useTranslation();
    return (
        <div className="text-xs text-center p-5 var(--background-color) font-mono">
            {t('footer.title')}<span className="text-[#19F2B3]">{t('introduce.name')}</span>
        </div>
    )
}
export default AppFooter;