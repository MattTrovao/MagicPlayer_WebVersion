import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import pt from './locales/pt.json';

const i18n = createI18n({
    locale: window.localStorage.getItem('lang') || 'pt',
    fallbackLocale: 'pt',
    legacy: false,
    messages: { en, pt },
    silentTranslationWarn: true,
    /* define: {
        __VUE_I18N_LEGACY_API__: false,
        __VUE_I18N_FULL_INSTALL__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
    } */
})

export default i18n;

export const globalI18n = i18n.global;