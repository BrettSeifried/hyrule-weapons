export async function apiData() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials');
  const data = await resp.json();
  return data;
}
