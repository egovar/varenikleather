import { _request } from '@/api/request';

export async function createOrder(payload) {
  // { name, phone, comment }
  const res = await _request('/api/orders', 'POST', payload);
  return res;
}

export async function getOrders(payload) {
  const res = await _request('/api/orders');
  return res;
}
