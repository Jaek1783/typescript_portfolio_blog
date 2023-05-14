import Image from "next/image";
import style from './posts.module.css';
import Link from "next/link";


const ProjectItem = (props:any)=>{
    const {title, titleDesc, image } = props.projects;
    const imagePath = `/images/posts/${title}/${image}`;
    const linkPath = `/posts/${title}`;

    return <li className={style.card}>
        <Link href={linkPath}>
        <dl>
            <dt><Image src={imagePath} alt={title} width={220} height={150}/></dt>
            <dd className={style.text}>
                <dl>
                    <dt>{title}</dt>
                    <dd>{titleDesc}</dd>
                </dl>
            </dd>
        </dl>
        </Link>
        </li>
}

export default ProjectItem;