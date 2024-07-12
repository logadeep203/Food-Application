import {getApp,getApps,initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBFuxSqilyc3Hm5D1Eq2_25IdZu_pQ1p_s",
    authDomain: "foodbooking-b4609.firebaseapp.com",
    databaseURL: "https://foodbooking-b4609-default-rtdb.firebaseio.com",
    projectId: "foodbooking-b4609",
    storageBucket: "foodbooking-b4609.appspot.com",
    messagingSenderId: "868320754035",
    appId: "1:868320754035:web:1fa58aefc8ecdc92986d06"
  };

  const app= getApps.length >0 ? getApp() : initializeApp(firebaseConfig);

  const firestore= getFirestore(app)
  const storage=getStorage(app)

  export {app,firestore,storage};
  
