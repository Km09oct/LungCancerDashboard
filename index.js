
// Fetching JSON 3
let oneYr =
  "https://raw.githubusercontent.com/Km09oct/LungCancerDashboard/main/JSON/oneyr.json";
fetch(oneYr)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var json_str = JSON.stringify(data);
    localStorage.setItem("oneYr", json_str);
  })
  .catch((err) => {
    // Do something for an error here
  });

  // Fetching JSON 2
  let CancerType =
  "https://raw.githubusercontent.com/Km09oct/LungCancerDashboard/main/JSON/CancerTypeCase.json";
fetch(CancerType)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var json_str = JSON.stringify(data);
    localStorage.setItem("CanTypes", json_str);
  })
  .catch((err) => {
    // Do something for an error here
  });
// Fetching JSON 4
let fiveyr =
  "https://raw.githubusercontent.com/Km09oct/LungCancerDashboard/main/JSON/fiveyr.json";
fetch(fiveyr)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var json_str = JSON.stringify(data);
    localStorage.setItem("fiveyr", json_str);
  })
  .catch((err) => {
    // Do something for an error here
  });


// Fetching JSON 5
let deathCancer =
  "https://raw.githubusercontent.com/Km09oct/LungCancerDashboard/main/JSON/PatientDeath.json";
fetch(deathCancer)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var json_str = JSON.stringify(data);
    localStorage.setItem("deathCancer", json_str);
  })
  .catch((err) => {
    // Do something for an error here
  });

// Fetching JSON 6
let Cancerdata =
  "https://raw.githubusercontent.com/Km09oct/LungCancerDashboard/main/JSON/patid.json";
fetch(Cancerdata)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var json_str = JSON.stringify(data);
    localStorage.setItem("Cancerdata", json_str);
  })
  .catch((err) => {
    // Do something for an error here
  });
  
