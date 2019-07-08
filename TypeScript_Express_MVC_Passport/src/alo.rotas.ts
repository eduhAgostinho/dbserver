import * as aloControlador from './alo.controlador';
import {Router} from 'express';
import passport from 'passport';

export const router = Router();
const path = '/alo';

router.get(path, aloControlador.getAlo);
router.get(`${path}/erro`, aloControlador.getAloErro);
router.get(`${path}/:nome`, passport.authenticate('jwt', {session:false}), aloControlador.getAloComNome);
