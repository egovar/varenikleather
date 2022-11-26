<template>
  <div class="orders">
    <h1 class="orders__title">Заявки</h1>
    <v-data-table v-if="orders.length" :headers="headers" :items="orders" />
  </div>
</template>

<script>
import { getOrders } from '@/api/orders';

export default {
  name: 'AdminOrders',
  layout: 'admin',
  data() {
    return {
      orders: [],
      headers: [
        {
          text: 'Имя',
          value: 'name',
        },
        {
          text: 'Телефон',
          value: 'phone',
        },
        {
          text: 'Комментарий',
          value: 'comment',
        },
        {
          text: 'From page',
          value: 'from_page',
        },
      ],
    };
  },
  async mounted() {
    this.orders = await getOrders();
  },
};
</script>

<style scoped lang="scss"></style>
