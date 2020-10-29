const alert = require('./index');
const checkNodeVersion = require('./checkNodeVersion');

checkNodeVersion('13')

alert({
    type: `success`,
    msg: `All done!`
});

alert({
    type: `warning`,
    msg: `you didn't add something!`
});

alert({
    type: `info`,
    msg: `Today is wednesday!`
});

alert({
    type: `error`,
    msg: `something isn't right!`
});

alert({
    type: `error`,
    msg: `something isn't right!`,
    name: 'dun out'
});