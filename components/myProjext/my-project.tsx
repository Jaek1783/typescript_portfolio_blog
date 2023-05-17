
import ProjectGrid from './project-grid';

const AllMyProject = (props : any)=>{

    const {posts} = props;

    return(
        <section>
            <h2>My Project List</h2>
            <ProjectGrid projects = {posts}/>
        </section>
    )
}

export default AllMyProject;