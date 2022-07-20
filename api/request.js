export default function request(path, response) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), 1000);
  });
}
