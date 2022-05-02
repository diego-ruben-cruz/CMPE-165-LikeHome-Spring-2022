import httpStatus from 'http-status';
import { v4 } from 'uuid';
import { db } from '../db';
//req.body <= has data
//create a resrvation in firebase
export const createReservation = async (req: any, res: any, next: any) => {
    const id = v4();
    const accountId = req.body.accountId
    const reservation = {...req.body, payed: false, id};
    try{
        const storedReservations = await db.collection('Reservations').where('accountId', '==', accountId).get()
        let temp: any = [];
        storedReservations.forEach(doc => {
            temp.push(doc.data());
            // console.log(doc.data())
        })
        var hasMultiple
        if (temp.length == 0) {
            hasMultiple = false
        }
        else {
            for (let i = 0; i < temp.length; i++) {
                hasMultiple = false
                let newDateIn = reservation.checkIn.split('-')
                //console.log(newDateIn)
                let newDayIn = `20${newDateIn[2]}-${newDateIn[0]}-${newDateIn[1]}`
                //console.log(newDayIn)
                var newDateCheckIn = new Date(newDayIn)
                //console.log(newDateCheckIn)

                let newDateOut = reservation.checkOut.split('-')
                //console.log(newDateOut)
                let newDayOut = `20${newDateOut[2]}-${newDateOut[0]}-${newDateOut[1]}`
                //console.log(newDayOut)
                var newDateCheckOut = new Date(newDayOut)
                //console.log(newDateCheckOut)
                
                let savedDateIn = temp[i].checkIn.split('-')
                //console.log(savedDateIn)
                let savedDayIn = `20${savedDateIn[2]}-${savedDateIn[0]}-${savedDateIn[1]}`
                //console.log(savedDayIn)
                var savedDateCheckIn = new Date(savedDayIn)
                //console.log(savedDateCheckIn)

                let savedDateOut = temp[i].checkOut.split('-')
                //console.log(savedDateOut)
                let savedDayOut = `20${savedDateOut[2]}-${savedDateOut[0]}-${savedDateOut[1]}`
                //console.log(savedDayOut)
                var savedDateCheckOut = new Date(savedDayOut)
                //console.log(savedDateCheckOut)
                
                // console.log(firstDate)
                // console.log(reservation.checkIn)
                if (temp[i].checkIn == reservation.checkIn) {                                           //same checkin days
                    console.log('failed test 1')
                    hasMultiple = true
                    break
                }
                else if (newDateCheckIn <= savedDateCheckIn && newDateCheckOut >= savedDateCheckIn) {    //old checkin in between
                    console.log('failed test 2')
                    hasMultiple = true
                    break
                }
                else if (newDateCheckIn <= savedDateCheckOut && newDateCheckOut >= savedDateCheckOut) {    //old checkout in between
                    console.log('failed test 3')
                    hasMultiple = true
                    break
                }
                else if (newDateCheckIn >= savedDateCheckIn && newDateCheckOut <= savedDateCheckOut) {    //new checkin and checkout in between old
                    console.log('failed test 4')
                    hasMultiple = true
                    break
                }
                else if (newDateCheckIn <= savedDateCheckIn && newDateCheckOut >= savedDateCheckOut) {    //old checkin and checkout in between new
                    console.log('failed test 5')
                    hasMultiple = true
                    break
                }
            }
        }
        if (hasMultiple == false) {
            console.log("mutli")
            await db.collection('Reservations').doc(id).set(reservation, {merge:true});
            res.status(httpStatus.OK).json({id});    
        }
        else {
            res.status(httpStatus.BAD_REQUEST).send('Date Conflict');
        }
    }
    catch (err){
        console.log('Create Reservation Error')
        next(err)
    }
}
//req.query
//get resveration via email
export const getReservation = async (req: any, res: any, next: any) => {
    //console.log("running get reservation")
    const { accountId } = req.params;
    console.log("this isthe " + accountId)
    //console.log(db.collection('Reservations').doc('Jimbo').get())
    try {
        const cringe = await db.collection('Reservations').where('accountId', '==', accountId).get()
        //const cringe = await db.collection('Reservations').doc('Jimbo').get()
        let temp: any = [];
        cringe.forEach(doc => {
            temp.push(doc.data());
        })

        res.status(httpStatus.OK).json({reservations: temp}) 
    } catch (err) {
        console.log("Get Reservation Error")
        next(err)
    }
}
// {"hotelName": "???",
// "checkin": "03/31/2022",
// "checkout": "04/02/2022",
// "guests": "5"}

//req.body
//delete reservation in firebase
export const deleteReservation = async (req: any, res: any, next: any) => {
    const {reservationId} = req.params

    try{
        await db.collection('Reservations').doc(reservationId).delete();
        res.status(httpStatus.OK).send(`Successfully deleted reservation ${reservationId}`);
    }
    catch (err){
        console.log('Delete Reservation Error')
        next(err)
    }
}