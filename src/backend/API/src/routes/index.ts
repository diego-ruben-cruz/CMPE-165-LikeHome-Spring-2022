import express from 'express';

import hotelRoutes from './hotelRoutes';
import reservationRoutes from './reservationRoutes';
import paymentRoutes from './paymentRoutes';
import accountRoutes from './accountRoutes';

const router = express.Router();

router.use('/hotel', hotelRoutes);
router.use('/account', accountRoutes);
router.use('/reservation', reservationRoutes);
router.use('/payment', paymentRoutes);

export default router;