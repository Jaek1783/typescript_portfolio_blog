import SkillGrid from "./skill-grid";
import styles from './skills.module.css';
import MyContext from "../../store/context";
import { useContext } from "react";
const MySkillList = (props : any)=>{
const data = useContext(MyContext);

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {data}/>
        </section>
    )
}

export default MySkillList;
