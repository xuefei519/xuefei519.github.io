<template>
<div class="m-1 mt-3">

  <div class="d-flex">

      <div class="flex-column">
        <img :src="img" width="400px"/>
      </div>
      <div class="ml-4 d-flex align-items-center flex-column">
        <div>
          <h3 class="text-uppercase">
            <a v-if="link" class="link" target="_blank" :href="link">{{name}}</a>
            <template v-else>{{name}}</template>
          </h3>
          <div>
            <b-badge pill v-for="tech in techs"
                     class="mr-2 mb-2"
            >{{ tech }}</b-badge>
          </div>
          <p>{{detail}}</p>
        </div>


    </div>


  </div>

</div>
</template>

<script setup>
import {watch, ref, onMounted} from "vue"
import {useI18n} from "vue-i18n";

const props = defineProps({
  name: String,
  detail: String,
  img: {
    type: String,
    default: './src/assets/vue.svg'
  },
  link: String,
  techs: Array
})
let i18n  = useI18n();
</script>

<style scoped>

</style>
