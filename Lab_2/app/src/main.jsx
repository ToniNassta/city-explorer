import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { destinatii } from "./data/destinatii.js";
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
import { fetchUsers, fetchUserById } from "./api/orase.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
{
  /** 
// ===== Laboratorul 2 =====

//verificare
console.log("L2 Merge!");
console.log("L2 Ex. 1 - orașe:", getOrase(destinatii));
console.log("L2 Ex. 1 - nevizitate:", getNevizitate(destinatii).length);
console.log("L2 Ex. 1 - zile de vizitat:", toateZilele(destinatii));
console.log(
  "L2 Ex. 1 - destinatii: ",
  destinatii.map((d) => formatDestinatie(d)).join(", \n"),
);
console.log("L2 Ex. 1 - pe țară:", numarPeTara(destinatii));
console.log("L2 Ex. 1 - cea mai lungă vizită: ", sortDupaZile(destinatii));

const dupaMarcare = marcheazaVizitat(destinatii, "1");
console.log(
  "L2 Ex. 2 - original:",
  destinatii[0].vizitat,
  "| listă nouă:",
  dupaMarcare[0].vizitat,
);
console.log("L2 Ex. 2 - element refolosit:", destinatii[1] === dupaMarcare[1]);
const noua = {
  id: "7",
  oras: "Sevilla",
  tara: "Spania",
  zile: 3,
  vizitat: false,
};
const dupaAdaugare = adaugaDestinatie(destinatii, noua);
console.log(
  "L2 Ex. 2 - după adăugare: original",
  destinatii.length,
  ", listă nouă",
  dupaAdaugare.length,
);
const dupaStergere = stergeDestinatie(dupaAdaugare, "7");
console.log("L2 Ex. 2 - după ștergere:", dupaStergere.length);

async function loadOrase() {
  try {
    const users = await fetchUsers();
    console.log("L2 Ex. 3 - am primit", users.length, "utilizatori");
    // restul afișărilor
    const orase = users.map((u) => u.address.city);
    console.log(
      "List oraselor utilizatorilor este: ",
      orase.join(", "),
      orase.length,
    );
    console.log(
      "Numarul de orase care au mai mult de 10 caractere este: ",
      orase.filter((o) => o.length > 10).length,
    );
    const userId1 = await fetchUserById(1);
    console.log(
      "Orasul utilizatorului cu identificatorul 1 este: ",
      userId1.address.city,
    );
    const user = await fetchUserById(999);
  } catch (error) {
    console.error("L2 Ex. 3 - nu am putut încărca datele:", error.message);
  }
}
loadOrase();
*/
}
