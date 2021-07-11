import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    'en': {
        translation: {
            "testing": "testing",
            "en": "English",
            "zh-HK": "中文"
        },
    },
    'zh-HK': {
        translation: {
            "testing": "測試",
            "en": "English",
            "zh-HK": "中文"
        },
    },
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'zh-HK',             //預設語言
    fallbackLng: 'zh-HK',     //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;