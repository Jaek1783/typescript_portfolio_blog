import AllPosts from "../../components/Aposts/all-posts";
import { getAllPosts } from "../../helper/utill";

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
        revalidate :600
    }
}