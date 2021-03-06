import firebase from 'firebase'

// import 'firebase/auth'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7m5WNLrSJ1OS_fOUi17H0lx05T6CN6Hc",
  authDomain: "chat-app-b29c2.firebaseapp.com",
  projectId: "chat-app-b29c2",
  storageBucket: "chat-app-b29c2.appspot.com",
  messagingSenderId: "240988522331",
  appId: "1:240988522331:web:1ad776d64f830049177c7e"
}

firebase.initializeApp(firebaseConfig)

export default firebase
