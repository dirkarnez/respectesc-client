import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_about from "app/data/en-about.md";
import zhHK_about from "app/data/zh-HK-about.md";

import en_faqs from "app/data/en-faqs.md";
import zhHK_faqs from "app/data/zh-HK-faqs.md";

import en_privacy from "app/data/en-privacy.md";
import zhHK_privacy from "app/data/zh-HK-privacy.md";

const resources = {
    'en': {
        translation: {
            "company.name": "Respect Employment Services Centre",
            "company.photos": "Our Photos",
            "about": en_about,
            "route.home": "Home",
            "route.about_us": "About Us",
            "route.our_services": "Our Services",
            "route.faqs": "FAQs",
            "faqs": en_faqs,
            "route.quality_training": "Quality and Training",
            "route.contact_us": "Contact Us",
            "route.privacy_policy": "Privacy Policy",
            "branch": "Branch",
            "mon_to_sat": "Monday to Saturday",
            "sun_and_public_holidays": "Sunday and public holidays",
            "new_territories": "New Territories",
            "kwai_chung": "Kwai Chung",
            "kwai_chung_branch_address": "Flat J, 18/F, Block 3, Golden Dragon Industrial Centre, 172-180 Tai Lin Pai Road",
            "kwai_chung_branch_travel_instruction": "Kwai Fong MTR Station Exit A, walk for about 8 minutes",
            "kwai_chung_branch_workingHour_weekday": "11:00 a.m. to 7:00 p.m. (please make an appointment)",
            "kwai_chung_branch_workingHour_weekend": "Welcome to make an appointment",
            "kowloon": "Kowloon",
            "san_po_kong": "San Po Kong",
            "san_po_kong_branch_address": "Flat 7, 15/F, New Trend Centre, 704 Prince Edward Road East",
            "san_po_kong_branch_travel_instruction": "3 minutes walk from Mikiki shopping mall",
            "san_po_kong_branch_workingHour_weekday": "11:00 a.m. to 7:00 p.m. (please make an appointment)",
            "san_po_kong_branch_workingHour_weekend": "Welcome to make an appointment",
            "licence_cambodia" : "Hold <a href=\"https://mfaic.gov.kh/\" target=\"_blank\">Cambodia</a> licence",
            "licence_labour_department": "Hold a valid <a href=\"https://www.labour.gov.hk/\" target=\"_blank\">Labour Department</a> license number",
            "licence_philippine_consulate_general": "Hold a certificate issued by the <a href=\"https://hongkongpcg.dfa.gov.ph/\" target=\"_blank\">Philippine Consulate General</a>",
            "privacy_statement": "Privacy Statement",
            "privacy": en_privacy
        },
    },
    'zh-HK': {
        translation: {
            "company.name": "護家僱傭服務中心",
            "company.photos": "中心照片",
            "about": zhHK_about,
            "route.home": "主頁",
            "route.about_us": "公司簡介",
            "route.our_services": "服務範圍",
            "route.faqs": "常見問題",
            "faqs": zhHK_faqs,
            "route.quality_training": "外傭質素及培訓",
            "route.contact_us": "聯絡我們",
            "route.privacy_policy": "私隱聲明",
            "branch": "分行",
            "mon_to_sat": "星期一至六",
            "sun_and_public_holidays": "星期日及公眾假期",
            "new_territories": "新界",
            "kwai_chung": "葵涌",
            "kwai_chung_branch_address": "大連排道172-180號金龍工業中心第三期18樓J室",
            "kwai_chung_branch_travel_instruction": "港鐵葵芳站A出口，步行約8分鐘",
            "kwai_chung_branch_workingHour_weekday": "上午11時至下午7時00分 (敬請預約)",
            "kwai_chung_branch_workingHour_weekend": "歡迎預約",
            "kowloon": "九龍",
            "san_po_kong": "新蒲崗",
            "san_po_kong_branch_address": "太子道東704號新時代工貿商業中心15樓7室",
            "san_po_kong_branch_travel_instruction": "Mikiki商埸步行3分鐘",
            "san_po_kong_branch_workingHour_weekday": "上午11時至下午7時00分 (敬請預約)",
            "san_po_kong_branch_workingHour_weekend": "歡迎預約",
            "licence_cambodia" : "持有<a href=\"https://mfaic.gov.kh/\" target=\"_blank\">柬埔寨</a>合法牌照",
            "licence_labour_department": "持有效<a href=\"https://www.labour.gov.hk/\" target=\"_blank\">勞工處</a>牌照號碼",
            "licence_philippine_consulate_general": "持<a href=\"https://hongkongpcg.dfa.gov.ph/\" target=\"_blank\">菲律賓駐港領事館</a>證書",
            "privacy_statement": "私隱聲明",
            "privacy": zhHK_privacy
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