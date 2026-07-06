import { generate } from "multiple-cucumber-html-reporter";

generate({
    jsonDir: "reports",
    reportPath: "reports/html",

    metadata: {
        browser: {
            name: "chrome",
            version: "latest"
        },
        device: "Local Machine",
        platform: {
            name: "Windows",
            version: "11"
        }
    },

    customData: {
        title: "Execution Information",
        data: [
            { label: "Project", value: "Automation Exercise" },
            { label: "Framework", value: "Playwright + Cucumber" },
            { label: "Environment", value: "QA" }
        ]
    }
});