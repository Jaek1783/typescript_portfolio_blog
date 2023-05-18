import { GetProjectType, ProjectType } from "../../helper/utill";
import Image from "next/image";
import style from './project.module.css';
import Link from "next/link";
import { NextPage } from "next";

interface ProjectItemProps {
    data : ProjectType;
}
const ProjectItem : NextPage<ProjectItemProps> = ({data})=>{
    const {title, titleDesc, image } = data;
    const imagePath = `/images/posts/${title}/${image}`;
    const linkPath = `/posts/${title}`;
    return <li className={style.card}>
        <Link href={linkPath}>
            <dl>
                <dt><Image src={imagePath} alt={title} width={220} height={150} /></dt>
                <dd className={style.text}>
                    <dl>
                        <dt>{title}</dt>
                        <dd>{titleDesc}</dd>
                    </dl>
                </dd>
            </dl>
        </Link>
        {/* <Button title={title}/> */}
        </li>
}

export default ProjectItem;