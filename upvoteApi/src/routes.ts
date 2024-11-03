import Router, {Request, Response} from 'express'
import ItemQueryService from './ItemQueryService';

const router = Router();
const itemQueryService = new ItemQueryService();

router.get('/', async (req: Request, res: Response) => {
    console.debug('Called for get / with body:');
    console.log(req.body);
    const items = await itemQueryService.get();
    res.status(200).json(items);
    console.debug('Response data:');
    console.log(items);
});

export default router;