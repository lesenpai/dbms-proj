import { Router } from 'express';
import passport from 'passport';
import Boom from '@hapi/boom';
import { authType } from '../../tools/auth';
import { UserController, IUserJSON } from '../../controllers/user.controller';
import { slog } from '@dbms-proj/utils';
import { AdminController } from '../../controllers';

const router = Router();

router.post('/login', async (req, res, next) =>
    passport.authenticate(
        'local',
        {
            session: false,
        },
        (err, passportUser: IUserJSON, info) => {
            if (err) {
                return next(err);
            }

            if (passportUser) {
                return res.jsongo(UserController.toAuthJSON(passportUser));
            }

            next(Boom.unauthorized('bo.wrong_login_password'));
        }
    )(req, res, next)
);

router.get('/initAdmin', authType.optional, async (req, res, next) => {
    try {
        const user = await UserController.model.findOne({ where: { login: 'admin' } });
        slog.debug('user', user);
        
        if (!user) {
            const newUser = await UserController.register({
                login: 'admin',
                password: 'root',
                name: 'Lev',
                surname: 'Platonov',
                dob: new Date('12.07.2000').toISOString(),
                phone: '+0',
                email: 'mail@example.com',
                role_id: 1,
            });
            slog.debug('new user', newUser);

            const newAdmin = await AdminController.doCreate({
                // passport_ser: '',
                // passport_id: ,
                // country: ,
                // city: ,
                // street: ,
                // building: ,
                // flat: ,
                user_id: newUser.id
            });

            slog.debug('new user', newUser);
            res.jsongo(UserController.toAuthJSON(newUser));
        } else {
            res.jsongo({ already: true });
        }
    } catch (e) {
        next(e);
    }
});

export default router;
