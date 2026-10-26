import DestinatieCard from "./DestinatieCard";

function ListaDestinatii({ destinatii, onToggle, onDelete }) {
  if (destinatii.length === 0)
    return <p className="info">Nu exista nicio destinatie</p>;
  return (
    <div className="lista">
      {destinatii.map((destinatie) => (
        <DestinatieCard
          destinatie={destinatie}
          key={destinatie.id}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ListaDestinatii;
