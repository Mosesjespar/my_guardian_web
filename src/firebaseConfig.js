import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJv0I3XHX-oRvQrL0VK2bK-bKCBY1vY-o",
  authDomain: "my-guardian-v2.firebaseapp.com",
  projectId: "my-guardian-v2",
  storageBucket: "my-guardian-v2.appspot.com",
  messagingSenderId: "630829998988",
  appId: "1:630829998988:web:d980c8ee4e64fa9e22aca9",
  measurementId: "G-TNMK9N4HW5",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, signInWithPhoneNumber };
