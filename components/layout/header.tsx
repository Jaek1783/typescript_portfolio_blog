import styles from './header.module.css';
import Link from 'next/link';
const NavigationPage = (props : any)=>{
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}><Link href="/">Portfolio</Link></h1>
            <div className={styles.link}>
                <ul>
                    <li><Link href="https://blog.naver.com/wormsbrother" target="_blank">blog</Link></li>
                    <li><Link href="https://github.com/jaek1783" target="_blank">github</Link></li>
                    <li><Link href="https://instagram.com/jaek1783" target="_blank">instagram</Link></li>
                </ul>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href ="/posts">posts</Link></li>
                    <li><Link href ="/contact">contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavigationPage;