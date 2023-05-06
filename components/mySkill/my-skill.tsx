import SkillGrid from "./skill-grid";
import styles from './skills.module.css';

const MySkillList = (props : any)=>{

    
    const skillList : {id : number, image : string}[]
     = [
        {id: 1, image : 'html5.png'},
        {id : 2, image : 'css3.png'},
        {id : 3, image : 'javascript.png'},
        {id : 4, image : 'typescript.png'},
        {id : 5, image : 'react.png'},
        {id : 6, image : 'nextjs.png'},
        {id : 7, image : 'mysql.png'},
    ]

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skillList}/>
        </section>
    )
}

export default MySkillList;
