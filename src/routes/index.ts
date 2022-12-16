import express from 'express';
import chefsRoutes from './chefs.routes';
const router = express.Router();
router.use('/api/chefs/', chefsRoutes);
export default router;