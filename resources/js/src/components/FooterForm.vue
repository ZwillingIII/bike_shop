<script>
export default {
  name: "FooterForm",
  data() {
    return {
      mail: '',
      privacy: false,
      checkPrivacy: true
    }
  },
  methods: {
    submit(e) {
      if (this.privacy) {
        this.$store.commit('openSuccess', true);
        this.$store.commit('openBg', true);
        this.$store.commit('changeSuccessTxt', 'Благодарим за подписку')
        document.body.style.overflow = 'hidden';
      } else {
        this.checkPrivacy = false;
      }
    },
    checkbox() {
      this.checkPrivacy = true;
    }
  }
}
</script>

<template lang="pug">
.footer-form
  .container
    .footer-form__wrap
      .footer-form__title Подпишитесь на наши новости
      form.footer-form__form( @submit.prevent="submit", @keyup.alt.enter="submit" )
        .footer-form__inputs
          input.form__input.footer-form__input( placeholder="E-mail", v-model="mail" )
          button.form__submit( type="submit" ) Подписаться
        .footer-form__privacy
          label( for="footer-form__checkbox", @click="checkbox" )
            .form__checkbox
              input#footer-form__checkbox.form__checkbox-input( type="checkbox", v-model="privacy" )
              .form__checkmark
            .form__body( :class="{ 'privacy-err': !checkPrivacy }" ) Согласен(на) на обработку персональных данных

</template>

<style scoped lang="sass">
.footer-form
  background: url("/img/form-bg.png")
  &__title
    font-size: 64px
    font-weight: 600
    color: #fff
    letter-spacing: 3.2px
    text-transform: uppercase
  &__form
    margin-top: 52px
  &__inputs
    display: flex
    gap: 16px
  &__input
    width: 25%
  &__privacy
    label
      color: #fff
      font-size: 12px
      line-height: 1.6
      display: flex
      gap: 8px
      margin-top: 14px
      align-items: center
</style>
