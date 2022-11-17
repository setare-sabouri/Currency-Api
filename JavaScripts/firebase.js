const watchContainer = document.querySelector(".watch-section");
const watchList = document.querySelector("#watchList");
const apiKey = "";
const key = config.SECRET_API_KEY;
const firebaseConfig = {
    apiKey: key,
    authDomain: "currency-dbece.firebaseapp.com",
    projectId: "currency-dbece",
    storageBucket: "currency-dbece.appspot.com",
    messagingSenderId: "966470980595",
    appId: "1:966470980595:web:fdd2fdcd78903165893886",
    measurementId: "G-0MJCZL7YK3"
};
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);

//.......................................................
db.collection("currencies").onSnapshot(function (snapshot) {
    renderPosts(snapshot.docs);
});;

function renderPosts(docs) {
    watchList.innerHTML = '';
    // Loop through every document in our collection
    for (let doc of docs) {
        let data = doc.data();
        let watchItem = document.createElement('li');
        let watchDate = document.createElement('span');
        let watchDetails = document.createElement('p');
        watchDate.innerHTML = data.date;
        console.log(data);
        watchDetails.innerHTML = ` 1 ${data.from} = ${data.rate} ${data.to}`;
        watchItem.appendChild(watchDate);
        watchItem.appendChild(watchDetails);
        watchList.appendChild(watchItem)
    }
}
export function getDocs() {
    db.collection("currencies").onSnapshot(function (snapshot) {
        renderPosts(snapshot.docs);
    });;
}

export function addToList(data) {
    console.log(data);
    db.collection("currencies").add({
        date: data.date,
        from: data.base,
        to: Object.keys(data.rates)[0],
        rate: Object.values(data.rates)[0],
    });
}

