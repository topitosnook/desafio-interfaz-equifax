const fs = require('fs');
const PATH = require('path');
const yaml = require('js-yaml');

  const ToJson = (relativePath='\\data') => {
    let currentPath = PATH.basename(__dirname);
    let fullPath = PATH.join(currentPath,relativePath);
    let fileList = fs.readdirSync(fullPath);
    let dic = {};
    for( let j=0; j<fileList.length; j++){
        let filePath = PATH.join(fullPath,fileList[j]);
        let readFile = yaml.load(fs.readFileSync(filePath));
        dic[j]=JSON.stringify(readFile, null, 2);
    }
    return dic
}
exports.ToJson = ToJson;

// console.log(JSON.parse(ToJson()[5])[0].config.recordClass);
// console.log(JSON.parse(ToJson()[5])[0])

// for(let i = 0; i<7; i++){
//     console.log(JSON.parse(ToJson()[i])[0])
// } 
