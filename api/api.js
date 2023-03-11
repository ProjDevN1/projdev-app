import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig.js'
import { getCurrentTime, getCurrentDate } from './DataHandling.js'

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

//Export the temp functions here
export { tempGetGig }


//Gets all users as an array and reuturns it. Very much work in progress
async function getUser(){
    var users = []
    const usersSnapshot = await getDocs(collection(db, 'users'))
    usersSnapshot.forEach((doc) => {
        users.push(doc.data())
    })
    return users
}

//Edits the required data in correct format for activegigslist screen
function formatActiveGigsData(gigsData, id){
    const ITEM = {
        id: id,
        leaveTime:  `Leave between ${gigsData.startTime}`,
        arrivalTime:  `Arrival between ${gigsData.endTime}`,
        vehicle: gigsData.vehicle,
        startAddress: 'Dont have addresses yet lmao',
        arrivalAddress: 'Dont have addresses yet lmao',
        estimatedTime: 'Not implemented',
        addInfo: 'DOnt have these yet either lol',
        reward: gigsData.reward,
    }
    return ITEM
}

//Gets an array of user_1 active gigs. When user switching is completed, will change it to get active gigs of current user
async function getActiveGigs(){

    //Gets data for a gig specified by the gig id in users active gigs array and pushes it to activegigs
    var id = 0
    const activeGigs = []

    //Gets a gig, formats it with another function, increments the id and pushes the result to activegigs array
    async function getGig(value){
        const gigSnapshot = await getDoc(doc(db, 'gigs', value))
        const formattedGigs = formatActiveGigsData(gigSnapshot.data(), id)
        activeGigs.push(formattedGigs)
        id += 1
    }
    
    //Gets user specified by the getUser function
    const users = await getUser()
    //Gets users active gigs array
    const activeGigsPerUser = users[0].gigsActive
    
    //Checks if users active gigs array is not empty, if it's not then runs the getGig function for all of them
    if (activeGigsPerUser.length < 0){
        return 'No active gigs'
    } else {
        await activeGigsPerUser.forEach(getGig)
        return activeGigs
    }
}




//A function to get gigs from the DB that are NOT completed
//@Ira
async function getOngoingGigs() { //Return gigs in an arraylist
    var gigArray = [];
    const q = query(collection(db, 'gigs'), where ("completed", "==", false)); //Filters gigs that are already done
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        gigArray.push(doc.data()); //Append gigs to gigArray-list
        //console.log(doc.id, "=>", doc.data()); //for testing purposes
        //console.log(gigArray);   
});

}

//Export non-temp functions here
export { getOngoingGigs, getUser, getActiveGigs }