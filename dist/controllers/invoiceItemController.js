"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoiceLineItemsByInvoiceIdHandler = exports.createInvoiceLineItemHandler = void 0;
const invoiceItemService_1 = require("../services/invoiceItemService");
function createInvoiceLineItemHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lineItem = yield (0, invoiceItemService_1.createInvoiceLineItem)(req.body);
            res.status(201).json({ message: 'Invoice line item created successfully', lineItem });
        }
        catch (error) {
            console.error('Error creating invoice line item:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.createInvoiceLineItemHandler = createInvoiceLineItemHandler;
function getInvoiceLineItemsByInvoiceIdHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { invoiceId } = req.params;
            const lineItems = yield (0, invoiceItemService_1.getInvoiceLineItemsByInvoiceId)(invoiceId);
            res.status(200).json({ lineItems });
        }
        catch (error) {
            console.error('Error fetching invoice line items:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.getInvoiceLineItemsByInvoiceIdHandler = getInvoiceLineItemsByInvoiceIdHandler;
//# sourceMappingURL=invoiceItemController.js.map