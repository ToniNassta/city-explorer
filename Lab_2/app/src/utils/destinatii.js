export function getOrase(list) {
  return list.map((destinatie) => destinatie.oras);
}

export function getNevizitate(list) {
  return list.filter((d) => d.vizitat === false);
}

export function toateZilele(list) {
  return list.reduce((suma, d) => suma + d.zile, 0);
}

// function formatDestinatie(d) {
//   return `${d.vizitat ? "[x]" : ""} ${d.oras}: ${d.tara} (${d.zile}) `;
// }

export function formatDestinatie(destinatie) {
  const { vizitat, oras, tara, zile } = destinatie;
  return `${vizitat ? "[x]" : "[ ]"} ${oras}: ${tara} (${zile}) `;
}

export function numarPeTara(list) {
  return list.reduce((acc, d) => {
    acc[d.tara] = (acc[d.tara] || 0) + 1;
    return acc;
  }, {});
}

export function sortDupaZile(list) {
  return [...list].sort((a, b) => Number(b.zile) - Number(a.zile))[0].oras;
}

export function marcheazaVizitat(list, id) {
  return list.map((d) => (d.id === id ? { ...d, vizitat: !d.vizitat } : d));
}

export function adaugaDestinatie(list, d) {
  return [...list, d];
}

export function stergeDestinatie(list, id) {
  return list.filter((d) => d.id !== id);
}
