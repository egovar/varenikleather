import request from '@/api/request';

export async function createOrder(payload) {
  // { name, phone, comment }
  const res = await request('/requests/create', {
    status: 200,
    response: 'ok',
  });
  return res;
}

export async function getOrders(payload) {
  const res = await request('/requests/create', [
    {
      name: 'Егор',
      phone: '89374155655',
      comment: 'no comment',
    },
    {
      name: 'Надежда',
      phone: '89374155655',
      comment: 'no comment',
    },
    {
      name: 'Игорь',
      phone: '89374155655',
      comment: 'no comment',
    },
  ]);
  return res;
}
