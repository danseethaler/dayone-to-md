const fs = require('fs')
const mkdirp = require('mkdirp')

module.exports.ensureDirectoriesExist = function(dirnames) {
    if (!Array.isArray(dirnames)) {
        dirnames = [dirnames]
    }
    dirnames.forEach(dirname => {
        if (fs.existsSync(dirname)) {
            return true
        }
        mkdirp.sync(dirname)
    })
}
