import express from 'express';
import { registerClient } from '../controllers/clientController';

const router = express.Router();

router.post('/clients/register', registerClient);

export { router as clientRoutes };


