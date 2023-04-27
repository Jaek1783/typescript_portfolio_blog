import Hero from "../components/hero/hero";
import Skill from "../components/mySkill/my-skill";
import { Fragment } from "react";
const HomePage = (props : any)=>{
    //자기소개
    //사용가능 기술
    //프로젝트
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
// console.log(skills);
    return(
        <Fragment>
            <Hero/>
            <Skill skills = {skills}/>
        </Fragment>
    )
}

export default HomePage;