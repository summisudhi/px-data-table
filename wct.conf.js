module.exports = {
    verbose: false,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
            "browserName" : "internet explorer",
            "platform" : "Windows 8.1" ,
            "version" : "11"
            
            
        }
    },
    suites: [
      'test/px-data-table-fixture.html'
    ]
};
