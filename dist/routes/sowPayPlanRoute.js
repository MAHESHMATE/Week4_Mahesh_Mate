"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPlanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sowPayPlanController_1 = require("../controllers/sowPayPlanController");
const router = express_1.default.Router();
exports.paymentPlanRoutes = router;
router.post('/payment-plans', sowPayPlanController_1.createPaymentPlanHandler);
router.get('/pay-plans/:sowId', sowPayPlanController_1.findPaymentPlanBySOWIdHandler);
router.put('/pay-plans/:sowId', sowPayPlanController_1.updatePaymentPlanHandler);
router.delete('/pay-plans/:sowId', sowPayPlanController_1.deletePaymentPlanHandler);
router.get('/client/pay-plans/:customerId', sowPayPlanController_1.getClientPaymentPlansHandler);
//# sourceMappingURL=sowPayPlanRoute.js.map