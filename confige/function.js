import firebase from "./firebase";
// Sama Data gate

function SamaData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "Sama(Urdu)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

function NayaDuarEnglishData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "Naya Duar(English)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

function NayaDuarUrduData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "Naya Duar(Urdu)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

function SindhiCourierData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "Sindhi Courier(Sindhi)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

function SindhExpressData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "SindhExpress(Sindhi)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

function KawishData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "Kawish(Sindhi)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

function HumSubData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "HumSub(Urdu)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

function DailyTimeData() {
  return new Promise((resolve, reject) => {
    let allData = [];
    firebase
      .firestore()
      .collection("data")
      .where("newspaper", "==", "Daily Time(English)")
      .get()
      .then((data) => {
        data.forEach(function (doc) {
          allData.push(doc.data());
        });
        resolve(allData);
      })
      .catch(() => reject());
  });
}

export {
  SamaData,
  NayaDuarEnglishData,
  NayaDuarUrduData,
  SindhiCourierData,
  SindhExpressData,
  KawishData,
  HumSubData,
  DailyTimeData,
};
