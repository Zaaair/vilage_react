import Dialog from "../modules/Dialog"
import Message from "../modules/Message"


const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <Dialog name='Slava' id='0'/>
                <Dialog name='Sasha' id='1'/>
                <Dialog name='Alex' id='2'/>
                <Dialog name='Sveta' id='3'/>
                <Dialog name='Kola' id='4'/>
                <Dialog name='Margaryta' id='5'/>
            </div>
            <div className="messages">
                <Message message='hi' />
                <Message message='How is your name' />
                <Message message='Yo' />
            </div>
        </div>
    )
}

export default Dialogs  