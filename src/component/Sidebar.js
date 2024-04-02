import { Outlet } from 'react-router-dom'
import Logo from './Logo'
import styles from './Sidebar.module.css'
import AppNav from './AppNav'

function Sidebar() {

    return (
        <div className={styles.sidebar}>

            <Logo />
            <AppNav />
            <Outlet />
            
            {/* <p>List of Cities</p> */}
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; copyright {new Date().getFullYear()} by
                    WorldWise Inc.</p>
            </footer>
        </div>
    )
}

export default Sidebar
