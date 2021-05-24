import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messagesElements = state.messages.map(m => {
        return <Message message={m.message} />
    })
    let newMessageElement = React.createRef()

    const addNewMessage = () => {
        props.addMessage();
    }

    const updateNewMessageText = () => {
        let text = newMessageElement.current.value;

        props.updateNewMessage(text);
    }

    return (
        < div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder='Type message' onChange={updateNewMessageText} ref={newMessageElement} value={state.newMessageText} />
                </div>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;