import Router, {Request, Response} from 'express'
import ItemService from './ItemService';

const router = Router();
const itemService = new ItemService();

router.get('/', async (req: Request, res: Response) => {
    console.debug('Called for get / with body:');
    console.debug(req.body);
    const items = await itemService.get();
    res.status(200).json(items);
    console.debug('Response data:');
    console.debug(items);
});

router.post('/', async (req: Request, res: Response) => {
    console.debug('Called for post / with body:');
    console.debug(req.body);
    const item = await itemService.add(req.body.text);
    const status = item ? 201 : 500
    res.status(status).json(item);
    console.debug(`Response status: ${status}`);
});

export default router;