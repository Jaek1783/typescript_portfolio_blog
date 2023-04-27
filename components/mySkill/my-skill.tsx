import SkillGrid from "./skill-grid";
import styles from './skills.module.css';
const MySkillList = (props : any)=>{
    const skills : {title : string, image : string}[ 
    ] = [
        {title : 'html5', image :  '/images/skills/html5.png'},
        {title : 'CSS3', image :  '/images/skills/CSs3.png'},
        {title : 'Javascript', image :  '/images/skills/javascript.png'},
        {title : 'Typescript', image :  '/images/skills/TypeScript.png'},
        {title : 'React', image :  '/images/skills/react.png'},
        {title : 'NextJS', image :  '/images/skills/nextjs.png'},
        {title : 'MySQL', image :  '/images/skills/MySql.png'},
    ];
    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skills}/>
        </section>
    )
}

export default MySkillList;