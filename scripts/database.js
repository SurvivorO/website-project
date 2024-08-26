import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuIfny3j_e45KFLFV7yd4MldRTYOEHttI",
    authDomain: "jaipur-travel-guide-1de9b.firebaseapp.com",
    projectId: "jaipur-travel-guide-1de9b",
    storageBucket: "jaipur-travel-guide-1de9b.appspot.com",
    messagingSenderId: "160891637948",
    appId: "1:160891637948:web:7c9d2477b24185251e40b9",
    measurementId: "G-8HPXM4PG3Y"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

    // Initialize Firestore
    const db = getFirestore(app);

    // Handle form submission
    document.getElementById('newsletter-form').addEventListener('submit', async function (e) {
        e.preventDefault();  // Prevent the form from submitting and refreshing the page

        const email = document.getElementById('email').value;  // Get the email value
        console.log("Email entered:", email);

        try {
            const docRef = await addDoc(collection(db, 'newsletter_signups'), {
                email: email,
                timestamp: serverTimestamp()
            });
            console.log("Document written with ID:", docRef.id);
            document.getElementById('message').innerText = "Thank you for signing up!";
            document.getElementById('newsletter-form').reset();  // Reset form
        } catch (error) {
            document.getElementById('message').innerText = "Error signing up, please try again.";
            console.error("Error adding document: ", error);
        }
    });