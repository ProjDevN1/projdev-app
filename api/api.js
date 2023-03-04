import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig.js'

// FOR FUNCTIONS THAT START WITH TEMP:
// Only used in database testing, no not make any actual app logic rely on them
// All temp functions will get changed or deleted frequently


//Example on how to get data from the database
async function tempGetGig(){

    //Sets a reference to which document you want, format (db, foldername, filename)
    //Folder and file names can be read from variables
    const docRef = doc(db, 'gigs', 'gig_1')

    //Gets a copy of the file specified in the reference
    const docData = await getDoc(docRef)

    //Logs the fact that data was indeed fetched
    console.log('Data fetched')

    //Returns the data contained in the document. The .data() function is necessary
    return docData.data()
}

//Exports the functions
export { tempGetGig }