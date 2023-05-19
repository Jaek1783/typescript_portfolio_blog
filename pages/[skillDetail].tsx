import styles from '../components/mySkill/skills.module.css';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { SKILL } from '../store/context';
import { NextPage } from 'next';

interface SkillModalPageProps {
    data : SKILL[];
}
const SkillModalPage:NextPage<SkillModalPageProps> = ({data})=>{
    // const skills = useContext(MyContext);
    const router = useRouter();
    const {skillDetail} = router.query;
    const result = data?.filter(skills => skills.image === skillDetail);
    

    const imagePath = `/images/skills/${skillDetail}.png`;

return <div className={styles.ModalCard}>
    <dl>
        <dt>{skillDetail ? <Image src={imagePath} alt = {`${skillDetail}`} width={100} height={100}/> : ''}</dt>
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