import express from 'express';

import hotelRoutes from './hotelRoutes';
<<<<<<< HEAD
import accountRoutes from './accountRoutes';
=======
// import accountRoutes from './accountRoutes';
import reservationRoutes from './reservationRoutes';
import paymentRoutes from './paymentRoutes';
>>>>>>> origin/main

const router = express.Router();

router.use('/hotel', hotelRoutes);
<<<<<<< HEAD
router.use('/account', accountRoutes);
=======
// router.use('/account', accountRoutes);
router.use('/reservation', reservationRoutes);
router.use('/payment', paymentRoutes);
>>>>>>> origin/main

export default router;