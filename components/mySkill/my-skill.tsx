import SkillGrid from "./skill-grid";
import styles from './skills.module.css';
const MySkillList = (props : any)=>{
    console.log(props.skills);
    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {props.skills}/>
        </section>
    )
}

export default MySkillList;