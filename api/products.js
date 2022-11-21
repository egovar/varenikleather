import { _request } from '@/api/request';

export async function getProducts(payload) {
  const res = await _request('/api/products');
  return res;
}

export async function getProductById(id) {
  const res = await _request(`/api/products/${id}`);
  return res;
}

export async function createProduct(multipart) {
  const res = await _request(`/api/products`, 'POST', multipart, {
    'Content-Type': 'multipart/form-data',
  });
  return res;
}
