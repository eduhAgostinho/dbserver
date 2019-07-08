import express from 'express';
import {router as aloRotas} from './alo.rotas';
import {router as authRotas} from './auth.rotas';
import passport from 'passport';
import bodyParser from 'body-parser';
import './auth';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(passport.initialize());
app.use('/', aloRotas);
app.use('/auth', authRotas);

export default app;