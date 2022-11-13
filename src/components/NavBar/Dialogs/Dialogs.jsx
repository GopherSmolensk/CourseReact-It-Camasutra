import s from './Dialogs.module.css';
import React from 'react';

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} />)
    
    return (
        <div className={s.wrapperContent}>

            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;