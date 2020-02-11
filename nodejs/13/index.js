//require 执行文件中的代码
//  优先加载缓存中的模块
const msg = require('./msg')
//只有是核心模块 或者是第三方模块时 才不需要加 ./

console.log(msg.get());

