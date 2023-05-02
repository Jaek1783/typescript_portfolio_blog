import Image from "next/image";
import styles from './skills.module.css';

const SkillItem = (props:any)=>{
const {title, image } = props.skills;

const myLoader = (src:any) => {
  return `${src}?w=80&=75`
}
    return <li className={styles.item}>
                <div>
                <p>hover please!</p>
                  <Image src={image} alt={title} width={80} height={80} loader={myLoader}/>
                  <span>{title}</span>
                </div>
    </li>
}

export default SkillItem;