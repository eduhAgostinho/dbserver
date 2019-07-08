import passport from 'passport';
import passportlocal from 'passport-local';
import passportjwt from 'passport-jwt';

const LocalStrategy = passportlocal.Strategy;

passport.use('signup', new LocalStrategy((user,passwd,done) => {
    //cadastrar o usuário na base de dados
    console.log(`Cadastrado: ${user}`);
    return done(undefined, {username:user,password:passwd});
}));

passport.use('login', new LocalStrategy((user,passwd,done) => {
    //buscar usuário na base de dados
    //validar usuário e senha
    if (user !== 'usuario') {
        return done(undefined, false, {message:'Usuário não encontrado'});
    }
    if (passwd !== 'senha') {
        return done(undefined, false, {message:'Usuário ou senha iválidos'});
    }
    return done(undefined, {username:user,password:passwd});
}));

const JwtStrategy = passportjwt.Strategy;

passport.use(new JwtStrategy({
    secretOrKey: 'minhachavesecreta',
    //indicar onde está o token enviado pelo cliente
    //neste caso está no cabeçalho como Authorization: Bearer token 
    jwtFromRequest: passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken()
    }, (token,done) => {
        try {
            return done(undefined, token.user);
        } catch (error) {
            done(error);
        }
    })
);