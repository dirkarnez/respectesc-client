const branchInfoList: BranchInfo[] = [
    {
        city: "kwai_chung",
        address: "kwai_chung_branch_address",
        travelInstruction: "kwai_chung_branch_travel_instruction",
        placeId: "ChIJccMCPL34AzQR6JWEipN7H4k",
        tel: "31580708",
        telAreaCode: "852",
        email: "respect.esc@gmail.com",
        workingHourWeekday: "kwai_chung_branch_workingHour_weekday",
        workingHourWeekend: "kwai_chung_branch_workingHour_weekend"
    },
    {
        city: "san_po_kong",
        address: "san_po_kong_branch_address",
        travelInstruction: "san_po_kong_branch_travel_instruction",
        placeId: "ChIJIawuI9EGBDQROPREDacVlss",
        tel: "36191728",
        telAreaCode: "852",
        email: "respect.mendy@gmail.com",
        workingHourWeekday: "san_po_kong_branch_workingHour_weekday",
        workingHourWeekend: "san_po_kong_branch_workingHour_weekend"
    }
    // ,{
    //     area: "新界",
    //     city: "荃灣",
    //     address: "西樓角路202-216號昌寧商場2樓48號鋪",
    //     placeId: "ChIJacz5e-n5AzQREHH1ldBNJPw",
    //     tel: "23181190",
    //     telAreaCode: "852",
    //     fax: "23181192",
    //     faxAreaCode: "852",
    //     email: "respect.esc@gmail.com",
    //     workingHourWeekday: "上午11時至下午7時00分 (敬請預約)",
    //     workingHourWeekend: "歡迎預約"
    // }
]

export interface BranchInfo {
    city: string,
    address: string,
    travelInstruction?: string,
    placeId: string,
    tel: string,
    telAreaCode: string,
    fax?: string,
    faxAreaCode?: string,
    email: string,
    workingHourWeekday: string,
    workingHourWeekend: string
}

export default branchInfoList