GeoChart1 = [
    ["Country", "Cases"],
    ["Denmark", 39996],
    ["Belgium", 72300],
    ["Hungary", 74162],
    ["France", 62399],
    ["Australia", 422828],
    ["Norway", 41182],
    ["US", 1756921],
    ["UK", 409228],
    ["Germany", 538140],
    ["Canada", 212719],
    ["Japan", 1017282],
    ["South Korea", 226918],
    ["Russia", 578535],
    ["Turkey", 227310],
    ["Singapore", 23260],
    ["Israel", 28499],
    ["Austria", 44294],
    ["Ukraine", 157275],
    ["China", 4546400],
    ["Brazil", 556995],
    ["Jamica", 7127],
    ["South Africa", 100462],
    ["Namibia", 3155],
    ["Thailand", 187677],
    ["Egypt", 133012],
    ["Uganda", 33600],
    ["Kenya", 41469],
    ["Malaysia", 48160],
    ["Indonesia", 389723],
    ["Iraq", 33510],
    ["Sri Lanka", 29179],
    ["Bangladesh", 155698],
    ["Qatar", 1412],
    ["Nepal", 20280],
    ["Sudan", 26837],
    ["Oman", 3664],
    ["India", 1314030],
  ];
  
  CancerTypes = [
    ['Cancer', 'Cases'],
    ['Brest',2261497],
    ['Lung', 2206412],
    ['Colorectal', 1931590],
    ['Prostate', 1414259],
    ['Stomach', 1089113],
    ['Liver', 905998],
    ['Bladder', 573228],
    ['Pancrease', 493226],
    ['Leukaemia', 471995],
    ['Kidney', 431228],
    ['Overy', 313923],
    ['Brain',308102],
    ['Testis', 74758],
    ['Vagaina', 17908],
  ]
  
let oneyr = JSON.parse(localStorage.getItem('oneYr'));
let OneYrData = [['Cancer', 'UK', 'US', 'Netherland']];
for (let index = 0; index < oneyr.length; index++) {
  OneYrData.push([oneyr[index].Cancer, oneyr[index].UK, oneyr[index].US, oneyr[index].Netherland]);
}


let fiveYr = JSON.parse(localStorage.getItem('fiveyr'));
let FiveYrData = [['Cancer', 'UK', 'US', 'Netherland']];
for (let index = 0; index < fiveYr.length; index++) {
  FiveYrData.push([fiveYr[index].Cancer, fiveYr[index].UK, fiveYr[index].US, fiveYr[index].Netherland]);
}

let CancerDeath = JSON.parse(localStorage.getItem('deathCancer'));
let CancerDeathData = [['Country', 'Patient', 'Deaths']]
for (let index = 0; index < CancerDeath.length; index++) {
    CancerDeathData.push([CancerDeath[index].Country, CancerDeath[index].Patient, CancerDeath[index].Death]);
}

