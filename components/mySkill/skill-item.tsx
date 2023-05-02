import Image from "next/image";
import styles from './skills.module.css';

const SkillItem = (props:any)=>{
const {title, image } = props;

const imagePath = `/images/skills/${image}`;
    return <li className={styles.item}>
                <div>
                <p>hover please!</p>
                  <Image src={imagePath} alt={title} width={80} height={80}/>
                  <span>{title}</span>
                </div>
    </li>
}

export default SkillItem;