import Image from "next/image";
import styles from './skills.module.css';

const SkillItem = (props:any)=>{
const {title} = props;

    return <li className={styles.item}>
                <div>
                <p>hover please!</p>
                  <Image 
                  src={`./images/skills/${title}.png`} 
                  alt={title} 
                  width={80} 
                  height={80} 
                  />
                  <span>{title}</span>
                </div>
    </li>
}

export default SkillItem;