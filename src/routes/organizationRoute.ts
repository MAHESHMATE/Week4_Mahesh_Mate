import express from 'express';
import { registerOrganizations } from '../controllers/organizationController';

const router = express.Router();

router.post('/organizations/register', registerOrganizations);


export { router as organizationRoutes };
