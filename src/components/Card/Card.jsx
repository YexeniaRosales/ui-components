import "./Card.css";

export default function Cards({ variant = "glass", children }) {
  return (
    <div className={`cards cards--${variant}`}>
      <div className="card-inner">
        {children}
      </div>
    </div>
  );
}