const branchInfoList: BranchInfo[] = [
    {
        area: "新界",
        city: "葵涌",
        address: "大連排道172-180號金龍工業中心第三期18樓J室",
        travelInstruction: "港鐵葵芳站A出口，步行約8分鐘",
        placeId: "ChIJccMCPL34AzQR6JWEipN7H4k",
        tel: "31580708",
        telAreaCode: "852",
        email: "respect.esc@gmail.com",
        workingHourWeekday: "上午11時至下午7時00分 (敬請預約)",
        workingHourWeekend: "歡迎預約"
    },
    {
        area: "九龍",
        city: "新蒲崗",
        address: "太子道東704號新時代工貿商業中心15樓7室",
        travelInstruction: "Mikiki商埸步行3分鐘",
        placeId: "ChIJIawuI9EGBDQROPREDacVlss",
        tel: "36191728",
        telAreaCode: "852",
        email: "respect.mendy@gmail.com",
        workingHourWeekday: "上午11時至下午7時00分 (敬請預約)",
        workingHourWeekend: "歡迎預約"
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
    area: string,
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