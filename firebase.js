import {cert, initializeApp} from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"
import {credentials} from "./credentials.js"

initializeApp({
credential: cert(credentials)
})


const db = getFirestore()

// Ready to do anything with database
console.log("Database is ready")

db.collection("cars").get()
.then(moviesCollection => {
    moviesCollection.docs.forEach(movie => {
    console.log(movie.data())

    })


}).catch(err => 
console.log(err))
    