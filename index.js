const fs = require('fs');
const chalk = require('chalk');
const OptimAi = require('./src/main/optimAi');
const ProxyManager = require('./src/main/proxy');
const { logMessage } = require('./src/utils/logger');

const proxyManager = new ProxyManager();

async function main() {
    console.log(
        chalk.cyan(`
░█▀█░█▀█░▀█▀░▀█▀░█▄█░█▀█░▀█▀
░█░█░█▀▀░░█░░░█░░█░█░█▀█░░█░
░▀▀▀░▀░░░░▀░░▀▀▀░▀░▀░▀░▀░▀▀▀
        By : getcakedieyoungx
        t.me/getcakedieyoungx
      Use it at your own risk
  `)
    );

    try {
        const accounts = JSON.parse(fs.readFileSync("accounts.json", "utf8"));
        const proxiesLoaded = proxyManager.loadProxies();
        if (!proxiesLoaded) {
            logMessage(null, null, "Failed to load proxies, using default IP", "warning");
        }

        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            try {
                console.log(chalk.white("-".repeat(85)));
                if (account.nodeToken.length === 0) {
                    const currentProxy = await proxyManager.getRandomProxy(i + 1, accounts.length);
                    const ex = new OptimAi(account, currentProxy, i + 1, accounts.length);
                    const wsTokens = await ex.processRegisterNode();
                    if (wsTokens) {
                        account.nodeToken.push(wsTokens);
                    }
                }

                for (let j = 0; j < account.nodeToken.length; j++) {
                    const wsToken = account.nodeToken[j];
                    const currentProxy = await proxyManager.getRandomProxy(i * account.nodeToken.length + j, accounts.length * account.nodeToken.length);
                    const ex = new OptimAi(account, currentProxy, i + 1, accounts.length);
                    await ex.startStatsInterval();
                    ex.connectWebSocket(wsToken);
                }
            } catch (error) {
                logMessage(null, null, `Failed to process account: ${error.message}`, "error");
            }
        }

        fs.writeFileSync("accounts.json", JSON.stringify(accounts, null, 4), "utf8");
    } catch (error) {
        logMessage(null, null, `Error: ${error.message}`, "error");
    }
}

main().catch((err) => {
    console.error(chalk.red("Error occurred:"), err);
    process.exit(1);
});