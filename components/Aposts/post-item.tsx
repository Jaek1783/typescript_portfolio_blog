import { ProjectType } from "../../helper/utill";
import Image from "next/image";
import style from './posts.module.css';
import Link from "next/link";
import { NextPage } from "next";

interface PostProps {
    data:ProjectType;
}
const ProjectItem : NextPage<PostProps>= ({data})=>{
    // const {title, titleDesc, image } = props;

    const imagePath = `/images/posts/${data.title}/${data.image}`;
    const linkPath = `/posts/${data.title}`;

    return <li className={style.card}>
        <Link href={linkPath}>
        <dl>
            <dt><Image src={imagePath} alt={data.title} width={220} height={150}/></dt>
            <dd className={style.text}>
                <dl>
                    <dt>{data.title}</dt>
                    <dd>{data.titleDesc}</dd>
                </dl>
            </dd>
        </dl>
        </Link>
        </li>
}

export default ProjectItem;