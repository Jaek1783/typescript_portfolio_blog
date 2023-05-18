import { NextPage } from 'next';
import { GetProjectType } from '../../helper/utill';
import ProjectGrid from './project-grid';

const AllMyProject : NextPage<GetProjectType> = (props)=>{

    const {data} = props;

    return(
        <section>
            <h2>My Project List</h2>
            <ProjectGrid data = {data}/>
        </section>
    )
}

export default AllMyProject;