<template>
  <div class="col-xl-9 col-lg-10 col-md-12 mx-auto my-5 p-0 description">
    <h1 class="text-uppercase text-center font-weight-bolder py-3 mb-5">{{ t('TXT.NAV.WORK') }}</h1>
    <div class="row">

      <WorkTile v-for="project in constants.projects" class="py-4" :name="project.name" :link="project.link" :img="project.img" :techs="project.techs" :detail="project.detail" ></WorkTile>

    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue"
import WorkTile from "@/components/WorkTile.vue";
import constants from "@/constants"

import {useI18n} from "vue-i18n";

const { t, locale } = useI18n();
</script>

<style scoped>

</style>
