import { Router } from 'express';
import { getFunds } from '../controllers/mutualFundController.js';

const router = Router();

router.get('/', getFunds);

export default router;
