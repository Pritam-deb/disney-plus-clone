  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCd1MVfYYWP6sLd0xFM3ijyWpMY2kHNTKU",
    authDomain: "disneyplus-clone-3cbb6.firebaseapp.com",
    projectId: "disneyplus-clone-3cbb6",
    storageBucket: "disneyplus-clone-3cbb6.appspot.com",
    messagingSenderId: "317226214245",
    appId: "1:317226214245:web:7acb476e60c07a7d7b378c",
    measurementId: "G-133Z8V5GXD"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, firebaseApp, provider, storage }
  export default db;