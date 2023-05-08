import Image from "next/image";
import styles from './skills.module.css';
import Link from "next/link";
import { SKILL } from "../../store/context";
import {useRouter} from 'next/router'


const SkillItem = (props:any)=>{
const {id, title, image, desc01} = props;
const imagePath = `/images/skills/${image}.png`;

const router = useRouter();
const {skillDetail} = router.query;


    return <li className={styles.item}>
                <div id='skill'>
                  <p>Click please!</p>
                  <Link href={`/?skillDetail=${image}`} as={`/${image}`}>
                    <Image src={imagePath} alt={title} width={80} height={80}/>
                  </Link>
                  <span>{title}</span>
                </div>
    </li>
}

export default SkillItem;