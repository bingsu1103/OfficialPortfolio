import { SKILLS_DATA } from "../../../helpers/data";
import { skillsImage } from "../../../helpers/skill.img";
import { useCurrentApp } from "../../context/app.context";

const RenderSkill = () => {
    const { theme } = useCurrentApp();

    const skills = [...SKILLS_DATA, ...SKILLS_DATA]; // nhân đôi để tạo hiệu ứng liền mạch

    return (
        <div className="marquee-container overflow-hidden w-full relative">
            <div className="marquee-content flex">
                {skills.map((skill, id) => (
                    <div className="skill-item p-4 flex-shrink-0" key={id}>
                        <div
                            className="skill-card flex flex-col gap-3 w-24 h-24 items-center justify-center rounded-xl"
                            style={{
                                backgroundColor: theme === 'dark' ? 'var(--background-color)' : '#333',
                            }}
                        >
                            <img
                                src={skillsImage(skill)}
                                alt={skill}
                                width={40}
                                height={40}
                            />
                            <p
                                className={`text-[#fff] font-bold ${['Tailwind', 'React', 'HTML', 'Javascript', 'Typescript', 'CSS', 'MaterialUI'].includes(skill)
                                        ? 'mt-2'
                                        : ''
                                    }`}
                            >
                                {skill}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RenderSkill;
