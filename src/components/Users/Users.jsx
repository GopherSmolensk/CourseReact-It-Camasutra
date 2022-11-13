import React from "react";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/Gopher.jpg";
import {NavLink} from 'react-router-dom'


let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL); 
    return (
        
        <div className={s.wrapperContent}>
            <div className={s.containerUsers}>
                <div>
                    {slicedPages.map(p => {
                        return <span className={props.currentPage === p && s.selectedPage}
                            onClick={(e) => {
                                props.onPageChanged(p);
                             }}>{p}</span>
                    })}
                </div>
                {
                    props.users.map(u => <div className={s.blockDescriptionUsers} key={u.id}>
                        <div className={s.blockAvatar}>
                            
                            <div>
                                    <NavLink to={'/profile/' + u.id}>
                                <img className={s.photos} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                                    </NavLink>
                            </div>
                            
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                            </div>
                        </div>
                        <div className={s.blockUserDescription} >

                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Users;