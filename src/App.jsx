
import { useState } from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Cards from "./components/Card/Card";


import "./App.css";

function App() {
const [open, setOpen] = useState(null);

const toggle = (key) => {
  setOpen((prev) => (prev === key ? null : key));
};

  return (
    <div className="page">
      
      <div className="container">

        <h1>Mi UI Components</h1>

{/* NAVBAR */}
      <div className="navbar">
        
        <button onClick={() => toggle("cards")}>
          Cards
        </button>
        <button onClick={() => toggle("buttons")}>
          Buttons
        </button>

        <button onClick={() => toggle("forms")}>
          Forms
        </button>

      </div>

        {/* ================= CARDS ================= */}
        {open === "cards" && (
          <div className="section">
            <h2>Cards</h2>
            <div className="card">
                <Cards variant="glass">
                      <p>Contenido glass</p>
                                    </Cards>

                <Cards variant="circular">
                      <p>Contenido circular</p>
                                  </Cards>
            </div>
          </div>
        )}
        {/* ================= BUTTONS ================= */}
        {open === "buttons" && (
          <div className="section">

            <h2>Buttons</h2>
<h3>⚪ Basic Buttons</h3>            <div className="card">
              <div className="card-content">
                <Button variant="basic" icon="search" />
                <Button variant="primary" icon="plus" />
                <Button variant="ghost" icon="settings" />
                <Button variant="danger" icon="trash" />
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <Button variant="basic" icon="search">Buscar</Button>
                <Button variant="primary" icon="plus">Añadir</Button>
                <Button variant="ghost" icon="settings">Ajustes</Button>
                <Button variant="danger" icon="trash">Eliminar</Button>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <Button variant="basic">Buscar</Button>
                <Button variant="primary">Añadir</Button>
                <Button variant="ghost">Ajustes</Button>
                <Button variant="danger">Eliminar</Button>
              </div>
            </div>

<h3>🧊 Glass Buttons</h3>
            <div className="card">

<div className="card-content">
    <Button variant="basic" styleType="glass" icon="search"></Button>
  <Button variant="primary" styleType="glass" icon="plus"></Button>
  <Button variant="ghost" styleType="glass" icon="settings"></Button>
  <Button variant="danger" styleType="glass" icon="trash"></Button>
</div>
</div>

<h3>🫧 Circular Buttons</h3><div className="card">
<div className="card-content">
    <Button variant="basic" styleType="circular" icon="search"></Button>
  <Button variant="primary" styleType="circular" icon="plus"></Button>
  <Button variant="ghost" styleType="circular" icon="settings"></Button>
  <Button variant="danger" styleType="circular" icon="trash"></Button>
</div>
</div>
<h3>🌸 Flower Buttons</h3><div className="card">

<div className="card-content">
    <Button  styleType="flower" icon="search"></Button>
  <Button variant="primary" styleType="flower" icon="plus"></Button>
  <Button variant="ghost" styleType="flower" icon="settings"></Button>
  <Button variant="danger" styleType="flower" icon="trash"></Button>
</div>
</div>




          </div>
        )}

       {/* ================= FORMS ================= */}
{open === "forms" && (
  <div className="section">
    <h2>Forms</h2>
<h3>🧊 Glass Form</h3>
        <Form variant="glass" />

    <h3> 🌸 Color Form</h3>

        <Form variant="circular" />
  </div>
)}



      </div>
    </div>
  );
}

export default App;