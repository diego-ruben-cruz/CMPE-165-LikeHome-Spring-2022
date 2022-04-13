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
//   "saveDetails": true
// }
export const pay = async (req: any, res: any, next: any) => {
  console.log('Called pay method');

  let temp = req.body;
  
  try {
    if (!temp.paymentDetails) {
      const doc = await db.collection('Users').doc(temp.accountId).get();
      if (doc)
        temp = {...temp, paymentDetails: doc.data()?.Payment}
    }
    if (temp.saveDetails)
      await db.collection('Users').doc(temp.accountId).set({Payment: temp.paymentDetails}, {merge: true})

    if (validateCardNumber(temp.paymentDetails)) {
      await db.collection('Reservations').doc(temp.reservationId).set({payed: true}, {merge: true});
      res.status(httpStatus.OK).send('Payment successful');
    } else
      res.status(httpStatus.BAD_REQUEST).send('Invalid payment details');
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
