import SkillItem from "./skill-item";
import styles from './skills.module.css';
import {useRouter} from "next/router";
import SkillModalPage from "../../pages/[skillDetail]";
import ReactModal from "react-modal";

const SkillGrid = (props : any)=>{
    const router = useRouter();
    console.log(router.query);
    const {skills} = props;
    ReactModal.setAppElement("#__next");
// console.log(skills);
    return <ul className={styles.box}>
        {skills.map((skill:any) => <SkillItem key={skill.id} id={skill.id} title={skill.title} image={skill.image} desc01={skill.desc01}/>)}

        <ReactModal 
                  isOpen={!!router.query.skillDetail}
                  className={styles.ModalContainer}
                  onRequestClose={()=> router.push('/')}
                  style={{
                    overlay:{
                      zIndex:'1000000',
                      background:'rgba(45,45,45,0.5)',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center'
                    }
                  }}
                >
                    <SkillModalPage/>
        </ReactModal>
    </ul>
}

export default SkillGrid;