import { GetStaticProps,NextPage } from "next";
import AllPosts from "../../components/Aposts/all-posts";
import { getAllPosts, GetProjectType, ProjectType } from "../../helper/utill";
const AllPostsPage : NextPage<GetProjectType>= (props)=>{

const {data} = props;

    return(
        <section>
            <AllPosts data = {data}/>
        </section>
    )
}

export default AllPostsPage;

export const getStaticProps:GetStaticProps<GetProjectType> = async ()=>{
    const allPosts : ProjectType[] = await getAllPosts();

    return{
        props : {
            data : allPosts
        },
        revalidate :600
    }
}