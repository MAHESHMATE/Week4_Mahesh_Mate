"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const organizationRoute_1 = require("./routes/organizationRoute");
const clientRoute_1 = require("./routes/clientRoute");
const sowRoute_1 = require("./routes/sowRoute");
const sowPayPlanRoute_1 = require("./routes/sowPayPlanRoute");
const sowPayPlanItemRoute_1 = require("./routes/sowPayPlanItemRoute");
const invoiceRoute_1 = require("./routes/invoiceRoute");
const invoiceLineItemRoute_1 = require("./routes/invoiceLineItemRoute");
const paymentRoute_1 = require("./routes/paymentRoute");
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use("/api", organizationRoute_1.organizationRoutes);
app.use("/api", clientRoute_1.clientRoutes);
app.use("/api", sowRoute_1.sowRoutes);
app.use("/api", sowPayPlanRoute_1.paymentPlanRoutes);
app.use("/api", sowPayPlanItemRoute_1.sowPaymentPlanItemRoutes);
app.use("/api", invoiceRoute_1.invoiceRoutes);
app.use("/api", invoiceLineItemRoute_1.invoiceLineItemRoutes);
app.use("/api", paymentRoute_1.paymentRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map