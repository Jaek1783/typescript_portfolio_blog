import SkillItem from "./skill-item";
import styles from './skills.module.css';
import {useRouter} from "next/router";
import SkillModalPage from "../../pages/[skillDetail]";
import ReactModal from "react-modal";
import { NextPage } from "next";
import { SkillProps } from "../../store/context";

const SkillGrid : NextPage<SkillProps>= ({data})=>{
    const router = useRouter();
    ReactModal.setAppElement("#__next");

    return <ul className={styles.box}>
        {data?.map((skill:any) => <SkillItem key={skill.id} id={skill.id} title={skill.title} image={skill.image} desc01={skill.desc01}/>)}

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
                    <SkillModalPage data={data} />
        </ReactModal>
    </ul>
}

export default SkillGrid;