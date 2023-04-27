import Image from "next/image";
import style from './posts.module.css';
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
            <dd><Button title={title}/></dd>
        </dl>
        </li>
}

export default ProjectItem;