import { useTranslation } from "react-i18next"

const Introduction = () => {
    const { t } = useTranslation();
    return (
        <div className="mt-5">
            <div>
                <p>{t('about.hello')} <span className="text-[#FF5F56]">{t('introduce.name')}</span>{t('about.hello2')}</p>
                <br />
                <p>{t('about.looking')}<span className="text-[#FF5F56]">{t('about.web')}</span></p>
                <br />
                <p>{t('about.studying')}<span className="text-[#FF5F56]">{t('about.major')}</span>{t('about.studying2')}<span className="text-[#169FFF]">{t('about.school')}</span></p>
                <br />
                <p>{t('about.childhood')}</p>
            </div>
        </div>
    )
}
export default Introduction