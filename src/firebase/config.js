import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDC6SEviqGdBdrbIcENdvvvAjuFZTGc4e0",
  authDomain: "birdies-clothes.firebaseapp.com",
  projectId: "birdies-clothes",
  storageBucket: "birdies-clothes.appspot.com",
  messagingSenderId: "794175141498",
  appId: "1:794175141498:web:19cbf967669329da00edc3"
};


export const app = initializeApp(firebaseConfig);
