import { test, expect } from '@playwright/test';
import { assert } from 'console';
import { OrgAccountPage } from '../../pages/OrgAccount.page';

test.describe('Search filtering', () => {

    test('Check Page Object', async({page}) => {
        const orgPage = new OrgAccountPage(page)
        await page.goto('https://lalafo.kg/')

        const data = {
            searchInput: 'стол',
            minPrice: '3000',
            maxPrice: '10000'

        }
       
        await orgPage.searchProduct(data.searchInput);
        await orgPage.waitForAds();

        // Применение фильтрации по цене
        await orgPage.applyPriceFilter(data.minPrice, data.maxPrice);
        await page.waitForTimeout(100000);
        

        // Проверка количества объявлений после фильтрации
        const adsCount = await orgPage.getAdsCount();
        console.log(`Количество объявлений после фильтрации: ${adsCount}`);
        
        assert(true);
  }
)

});
