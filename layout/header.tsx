import styles from './header.module.css';

const NavigationPage = (props : any)=>{
    return(
        <header className={styles.header}>
            <h1>Portfolio</h1>
            <div>
                <ul>
                    <li>blog</li>
                    <li>github</li>
                    <li>instagram</li>
                </ul>
            </div>
            <nav>
                <ul>
                    <li>posts</li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default NavigationPage;