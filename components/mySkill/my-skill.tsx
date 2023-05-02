import SkillGrid from "./skill-grid";
import styles from './skills.module.css';

import html from '../../public/images/skills/html5.png';
import css from '../../public/images/skills/css3.png';
import javascript from '../../public/images/skills/javascript.png';
import typescript from '../../public/images/skills/typescript.png';
import react from '../../public/images/skills/react.png';
import nextjs from '../../public/images/skills/nextjs.png';
import mysql from '../../public/images/skills/mysql.png';

const MySkillList = (props : any)=>{
    const skills : {title : string, image : any}[ 
    ] = [
        {title : 'html5', image : html.src},
        {title : 'CSS3', image : css.src},
        {title : 'Javascript', image :  javascript.src},
        {title : 'Typescript', image :  typescript.src},
        {title : 'React', image : react.src},
        {title : 'NextJS', image : nextjs.src},
        {title : 'MySQL', image :  mysql.src},
    ];
    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skills}/>
        </section>
    )
}

export default MySkillList;