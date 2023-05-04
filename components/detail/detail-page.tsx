import Image from "next/image";
import style from './detail.module.css';
import Link from "next/link";
import {useRouter} from 'next/router';
const DetailPage = (props : any)=>{
    const router = useRouter();
    const {title, titleDesc, image, desc, desc2, address, date } = props.postData;

  const imagePath = `/images/posts/${title}/${image}`;

// 화살표 이미지 출처 : <a href="https://www.flaticon.com/kr/free-icons/-" title="곡선 화살표 아이콘">곡선 화살표 아이콘  제작자: Freepik - Flaticon</a>
    return<dl className={style.container}>
            <dt>
                <p className={style.back} onClick={()=>router.back()}>
                    <Image 
                    src="/images/icon/arrow.png" 
                    alt="arrow" 
                    width={15} 
                    height={15}
                />돌아가기</p>
                    <dl className={style.box}>
                        <dt className={style.designTitle}>PORTFOLIO</dt>
                            <dd className={style.image}>
                                <Image 
                                src={imagePath} 
                                alt={title} 
                                width={500} 
                                height={250}
                                />
                            </dd>
                            <dd>
                                <dl className={style.title}>
                                    <dt>{title}</dt>
                                    <dd>{titleDesc}</dd>
                                </dl>
                            </dd>
                    </dl>
                </dt>
                <dd className={style.date}>제작기간 : {date}</dd>
                <dd className={style.address}>프로젝트 주소 : <Link href={address} target="_blank">{address}</Link></dd>
                <dd className={style.desc}>{desc}</dd>
                <dd className={style.desc}>{desc2}</dd>
           </dl>
}

export default DetailPage;