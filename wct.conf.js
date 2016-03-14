module.exports = {
    verbose: false,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
             "disabled" : false,
             "browsers": [
           {
          "browserName": "internet explorer",
          "platform": "Windows 8.1",
          "version": "11"
        },
        {
          "browserName": "safari",
          "platform": "OS X 10.11",
          "version": "9"
        }
      ]
             
            tw 
            
            
        }
    },
    suites: [
      'test/px-data-table-fixture.html'
    ]
};
