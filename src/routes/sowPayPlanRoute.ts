import express from 'express';
import {createPaymentPlanHandler,findPaymentPlanBySOWIdHandler,updatePaymentPlanHandler,deletePaymentPlanHandler,getClientPaymentPlansHandler} from '../controllers/sowPayPlanController';

const router = express.Router();

router.post('/payment-plans', createPaymentPlanHandler);
router.get('/pay-plans/:sowId', findPaymentPlanBySOWIdHandler);
router.put('/pay-plans/:sowId', updatePaymentPlanHandler);
router.delete('/pay-plans/:sowId', deletePaymentPlanHandler);

router.get('/client/pay-plans/:customerId', getClientPaymentPlansHandler);


export { router as paymentPlanRoutes };
