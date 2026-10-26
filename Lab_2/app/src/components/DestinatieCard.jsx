export default function DestinatieCard({ destinatie, onToggle, onDelete }) {
  const { oras, tara, zile, vizitat } = destinatie;
  return (
    <article className={vizitat ? "card vizitat" : "card"}>
      <h3>{oras}</h3>
      <p className="tara">{tara}</p>
      <p className="zile">{zile}</p>
      <button onClick={() => onToggle(destinatie.id)}>
        {vizitat ? "Vizatat" : "Marcheaza ca vizitat"}
      </button>
      <button onClick={() => onDelete(destinatie.id)}>Sterge</button>
    </article>
  );
}
