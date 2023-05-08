import styles from '../components/mySkill/skills.module.css';
import Image from 'next/image';
import {useRouter} from 'next/router'


const SkillModalPage = (props : any)=>{
    const router = useRouter();
    const {skillDetail} = router.query;

    const imagePath = `/images/skills/${skillDetail}.png`;

return <div className={styles.ModalCard}>
    <div >
        {skillDetail ? <Image src={imagePath} alt = {`${skillDetail}`} width={100} height={100}/> : ''}
    <p>{skillDetail}</p>
    </div>
</div>
}
export default SkillModalPage;