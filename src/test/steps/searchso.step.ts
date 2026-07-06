import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";

Given("the user is on the automation exercise website", async function (this: CustomWorld) {
    await this.hp.navigate();
});

When("the user click the products", async function (this: CustomWorld) {
    await this.hp.clickProduct();
});

Then("the user navigates to the all product details page", async function (this: CustomWorld) {
    await this.sp.verifyAllProductPage();
});

When("the user search for the particular product {string}",async function (this: CustomWorld, product: string) {
        await this.sp.enterProduct(product);
    }
);

When("the user clicks the search button",async function (this: CustomWorld) {
        await this.sp.clickSearchButton();
    }
);

Then("the searched product {string} should be displayed",async function (this: CustomWorld, product: string) {
        await this.sp.verifySearchedProduct(product);
    }
);