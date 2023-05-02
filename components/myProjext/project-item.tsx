import Image from "next/image";
import style from './project.module.css';
import Button from "../layout/Button";

const ProjectItem = (props:any)=>{
    const {title, titleDesc, image } = props.projects;
    const imagePath = `./images/posts/${title}/${image}`;

    return <li className={style.card}>
        <dl>
            <dt><Image src={imagePath} alt={title} width={220} height={150}/></dt>
            <dd className={style.text}>
                <dl>
                    <dt>{title}</dt>
                    <dd>{titleDesc}</dd>
                </dl>
            </dd>
        </dl>
        <Button title={title}/>
        </li>
}

export default ProjectItem;