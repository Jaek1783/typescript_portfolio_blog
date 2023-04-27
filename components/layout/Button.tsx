import Link from "next/link"
import style from './btn.module.css';
const Button = (props:any)=>{
    const {title} = props;
    const linkPath = `/posts/${title}`;
    return(
        <Link href ={linkPath} className={style.btn}>
            <p>More</p>
        </Link>
    )
}
export default Button;