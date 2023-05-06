import SkillGrid from "./skill-grid";
import styles from './skills.module.css';

const MySkillList = (props : any)=>{

    
    const skillList : {id : number, image : string}[]
     = [
        {id: 1, image : 'html5.png'},
        {id : 2, image : 'css3.png'}
    ]

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skillList}/>
        </section>
    )
}

export default MySkillList;
