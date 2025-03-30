const chalk = require('chalk');

function logMessage(index, total, message, type = "info") {
    const timestamp = new Date().toLocaleTimeString();
    const accountInfo = index !== null ? `[${index}/${total}]` : '';
    
    let coloredMessage;
    switch (type.toLowerCase()) {
        case "success":
            coloredMessage = chalk.green(message);
            break;
        case "error":
            coloredMessage = chalk.red(message);
            break;
        case "warning":
            coloredMessage = chalk.yellow(message);
            break;
        case "process":
            coloredMessage = chalk.blue(message);
            break;
        default:
            coloredMessage = chalk.white(message);
    }
    
    console.log(`${chalk.gray(timestamp)} ${chalk.cyan(accountInfo)} ${coloredMessage}`);
}

module.exports = { logMessage };