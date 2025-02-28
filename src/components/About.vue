<template>
  <div class="col-xl-9 col-lg-10 col-md-12 mx-auto my-5 p-0 text-light">
    <h1 class="text-uppercase text-center font-weight-bolder py-3 mb-5">{{ t('TXT.NAV.ABOUT') }}</h1>
    <div class="row py-3">
      <div class="col-md-8 col-sm-10 pr-5 m-auto" id="about-description">
        <div class="card_descript">
          <div>
            <img class="rounded-circle float-left px-3" src="/profile/Xuefei-Shi.jpg" height="150px"/>
             <!-- <div class="float-left px-3"> -->
                <!-- <SplineBac :scene="{url:'https://prod.spline.design/i3EYKjJ56jFRRraa/scene.splinecode'}"></SplineBac> -->
                <!-- <iframe src='https://my.spline.design/avatarcopy-9fe4b70573e630e626d7b53140687bfe/' frameborder='0' width='100%' height='100%'></iframe> -->
             <!-- </div> -->
          </div>
          <h3 class="text-capitalize">
            {{ $t('TXT.ABOUT.DESCRIPTION_TITLE') }}
          </h3>

          <p>
            {{ $t("TXT.ABOUT.DESCRIPTION_1") }}
          </p>
          <p>
            {{ $t("TXT.ABOUT.DESCRIPTION_2") }}
          </p>
<!--          <p>-->
<!--            {{ $t("TXT.ABOUT.DESCRIPTION_3") }}-->
<!--          </p>-->
        </div>


      </div>
      <div class="col-md-4 col-sm-10 d-flex justify-content-center pl-5 m-auto">
        <div class="d-flex flex-column">

          <div class="card_descript text-light">
            <div class="text-center p-1 d-flex flex-column justify-content-center">
              <CounterComponent :label="t('LABEL.YOE')" :number="7"></CounterComponent>
            </div>
            <h5>
              <b-badge v-for="skill in constants.skills"
                       :variant="getColor(skill.category)"
                  class="mr-2 mb-2"
              >{{ skill.name }}</b-badge>
            </h5>
          </div>

        </div>


      </div>
    </div>
    <div class="text-center mt-5">
      <b-button variant="outline-danger" size="lg" href="/Xuefei_CV.pdf" target="_blank">RESUME <b-icon-download></b-icon-download></b-button>
    </div>

  </div>
</template>

<script setup>
import {onMounted} from "vue"
import CounterComponent from "@/components/CounterComponent.vue";
import constants from "@/constants"

import {useI18n} from "vue-i18n";

const { t, locale } = useI18n();

function getColor(category){
  switch (category){
    case 'frontend': return "danger";
    case 'backend': return "info";
    case 'frontend/backend': return "combine";
    case 'UI/UX': return "warning";
    case 'tool': return "success";
    case 'deploy': return "primary";
    default: return '';
  }
}

</script>

<style scoped>

</style>
