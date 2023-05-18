import { NextPage } from "next";
import { GetProjectType, ProjectType } from "../../helper/utill";
import ProjectItem from "./project-item";
import style from './project.module.css';

const ProjectGrid : NextPage<GetProjectType> = (props)=>{
const {data} = props;

    return <ul className={style.container}>
        {data.map((project:ProjectType) => <ProjectItem key={project.title} data={project}/>)}
    </ul>
}

export default ProjectGrid;

