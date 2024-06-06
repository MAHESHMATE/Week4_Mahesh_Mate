"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sowPlanRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sowPlanController_1 = require("../controllers/sowPlanController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
exports.sowPlanRoutes = router;
router.post('/payment-plans', authMiddleware_1.authenticate, sowPlanController_1.createPaymentPlanHandler);
router.get('/payment-plans', authMiddleware_1.authenticate, sowPlanController_1.getAllPaymentPlansHandler);
router.get('/payment-plans/:sowId', authMiddleware_1.authenticate, sowPlanController_1.findPaymentPlanBySOWIdHandler);
router.put('/payment-plans/:sowId', authMiddleware_1.authenticate, sowPlanController_1.updatePaymentPlanHandler);
router.delete('/payment-plans/:sowId', authMiddleware_1.authenticate, sowPlanController_1.deletePaymentPlanHandler);
router.get('/client/payment-plans', authMiddleware_1.authenticate, sowPlanController_1.getClientPaymentPlansHandler);
//# sourceMappingURL=sowPlanRoute.js.map