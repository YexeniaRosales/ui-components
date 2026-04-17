import "./Button.css";
import Icon from "../Icon/Icon";
import FlowerBg from "./flower-button.svg";

export default function Button({
  variant = "basic",
  icon,
  children,
  styleType,
}) {
const typeClass = styleType ? `btn--${styleType}` : "";
const variantClass =
  styleType ? "" : variant ? `btn--${variant}` : "";

  return (
    <button className={`btn ${typeClass} ${variantClass}`}>
      
      {styleType === "flower" && (
        <img src={FlowerBg} className="flower-bg" alt="" />
      )}

      {icon && <Icon name={icon} size={20} />}

      {children && <span className="btn-text">{children}</span>}
    </button>
  );
}