import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiReaddotcv } from "react-icons/si";
import { useTranslation } from "react-i18next";
import qr from "../../../assets/svg/qr-code.svg"
const Social = () => {
    const { t } = useTranslation();
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null;
    }
    const handleDownloadPDF = () => {
        openInNewTab("https://drive.google.com/file/d/1ER_YawUpuxciW87POAtX2CmjRwRsCPb1/view?usp=sharing")
    }

    return (
        <div className="ml-6 flex gap-4 items-center justify-around max-sm:grid max-sm:grid-cols-1 max-sm:gap-10">
            <div className="flex gap-6">
                <Link to='https://github.com/bingsu1103'><FaGithub title="github" className="text-4xl" /></Link>
                <Link to='https://www.facebook.com/bingsu1103/'><FaFacebook title="facebook" className="text-4xl" /></Link>
                <Link to='https://www.tiktok.com/@bingsu.05'><FaTiktok title="tiktok" className="text-4xl" /></Link>
                <Link to='https://www.youtube.com/@bingsu1103'><FaYoutube title="youtube" className="text-4xl" /></Link>
            </div>
            <div>
                <span className="font-bold text-md text-[#169FFF]">{t('cv.extraspeech')}</span>
            </div>
            <div>
                <button onClick={handleDownloadPDF} className="bg-[#1F1F1F] text-[#fff] p-4 rounded-2xl font-bold text-md flex gap-4 cursor-pointer">
                    <SiReaddotcv className="text-2xl" />
                    <span>My CV</span>
                </button>
            </div>
            <div className="flex flex-col justify-center">
                <div className="relative">
                    <img className="border-4 border-[#169FFF] rounded-2xl bg-[#fff]" width={95} src={qr} alt="" />
                    <span className="sm:text-center font-mono py-3 px-1 absolute top-25 max-sm:top-25 max-[821px]:top-20">{t('cv.scan')}</span>
                    <img />
                </div>
            </div>
            <br />
        </div>
    )
}
export default Social;