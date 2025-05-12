import { useTranslation } from "react-i18next";
import avatar from "../../../assets/jpg/avatar.jpeg"
import { FaInfoCircle } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const AvatarInfo = () => {
    const { t } = useTranslation();
    return (
        <div className="flex items-center">
            <div className="sm:p-6 max-sm:pr-5">
                <img className="rounded-full border-2 border-[#ccc] max-sm:w-[150px] max-[821px]:w-[130px]" width={200} src={avatar} alt="no img" />
            </div>
            <div className="grid grid-cols-[1fr_4fr] gap-3 items-center max-sm:text-sm">
                <span className="m-auto"><FaInfoCircle className="text-xl" /></span>
                <span className="font-bold">{t('about.name')}</span>
                <span className="m-auto"><FaCalendarDays className="text-xl" /></span>
                <span className="font-bold">{t('about.birthday')}</span>
                <span className="m-auto"><FaLocationDot className="text-xl" /></span>
                <span className="font-bold">{t('about.location')}</span>
            </div>
        </div>
    )
}
export default AvatarInfo;