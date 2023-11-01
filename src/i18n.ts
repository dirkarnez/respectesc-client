import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_about from "app/data/en-about.md";
import zhHK_about from "app/data/zh-HK-about.md";

import en_overseas_domestic_helpers from "app/data/en-overseas-domestic-helpers.md";
import zhHK_overseas_domestic_helpers from "app/data/zh-HK-overseas-domestic-helpers.md";

import en_local_overseas_domestic_helpers from "app/data/en-local-overseas-domestic-helpers.md";
import zhHK_local_overseas_domestic_helpers from "app/data/zh-HK-local-overseas-domestic-helpers.md";

import en_contract_and_visa from "app/data/en-contract-and-visa.md";
import zhHK_contract_and_visa from "app/data/zh-HK-contract-and-visa.md";

import en_self_selected_overseas_domestic_helpers from "app/data/en-self-selected-overseas-domestic-helpers.md";
import zhHK_self_selected_overseas_domestic_helpers from"app/data/zh-HK-self-selected-overseas-domestic-helpers.md";

import en_compensation_insurance from "app/data/en-compensation-insurance.md";
import zhHK_compensation_insurance from "app/data/zh-HK-compensation-insurance.md";

import en_quality_training from "app/data/en-quality-training.md";
import zhHK_quality_training from "app/data/zh-HK-quality-training.md";

import en_faqs from "app/data/en-faqs.md";
import zhHK_faqs from "app/data/zh-HK-faqs.md";

import en_privacy from "app/data/en-privacy.md";
import zhHK_privacy from "app/data/zh-HK-privacy.md";

const resources = {
    'en': {
        translation: {
            "company.name": "Respect Employment Services Centre",
            "company.photos": "Our Photos",
            "home.line1": "Respect Employment Services Centre (Chinese: 護家僱傭服務中心) is the best domestic helper employment agency in Hong Kong.",
            "home.line2": "We serve you wholeheartedly, and firmly believe that honesty and transparency are important for our successful and long-term relationship.",
            "home.line3": "Our mission",
            "home.line4": "To offer the best-quality domestic helpers to employers, thereby alleviating employers' stress and promoting harmonious employment relationships.",
            "about": en_about,
            "route.home": "Home",
            "route.about_us": "About Us",
            "route.our_services": "Our Services",
            "domestic_helpers.overseas.title": "Overseas domestic helpers",
            "domestic_helpers.overseas.content": en_overseas_domestic_helpers,
            "domestic_helpers.local_overseas.title": "Local overseas domestic helpers completed previous contract",
            "domestic_helpers.local_overseas.content": en_local_overseas_domestic_helpers,
            "contract_and_visa.title": "Contract renewal and visa application commission",
            "contract_and_visa.content": en_contract_and_visa,
            "domestic_helpers.self_selected_overseas.title": "Self-selected overseas domestic helpers",
            "domestic_helpers.self_selected_overseas.content": en_self_selected_overseas_domestic_helpers,
            "compensation_insurance.title": "Compensation insurance for domestic helpers",
            "compensation_insurance.content": en_compensation_insurance,
            "route.faqs": "FAQs",
            "faqs": en_faqs,
            "route.quality_training": "Quality and Training",
            "quality_training": en_quality_training,
            "route.contact_us": "Contact Us",
            "route.privacy_policy": "Privacy Policy",
            "branch": "Branch",
            "mon_to_sat": "Monday to Saturday",
            "sun_and_public_holidays": "Sunday and public holidays",
            "kwai_chung": "Kwai Chung",
            "kwai_chung_branch_address": "Flat J, 18/F, Block 3, Golden Dragon Industrial Centre, 172-180 Tai Lin Pai Road, Kwai Chung",
            "kwai_chung_branch_travel_instruction": "(Close to Kwai Fong MTR exit A , walk around 8 mins)",
            "kwai_chung_branch_workingHour_weekday": "11:00 a.m. to 7:00 p.m. (please make an appointment)",
            "kwai_chung_branch_workingHour_weekend": "Appointment is welcomed",
            "kowloon": "Kowloon",
            "san_po_kong": "San Po Kong",
            "san_po_kong_branch_address": "Flat 7, 15/F, New Trend Centre, 704 Prince Edward Road East",
            "san_po_kong_branch_travel_instruction": "(Walk around 3 mins from Mikiki shopping mall)",
            "san_po_kong_branch_workingHour_weekday": "11:00 a.m. to 7:00 p.m. (please make an appointment)",
            "san_po_kong_branch_workingHour_weekend": "Appointment is welcomed",

            "hung_hom": "Hung Hom",
            "hung_hom_branch_address": "Unit B62, B/F, Hunghom Square, No. 37-39 Ma Tau Wai Road, Kowloon", 
            "hung_hom_branch_travel_instruction": "(Close to Hung Hom Municipal Services Building / HKSKH Holy Carpenter Church)",
            "hung_hom_branch_workingHour_weekday": "10:00 a.m. to 7:00 p.m. (please make an appointment)",
            "hung_hom_branch_workingHour_weekend": "02:00 p.m. to 6:00 p.m. (please make an appointment)",
            
            "licence_cambodia" : "Hold a valid <a href=\"https://mfaic.gov.kh/\" target=\"_blank\">Cambodia</a> licence",
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
            "home.line1": "護家僱傭服務中心中是全香港女傭業界最優質的家傭中介服務公司。",
            "home.line2": "我們竭誠為你服務，深信誠實和透明度高的辦事作風是成功建立長遠合作關係的重要因素。",
            "home.line3": "我們的服務宗旨",
            "home.line4": "將最優質的女傭推薦給僱主，減輕僱主壓力，促進主僱和諧相處。",
            "about": zhHK_about,
            "route.home": "主頁",
            "route.about_us": "公司簡介",
            "route.our_services": "服務範圍",
            "domestic_helpers.overseas.title": "海外傭工",
            "domestic_helpers.overseas.content": zhHK_overseas_domestic_helpers,
            "domestic_helpers.local_overseas.title": "本地(外籍)約滿傭工",
            "domestic_helpers.local_overseas.content": zhHK_local_overseas_domestic_helpers,
            "contract_and_visa.title": "續約及代辦簽證",
            "contract_and_visa.content": zhHK_contract_and_visa,
            "domestic_helpers.self_selected_overseas.title": "自選外籍傭工",
            "domestic_helpers.self_selected_overseas.content": zhHK_self_selected_overseas_domestic_helpers,
            "compensation_insurance.title": "家傭工傷及保險",
            "compensation_insurance.content": zhHK_compensation_insurance,
            "route.faqs": "常見問題",
            "faqs": zhHK_faqs,
            "route.quality_training": "外傭質素及培訓",
            "quality_training": zhHK_quality_training,
            "route.contact_us": "聯絡我們",
            "route.privacy_policy": "私隱聲明",
            "branch": "分行",
            "mon_to_sat": "星期一至六",
            "sun_and_public_holidays": "星期日及公眾假期",
            "kwai_chung": "葵涌",
            "kwai_chung_branch_address": "大連排道172-180號金龍工業中心第三期18樓J室",
            "kwai_chung_branch_travel_instruction": "港鐵葵芳站A出口，步行約8分鐘",
            "kwai_chung_branch_workingHour_weekday": "上午11時至下午7時 (敬請預約)",
            "kwai_chung_branch_workingHour_weekend": "歡迎預約",
            "kowloon": "九龍",
            "san_po_kong": "新蒲崗",
            "san_po_kong_branch_address": "太子道東704號新時代工貿商業中心15樓7室",
            "san_po_kong_branch_travel_instruction": "Mikiki商埸步行約3分鐘",
            "san_po_kong_branch_workingHour_weekday": "上午11時至下午7時 (敬請預約)",
            "san_po_kong_branch_workingHour_weekend": "歡迎預約",

            "hung_hom": "紅磡",
            "hung_hom_branch_address": "九龍紅磡馬頭圍道37-39號紅磡廣場地庫B62號舖",
            "hung_hom_branch_travel_instruction": "(鄰近聖匠堂及紅磡市政大樓)",
            "hung_hom_branch_workingHour_weekday": "上午10時至下午7時 (敬請預約)",
            "hung_hom_branch_workingHour_weekend": "下午2時至下午6時 (敬請預約)",

            "licence_cambodia" : "持有效<a href=\"https://mfaic.gov.kh/\" target=\"_blank\">柬埔寨</a>合法牌照",
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