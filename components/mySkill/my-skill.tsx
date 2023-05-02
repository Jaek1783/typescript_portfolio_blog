import SkillGrid from "./skill-grid";
import styles from './skills.module.css';
const MySkillList = (props : any)=>{
    const skills : {title : string, image : string}[ 
    ] = [
        {title : 'html5', image :  './images/skills/HTML5.png'},
        {title : 'CSS3', image :  './images/skills/CSS3.png'},
        {title : 'Javascript', image :  './images/skills/JavaScript.png'},
        {title : 'Typescript', image :  '/images/skills/Typescript.png'},
        {title : 'React', image :  './images/skills/React.png'},
        {title : 'NextJS', image :  './images/skills/Nextjs.png'},
        {title : 'MySQL', image :  './images/skills/mySql.png'},
    ];
    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skills}/>
        </section>
    )
}

export default MySkillList;