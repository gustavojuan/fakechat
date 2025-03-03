import UserInputArrow from "./Arrow";

export function Input() {
  return (
    <div className="input">
      <div className="input-container">
        <textarea className="user-input" placeholder="Escribe un mensaje...">
          Count from 2 to 20
        </textarea>

        <button>
          <UserInputArrow />
        </button>
      </div>
    </div>
  );
}
