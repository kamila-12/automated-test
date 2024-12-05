import { test, expect } from '@playwright/test';

test.describe('Lalafo API Category Filter Tests', () => {
  test('should fetch filter parameters for category 1317', async ({ request }) => {
    const BASE_URL = 'https://lalafo.kg';

    const response = await request.get(`${BASE_URL}/api/catalog/v3/params/filter`, {
      params: {
        category_id: '1317',
      },
      headers: {
        accept: 'application/json, text/plain, */*',
        'country-id': '12',
        device: 'pc',
        experiment: 'novalue',
        language: 'ru_RU',
        referer: 'https://lalafo.kg/kyrgyzstan/elektronika',
        'request-id': 'react-client_df6cabda-e62d-40e9-8ca8-5ad1b94cb3bb',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'user-hash': '52942bc2-60ed-4bd0-a9e0-2da1b5332443',
        'x-cache-bypass': 'yes',
      },
    });

    console.log(`Status: ${response.status()}`);
    
    const contentType = response.headers()['content-type'];
    let responseBody;
    if (contentType && contentType.includes('application/json')) {
      responseBody = await response.json();
    } else {
      responseBody = await response.text();
    }
    
    console.log('Response:', responseBody);

    // Assertions
    //expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    if (contentType && contentType.includes('application/json')) {
      // Assert that the response is an array and contains filter objects
      expect(Array.isArray(responseBody)).toBe(true);
      expect(responseBody.length).toBeGreaterThan(0); // Ensure there is at least one filter
      // Optionally, you can check specific filter properties
      expect(responseBody[0]).toHaveProperty('name');
      expect(responseBody[0]).toHaveProperty('kind');
    }
  });
});
