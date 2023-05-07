import Hero from "../components/hero/hero";
import Skill from "../components/mySkill/my-skill";
import Project from '../components/myProjext/my-project';
import { Fragment } from "react";
import { getFavoritePosts } from "../helper/utill";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;
const HomePage : NextPage<HomePageProps> = (props : HomePageProps)=>{

    const {posts} = props;
    //자기소개
    //사용가능 기술
    //프로젝트
    return(
        <Fragment>
            <Hero/>
            <Skill/>
            <Project posts = {posts}/>
        </Fragment>
    )
}

export default HomePage;

export const getStaticProps:GetStaticProps = async ()=>{
    const favoritePosts = getFavoritePosts();
    return {
        props : {
            posts : favoritePosts
        },
        // revalidate : 100 
    }
} 