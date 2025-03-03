import { useSelector } from "react-redux";
import { Conversation } from "./Conversation";

import { Input } from "./Input";
import { Start } from "./Start";

export function Chat(){

    const conversation   = useSelector( (state)=> state.chat.conversation)
    const hayconversation = conversation.length 
    return (

        <div className="chat">
            <div className="centered">                    
                {!hayconversation ? <Start /> : null}            
                <Conversation />
                <Input />
            </div>
        </div>
    )

}