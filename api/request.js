export default function request(path, response) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), 1000);
  });
}

const root = 'https://varenik-leather.shop';

export async function _request(path, method = 'GET') {
  const res = await fetch(root + path, { method });
  if (res.ok) {
    const response = await res.json();
    return response;
  }
}
