import SkillGrid from "./skill-grid";
import styles from './skills.module.css';
import axios from "axios";
import { useState ,useEffect} from "react";
import html from '../../public/images/skills/html5.png';
const MySkillList = (props : any)=>{
    const [skillData, setSkillData] = useState([]);
    const [htmlSrc, setHtmlSrc] = useState('');
useEffect(()=>{
    axios.get('./skills.json')
    .then((response:any)=>setSkillData(response.data));
    setHtmlSrc(html.src);
},[]);
console.log(htmlSrc);
;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skillData} htmlSrc = {htmlSrc}/>
        </section>
    )
}

export default MySkillList;
