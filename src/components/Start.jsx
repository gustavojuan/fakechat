import logo from '../assets/logo.png'
export function Start() {
  return (
    <div className="start">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <h1>¿Cómo te puedo ayudar hoy?</h1>
    </div>
  );
}
