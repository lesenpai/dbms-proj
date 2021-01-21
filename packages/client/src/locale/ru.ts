import { OpeningHoursPeriod } from '@dbms-proj/models';
import russianMessages from 'ra-language-russian';

const customMessages = {
    ...russianMessages,
    bo: {
        configuration: 'Конфигурация',
        language: 'Язык',
        theme: {
            name: 'Тема',
            light: 'Светлая',
            dark: 'Тёмная',
        },
        wrong_login_password: 'Неверный логин или пароль',
        invalid_access_token: 'Неверный токен доступа',
        token_expired: 'Токен просрочился, повторите авторизацию',
        role_forbidden: 'Ваша роль не разрешена',
    },
    resources: {
        User: {
            name: 'Пользователь |||| Пользователи',
            fields: {
                login: 'Логин',
                surname: 'Фамилия',
                name: 'Имя',
                patronym: 'Отчество',
                password: 'Пароль',
                // personal_address: 'Адрес',
                // personal_birthday: 'Дата рождения',
                // personal_telephone: 'Телефон',
                role_id: 'Роль',
                dob: 'Дата рождения',
                phone: 'Телефон',
                photo_path: 'Фото профиля',
            },
        },
        Role: {
            name: 'Роли',
            data: {
                NONE: 'Неизвестный',
                ADMIN: 'Администратор',
                AGENT: 'Агент',
                VISITOR: 'Посетитель',
            },
            fields: {
                name: 'Название',
            },
        },
        Status: {
            name: 'Статус',
            data: {
                MODERATION: 'На модерации',
                PUBLISHED: 'Опубликовано',
                DELETED: 'На удалении',
                DRAFT: 'Черновик',
            },
        },
        WeekDay: {
            name: 'День недели',
            data: {
                Monday: 'ПН',
                Tuesday: 'ВТ',
                Wednesday: 'СР',
                Thursday: 'ЧТ',
                Friday: 'ПТ',
                Saturday: 'СБ',
                Sunday: 'ВС',
            }
        },
        Admin: {
            name: 'Администраторы',
            fields: {
                passport_ser: 'Серия паспорта',
                passport_id: 'Номер паспорта',
                country: 'Страна',
                city: 'Город',
                street: 'Улица',
                building: 'Дом',
                flat: 'Квартира',
                user_id: 'Пользователь',
            },
        },
        Company: {
            name: 'Компании',
            fields: {
                full_name: 'Полное название',
                short_name: 'Сокращенное название',
                logo_path: 'Логотип',
                country: 'Страна',
                city: 'Город',
                street: 'Улица',
                building: 'Корпус',
                office: 'Офис',
                //description,
                url: 'Сайт',
            },
        },
        Company2Item: {
            name: 'Продукты компаний',
            fields: {
                price: 'Цена',
                description: 'Описание',
                company_id: 'Компания',
                item_id: 'Продукт',
                status: 'Статус',
            },
        },
        Item: {
            name: 'Продукты',
            fields: {
                name: 'Название',
                image_path: 'Фото',
                props: 'Характеристики',
                description: 'Описание',
                category_id: 'Категория',
                item_type_id: 'Тип',
            },
        },
        Phone: {
            name: 'Телефоны',
            fields: {
                number: 'Номер',
                description: 'Описание',
                // company_id: 'Компания',
                status: 'Статус',
            },
        },
        Email: {
            name: 'Эл. почта',
            fields: {
                addr: 'Адрес почты',
                description: 'Описание',
                company_id: 'Компания',
                status: 'Статус',
            },
        },
        Activity: {
            name: 'Виды дейтельности',
            fields: {
                name: 'Название',
            },
        },
        Agent: {
            name: 'Агенты',
            fields: {
                company_id: 'Компания',
                user_id: 'Агент',
            },
        },
        Article: {
            name: 'Статья |||| Статьи',
            fields: {
                date: 'Дата',
                title: 'Заголовок',
                //image_path: '',
                text: 'Текст',
                company_id: 'Компания',
                status: 'Статус',
            },
        },
        ItemCategory: {
            name: 'Категория продуктов |||| Категории продуктов',
            fields: {
                name: 'Название',
                parent_category_id: 'Родительская категория'
            }
        },
        OpeningHoursPeriod: {
            name: 'Часы работы',
            fields: {
                first_day_id: 'Первый день',
                last_day_id: 'Последний день',
                start_time: 'Начало дня',
                end_time: 'Конец дня',
                company_id: 'Компания',
                activity_id: 'Вид дейтельности',
            },
        },
        Company2Activity: {
            name: 'Виды деят. компаний',
            fields: {
                activity_id: 'Вид дейтельности',
                company_id: 'Компания'
            }
        },
        ItemType: {
            name: 'Тип продукта',
            fields: {
                name: 'Название'
            }
        },
    },
};

export default customMessages;
