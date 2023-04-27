import AllPosts from "../../components/All-Posts/all-posts";
import MyContext from "../../store/context";
import { useContext } from "react";
const AllPostsPage = ()=>{
    const data = useContext(MyContext);
    console.log(data);
    return(
        <section>
            <AllPosts projects = {data}/>
        </section>
    )
}

export default AllPostsPage;