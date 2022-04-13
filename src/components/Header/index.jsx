import styles from './header.module.sass'
import logo from '../../assets/logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} className="App-logo" alt="Weather Now" />
        </header>
    )
}