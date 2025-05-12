import { useTranslation } from "react-i18next";
import { FaGraduationCap } from "react-icons/fa6";
const Education = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex flex-col gap-6 text-sm mt-5 text-[#fff]">
                <div className="college grid grid-cols-[1fr_3fr] max-sm:grid max-sm:grid-cols-1 p-6 gap-10 bg-[#333333] rounded-3xl sm:w-[85%] items-center">
                    <div className="flex sm:flex-col items-center gap-2">
                        <FaGraduationCap className="text-3xl" />
                        <span>2023 - {t("education.present")}</span>
                    </div>
                    <div className="flex flex-col gap-2.5 text-sm">
                        <span className="underline">{t('education.college')}</span>
                        <span>{t('education.school1')}</span>
                        <span>{t('education.major1')}</span>
                    </div>
                </div>
                <div className="school grid grid-cols-[1fr_3fr] max-sm:grid max-sm:grid-cols-1 p-6 gap-10 bg-[#333333] rounded-3xl sm:w-[85%] items-center">
                    <div className="flex sm:flex-col items-center gap-2">
                        <FaGraduationCap className="text-3xl" />
                        <span>2020 - 2023</span>
                    </div>
                    <div className="flex flex-col gap-2.5 text-sm">
                        <span className="underline">{t('education.student')}</span>
                        <span>{t('education.school2')}</span>
                        <span>{t('education.major2')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education;