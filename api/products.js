import request from '@/api/request';
import products from '@/const/products';
import product from '@/const/product';
export async function getProducts(payload) {
  // { page, pageSize, filters: { categories, colors }, sort: { type, direction } }
  const res = await request('/products', products);
  return res;
}

export async function getProductById(payload) {
  const res = await request('/products/:id', product);
  return res;
}
