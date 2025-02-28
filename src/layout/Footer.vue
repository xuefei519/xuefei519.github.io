<template>
<footer class="pt-4 pb-0 px-0 mt-auto">
  <div class="content">
      <div class="container-fluid pb-2">
        <div class="row d-flex align-items-stretch justify-content-center p-3">
          <div class="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center">
            <div class="mt-auto mb-auto" style="width: 350px">
              &copy; 2024 Xuefei Shi
<!--              <img  :src="getImg()">-->
<!--              <img class="footer-logo" src="/CITF-Databank_Logo_BIL-W-400.png" height="80"  alt="CITF logo"/>-->

<!--              <p class="small mt-3">{{$t('TXT.FOOTER.HOST')}}</p>-->

            </div>
          </div>

          <div class="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center">
            <div class="mt-auto mb-auto text-large">
              <a href="https://www.linkedin.com/in/xuefeishi" target="_blank" title="Linkedin">
                <b-icon-linkedin></b-icon-linkedin>
              </a>
            </div>

            <div class="mt-auto mb-auto ml-3 text-large">
              <a href="mailto:xuefei.shi519@gmail.com" title="email">
                <b-icon-envelope-fill></b-icon-envelope-fill>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
</footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    getImg(){
      return `./CITF-logo-rev${this.$i18n.locale === 'en' ? '' : '-fr'}.png`;
    }
  }
}
</script>

<style scoped>
.footer-logo{
  max-width: 250px;
  height: auto;
}
</style>
