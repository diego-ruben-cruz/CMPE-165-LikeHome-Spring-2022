import express from 'express';

import * as payment from '../controllers/paymentController';

const router = express.Router();

router.route('/pay').post(payment.pay);

export default router;