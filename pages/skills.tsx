import { NextPage } from "next";
import SkillGrid from "../components/mySkill/skill-grid";
import styles from '../components/mySkill/skills.module.css';

import { SKILL } from "../store/context";
import { useContext } from "react";

interface SkillProps {
    skillsData : SKILL[];
}

const MySkillList:NextPage<SkillProps> = ({skillsData})=>{
// const data = useContext(MyContext);
    return(
        <section className={styles.container}>
             <h2>My Skill List</h2>
            <SkillGrid data = {skillsData}/>
        </section>
    )
}

export default MySkillList;