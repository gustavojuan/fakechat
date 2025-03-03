import { Conversation } from "./Conversation";

import { Input } from "./Input";
import { Start } from "./Start";

export function Chat(){
    return (

        <div className="chat">
            <div className="centered">
                <Start />
                <Conversation />
                <Input />
            </div>
        </div>
    )

}