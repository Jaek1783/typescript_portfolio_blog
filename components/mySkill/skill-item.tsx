import Image from "next/image";
import styles from './skills.module.css';
import Link from "next/link";
import ReactModal from "react-modal";
import {useRouter} from 'next/router'
import SkillModalPage from "../../pages/[skillDetail]";

const SkillItem = (props:any)=>{
const {id, title, image} = props;
const imagePath = `/images/skills/${image}.png`;

const router = useRouter();
const {skillDetail} = router.query;
ReactModal.setAppElement("#__next");

    return <li className={styles.item}>
                <div id='skill'>
                  <p>Click please!</p>
                  <Link href={`/?skillDetail=${image}`} as={`/${image}`}>
                    <Image src={imagePath} alt={title} width={80} height={80}/>
                  </Link>
                  <span>{title}</span>
                </div>
                
        <ReactModal 
                  isOpen={!!router.query.skillDetail}
                  className={styles.ModalContainer}
                  onRequestClose={()=> router.push('/')}
                  style={{
                    overlay:{
                      zIndex:'1000000',
                      background:'rgba(45,45,45,0.3)',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center'
                    }
                  }}
                >
                    <SkillModalPage id={id} image={image}/>
        </ReactModal>
    </li>
}

export default SkillItem;