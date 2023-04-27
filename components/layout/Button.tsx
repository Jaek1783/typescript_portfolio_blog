import Link from "next/link"
import style from "../myProjext/project.module.css";
const Button = (props:any)=>{
    const {title} = props;
    const linkPath = `/posts/${title}`;
    return(
        <Link href ={linkPath} className={style.btn}>
            More
        </Link>
    )
}
export default Button;