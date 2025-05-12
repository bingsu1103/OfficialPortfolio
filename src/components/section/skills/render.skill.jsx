import { SKILLS_DATA } from "../../../helpers/data";
import { skillsImage } from "../../../helpers/skill.img";
import { useCurrentApp } from "../../context/app.context";

const RenderSkill = () => {
    const { theme } = useCurrentApp();

    return (
        <div className="w-[70%] max-sm:w-[100%] overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex gap-5">
                {SKILLS_DATA.map((skill, id) => (
                    <div className="skill-item p-4 inline-block" key={id}>
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
                                className={`text-[#fff] font-bold ${skill === 'Tailwind' && 'mt-4'} ${skill === 'React' && 'mt-2'} ${skill === 'HTML' && 'mt-1'} ${skill === 'Javascript' && 'mt-1'} ${skill === 'Typescript' && 'mt-1'} ${skill === 'CSS' && 'mt-1'} ${skill === 'MaterialUI' && 'mt-2'}`}
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
