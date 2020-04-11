import {Router} from 'express';
import {AdminController} from '../controller/AdminController';

const router = Router();

router.get('/charts', AdminController.getCharts);
router.post('/music', AdminController.addMusic);

export default router;