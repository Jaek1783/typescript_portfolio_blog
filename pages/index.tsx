import Hero from "../components/hero/hero";
import Skill from "../components/mySkill/my-skill";
import Project from '../components/myProjext/my-project';
import { Fragment } from "react";
import { getFavoritePosts } from "../helper/utill";
const HomePage = (props : any)=>{
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

export const getStaticProps = ()=>{
    const favoritePosts = getFavoritePosts();
    return {
        props : {
            posts : favoritePosts
        },
        // revalidate : 100 
    }
} 