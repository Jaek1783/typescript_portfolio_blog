import Hero from "../components/hero/hero";
import Skill from "./skills";
import Project from '../components/myProjext/my-project';

import { Fragment, useContext } from "react";
import { getFavoritePosts } from "../helper/utill";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import MyContext, { SKILL } from "../store/context";

interface SkillProps {
    skillsData : SKILL[];
}
type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;
const HomePage : NextPage<HomePageProps> = (props : HomePageProps)=>{

    const skills : SKILL[] = useContext(MyContext);
    const {data} = props;
    //자기소개
    //사용가능 기술
    //프로젝트
    return(
        <Fragment>
            <Hero/>
            <Skill skillsData = {skills}/>
            <Project data = {data}/>
        </Fragment>
    )
}

export default HomePage;

export const getStaticProps:GetStaticProps = async ()=>{
    const favoritePosts = getFavoritePosts();
    return {
        props : {
            data : favoritePosts
        },
        // revalidate : 100 
    }
} 