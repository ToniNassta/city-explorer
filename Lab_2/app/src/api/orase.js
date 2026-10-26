export async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Error fetching users");
  const data = await res.json();
  //   console.log(data);
  return data;
}

export async function fetchUserById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Error fetching users");
  const data = await res.json();
  //   console.log(data);
  return data;
}
