import { useState } from "react";

function FormularDestinatie({ onAdd }) {
  const [oras, setOras] = useState("");
  const [tara, setTara] = useState("");
  const [zile, setZile] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!oras || !tara || !zile) return;

    const destinatieNoua = {
      id: crypto.randomUUID(),
      oras: oras,
      tara: tara,
      zile: zile,
      vizitat: false,
    };
    onAdd(destinatieNoua);

    setOras("");
    setTara("");
    setZile("");
  }

  return (
    <form className="formular" onSubmit={handleSubmit}>
      <input
        placeholder="oras"
        value={oras}
        onChange={(e) => setOras(e.target.value)}
      />
      <input
        placeholder="tara"
        value={tara}
        onChange={(e) => setTara(e.target.value)}
      />
      <input
        placeholder="zile"
        value={zile}
        onChange={(e) => setZile(Number(e.target.value))}
      />
      <button>Adauga</button>
    </form>
  );
}

export default FormularDestinatie;
