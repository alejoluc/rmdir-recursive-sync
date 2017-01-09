# rmdir-recursive-sync

Deletes synchronously a directory whether it's empty or not.

Returns `undefined` like node's standard [fs.rmdirSync()](https://nodejs.org/api/fs.html#fs_fs_rmdirsync_path) does.

## Usage

```js
var rmdirRecursiveSync = require('rmdir-recursive-sync');

rmdirRecursiveSync('path/to/dir');
```