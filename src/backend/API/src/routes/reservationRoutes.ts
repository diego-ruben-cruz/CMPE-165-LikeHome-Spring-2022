import express from 'express';

import * as reservation from '../controllers/reservationController';

const router = express.Router();

router.route('/:accountId').get(reservation.getReservation);
router.route('/').post(reservation.createReservation);
//router.route('/:accountId').patch(reservation.updateAccount);
router.route('/:reservationId').delete(reservation.deleteReservation);

export default router;