import { Router, json, urlencoded } from 'express';
import logger from 'morgan';
import Boom from '@hapi/boom';
import { authType, UserRole } from '../../tools/auth';
import { crud, Action } from '../../crud';
import authRoute from './auth';
import imagesRoute from './images';

import {
    ActivityController,
    AdminController,
    AgentController,
    ArticleController,
    CompanyController,
    Company2ActivityController,
    Company2ItemController,
    EmailController,
    ItemCategoryController,
    ItemTypeController,
    PhoneController,
    RoleController,
    UserController,
} from '../../controllers';
import { ItemController } from '../../controllers/Item.controller';
import { userInfo } from 'os';
import { OpeningHoursPeriodController } from '../../controllers/OpeningHoursPeriod.controller';

const router = Router();

router.use(logger('dev'));
router.use(json());
router.use(urlencoded({ extended: false }));

// API Routes
router.use('/auth', authRoute);

// Set models controllers

export const defaultRoles = [
    UserRole.ADMIN,
    UserRole.AGENT,
    UserRole.VISITOR
];

router.use(
    '/activity',
    authType.required,
    crud(ActivityController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use(
    '/admin',
    authType.required,
    crud(AdminController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles: [UserRole.ADMIN]
    })
);

router.use(
    '/agent',
    authType.required,
    crud(AgentController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles: [UserRole.ADMIN, UserRole.AGENT]
    })
);

router.use(
    '/user',
    authType.required,
    crud(UserController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use(
    '/article',
    authType.required,
    crud(ArticleController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.DELETE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.UPDATE]: [UserRole.ADMIN, UserRole.AGENT],
        },
        defaultRoles
    })
);

router.use(
    '/company',
    authType.required,
    crud(CompanyController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use(
    '/company2activity',
    authType.required,
    crud(Company2ActivityController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use(
    '/company2item',
    authType.required,
    crud(Company2ItemController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.DELETE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.UPDATE]: [UserRole.ADMIN, UserRole.AGENT],
        },
        defaultRoles
    })
);

router.use(
    '/email',
    authType.required,
    crud(EmailController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.DELETE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.UPDATE]: [UserRole.ADMIN, UserRole.AGENT],
        },
        defaultRoles
    })
);

router.use(
    '/itemcategory',
    authType.optional,
    ItemCategoryController.getRouter(),
    crud(ItemCategoryController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.DELETE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.UPDATE]: [UserRole.ADMIN, UserRole.AGENT],
        },
        defaultRoles
    })
);

router.use(
    '/itemtype',
    authType.required,
    crud(ItemTypeController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use(
    '/item',
    authType.required,
    crud(ItemController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use(
    '/phone',
    authType.required,
    crud(PhoneController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.DELETE]: [UserRole.ADMIN, UserRole.AGENT],
            [Action.UPDATE]: [UserRole.ADMIN, UserRole.AGENT],
        },
        defaultRoles
    })
);

router.use(
    '/role',
    authType.required,
    crud(RoleController, {
        // disabledActions: [Action.CREATE, Action.GET_LIST, Action.GET_ONE, Action.UPDATE, Action.DELETE],
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use(
    '/openinghoursperiod',
    authType.required,
    crud(OpeningHoursPeriodController, {
        actions: {
            [Action.CREATE]: [UserRole.ADMIN],
            [Action.DELETE]: [UserRole.ADMIN],
            [Action.UPDATE]: [UserRole.ADMIN],
        },
        defaultRoles
    })
);

router.use('/images', imagesRoute);

router.use((req, res, next) => {
    next(Boom.notFound('API Method not found'));
});

export default router;
