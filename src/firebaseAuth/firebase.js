import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "@firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDI-rukZSw5we_uQ3a8Sf-0Orrq6iRC_ZI",
  authDomain: "shopping-appnative.firebaseapp.com",
  projectId: "shopping-appnative",
  storageBucket: "shopping-appnative.appspot.com",
  messagingSenderId: "458860245057",
  appId: "1:458860245057:web:1b86760a770d91e36d56c0",
  measurementId: "G-KJ3X3W0MXX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db =getFirestore(app)
export {auth}
