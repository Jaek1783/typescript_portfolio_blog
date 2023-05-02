import SkillGrid from "./skill-grid";
import styles from './skills.module.css';

const MySkillList = (props : any)=>{
    const skills : {title : string}[ 
    ] = [
        {title : 'html5'},
        {title : 'css3'},
        {title : 'javascript'},
        {title : 'typescript'},
        {title : 'react'},
        {title : 'nextjs'},
        {title : 'mysql'},
    ];

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skills}/>
        </section>
    )
}

export default MySkillList;