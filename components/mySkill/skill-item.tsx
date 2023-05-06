import Image from "next/image";
import styles from './skills.module.css';

const SkillItem = (props:any)=>{
const {image} = props;

const imagePath = `/images/skills/${image}.png`;
    return <li className={styles.item}>
                <div>
                <p>hover please!</p>
                  <Image src={imagePath} alt={image} width={80} height={80}/>
                  <span>{image}</span>
                </div>
    </li>
}

export default SkillItem;