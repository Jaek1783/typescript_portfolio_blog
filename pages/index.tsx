import Hero from "../components/hero/hero";
import Skill from "../components/mySkill/my-skill";
import Project from '../components/myProjext/my-project';
import { Fragment } from "react";
const HomePage = (props : any)=>{
    //자기소개
    //사용가능 기술
    //프로젝트
    return(
        <Fragment>
            <Hero/>
            <Skill/>
            <Project/>
        </Fragment>
    )
}

export default HomePage;