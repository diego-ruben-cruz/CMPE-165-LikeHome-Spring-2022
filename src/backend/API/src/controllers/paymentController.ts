import { FieldValue } from 'firebase-admin/firestore';
import httpStatus from 'http-status';
import { db } from '../db';

// example body:
// {
//   "accountId": "bob@gmail.com",
//   "reservationId": "123e4567-e89b-12d3-a456-426614174000",
//   "paymentDetails": {
//     "number": "4242424242424242",
//     "exp": "03/32",
//     "cvc": "123"
//   },
//   "saveDetails": true,
//   "useSeals": true
// }
export const pay = async (req: any, res: any, next: any) => {
  console.log('Called pay method');

  let temp = req.body;
  
  try {
    const reservation = (await db.collection('Reservations').doc(temp.reservationId).get()).data();
    const user = (await db.collection('Users').doc(temp.accountId).get()).data();
    const days = getDays(reservation?.checkIn, reservation?.checkOut);

    if (temp.useSeals) {
      const reqSeals = 7+4*days;
      if (user?.seals < reqSeals)
        res.status(httpStatus.BAD_REQUEST).send('Not enought seals');
      else {
        await db.collection('Users').doc(temp.accountId).set({seals: FieldValue.increment(-1*reqSeals)});
        res.status(httpStatus.OK).send(`Successfully payed ${reqSeals} seals`);
      }
    } else {
      if (!temp.paymentDetails) {
        temp = {...temp, paymentDetails: user?.Payment}
      }
      if (temp.saveDetails)
        await db.collection('Users').doc(temp.accountId).set({payment: temp.paymentDetails}, {merge: true})

      if (validateCardNumber(temp.paymentDetails)) {
        await db.collection('Reservations').doc(temp.reservationId).set({payed: true}, {merge: true});
        const price = parseInt(reservation?.price);
        let addSeals = 1;
        if (price >= 225)
          addSeals = 5;
        else if (price >= 150)
          addSeals = 3;
        else if (price >= 75)
          addSeals = 2;
        await db.collection('Users').doc(temp.accountId).set({seals: FieldValue.increment(addSeals)});
        res.status(httpStatus.OK).send(`Successfully payed $${price} and gained ${addSeals} seals`);
      } else
        res.status(httpStatus.BAD_REQUEST).send('Invalid payment details');
    }
  } catch (err) {
    console.log('payment error');
    next(err);
  }
}

const validateCardNumber = (pd: any) => {
  let regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(pd.number)) {
    console.log('invalid num');
    return false;
  }
  regex = new RegExp("[01][0-9]\/[0123][0-9]");
  if (!regex.test(pd.exp)) {
    console.log('invalid exp');
    return false;
  }
  regex = new RegExp("[0-9][0-9][0-9]");
  if (!regex.test(pd.cvc)) {
    console.log('invalid cvc');
    return false;
  }

  return true;
}

const getDays = (date1: string, date2: string) => {
  let da = date1.split('-');
  let ds = `20${da[2]}-${da[0]}-${da[1]}`;  // YYYY-MM-DD
  const d1 = new Date(ds);
  da = date2.split('-');
  ds = `20${da[2]}-${da[0]}-${da[1]}`;  // YYYY-MM-DD
  const d2 = new Date(ds);
  const time = d2.getTime() - d1.getTime();
  const days = time / (1000 * 3600 * 24);
  return days;
}
