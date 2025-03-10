<template>
  <div class="main-content-container">

    <div class="mt-0">
      <div class="home_banner d-flex justify-content-end align-items-center" id="home">
        <Home></Home>
      </div>

      <div class="py-5 dark-bg" id="about">
       <About></About>
      </div>

      <!-- <div class="py-5" id="work" >
       <Work></Work>
      </div> -->

      <div class="pt-5" id="contact">
        <div class="m-auto col-lg-4 col-md-6 col-sm-8 col-xs-10">
          <h1 class="text-uppercase text-center font-weight-bolder py-3">{{ t('TXT.NAV.CONTACT') }}</h1>
          <contact-form></contact-form>
        </div>

      </div>

    </div>

  </div>

</template>

<script setup>

import {onMounted} from "vue"

import {useI18n} from "vue-i18n";

import { pageview } from "vue-gtag";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import ContactForm from "../components/ContactForm.vue";
import Work from "../components/Work.vue";

const { t, locale } = useI18n();

onMounted(()=>{
  // this.i18n.locale = 'en';
})


function getLocale(name){
    switch(name){
        case 'databank': return locale.value==='en'? 'https://www.covid19immunitytaskforce.ca/citf-databank/' : 'https://www.covid19immunitytaskforce.ca/fr/banque-de-donnees-du-gtic/';
        case 'sero': return locale.value==='en'?'https://www.covid19immunitytaskforce.ca/seroprevalence-in-canada/': 'https://www.covid19immunitytaskforce.ca/fr/seroprevalence-au-canada/';
        default: return name;
    }
  // if(locale.value === 'fr')
  //   return '/fr';
  // else return '';
 }
</script>

<style scoped>
.card_title *{
  font-weight: bold;
}
</style>
