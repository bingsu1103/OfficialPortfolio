import { useTranslation } from "react-i18next"
import ProjectId from "../components/section/project/project.id.jsx";

import Contact from "../components/section/project/contact";

const ProjectPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <section>
                <h1 className="font-bold text-2xl ml-3 p-6">{t("project.title")}</h1>
                <div className="flex flex-col gap-10 p-6">
                    <ProjectId id={"1"} />
                    <ProjectId id={"2"} />
                    <ProjectId id={"3"} />
                </div>
            </section>
            <section>
                <h1 className="font-bold text-2xl ml-3 p-6">{t("contact.title")}</h1>
                <Contact />
            </section>
        </div>
    )
}
export default ProjectPage