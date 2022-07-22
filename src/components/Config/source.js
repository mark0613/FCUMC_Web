function wrapLinks(json) {
    let result = [];
    for (let key in json) {
        result.push(
            <a href={json[key]} target="_blank">{key}</a>
        );
    }
}

const myfcu = {
    MyFcu: "https://myfcu.fcu.edu.tw/main/infomyfculogin.aspx",
}
const fb = {
    GENEDU: "https://www.facebook.com/GENEDU.FCU/",
    iSchool: "https://www.facebook.com/iSchool.FCU/",
    dSchool: "https://www.facebook.com/fcudschool/",
    CheckInAtFcu: "https://www.facebook.com/checkinatfcu/",
    SaInFCU: "https://www.facebook.com/SAinFCU/",
}
const ig = {
    Sa: "https://www.instagram.com/fcu_sa/",
    Coiee: "https://www.instagram.com/fcucoiee/",
    FengChiaUniversity: "https://www.instagram.com/fengchia_university/",
    CheckInAtFcu: "https://www.instagram.com/checkinatfcu/",
    AfterClass: "https://www.instagram.com/fcu_afterclass/",
    IecsClass: "https://www.instagram.com/iecs.class/",
}


export const sourceConfig = [
    {
        title: "MyFCU",
        detail: Object.keys(myfcu),
        links: wrapLinks(myfcu),
        key: "myfcu",
    },
    {
        title: "Facebook",
        detail: Object.keys(fb),
        links: wrapLinks(fb),
        key: "fb",
    },
    {
        title: "Instagram",
        detail: Object.keys(ig),
        links: wrapLinks(ig),
        key: "ig",
    },
]