import Image from "next/image";
import style from './hero.module.css';
const Hero = ()=>{
    return(
        <section>
            <div className={style.me}>
                <Image src="/images/me.png" alt="me"width={200} height ={300} />
            </div>
            <h1>私の名前はChoi_Jaekeunです。</h1>
            <p>frontend develoment</p>
        </section>
    )
}
export default Hero;