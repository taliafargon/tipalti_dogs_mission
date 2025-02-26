import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase"; 

export class MyDogPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async sendMessage(name: string, email: string, message: string){
        await this.page.getByTestId('name').fill(name)

        await this.page.getByTestId('email').fill(email)
        
        await this.page.getByTestId('message').fill(message)

        await this.page.locator('.primary').click()
    }
}
