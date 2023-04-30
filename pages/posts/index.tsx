import AllPosts from "../../components/All-Posts/all-posts";
import MyContext from "../../store/context";
import { useContext } from "react";
const AllPostsPage = (props:any)=>{
const data = useContext(MyContext);

    return(
        <section>
            <AllPosts projects = {data}/>
        </section>
    )
}

export default AllPostsPage;
