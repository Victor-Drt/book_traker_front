import { useState } from "react";
import { FiBarChart2, FiBook, FiClock, FiDownload, FiHome, FiLogOut, FiMenu, FiStar, FiTrendingUp } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import { logout } from "../../services/auth.service";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    async function handleLogout() {
        await logout();
    }

    return (
        <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
            <div className={styles.sidebarHeader}>
                {!collapsed && <h1 className={styles.sidebarTitle}>BookTrackr</h1>}

                <button
                    className={styles.collapseButton}
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label="Toggle sidebar"
                >
                    <FiMenu />
                </button>
            </div>

            <nav className={styles.sidebarNav}>
                <NavLink to="/" end title="Books">
                    <FiHome className={styles.icon} />
                    <span className={styles.label}>Books</span>
                </NavLink>
                <NavLink to="/progress" title="Progresso" >
                    <FiTrendingUp className={styles.icon}/>
                    <span className={styles.label}>Progresso</span>
                </NavLink>

                <NavLink to="/stats" title="Estatísticas" >
                    <FiBarChart2 className={styles.icon}/>
                    <span className={styles.label}>Estatísticas</span>
                </NavLink>

                <NavLink to="/history" title="Histórico" >
                    <FiClock className={styles.icon}/>
                    <span className={styles.label}>Histórico</span>
                </NavLink>

                <NavLink to="/recommendations" title="Recomendações" >
                    <FiStar className={styles.icon}/>
                    <span className={styles.label}>Recomendações</span>
                </NavLink>

                <NavLink to="/login" title="Logout" onClick={handleLogout}>
                    <FiLogOut className={styles.icon}/>
                    <span className={styles.label}>Logout</span>
                </NavLink>
            </nav>
        </aside>

    )
}