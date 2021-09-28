const Module = require('module');
const fs = require('fs');

Module._extensions['.js'] = function (module, filename) {
    let content = fs.readFileSync(filename, 'utf8');
    const reg = /import\s+(\w+)\s+from\s+['"](\w+)['"]/gm;
    content = content.replace(reg, ($0, $1, $2) => {
        return `let ${$1} = require('${$2}')`;
    });
    module._compile(content, filename);
};
