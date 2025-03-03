import { useDispatch, useSelector } from "react-redux";
import UserInputArrow from "./Arrow";
import { getAsyncData, sendPrompt, setInputText } from "../redux/chatSlice";
import { useEffect } from "react";



export function Input() {


function adjustTextarea() {
  console.log('ejecutyo');
  
  textRef.current.style.height = 'auto' // Reset the height to auto to prevent clipping
  textRef.current.style.height = 10 + textRef.current.scrollHeight + 'px' // Set the height to fit the content
}

const dispatch = useDispatch();
const activeInput = useSelector(state => state.chat.activeInput);
const inputText = useSelector(state => state.chat.inputText);


useEffect(()=>{
  adjustTextarea();
},[inputText])


const handleOnChange = (e) => {
    dispatch(setInputText(e.target.value))
}
const handleOnClick = () => {
  dispatch(sendPrompt(inputText))
  dispatch(getAsyncData(inputText));
}

  return (
    <div className="input">
      <div className="input-container">

        
        <textarea className="user-input" placeholder="Escribe un mensaje..."  onChange={(e)=>handleOnChange(e)} value={inputText}>
      
        </textarea>
        
        <button disabled={!activeInput} onClick={(e)=> handleOnClick(e)}>
          <UserInputArrow />
        </button>
      </div>
    </div>
  );
}

