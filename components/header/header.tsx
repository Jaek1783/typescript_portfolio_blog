import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';

const NavigationPage = (props : any)=>{
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}><Link href="/">Portfolio</Link></h1>
            <div className={styles.link}>
                <ul>
                    <li><Link href="https://blog.naver.com/wormsbrother" target="_blank"><Image src='/images/header/blog.png' alt='blog' width={30} height={30} /></Link></li>
                    {/* <a href="https://www.flaticon.com/kr/free-icons/" title="블로그 아이콘">블로그 아이콘  제작자: Freepik - Flaticon</a> */}
                    <li><Link href="https://github.com/jaek1783" target="_blank"><Image src='/images/header/github.png' alt='github' width={30} height={30}/></Link></li>
                    <li><Link href="https://instagram.com/jaek1783" target="_blank"><Image src='/images/header/instargram.png' alt='instargram' width={30} height={30}/></Link></li>
                </ul>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href ="/posts">All-posts</Link></li>
                    <li><Link href ="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavigationPage;