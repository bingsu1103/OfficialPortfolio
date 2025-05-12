import { useTranslation } from "react-i18next"
import Introduction from "../components/section/about/introduction";
import AvatarInfo from "../components/section/about/avatar.info";
import Education from "../components/section/education/education";
import Certificate from "../components/section/achivement/certificate";
import achieve from "../assets/svg/achivement.svg"
import ForMore from "../components/section/about/formore";
import guitar from "../assets/svg/guitar.svg";
import note1 from "../assets/svg/note1.svg";
import note2 from "../assets/svg/note2.svg";
import note3 from "../assets/svg/note3.svg";
import piano from "../assets/svg/piano.svg";
import laptop from "../assets/svg/laptop.svg";

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <section className="grid grid-cols-2 p-10 max-sm:grid max-sm:grid-cols-1 max-sm:gap-10">
                <div>
                    <AvatarInfo />
                </div>
                <div>
                    <h1 className="text-[#169FFF] font-bold text-2xl">{t('about.title')}</h1>
                    <Introduction />
                </div>
            </section>
            <section className="grid grid-cols-2 p-10 max-sm:grid max-sm:grid-cols-1 max-sm:gap-10">
                <div>
                    <h1 className="text-2xl font-bold p-2 max-sm:px-0">{t('education.title')}</h1>
                    <Education />
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold p-2 max-sm:px-0">{t('achieve.title')}</h1>
                        <img width={100} src={achieve} className="shake-element bg-amber-300 rounded-2xl" alt="" />
                    </div>
                    <Certificate />
                </div>
            </section>
            <section className="grid grid-cols-2 p-10 max-sm:grid max-sm:grid-cols-1 max-sm:gap-10">
                <div>
                    <h1 className="text-2xl font-bold p-3">FOR MORE ABOUT ME</h1>
                    <ForMore />
                </div>
                <div>
                    <div className="circle-container">
                        <img className="bounce-horizontal2" width={70} src={note1} alt="note1" />
                        <img className="circle-animation" width={60} src={note2} alt="note2" />
                        <img className="bounce-horizontal" width={70} src={note3} alt="note3" />
                        <img className="absolute bottom-10 left-[40%]" width={80} src={laptop} alt="laptop" />
                        <img className="absolute max-sm:right-3 right-10 top-5 bg-[#fff]" width={70} src={piano} alt="piano" />
                        <img className="absolute max-sm:left-5 left-20 animate-spin-slow top-10" width={100} src={guitar} alt="guitar" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AboutPage