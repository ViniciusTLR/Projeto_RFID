import {Router} from 'express'

import { CreateItemsController } from './src/Controller/pagStart/CreateItemsController';

const router = Router();

router.post('/produtos', new CreateItemsController().handle)

export {router}