import { useTranslation } from "react-i18next";

const ForMore = () => {
    const { t } = useTranslation();
    return (
        <div>
            <p className="italic">{t("formore.content")}</p>
            <br />
            <p className="italic">{t("formore.content2")}</p>
            <br />
            <p className="italic text-[#FD5F56]">{t("formore.speech")}</p>
        </div>
    )
}
export default ForMore;