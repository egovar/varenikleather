<template>
  <v-form ref="form" @submit.prevent="onSubmit">
    <v-text-field label="Название товара" name="name" />
    <v-file-input
      name="mainPhoto"
      :rules="[rules.required]"
      label="Главное фото"
    />
    <v-file-input
      v-for="i in photoIndexes"
      :key="`photo${i}`"
      :name="`photo${i}`"
      :label="`Фото ${i}`"
    />
    <v-text-field
      name="minPrice"
      type="number"
      label="Минимальная цена"
      :rules="[rules.required]"
    />
    <v-textarea
      name="description"
      label="Описание товара"
      :rules="[rules.required]"
    />
    <v-btn type="submit">Создать</v-btn>
  </v-form>
</template>

<script>
import { createProduct } from '@/api/products';

export default {
  name: 'Create',
  layout: 'admin',
  data: () => ({
    rules: {
      required: (v) => !!v || 'Обязательное поле',
    },
    photoIndexes: [2, 3, 4, 5],
  }),
  methods: {
    async onSubmit() {
      const { form } = this.$refs;
      if (form.validate()) {
        const formData = new FormData(form.$el);
        formData.append('timeStamp', Date.now().toString());
        await createProduct(formData);
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
