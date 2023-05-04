import AllPosts from "../../components/all-posts/all-posts";
import { getAllPosts } from "../../helper/utill";
import MyContext from "../../store/context";
import { useContext } from "react";
const AllPostsPage = (props:any)=>{
// const data = useContext(MyContext);
const {data} = props;

    return(
        <section>
            <AllPosts projects = {data}/>
        </section>
    )
}

export default AllPostsPage;

export const getStaticProps = ()=>{
    const allPosts = getAllPosts();

    return{
        props : {
            data : allPosts
        },
        revailidats :600
    }
}