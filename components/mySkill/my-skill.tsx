import SkillGrid from "./skill-grid";
import styles from './skills.module.css';

const MySkillList = (props : any)=>{
    const skills : {title : string, image : string}[ 
    ] = [
        {title : 'html5', image :  'html5.png'},
        {title : 'CSS3', image :  'css3.png'},
        {title : 'Javascript', image :  'javascript.png'},
        {title : 'Typescript', image :  'typescript.png'},
        {title : 'React', image :  'react.png'},
        {title : 'NextJS', image :  'nextjs.png'},
        {title : 'MySQL', image :  'mysql.png'},
    ];

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skills}/>
        </section>
    )
}

export default MySkillList;