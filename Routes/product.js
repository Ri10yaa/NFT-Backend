import express from 'express';
import p_opts from '../Controllers/productcon.js';
const p_router=express.Router();

p_router.get('/:id',p_opts.get_single_product);
p_router.get('/',p_opts.get_all_products);
p_router.post('/',p_opts.post_product);
p_router.delete('/:id',p_opts.delete_product);
p_router.patch('/:id',p_opts.update_product);

export default p_router;

