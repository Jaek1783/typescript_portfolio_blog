import SkillGrid from "./skill-grid";
import styles from './skills.module.css';

const MySkillList = (props : any)=>{

    
    const skillList : {id : number, image : string}[]
     = [
        {id: 1, image : 'html'},
        // <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
        {id : 2, image : 'css'},
        //<a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Pixel perfect - Flaticon</a>
        {id : 3, image : 'javascript'},
        //<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
        {id : 4, image : 'typescript'},
        //<a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>
        {id : 5, image : 'react'},
        //<a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Kiranshastry - Flaticon</a>
        {id : 6, image : 'next'},
        {id : 6, image : 'mongodb'},
        {id : 7, image : 'mysql'},
    ]

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skillList}/>
        </section>
    )
}

export default MySkillList;
