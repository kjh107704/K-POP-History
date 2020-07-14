import {Router} from 'express';
import {AdminController} from '../controller/AdminController';

const router = Router();

router.get('/charts', AdminController.getCharts);
router.post('/music', AdminController.addMusic);
router.get('/melonCharts',AdminController.getMelonCharts);

export default router;