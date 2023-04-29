import PostsItem from '../All-Posts/post-item';
import style from './posts.module.css';
const AllPosts = (props : any)=>{

const {projects} = props;

    return <ul className={style.container}>
        {projects.map((project:any) => <PostsItem key={project.title} projects={project}/>)}
    </ul>
}

export default AllPosts;
