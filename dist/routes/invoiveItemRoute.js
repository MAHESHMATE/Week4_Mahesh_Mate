"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceItemRoutes = void 0;
const express_1 = __importDefault(require("express"));
const invoiceItemController_1 = require("../controllers/invoiceItemController");
const router = express_1.default.Router();
exports.invoiceItemRoutes = router;
router.post('/invoice-line-items', invoiceItemController_1.createInvoiceLineItemHandler);
router.get('/invoice-line-items/:invoiceId', invoiceItemController_1.getInvoiceLineItemsByInvoiceIdHandler);
//# sourceMappingURL=invoiveItemRoute.js.map