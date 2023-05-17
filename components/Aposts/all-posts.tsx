import { NextPage } from 'next';
import { GetProjectType, ProjectType } from '../../helper/utill';
import PostsItem from './post-item';
import style from './posts.module.css';

const AllPosts : NextPage<GetProjectType> = (props)=>{
const {data}=props;
    return <ul className={style.container}>
        {data.map((project:ProjectType) => <PostsItem key={project.title} data={project}/>)}
    </ul>
}

export default AllPosts;
