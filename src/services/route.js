export async function apiData() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2');
  const data = await resp.json();
  console.log('data', data);
  return data;
}
