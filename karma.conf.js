var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
    config.set({
        browser :['chrome'],
        singleRun:true,
        framework:['mocha'],
        files:['app/tests/**/*.test.js'],
        preprocessors:{
            'app/tests/**/*.test.js' :['webpack','sourcemap']
        },
        reporters:['mocha'],
        client:{
            mocha:{
                timeout:'5000'
            }
        },
        webpack:webpackConfig,
        webpackServer:{
            noInfo:true
        }
    })
}