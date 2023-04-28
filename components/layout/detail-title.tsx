import Image from "next/image";
import style from './detail.module.css';
const TitleDetail = (props : any)=>{
    const {title, titleDesc, image, desc, date } = props;

  const imagePath = `/images/posts/${title}/${image}`;
  
    return<dl className={style.container}>
            <dt>
                    <dl className={style.box}>
                            <dt className={style.date}>{date}</dt>
                            <dd   className={style.image}><Image src={imagePath} alt={title} width={500} height={300}/></dd>
                            <dd>
                                <dl className={style.title}>
                                    <dt>{title}</dt>
                                    <dd>{titleDesc}</dd>
                                </dl>
                            </dd>
                    </dl>
                </dt>
                <dd className={style.desc}>{desc}</dd>
           </dl>
}

export default TitleDetail;