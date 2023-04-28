import Image from "next/image";
import style from './detail.module.css';
const TitleDetail = (props : any)=>{
    const {title, image, desc} = props;
    // const imagePath = `/images/posts/${title}/${image};`
    return<dl className={style.box}>
            <dt className={style.date}>2023-04-28</dt>
            <dd   className={style.image}><Image src={image} alt={title} width={500} height={300}/></dd>
            <dd>
                <dl className={style.text}>
                    <dt>{title}</dt>
                    <dd>{desc}</dd>
                </dl>
            </dd>
            
          </dl>
}

export default TitleDetail;