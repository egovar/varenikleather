export default function request(path, response) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), 1000);
  });
}

const root = 'https://varenik-leather.shop';

export async function _request(path, method = 'GET', body, headers) {
  const res = await fetch(root + path, {
    method,
    ...(!!body && { body: JSON.stringify(body) }),
    ...(!!headers && { headers }),
  });
  if (res.ok) {
    const response = await res.json();
    return response;
  }
}
