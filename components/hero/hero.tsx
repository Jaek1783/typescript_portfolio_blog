import Image from "next/image";
import style from './hero.module.css';
const Hero = ()=>{
    return(
        <section className={style.intro}>
            <div className={style.box}>
                <div className={style.me}>
                    <Image src="/images/me.png" alt="me"width={250} height ={300} priority={true}/>
                </div>
                <h1>언제나 꿈틀대는 지렁이형입니다.</h1>
                <span>frontend develoment</span>

                <div className={style.introText}>
                    <h2>자기소개</h2>
                    <p>안녕하세요 신입 개발자 최재근 입니다.</p>
                    <p>저는 지렁이형이라는 이름으로 개발학습 블로그를 쓰고 있습니다.</p>
                    <p>지렁이라고 하면 &#39;징그럽다, 무섭다, 불편하다&#39;는 반응이 대부분입니다.</p>
                    <p>하지만 지렁이는 사람에게 없어서는 안 될 가장 필요한 이로운 벌레입니다.</p>
                    <p>가장 낮은 곳에서 다른 사람의 시선은 생각하지 않고 열심히 자신의 맡겨진 일을 행하는 벌레가 지렁이입니다.</p>
                    <p>다른 사람의 시선보다 꿈을 향해 나아가는 개발자로 성장하고 싶어 지렁이형이라고 지었습니다.</p>
                </div>
            </div>

        </section>
    )
}
export default Hero;