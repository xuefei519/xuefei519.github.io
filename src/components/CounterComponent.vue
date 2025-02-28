<template>
<div class="counterUnit m-1">

  <div>
    <div><div class="position-relative">
      <div class="position-absolute counter-info">
        <b-dropdown v-if="showInfoIcon" id="dropdown-left" class="info-btn"  variant="link" no-caret>
          <template #button-content>
            <b-icon-question-circle-fill></b-icon-question-circle-fill>
          </template>
          <b-dropdown-text style="width:300px">
            {{info}}
          </b-dropdown-text>
        </b-dropdown>
      </div>
    </div>
      <p class="counterNum mb-0">{{ number ? $n(number ||0)  : string}}</p>

    </div>

    <div>
      <p class="counterLabel mb-0 ">{{label}}</p>
    </div>

  </div>

</div>
</template>

<script setup>
import {watch, ref, onMounted} from "vue"
import {useI18n} from "vue-i18n";

const props = defineProps({
    label: String,
    number: Number,
  string: String,
  showInfoIcon: Boolean,
  info: String
})
let i18n  = useI18n();
</script>

<style scoped>
.counterUnit{
    /*width: 200px;*/
    padding: .5rem 3.125rem;
    line-height: normal;
}
.counterNum{
    font-size: 3.5rem;
    text-align: center;
  font-weight: bold;
}
.counter-info{
  top: 0;
  right: 0
}

@media (max-width: 1650px) {
  .counterUnit{
    padding: .5rem .5rem;
  }
}
@media (max-width: 1300px) {
  .counterNum{
    font-size: 2.5rem;
  }
  .counterLabel{
    font-size: .8rem;
  }
  .counter-info{
    right: -20px;
  }
}
@media (max-width: 940px) {
  .counterNum{
    font-size: 2rem;
  }
  .counterLabel{
    font-size: .8rem;
  }
}
/*.counterLabel{*/
/*    text-align: left;*/
/*    font-size: 0.8rem;*/
/*}*/
</style>
