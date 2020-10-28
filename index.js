const chalk = require('chalk');
const sym = require('log-symbols');

module.exports = (options) => {
    const defaultOptions = {
        type: `error`,
        msg: `You forget to define all options`,
        name: ``
    }
    const opts = {...defaultOptions, ...options};
    const {type, msg, name} = opts;

    const printName = name ? name : type.toUpperCase()

    if(type === 'success') {
        console.log(`\n${sym.success} ${chalk.green.inverse(` ${printName} `)} ${chalk.green(msg)}\n`)
    }

    if(type === 'warning') {
        console.log(`\n${sym.warning} ${chalk.keyword('orange').inverse(` ${printName} `)} ${chalk.keyword('orange')(msg)}\n`)
    }

    if(type === 'info') {
        console.log(`\n${sym.info} ${chalk.blue.inverse(` ${printName} `)} ${chalk.blue(msg)}\n`)
    }


    if(type === 'error') {
        console.log(`\n${sym.error} ${chalk.red.bold.inverse(` ${printName} `)} ${chalk.red.bold(msg)}\n`)
    }
}