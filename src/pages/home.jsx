import CodePreView from "../components/section/precode/code.preview";
import CodeRunning from "../components/section/precode/code.running";
import DesignDB from "../components/section/designdb/DesignDB";
import IntroMySelf from "../components/section/introduction/intro.myself";
import SQLCode from "../components/section/skills/sql.code";
import RenderSkill from "../components/section/skills/render.skill";
import business from "../assets/svg/business.svg"
import { useRef } from "react";
import Social from "../components/section/cv/social";
import { useTranslation } from "react-i18next";
const HomePage = () => {
    const { t } = useTranslation();
    const scrollSkill = useRef(null);
    const scrollToSkill = () => {
        scrollSkill.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return (
        <div>
            <section className="grid grid-cols-2 max-sm:grid-cols-1">
                <div>
                    <CodeRunning scrollToSkill={scrollToSkill} />
                </div>
                <div>
                    <IntroMySelf />
                </div>
            </section>
            <section>
                <div className="hidden sm:grid grid-cols-2">
                    <DesignDB />
                    <CodePreView />
                </div>
                <div className="grid grid-cols-1 gap-24 sm:hidden">
                    <CodePreView />
                    <DesignDB />
                </div>
            </section>
            <section ref={scrollSkill} className="pt-10 px-4">
                <h1 className="font-bold text-2xl p-10 max-sm:p-8 sm:ml-2">{t('introduce.skill')}</h1>
                <div className="flex gap-4 p-4 max-sm:grid max-sm:grid-cols-1">
                    <SQLCode />
                    <RenderSkill />
                </div>
            </section>
            <section className="p-4">
                <h1 className="font-bold text-2xl max-sm:p-6 p-10 sm:ml-2">{t('introduce.experience')}</h1>
                <div className="sm:ml-6">
                    <img className="ml-5" width={100} src={business} alt="" />
                </div>
                <div className="flex flex-col gap-5 sm:ml-5 p-5">
                    <div className="bg-[#169FFF] px-4 py-10 rounded-2xl font-bold">UNDEFINED</div>
                    <div className="bg-[#169FFF] px-4 py-10 rounded-2xl font-bold">UNDEFINED</div>
                    <div className="bg-[#169FFF] px-4 py-10 rounded-2xl font-bold">UNDEFINED</div>
                </div>
            </section >
            <section className="p-4">
                <h1 className="font-bold text-2xl max-sm:p-6 p-10 sm:ml-2">{t('introduce.social')}</h1>
                <div>
                    <Social />
                </div>
            </section>
        </div >
    )
}
export default HomePage;