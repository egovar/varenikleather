<template>
  <section class="history">
    <div class="history__part history__part--first grid">
      <AdaptivePicture
        name="history-1.jpg"
        alt="Курительная трубка на кожаном чехле
      для курительных принадлежностей"
        class="grid__item grid__item--first history__picture"
      />
      <div class="grid__item grid__item--second">
        <h2 class="history__text history__text--bold">Начало пути</h2>
        <p class="history__text">
          В конце 80х годов я работал скорняком в доме быта. Люди приходили к
          нам, чтобы заказать себе красивые и надёжные вещи, которые бы идеально
          сидели по фигуре - в обычных магазинах такое не продавалось
        </p>
        <p class="history__text">
          Через несколько лет советский союз распался, в стране начался
          экономический кризис, а рынок заполнили дешёвые и некачественные
          товары. Ателье закрыли - людям не всегда хватало на еду, не говоря уже
          про пошив одежды на заказ
        </p>
      </div>
      <AdaptivePicture
        name="history-2.jpg"
        alt="Часы с кожаным ремешком лежат на деревянном столе рядом с
      кошельком из натуральной кожи"
        class="grid__item grid__item--third history__picture"
      />
      <AdaptivePicture
        name="history-3.jpg"
        alt="Грубо сшитый кошелёк из натуральной кожи лежит на деревянном столе в окружении инструментов кожевника"
        class="grid__item grid__item--fourth history__picture"
      />
      <p class="history__text history__text--bold grid__item grid__item--fifth">
        После этого я несколько раз пробовал начать свое дело: торговал
        продуктами, инструментами, крепежом.
      </p>
      <p class="history__text grid__item grid__item--sixth">
        Некоторые идеи были не очень удачными - некоторые работали более 10 лет.
        Но когда я решил, что основные трудности позади, на рынок вышли крупные
        компании - они продавали откровенный мусор, но подкупали людей низкими
        ценами и вездесущей рекламой. Мои старые методы больше не работали, а
        продавать людям то, чем я бы сам побрезговал пользоваться - это
        противоречит моим принципам
      </p>
    </div>
    <div class="history__part history__part--second">
      <AdaptivePicture
        name="workshop.jpg"
        alt="Кожевенная мастерская в состоянии творческого беспорядка"
        class="history__picture"
      />
      <p class="history__text">
        Тогда я вспомнил про ателье. Да, в магазинах теперь можно найти вещи под
        любую фигуру, но всё равно чего-то не хватает… Здесь топорщится нитка,
        тут ручка у сумки пришита очень ненадежным швом - и так всегда, ни
        одного исключения. Не хватало внимания к таким мелочам и уникальности,
        индивидуального подхода - у корпораций нет на это времени. А у меня есть
        - мне это важно!
      </p>
    </div>
    <div class="history__part history__part--third">
      <AdaptivePicture
        name="with-wife.jpg"
        alt="Обложка для паспорта из натуральной кожи в окружении инструментов кожевника"
        class="history__picture"
      />
      <p class="history__text">
        Моя жена, Надежда, поддержала меня в этом начинании. Более того, идея с
        нанесением на каждое изделие неповторимого рисунка целиком принадлежит
        ей. Мы оба погрузились в изучение техник работы с кожей. Надежда стала
        нашим художником и дизайнером, а я снова взял на себя роль кожевника -
        обожаю работать руками и видеть, как материал превращается в настоящую
        Вещь с большой буквы.
      </p>
    </div>
    <div class="history__part history__part--fourth">
      <AdaptivePicture
        name="sewing.jpg"
        alt="Пробивание отверстий в куске кожи с помощью специального пробойника"
        class="history__picture"
      />
      <p class="history__text history__text--bold">
        Это - одна из причин по которой мы отказались от любой автоматизации,
        даже от швейных машинок. Они не дают настолько качественного шва, как
        руки мастера. Может быть и мелочь - но важная!
      </p>
    </div>
    <p class="history__part history__part--fifth history__text">
      Наши усилия не прошли даром - уже очень скоро мы получили первый заказ.
      Было трудно, но оно 100% того стоило. Наверное, это самая приятная часть
      моей работы - видеть счастливое лицо человека, который получил Настоящую
      Вещь, что-то, принадлежащее только ему.
    </p>
    <div class="history__part history__part--sixth">
      <AdaptivePicture
        name="keychains.jpg"
        alt="Рабочий стол кожевника с циркулем и готовым изделием"
        class="history__picture"
      />
      <div class="history__part-text">
        <p class="history__text history__text--bold">
          Когда дизайнер рисовал этот сайт, он спросил: кто мой типичный клиент?
          Для кого мы делаем сайт?
        </p>
        <p class="history__text">
          И мне трудно ответить на этот вопрос в современных терминах - мои
          клиенты это абсолютно разные люди из разных стран, это и богатые
          бизнесмены, и не очень богатые наемные рабочие, домохозяйки… Они все
          разные. Они все личности. Просто сделай красиво и с душой.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AdaptivePicture from '@/components/core/molecules/AdaptivePicture';
export default {
  name: 'History',
  components: { AdaptivePicture },
};
</script>

<style scoped lang="scss">
.history {
  &__text {
    letter-spacing: 0.03em;
    line-height: 1.22;
    &--bold {
      font-size: 1.5rem;
      font-weight: $bold-font-weight;
      line-height: 1;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: repeat(7, min-content);
    gap: 1rem 3rem;
    &__item {
      &--first {
        grid-column: 1;
        grid-row: 1 / 5;
        border-radius: 2rem;
        &::v-deep(img) {
          border-radius: 2rem;
        }
      }
      &--second {
        grid-column: 2/4;
        grid-row: 1/4;
        .history__text {
          margin-bottom: 1.5rem;
        }
      }
      &--third {
        grid-column: 2;
        grid-row: 4/6;
      }
      &--second,
      &--third {
      }
      &--fourth {
        grid-column: 3;
        grid-row: 4/6;
      }
      &--first,
      &--fourth {
      }
      &--fifth {
        grid-column: 2/4;
        grid-row: 6;
      }
      &--sixth {
        grid-column: 2/4;
        grid-row: 7;
      }
      &--third,
      &--fourth {
        height: 20rem;
      }
    }
  }

  &__part {
    &:not(.grid) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    &--second {
      margin-top: 9.375rem;
      > .history__text {
        width: 35%;
      }
      > .history__picture {
        width: 50%;
        height: 35rem;
        margin-right: 5rem;
      }
    }
    &--third {
      margin-top: 9.75rem;
      flex-direction: row !important;
      > .history__text {
        width: 33.625rem;
        margin-top: 2.375rem;
      }
      > .history__picture {
        width: 40%;
        margin-left: 5.5rem;
        border-radius: 2rem;
        &::v-deep(img) {
          border-radius: 2rem;
        }
      }
    }
    &--fourth {
      align-items: center;
      margin-top: 8rem;
      & > .history__text {
        margin-left: 2rem;
        width: 40%;
        padding-top: 3.625rem;
      }
      & > .history__picture {
        width: 40%;
        height: 18rem;
      }
    }
    &--fifth {
      width: 50%;
      margin: 11.8125rem auto 9.3125rem;
    }
    &--sixth {
      align-items: center;
      margin-bottom: 15.25rem;
      .history__text {
        width: 33.625rem;
      }
      .history__text + .history__text {
        margin-top: 1.875rem;
      }
      > .history__picture {
        width: 40%;
        height: 32rem;
        border-radius: 2rem;
        &::v-deep(img) {
          border-radius: 2rem;
        }
      }
    }
  }
  @include media(tablet) {
    &__part {
      &--third {
        > .history__text {
          width: 60%;
        }
        > .history__picture {
          width: 30%;
          margin-left: 2rem;
        }
      }
      &--sixth {
        flex-direction: column !important;
        > .history__picture {
          width: 60%;
          margin-bottom: 4rem;
        }
      }
    }
  }
  @include media(mobile) {
    margin-top: 6.5rem;
    &__part {
      display: flex !important;
      flex-direction: column !important;
      width: 100%;
      margin: 1.5rem 0 !important;
      .history__text {
        width: 100% !important;
        margin: 0 !important;
      }
      .history__picture {
        width: 100% !important;
        margin: 0 0 1rem !important;
      }
    }
  }
}
</style>
