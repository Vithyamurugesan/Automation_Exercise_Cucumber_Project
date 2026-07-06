const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "reports",
    reportPath: "reports/html",
    reportName: "Automation Exercise Report",
    pageTitle: "Automation Exercise Report",
    displayDuration: true,
    openReportInBrowser: false,

    metadata: {
        browser: {
            name: "Chrome",
            version: "Latest"
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
            { label: "Framework", value: "Playwright + Cucumber + TypeScript" },
            { label: "Environment", value: "QA" }
        ]
    }
});