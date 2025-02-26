import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';


test.beforeEach(async({page}) => {
  const pm = new PageManager(page)

  await page.goto('https://qa-tipalti-assignment.tipalti-pg.com/index.html')
})

test('update user profile details', async ({ page }) => {
  const pm = new PageManager(page)

  const NAME='Talia'
  const EMAIL='talia@gmail.com'
  const MESSAGE='Hello World'

  const myDog = 'Lychee'

  await pm.onHomePage().openMenu()
  const dogsNames = await pm.navigateTo().getMenuItems()

  await expect(dogsNames).toContain(myDog)

  await pm.navigateTo().chooseDog(myDog)

  await pm.onMyDog().sendMessage(NAME, EMAIL, MESSAGE)
});
