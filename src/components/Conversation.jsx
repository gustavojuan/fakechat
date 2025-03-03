import { useSelector } from "react-redux";
import favicon from "../assets/favicon-32x32.png";
export function Conversation() {
  const conversation = useSelector((state) => state.chat.conversation);

  console.log(conversation);
  return (
    <div className="messages">
      <ul>
        {conversation.map((line, index) => {
          return (
            <li key={index}>
              <div className="message-container">
                <div className={`${line.user} avatar`}>
                  <img src={favicon} alt="avatar" />
                </div>
                <div className="">
                  <div className="role">{(line.user == 'user') ? 'user' : 'assistant'}</div>
                  <div className="content">{line.text}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
