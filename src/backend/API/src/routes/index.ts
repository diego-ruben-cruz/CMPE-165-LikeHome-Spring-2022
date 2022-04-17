import express from 'express';

import hotelRoutes from './hotelRoutes';
import accountRoutes from './accountRoutes';
import reservationRoutes from './reservationRoutes';
import paymentRoutes from './paymentRoutes';

const router = express.Router();

router.use('/hotel', hotelRoutes);
router.use('/account', accountRoutes);
router.use('/reservation', reservationRoutes);
router.use('/payment', paymentRoutes);

export default router;