import {Router} from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

export const router = Router();
const path = '/';

router.post('/signup', passport.authenticate('signup', {session:false}), (req,res,next) => {
    res.json({user:req.user});
});

router.post('/login', (req,res,next) => {
    passport.authenticate('login', (err,user,info) => {
        try {
            if (err || !user) {
                return next(err);
            }
            req.logIn(user, {session:false}, (err) => {
                if (err) {
                    return next(err);
                }
                //construir o token com informação não sensíveis
                //assinar o token
                const token = jwt.sign({user:user.username}, 'minhachavesecreta');
                //retornar o token
                return res.json({token});
            });
        }
        catch (error) {
            return next(error);
        }
    })(req,res,next);
});