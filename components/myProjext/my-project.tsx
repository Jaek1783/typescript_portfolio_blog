import MyContext from '../../store/context';
import ProjectGrid from './project-grid';
import { useContext } from 'react';
const AllMyProject = ()=>{
    const data = useContext(MyContext);
    // const projects : {id : number, title : string, desc : string, image : string}[] = [
    //     {id : 1, title : 'project01', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : '/images/project/hard.png'},
    //     {id : 2, title : 'project02', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : '/images/project/salad.png'},
    //     {id : 3, title : 'project03', desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image : '/images/project/javascript.gif'},
    // ];
    return(
        <section>
            <h2>My Project List</h2>
            <ProjectGrid projects = {data}/>
        </section>
    )
}
export default AllMyProject;