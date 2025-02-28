<template>
    <div>
      <b-form ref="form" @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">

        <div class="row justify-content-between mt-3">
          <div class="text-dark col-lg-12 col-sm-8 m-auto">
            <b-form-group id="input-group-1">
              <b-form-input
                  v-model="form.name"
                  name="Name"
                  :placeholder="$t('TXT.CONTACT.NAME')"
                  :state="validateName(form.name)"
                  required
              ></b-form-input>

              <b-form-input
                  class="mt-3"
                  v-model="form.email"
                  name="email"
                  :placeholder="$t('TXT.CONTACT.EMAIL')"
                  :state="validateEmail()"
                  required
              ></b-form-input>
                <b-form-textarea
                    class="mt-3"
                    name="message"
                    id="textarea"
                    rows="3"
                    v-model="form.message"
                    :placeholder="$t('TXT.CONTACT.MESSAGE')"
                ></b-form-textarea>
              </b-form-group>

          </div>

        </div>


        <div class="d-flex justify-content-between mt-2">
          <b-button class="py-3 px-5 rounded-0" type="submit" variant="outline-light" :disabled="!validateForm()">{{$t('TXT.BTN.SUBMIT')}}</b-button>
          <b-button v-if="formFilled()" class="text-dark_aqua" type="reset" variant="link">{{ $t("TXT.CONTACT.CLEAR") }}</b-button>
        </div>

      </b-form>
<!--      <b-card class="mt-3" header="Form Data Result">-->
<!--        <pre class="m-0">{{ form }}</pre>-->
<!--      </b-card>-->

      <b-modal ref="result-modal" centered header-border-variant="white" hide-footer>
        <div class="d-block text-center mb-4">
          <h3>{{ this.sent ? $t("TXT.CONTACT.THANK_YOU"): $t('TXT.CONTACT.SORRY') }}, {{ this.name }}</h3>
          <template v-if="this.sent">
            <p>{{ $t("TXT.CONTACT.FORM_SENT") }}</p>
          </template>
          <template v-else>
            <p>{{ $t("TXT.CONTACT.FORM_NOT_SENT") }} <a href="mailto:xuefei.shi519@gmail.com">email</a> {{$t("TXT.CONTACT.FORM_NOT_SENT2")}}</p>
          </template>

        </div>
        <div class="my-3 mx-3">
          <b-button class="rounded-0" variant="aqua" block @click="hideModal">{{ $t("TXT.CONTACT.BACK_TO_SITE") }}</b-button>
        </div>
      </b-modal>
    </div>
  </template>


<script>
import emailjs from '@emailjs/browser'

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      show: true,
      sent: false,
      name: ''
    }
  },
  methods: {
    onSubmit() {
      const serviceID = 'default_service',
          templateID = 'template_Msg',
          publicKey = 'user_XlwcSuLr6o8PJULZUZwZH';

      this.name = this.form.name;

      emailjs
          .sendForm(serviceID, templateID, this.$refs.form, {
            publicKey: publicKey,
          })
          .then(
              () => {
                // console.log('SUCCESS!');
                this.sent = true;
                this.showModal();
                this.onReset();
              },
              (error) => {
                // console.log('FAILED...', error.text);
                this.showModal();
              },
          );
    },
    onReset() {
      // Reset our form values
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true
      })
    },
    showModal() {
      this.$refs['result-modal'].show()
    },
    hideModal() {
      this.name = '';
      this.$refs['result-modal'].hide()
    },
      /**
       * if the form  is not empty
       * @returns {boolean}
       */
      validateForm(){
        return this.formFilled() && (this.form.email.length>0?this.validateEmail():true);
      },

    /**
     * form has been filled
     * @returns {boolean}
     */
    formFilled(){
      return Object.values(this.form).filter(x => x === '').length < Object.keys(this.form).length;
    },

    /**
     * verify email address
     * @returns {null|boolean}
     */
    validateEmail(){
        if(this.form.email==='')
          return null;
        else {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return this.form.email.match(emailRegex) !== null;
        }
    },

    validateName(name){
      if(name==='')
        return null;
      else {
        return name.length >=1
      }
    }
  }
}
</script>

<style scoped>

</style>
