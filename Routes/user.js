import express from 'express';
import opts from '../Controllers/usercon.js';
const u_router=express.Router();

u_router.get('/:id',opts.get_single_user);
u_router.post('/',opts. post_user);
u_router.delete('/:id',opts.delete_user);
u_router.patch('/:id',opts.update_user);

export default u_router;
