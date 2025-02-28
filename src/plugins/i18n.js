import { createI18n } from 'vue-i18n'

import en from '../locales/en.json';

const numberFormats = {
  'en':{
    decimal:{
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent', useGrouping: false, minimumFractionDigits: 2
    }
  },
  'fr':{
    decimal:{
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent', useGrouping: false, minimumFractionDigits: 2
    }
  }
}

const datetimeFormats = {
  'en':{
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'long', day: 'numeric'
    }
  },
  'fr': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'long', day: 'numeric'
    }
  }
}

const i18n = new createI18n({
    legacy: false,
    locale: getStartingLocale() || 'en',
    messages: { en },
    numberFormats: numberFormats,
    datetimeFormats: datetimeFormats
});


function getStartingLocale() {
    // if (localStorage.getItem('last-locale')) {
    //     return localStorage.getItem('last-locale')
    // }
    // return "en"
    let path = window.location.href.split('/')
    if(path[path.length - 1] === 'fr')
        return 'fr';
    else return 'en';
}
export default i18n;

