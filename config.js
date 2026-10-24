// ── Google Drive Photo Upload ──

const CONFIG = {
  useCurtain: false,
  googleDriveUploadUrl: "https://script.google.com/macros/s/AKfycbxBZdlOZQlELyzwC5orwV4yC4zrGgUrCNpYlGKY60ASzGirJc8aKmGIEVgIX8iAQ5ZX/exec",

  groom: {
    name: "Søren",
    nameEn: "Søren",
    father: "Frank",
    mother: "Liselotte",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "Seoyoung",
    nameEn: "Seoyoung",
    father: "김형식",
    mother: "방종숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-03-27",
    time: "17:00",
    venue: "Woninjae Wedding",
    hall: "",
    tel: "",
    address: "322 Gyeongwon-daero, Yeonsu-gu, Incheon, South Korea",
    mapLinks: {
      kakao: "https://kko.to/6FTOPLjjCm",
      naver: "https://naver.me/5LHHxqFN",
      google: "https://www.google.com/maps?q=South+Korea,+Incheon,+Yeonsu-gu,+Gyeongwon-daero,+322+%EC%9B%90%EC%9D%B8%EC%9E%AC%EC%9B%A8%EB%94%A9&ftid=0x357b7901407a22f9:0x24e84e45054189e8&entry=gps&shh=CAE&lucs=,100834232,121816461,94297699,94231188,94280568,100821559,47071704,94218641,94282134,100835694,94286869,100820247,100822504&g_ep=CAISEjI2LjM2LjMuOTczNTQ4ODUxMBgAIIgnKnssMTAwODM0MjMyLDEyMTgxNjQ2MSw5NDI5NzY5OSw5NDIzMTE4OCw5NDI4MDU2OCwxMDA4MjE1NTksNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODM1Njk0LDk0Mjg2ODY5LDEwMDgyMDI0NywxMDA4MjI1MDRCAkRL&skid=9647da31-ca41-4e46-b938-fc082fcf248b&g_st=ic&ucbcb=1"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "저희 결혼합니다",
    content: "저희 두 사람이 부부의 인연을 맺습니다.\n소중한 분들과 함께 기쁨을 나누고 싶습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "하객 여러분께",
    content: "먼 길을 와야 한다는 것을 잘 알고 있어 참석이 어려우셔도 충분히 이해합니다.\n함께해 주실 수 있다면 정말 기쁘고 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [

    ],
    bride: [      {
      bank: "은행명",
      number: "000-0000-0000",
      holder: "Seoyoung"
    }]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "저희 결혼합니다",
    description: "저희 결혼식에 초대합니다. 소중한 날을 함께 축하해 주세요."
  }
};
