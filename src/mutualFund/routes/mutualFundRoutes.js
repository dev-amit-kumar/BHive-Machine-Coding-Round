import { Router } from 'express';
import mutualFundController from '../controllers/mutualFundController.js';

const router = Router();

router.get('/', mutualFundController.getFunds);
router.get('/family', mutualFundController.getFamilies);

export default router;
