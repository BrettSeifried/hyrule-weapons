export async function apiData() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2');
  const data = await resp.json();
  return data;
}

export const fetchItemDetails = async (itemId) => {
  const resp = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${itemId}`);
  const data = await resp.json();
  return data;
};
