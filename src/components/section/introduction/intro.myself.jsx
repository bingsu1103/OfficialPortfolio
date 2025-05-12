import { useTranslation } from "react-i18next"

const IntroMySelf = () => {
    const { t } = useTranslation();
    return (
        <div className="p-24 max-sm:p-10">
            <h1 className="font-bold max-sm:text-2xl text-3xl text-[#169FFF]">{t('introduce.title')}</h1>
            <br />
            <p>{t('introduce.myself1')}</p>
            <br />
            <p>{t('introduce.myself2')} <span className="text-[#169FFF] font-bold">{t('introduce.position')}</span> {t('introduce.myself2.1')}</p>
            <br />
            <p>{t('introduce.myself3')}</p>
        </div>
    )
}
export default IntroMySelf;