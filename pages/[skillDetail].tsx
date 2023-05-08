import styles from '../components/mySkill/skills.module.css';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { useContext } from 'react';
import MyContext from '../store/context';

const SkillModalPage = (props : any)=>{
    const skills = useContext(MyContext);
    const router = useRouter();
    const {skillDetail} = router.query;
    const result = skills.filter(data => data.image === skillDetail);

    const imagePath = `/images/skills/${skillDetail}.png`;

return <div className={styles.ModalCard}>
    <dl>
        <dt>{skillDetail ? <Image src={imagePath} alt = {`${skillDetail}`} width={300} height={300} layout='responsive'/> : ''}</dt>
        <dd>{skillDetail ? `${result[0].title}` : '' }</dd>
    </dl>
    <ul className={styles.desc}>
        <li>{skillDetail ? result[0].desc01 : ''}</li>
        <li>{skillDetail ? result[0].desc02 : ''}</li>
        <li>{skillDetail ? result[0].desc03 : ''}</li>
    </ul>
        
    </div>
}
export default SkillModalPage;