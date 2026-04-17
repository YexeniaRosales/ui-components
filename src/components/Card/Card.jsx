import "./Card.css";

export default function Card({ variant = "glass", children }) {
  return (
    <div className={`card card--${variant}`}>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}