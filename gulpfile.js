// Runs on top of node. runtime ruuns on computer.
const {src,dest} = require('gulp')

const static = function(){
    return src('src/static/data/*.*').pipe(dest('dist/data'))
}

exports.default = static