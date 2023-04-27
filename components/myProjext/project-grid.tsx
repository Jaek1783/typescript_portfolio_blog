import ProjectItem from "./project-item";
import stlye from './project.module.css';
const ProjectGrid = (props : any)=>{
const {projects} = props;
    return <ul className={stlye.container}>
        {projects.map((project:any) => <ProjectItem key={project.title} projects={project}/>)}
    </ul>
}

export default ProjectGrid;

