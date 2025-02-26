import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase"; 

export class NavigationPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async getMenuItems(){
        const dogsNames =  await this.page.locator('#menu > div > ul > li > a').allTextContents();
        console.log(dogsNames); 

        return dogsNames
    }

    async chooseDog(dogName: string){
        await this.page.getByText(dogName).click()
    }

}