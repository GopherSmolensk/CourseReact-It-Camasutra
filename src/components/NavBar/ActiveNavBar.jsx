import styles from './NavBar.module.css';

const setActive = ({ isActive }) => isActive ? styles.navbar__itemLink_active : styles.navbar__itemLink;

export default setActive;