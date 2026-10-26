import { destinatii as destinatiiInitiale } from "./data/destinatii";
import ListaDestinatii from "./components/ListaDestinatii";
import "./App.css";
import Rezumat from "./components/Rezumat";
import { useState } from "react";
import {
  getOrase,
  getNevizitate,
  toateZilele,
  formatDestinatie,
  numarPeTara,
  sortDupaZile,
  marcheazaVizitat,
  adaugaDestinatie,
  stergeDestinatie,
} from "./utils/destinatii.js";
import FormularDestinatie from "./components/FormularDestinatie.jsx";

export default function App() {
  const [destinatii, setDestinatii] = useState(destinatiiInitiale);
  let total = destinatii.length;
  let nevizitate = getNevizitate(destinatii).length;
  let zile = toateZilele(getNevizitate(destinatii));

  function handleToggleId(id) {
    setDestinatii((destinatii) => marcheazaVizitat(destinatii, id));
  }

  function handleAdd(destinatie) {
    setDestinatii((destinatii) => adaugaDestinatie(destinatii, destinatie));
  }

  function handleDelete(id) {
    setDestinatii((destinatii) => stergeDestinatie(destinatii, id));
  }

  return (
    <main>
      <h1>City Explorer</h1>
      <Rezumat total={total} nevizitate={nevizitate} zile={zile} />
      <FormularDestinatie onAdd={handleAdd} />
      <ListaDestinatii
        destinatii={destinatii}
        onToggle={handleToggleId}
        onDelete={handleDelete}
      />
    </main>
  );
}
