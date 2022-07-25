<template>
  <footer class="footer">
    <div class="container footer__container">
      <p class="footer__text">
        Для заказа изделия оставьте свои контакты, и мы свяжемся с вами
      </p>
      <div class="footer__icons">
        <svg-icon name="logo" class="footer__icon footer__icon--logo" />
        <div class="footer__media-links">
          <a
            v-for="media in socialMedia"
            :key="media.iconName"
            :href="media.link"
            target="_blank"
            class="footer__icon"
            :class="`footer__icon--${media.iconName}`"
          >
            <svg-icon :name="media.iconName" />
          </a>
        </div>
      </div>
      <form id="form" class="footer__form" @submit="sendOrder">
        <Input v-model="name" label="Имя" required />
        <Input v-model="phone" label="Телефон" required />
        <Input v-model="comment" label="Комментарий" />
        <Btn
          text="Отправить"
          class="footer__btn"
          type="submit"
          :disabled="formDisabled"
          @click="sendOrder"
        />
        <p class="footer__private-info-warning">
          Отправляя эту форму, Вы соглашаетесь с правилами обработки
          персональных данных
        </p>
      </form>
    </div>
  </footer>
</template>

<script>
import Input from '@/components/core/molecules/Input';
import Btn from '@/components/core/atoms/Btn';

import socialMedia from '@/const/socialMedia';
import { createOrder } from '@/api/orders';

export default {
  name: 'AppFooter',
  components: { Btn, Input },
  data() {
    return {
      socialMedia,
      name: '',
      phone: '',
      comment: '',
      loading: false,
    };
  },
  computed: {
    order() {
      return {
        name: this.name,
        phone: this.phone,
        comment: this.comment,
      };
    },
    formDisabled() {
      return !this.phone || !this.name || !!this.loading;
    },
  },
  methods: {
    async sendOrder() {
      this.loading = true;
      await createOrder(this.order);
      this.clearForm();
      this.loading = false;
      alert('Спасибо за заявку! Мы скоро свяжемся с Вами!');
    },
    clearForm() {
      this.name = '';
      this.phone = '';
      this.comment = '';
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  box-shadow: 0px -4px 50px 5px rgb(220, 150, 150, 0.2);
  padding: $footer-padding-top 0 $footer-padding-bottom;
  font-size: $footer-font-size;

  &__container {
    height: $footer-form-height;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }

  &__text {
    width: 25rem;
    line-height: 133%;
  }

  &__icons {
    width: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__icon {
    @include icons;
  }

  &__media-links {
    width: 14.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__form {
    width: 31.25rem;
    display: flex;
    flex-direction: column;
  }

  &__btn {
    margin: 2rem 0 0.625rem;
  }

  &__private-info-warning {
    font-size: 0.625rem;
    line-height: 120%;
    color: $secondary-text-color;
    margin: auto;
  }

  @include media(tablet) {
    &__form,
    &__text,
    &__icons {
      width: 47%;
    }
  }
  @include media(mobile) {
    &__form,
    &__text,
    &__icons {
      width: 100%;
    }
    &__container {
      height: unset;
    }
    &__form {
      order: 2;
      margin: 2rem 0;
    }
    &__icons {
      order: 3;
    }
  }
}
</style>
