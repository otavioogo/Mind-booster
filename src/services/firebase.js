import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_2aIFTQQ2j4qyzfNosPTT7GN0_X0ba-M",
    authDomain: "mindbooster-311b3.firebaseapp.com",
    projectId: "mindbooster-311b3",
    storageBucket: "mindbooster-311b3.appspot.com",
    messagingSenderId: "982572691091",
    appId: "1:982572691091:web:4a104e65542439944be766",
    measurementId: "G-H3LXFMR105"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
