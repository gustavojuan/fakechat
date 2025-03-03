import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncConversations } from "../redux/chatSlice";

export function Conversations() {

  const conversations = useSelector((state)=>state.chat.conversations)
  const movimientos = useSelector((state)=>state.chat.movimientos)
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAsyncConversations());
}, [dispatch])

  return (
    <div className="conversations">
      <ul>
        {
          conversations.map((conversation,index)=> {
            return ( 
              <li key={index}>{conversation.name}</li>
            )
          })
        }
          {
          movimientos.map((movimiento,index)=> {
            return ( 
              <li key={index}>{movimiento}</li>
            )
          })
        }
      </ul>
    </div>
  );
}
