import SkillItem from "./skill-item";
import styles from './skills.module.css';



const SkillGrid = (props : any)=>{
    const {skills} = props;

    return <ul className={styles.box}>
        {skills.map((skill:any) => <SkillItem key={skill.id} id={skill.id} title={skill.title} image={skill.image}/>)}
    </ul>
}

export default SkillGrid;