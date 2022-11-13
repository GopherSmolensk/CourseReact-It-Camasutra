import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.wrapperContent}>
            
            <img className={s.imagesContent} src='https://azovsky.ru/images/plyazhi/azovskoe-more/teaser-n.jpg' alt='images'></img>
            
            <div className={s.avaDescription}>
                <img src={props.profile.photos.large} alt="" />
                ava + Description
                
            </div>
            

        </div>
    );
}

export default ProfileInfo;