import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    'en': {
        translation: {
            "testing": "testing",
            "en": "EN",
            "zh-HK": "中",
            "route.home": "Home",
            "route.about_us": "About Us",
            "route.our_services": "Our Services",
            "route.faqs": "FAQs",
            "route.quality_training": "Quality and Training",
            "route.contact_us": "Contact Us",
            "route.privacy_policy": "Privacy Policy",
            "branch": "Branch",
            "new_territories": "New Territories",
            "kwai_chung": "Kwai Chung",
            "kowloon": "Kowloon",
            "san_po_kong": "San Po Kong"
        },
    },
    'zh-HK': {
        translation: {
            "testing": "測試",
            "en": "EN",
            "zh-HK": "中",
            "route.home": "主頁",
            "route.about_us": "公司簡介",
            "route.our_services": "服務範圍",
            "route.faqs": "常見問題",
            "route.quality_training": "外傭質素及培訓",
            "route.contact_us": "聯絡我們",
            "route.privacy_policy": "私隱聲明",
            "branch": "分行",
            "new_territories": "新界",
            "kwai_chung": "葵涌",
            "kowloon": "九龍",
            "san_po_kong": "新蒲崗"
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