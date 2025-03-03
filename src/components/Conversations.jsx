import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncConversations } from "../redux/chatSlice";

export function Conversations() {

  const conversations = useSelector((state)=>state.chat.conversations)
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
      </ul>
    </div>
  );
}
