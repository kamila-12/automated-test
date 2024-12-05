import { test, expect } from '@playwright/test';

test('Lalafo Search and Filter Test', async ({ request }) => {
  const BASE_URL = 'https://lalafo.kg/api/search/v3/feed/search';
  
  // Параметры запроса
  const params = {
    'expand': 'url',
    'per-page': '20',
    'category_id': '4327',
    'q': 'Офисные столы',
    'city_id': '103184',
    'sort_by': 'default',
    'price[from]': '10000',
    'price[to]': '20000',
    'with_feed_banner': 'true'
  };

  // Заголовки запроса
  const headers = {
    'accept': 'application/json, text/plain, */*',
    'country-id': '12',
    'device': 'pc',
    'experiment': 'novalue',
    'language': 'ru_RU',
    'referer': 'https://lalafo.kg/bishkek/mebel-2/mebel/q-%D0%9E%D1%84%D0%B8%D1%81%D0%BD%D1%8B%D0%B5%20%D1%81%D1%82%D0%BE%D0%BB%D1%8B?sort_by=default&price[from]=10000&price[to]=20000',
    'request-id': 'react-client_7c19e2dc-d514-4857-97d7-51def66d0829',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'user-hash': '52942bc2-60ed-4bd0-a9e0-2da1b5332443',
    'x-cache-bypass': 'yes'
  };


  const response = await request.get(BASE_URL, { params, headers });
  console.log('Response body:', JSON.stringify(await response.json(), null, 2));
  
  // Проверка успешности запроса
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Преобразование тела ответа в JSON
  const responseBody = await response.json();

  // Проверка, что массив товаров не пуст
  expect(Array.isArray(responseBody.items)).toBe(true);
  expect(responseBody.items.length).toBeGreaterThan(0);

  // Проверка цен на товары в пределах указанного диапазона
  responseBody.items.forEach(item => {
    expect(item.price).toBeGreaterThanOrEqual(10000);
    expect(item.price).toBeLessThanOrEqual(20000);
  });

  // проверка на то, что каждый товар имеет нужные поля
  responseBody.items.forEach(item => {
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('price');
    expect(item).toHaveProperty('user');
    expect(item.user).toHaveProperty('username');
  });
});
