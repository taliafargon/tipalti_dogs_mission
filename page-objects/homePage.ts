import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase"; 

export class HomePage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async openMenu(){
        await this.page.locator("[href='#menu']").first().click()
    }
}