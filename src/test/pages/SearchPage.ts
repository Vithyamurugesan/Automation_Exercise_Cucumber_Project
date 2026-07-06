import { expect } from "@playwright/test";
import { basePage } from "./basePage";

export class SearchPage extends basePage {

    private searchBar = "#search_product";
    private searchButton = "#submit_search";
    private allProducts = "//h2[text()='All Products']";
    private searchedProducts = ".features_items";

    async verifyAllProductPage() {
        await expect(this.page.locator(this.allProducts)).toBeVisible();
    }

    async enterProduct(product: string) {
        await this.fill(this.searchBar, product);
    }

    async clickSearchButton() {
        await this.click(this.searchButton);
    }

    async verifySearchedProduct(product: string) {
        await expect(this.page.locator(this.searchedProducts)).toContainText(product);
    }
}