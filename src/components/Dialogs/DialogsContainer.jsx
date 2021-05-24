import {addMessageActionCreator, updateMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispachToProps = (dispatch)=>{

    return {
        addMessage: ()=>{
            dispatch(addMessageActionCreator());
        },
        updateNewMessage: (text)=>{
            dispatch(updateMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs)

export default DialogsContainer;