
const MYPI = 3.14;
function add(a, b) {
    return a + b
    console.log(MYPI + add(1, 2));

}
let obj = {
    'pi': MYPI,
    'add': add(1, 2)
}
module.exports = obj