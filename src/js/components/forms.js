import popup from '../modules/popup.js';
import order from '../modules/order.js';

popup('popup-order', 'overflow_hidden');

var arrPopup = [
    ['name', 'popup-order-name', 'field', true],
    ['phone', 'popup-order-phone', 'field', true],
    ['message', 'popup-order-massage', 'field', false],
    ['page', 'popup-order-page', 'field', false],
    ['police', 'popup-order-checkbox', 'checked', true]
];

order(
    'popup-order',
    arrPopup,
    'preloader',
    'success-message',
    'send-order-page'
);

var arrPageOrder = [
    ['name', 'page-order-name', 'field', true],
    ['phone', 'page-order-phone', 'field', true],
    ['message', 'page-order-massage', 'field', false],
    ['page', 'page-order-page', 'field', false],
    ['police', 'page-order-checkbox', 'checked', true]
];

order(
    'page-order',
    arrPageOrder,
    'preloader',
    'success-message',
    'send-order-page'
);
