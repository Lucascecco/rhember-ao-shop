import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { initializeApp } from "firebase/app"

// const firebaseConfig = {
//   apiKey: "AIzaSyCZ49cFKT4OyYCZLl1q2qmcUwGu9q7viCY",
//   authDomain: "coderhouse-ecommerce-a54b2.firebaseapp.com",
//   projectId: "coderhouse-ecommerce-a54b2",
//   storageBucket: "coderhouse-ecommerce-a54b2.appspot.com",
//   messagingSenderId: "1008758533628",
//   appId: "1:1008758533628:web:877e8e1cb2325b77f01679"
// }

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
