import Router, {Request, Response} from 'express'
import ItemQueryService from './ItemQueryService';

const router = Router();
const itemQueryService = new ItemQueryService();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json(itemQueryService.get());
});

export default router;