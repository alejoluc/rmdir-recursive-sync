var fs   = require('fs');
var path = require('path');

function rmdirRecursiveSync(dir) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
        var entriesInDir = fs.readdirSync(dir);
        for (var i = 0; i < entriesInDir.length; i++) {
            var thisEntry = entriesInDir[i];
            var thisEntryPath = path.join(dir, thisEntry);
            if (fs.statSync(thisEntryPath).isDirectory()) {
                rmdirRecursiveSync(thisEntryPath);
            } else {
                fs.unlinkSync(thisEntryPath);
            }
        }
        fs.rmdirSync(dir);
    }
}

module.exports = rmdirRecursiveSync;