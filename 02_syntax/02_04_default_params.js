const fuct = (count = 10, start = 1) => {
    console.log('Какое счастье! Пришло',count, 'сосисок, хотя заказывал', start);
}
fuct();
fuct(2);
fuct(6, 2);

fuct(null, 6);
fuct(undefined, 5);