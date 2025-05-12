import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import react from "../../../assets/svg/react.svg";
import javascript from "../../../assets/svg/js.svg";
import nodejs from "../../../assets/svg/nodejs.svg";
import tailwind from "../../../assets/svg/tailwind.svg"
const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10 max-sm:p-5 p-10">
            <div className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-5">
                    <input className="bg-[#fff] text-[#4D4D4D] max-sm:px-2 px-2 border-2 rounded-md h-10" placeholder={t("contact.name")} type="text" />
                    <input className="bg-[#fff] text-[#4D4D4D] max-sm:px-2 px-2 border-2 rounded-md h-10" placeholder={t("contact.phone")} type="text" />
                </div>
                <div className="grid grid-cols-[3fr_1fr] max-sm:grid-cols-1">
                    <input className="bg-[#fff] text-[#4D4D4D] max-sm:px-2 px-2 border-2 rounded-md h-10" placeholder={t("contact.email")} type="text" />
                </div>
                <div className="grid grid-cols-[3fr_1fr] max-sm:grid-cols-1">
                    <textarea className="bg-[#fff] text-[#4D4D4D] max-sm:px-2 px-2 border-2 rounded-md resize-none" placeholder={t("contact.reply")}></textarea>
                </div>
                <div>
                    <button className="text-left py-2 px-3 font-bold bg-[#1F1F1F] text-[#fff] rounded-sm cursor-pointer hover:opacity-50">{t('project.send')}</button>
                </div>
            </div>
            <div className="sm:pl-10 max-sm:pl-5">
                <div className="flex justify-between max-[821px]:grid max-[821px]:grid-cols-1 max-[821px]:gap-2">
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt />
                        <span className="max-sm:text-sm">+84 775 510 335</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdAttachEmail />
                        <span className="max-sm:text-sm">bingsu1103</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaLinkedin />
                        <span className="underline max-sm:text-sm"><Link to='https://www.linkedin.com/'>linkedin.com</Link></span>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-left font-bold text-[#E04F5F]">{t('contact.techportfoliotitle')}</h3>
                    <div className="flex gap-6 pt-6">
                        <img className="react-spin" width={40} src={react} alt="react" />
                        <img width={40} src={javascript} alt="javascript" />
                        <img width={40} src={nodejs} alt="nodejs" />
                        <img width={40} src={tailwind} alt="tailwind" />
                    </div>
                    <br />
                    <br />
                    <hr />
                </div>
            </div>
        </div>

    )
}
export default Contact;