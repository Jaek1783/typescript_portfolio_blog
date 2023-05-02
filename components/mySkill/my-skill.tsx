import SkillGrid from "./skill-grid";
import styles from './skills.module.css';
import axios from "axios";
import { useState ,useEffect} from "react";

const MySkillList = (props : any)=>{
    const [skillData, setSkillData] = useState([]);
useEffect(()=>{
    axios.get('./skills.json')
    .then((response:any)=>setSkillData(response.data));
},[]);

;    return(
        <section className={styles.container}>
            <h2>My Skill List</h2>
            <SkillGrid skills = {skillData}/>
        </section>
    )
}

export default MySkillList;
