import httpStatus from 'http-status';
import { v4 } from 'uuid';
import { db } from '../db';
//tldr just make it do the stuff in firebase
//req.body <= has data
//create a resrvation in firebase
export const createReservation = async (req: any, res: any, next: any) => {
    const id = v4();
    const reservation = {...req.body, payed: false, id};
    try{
        await db.collection('Reservations').doc(id).set(reservation, {merge:true});
        res.status(httpStatus.OK).json({id});
    }
    catch (err){
        console.log('you fucked up')
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
        console.log("ya fuked up")
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
        console.log('you fucked up')
        next(err)
    }
}