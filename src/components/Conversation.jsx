import favicon from '../assets/favicon-32x32.png'
export function Conversation() {
  return (
    <div className="messages">
      <ul>
        <li>
          <div className="message-container">
            <div className="avatar user">
              <img src={favicon} alt="avatar" />
            </div>
            <div className="">
              <div className="role">You</div>
              <div className="content">Hello</div>
            </div>
          </div>
        </li>
        <li>
          <div className="message-container">
            <div className="avatar assistant">
              <img src={favicon} alt="avatar" />
            </div>
            <div className="">
              <div className="role">ceedGPT</div>
              <div className="content">
                Hello! It's nice to meet you. Is there something I can help you
                with, or would you like to chat?
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
