import MyContext from '../../store/context';
import ProjectGrid from './project-grid';
import { useContext } from 'react';
const AllMyProject = (props : any)=>{
    // const data = useContext(MyContext);
    const {posts} = props;
    console.log(posts)
    return(
        <section>
            <h2>My Project List</h2>
            <ProjectGrid projects = {posts}/>
        </section>
    )
}
export default AllMyProject;