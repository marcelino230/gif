import { Router } from 'express'
import { login, register } from '../controllers/auth.controller.js';
import { addFavorite, getFavorite, deleteFavorite } from '../controllers/favorites.controller.js'
import verifyToken from '../middleware/verifyToken.js';

const router = Router();

//Auth
router.post('/login', login);
router.post('/register', register);

//user favorites
router.get('/favorite', [verifyToken], getFavorite);
router.post('/favorite/:id', [verifyToken], addFavorite);
router.delete('/favorite/:id', [verifyToken], deleteFavorite);


export default router;