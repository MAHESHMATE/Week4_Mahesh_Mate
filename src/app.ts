import express from "express";
import * as dotenv from "dotenv";
import { organizationRoutes } from "./routes/organizationRoute";
import { clientRoutes } from "./routes/clientRoute";
import { sowRoutes } from "./routes/sowRoute";
import { paymentPlanRoutes } from "./routes/sowPayPlanRoute";
import { sowPaymentPlanItemRoutes } from "./routes/sowPayPlanItemRoute";
import { invoiceRoutes } from "./routes/invoiceRoute";
import { invoiceLineItemRoutes } from "./routes/invoiceLineItemRoute";
import { paymentRoutes } from "./routes/paymentRoute";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api", organizationRoutes);
app.use("/api", clientRoutes);
app.use("/api", sowRoutes);
app.use("/api", paymentPlanRoutes);
app.use("/api", sowPaymentPlanItemRoutes);
app.use("/api", invoiceRoutes);
app.use("/api", invoiceLineItemRoutes);
app.use("/api", paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
