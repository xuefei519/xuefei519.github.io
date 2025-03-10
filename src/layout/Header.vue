<template>

    <b-navbar toggleable="lg" type="light" variant="white" ref="header" :class="scrolled ? 'm-0 px-5 py-3 header active': 'm-0 px-5 py-3 header'">
            <b-navbar-brand :to="{ name: 'home', hash: '#home'}">
<!--                <img src="/CITF-Databank_Logo_BIL-W-400.png" height="80"  alt="CITF Databank logo"/>-->
<span>Xuefei Shi</span>
            </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse"  is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto align-items-center">
            <template v-if="!this.simplify">
              <b-nav-item :to="{ name: 'home', hash: '#about'}">{{ $t("TXT.NAV.ABOUT") }}</b-nav-item>
              <!-- <b-nav-item :to="{ name: 'home', hash: '#work'}">{{ $t("TXT.NAV.WORK") }}</b-nav-item> -->
              <b-nav-item :to="{ name: 'home', hash: '#contact'}">{{ $t("TXT.NAV.CONTACT") }}</b-nav-item>
            </template>

            <!--                  <b-nav-item href="https://dashboard.citf.mcgill.ca" :active="this.route.name==='data'">Dashboard</b-nav-item>-->

            <!--                  <b-nav-item id="langBtn" @click="toggleLocale">{{$t("TXT.LANGUAGE")}}</b-nav-item>-->
<!--            <b-nav-item id="langBtn" :href="isEN()?'/fr':'/'">{{isEN()?'FR':'EN'}}</b-nav-item>-->
            <!--                      <b-nav-form>-->
            <!--                          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
            <!--                          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
            <!--                      </b-nav-form>-->
          </b-navbar-nav>
        </b-collapse>

        </b-navbar>

</template>

<script>
import { useRoute } from 'vue-router'
const route = useRoute();

export default {
    name: "Header",
    props: {
      simplify: Boolean,
      lang: {
        type: Boolean,
        default: true
      }
    },
    computed: {
        match(name){
            const route = useRoute();
            return name === route.name;
        }
    },
    data(){
        return{
            route: useRoute(),
            scrolled: false
        }
    },
    methods:{
        toggleLocale(){
            this.$i18n.locale = this.$i18n.locale === 'en' ? 'fr' : 'en';
            localStorage.setItem('last-locale', this.$i18n.locale);
        },
      isEN(){
          const lang = localStorage.getItem('lang');

          return lang ==='en';
      },
      handleScroll () {
        this.scrolled = window.scrollY > 0;
      }
},
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted(){
    const headerHeight = this.$refs.header.$el.offsetHeight;
    if(headerHeight){
      document.documentElement.style.setProperty('--header-height', headerHeight+'px');
    }
  }
}
</script>

<style>
.navbar-brand{
  margin-left: 20px;
}
</style>
