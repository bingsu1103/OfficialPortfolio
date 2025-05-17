import database from "../../../assets/svg/database.svg"
import UserIcon from '../../../assets/svg/USERDB.svg?react'
import Skill from "../../../assets/svg/SKILLDB.drawio.svg?react"
import Experience from "../../../assets/svg/EXPERIENCEDB.drawio.svg?react"
import Project from "../../../assets/svg/PROJECTDB.drawio.svg?react"
import Education from "../../../assets/svg/EDUCATIONDB.drawio.svg?react"
import UserSkill from "../../../assets/svg/USER_SKILL2.drawio.svg?react"
import UserExperience from "../../../assets/svg/USER_EXPERIENCE.drawio.svg?react"
import UserProject from "../../../assets/svg/USER_PROJECT.drawio.svg?react"
import UserEducation from "../../../assets/svg/USER_EDUCATION.drawio.svg?react"

const DesignDB = () => {
    return (
        <div>
            <div className="flex items-center ml-4">
                <img width={100} src={database} alt="" />
                <h1 className="text-3xl max-sm:text-2xl font-bold">DB Portfolio</h1>
            </div>
            <div className="circle-container">
                <UserIcon width={100} className="block [clip-path:inset(0px_0px_2px_0px)] circle-animation rounded-b-[11px] rounded-lg h-15" />
                <Skill width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] circle-animation h-20" />
                <Experience width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] circle-animation h-20" />
                <Project width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] bounce-horizontal2 h-25" />
                <Education width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] bounce-horizontal h-20" />
                <UserSkill width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] bounce-horizontal3 h-15" />
                <UserExperience width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] circle-animation4 h-10" />
                <UserProject width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] circle-animation5 h-10" />
                <UserEducation width={100} className="block [clip-path:inset(0px_0px_2px_0px)] rounded-lg rounded-b-[11px] circle-animation6 h-10" />
            </div>
        </div>

    )
}
export default DesignDB