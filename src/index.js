import * as tools from './pages/tools.wxs';
import { parse } from 'acorn';
import jsx from 'acorn-jsx';


// 读取tools.wxs文件内容
// const toolsContent = require('./src/tools.wxs');

// 解析tools.wxs文件内容
debugger
console.log('asfdasfd')
const ast = parse(toolsContent, {
  sourceType: 'module',
  plugins: { jsx },
});

const translatedWXML = translateWXML(template);
const translatedWXS = translateWXS(tools);
