const watchList = document.querySelector("#watchList");

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
    renderList(snapshot.docs);
});;

function renderList(docs) {   // Loop through every document in our collection
    watchList.innerHTML = '';
    for (let doc of docs) {
        let data = doc.data();
        let watchItem = document.createElement('li');
        let watchDate = document.createElement('span');
        let watchDetails = document.createElement('p');
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML='Remove';
        removeBtn.classList.add("removeBtn");
        watchDate.innerHTML = data.date;
        watchDetails.innerHTML = ` 1 ${data.from} = ${data.rate} ${data.to}`;
        watchItem.appendChild(watchDate);
        watchItem.appendChild(watchDetails);
        // watchItem.appendChild(removeBtn)
        watchList.appendChild(watchItem)
    }
}
export function getDocs() {
    db.collection("currencies").onSnapshot(function (snapshot) {
        renderList(snapshot.docs);
    });;
}

export function addToList(data) {
    db.collection("currencies").add({
        date: data.date,
        from: data.base,
        to: Object.keys(data.rates)[0],
        rate: Object.values(data.rates)[0],
    });
}
let removeBtns = document.querySelectorAll(".removeBtn");

console.log(removeBtns);
