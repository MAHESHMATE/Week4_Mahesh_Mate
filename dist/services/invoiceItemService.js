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
exports.getInvoiceLineItemsByInvoiceId = exports.createInvoiceLineItem = void 0;
const invoiceItemModel_1 = require("../models/invoiceItemModel");
function createInvoiceLineItem(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lineItem = yield invoiceItemModel_1.InvoiceLineItem.create(data);
            return lineItem;
        }
        catch (error) {
            console.error('Error creating invoice line item:', error);
            throw error;
        }
    });
}
exports.createInvoiceLineItem = createInvoiceLineItem;
function getInvoiceLineItemsByInvoiceId(invoiceId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lineItems = yield invoiceItemModel_1.InvoiceLineItem.findAll({ where: { invoiceId } });
            return lineItems;
        }
        catch (error) {
            console.error('Error fetching invoice line items:', error);
            throw error;
        }
    });
}
exports.getInvoiceLineItemsByInvoiceId = getInvoiceLineItemsByInvoiceId;
//# sourceMappingURL=invoiceItemService.js.map