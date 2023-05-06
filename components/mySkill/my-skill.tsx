import SkillGrid from "./skill-grid";
import styles from './skills.module.css';
import MyContext from "../../store/context";
import { useContext } from "react";
const MySkillList = (props : any)=>{
const data = useContext(MyContext);
console.log(data);
    
    // const skillList : {id : number,title : string, image : string}[]
    //  = [
    //     {id: 1, title:'HTML5', image : 'html'},
    //     // <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
    //     {id : 2, title:'CSS3', image : 'css'},
    //     //<a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Pixel perfect - Flaticon</a>
    //     {id : 3, title:'Javascript', image : 'js'},
    //     //<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
    //     {id : 4, title:'Typescript', image : 'ts'},
    //     //<a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>
    //     {id : 5, title:'React', image : 'rt'},
    //     //<a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Kiranshastry - Flaticon</a>
    //     {id : 6, title:'Next-js', image : 'next'},
    //     {id : 7, title:'MongoDB', image : 'mongodb'},
    //     {id : 8, title:'MySQL', image : 'mysql'},
    // ]

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {data}/>
        </section>
    )
}

export default MySkillList;
