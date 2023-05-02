import axios from "axios";
import { useState } from "react";

const SkillUtill = async ()=>{
    const [skillData, setSkillData] = useState([]);
const results = await axios.get('/skills.json');
const data = results.data;
console.log(data);
}
export default SkillUtill;