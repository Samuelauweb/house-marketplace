// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHHrDlphdMq7R50vPDVtdMtfUNSDYVjI0',
  authDomain: 'house-marketplace-app-b9795.firebaseapp.com',
  projectId: 'house-marketplace-app-b9795',
  storageBucket: 'house-marketplace-app-b9795.appspot.com',
  messagingSenderId: '381548964001',
  appId: '1:381548964001:web:a8c25d98f8d9426c71a8e0',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
