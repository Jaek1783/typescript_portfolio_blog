import Image from "next/image";
import style from './project.module.css';
import Button from "../layout/Button";

const ProjectItem = (props:any)=>{
    const {title, desc, image } = props.projects;

    return <li className={style.card}>
        <dl>
            <dt><Image src={image} alt={title} width={220} height={150}/></dt>
            <dd className={style.text}>
                <dl>
                    <dt>{title}</dt>
                    <dd>{desc}</dd>
                </dl>
            </dd>
        </dl>
        <Button title={title}/>
        {/* <button onClick={btnHandler} className={style.btn}>More</button> */}
        </li>
}

export default ProjectItem;