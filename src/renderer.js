import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'
import App from './App.vue';
import ar from './locales/ar';
import de from './locales/de';
import en from './locales/en';
import es from './locales/es';
import fr from './locales/fr';
import hi from './locales/hi';
import ja from './locales/ja';
import ko from './locales/ko';
import pt from './locales/pt';
import ru from './locales/ru';
import th from './locales/th';
import vi from './locales/vi';
import zh_Hans from './locales/zh_Hans';
import zh from './locales/zh';

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    ar,
    de,
    en,
    es,
    fr,
    hi,
    ja,
    ko,
    pt,
    ru,
    th,
    vi,
    zh_Hans,
    zh,
  },
})

createApp(App).use(i18n).mount('#app')