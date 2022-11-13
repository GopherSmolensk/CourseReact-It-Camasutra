import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>

            <div className={s.block}>
                <img src='https://www.catseyepest.com/wp-content/uploads/2021/10/iStock_000043526268_Large-1024x683.jpg' alt='images'></img>
            </div>
            <div className={s.block}>
                {props.message}
            </div>

            <div className={s.blockLike}>
                <span className={s.likeItem}>like</span>
            </div>
            <div className={s.block}>
                {props.likesCount}
            </div>

        </div>
    );
}

export default Post;