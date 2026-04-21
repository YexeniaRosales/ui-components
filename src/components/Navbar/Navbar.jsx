import "./Navbar.css";

export default function Navbars({ variant = "glass", children }) {
  return (
    <div className={`navbar1 navbar1--${variant}`}>
      
      <button>Home</button>
      <button>Projects</button>
      <button>About me</button>
      <button>Contact</button>

    </div>
  );
}