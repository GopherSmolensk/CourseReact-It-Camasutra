
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import setActive from './ActiveNavBar';
import React from 'react';



const NavBar = (props) => {

    // let friendsElements = props.state.friends.map(f => <BlockFriends name={f.name} id={f.id} />)

    return (
        <section className={styles.navbar}>
            <nav>


                <div className={styles.profile}>
                    <NavLink to='/profile' className={setActive}>Профиль</NavLink>
                </div>
                <div className={styles.profile}>
                    <NavLink to='/dialogs' className={setActive}>Сообщения</NavLink>
                </div>
                <div className={styles.profile}>
                    <NavLink className={setActive} to='/users'>Пользователи</NavLink>
                </div>

                <div className={styles.profile}>
                    <NavLink className={setActive} to='/news'>Новости</NavLink>
                </div>

                <div className={styles.profile}>
                    <NavLink className={setActive} to='/music'>Музыка</NavLink>
                </div>

                


                <div className={styles.NavBarSettings}>
                    <NavLink className={setActive} to='NavBarSettings'>Настройки</NavLink>
                </div>
               
                
            </nav>
        </section>
    )
}

export default NavBar;







// const NavBar = () => {
//     return (
//         <div className={styles.navBar}>
//             <div className={styles.profile}>
//                 <NavLink activeClassName={setActive} to='/profile'>
//                     Профиль
//                 </NavLink>
//             </div>
//             <div className={styles.profile}>
//                 <NavLink className={setActive} to='/dialogs'>
//                     Сообщения
//                 </NavLink>
//             </div>
//             <div className={styles.profile}>
//                 <NavLink className={setActive} to='/news'>
//                     Новости
//                 </NavLink>
//             </div>
//             <div className={styles.profile}>
//                 <NavLink className={setActive} to='/music'>
//                     Музыка
//                 </NavLink>
//             </div>
//             <div className={styles.profile}>
//                 <NavLink className={setActive} to='NavBarSettings'>
//                     Настройки
//                 </NavLink>
//             </div>
//             <div className={styles.profile}>
//             <li><a className={styles.navbar__itemLink}>Settings</a></li>
//             </div>
//         </div>
//     );
// }

// export default NavBar;