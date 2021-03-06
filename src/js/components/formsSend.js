import order from '../modules/order.js';

const arrFields = [
    {
        name: 'name',
        type: 'field',
        always: true
    },
    {
        name: 'phone',
        type: 'field',
        always: true
    },
    {
        name: 'message',
        type: 'field',
        always: false
    },
    {
        name: 'police',
        type: 'checked',
        always: true
    }
];

order({
    nameWindow: 'popup-order',
    nameOrder: 'Обратный звонок',
    preload: 'preloader',
    successForm: 'success-message',
    phpFile: 'send-order-page',
    arr: arrFields
});

order({
    nameWindow: 'page-order',
    nameOrder: 'Заявка',
    preload: 'preloader',
    successForm: 'success-message',
    phpFile: 'send-order-page',
    arr: arrFields
});
