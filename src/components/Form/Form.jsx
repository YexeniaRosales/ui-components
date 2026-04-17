import "./Form.css";

export default function Form({ variant = "glass" }) {
  return (
    <form className={`form form--${variant}`}>
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Mensaje" rows="4" />

      <button type="submit" className="form-submit">
        Enviar
      </button>
    </form>
  );
}