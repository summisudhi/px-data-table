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
          "platform": "Windows 7",
          "version": "10"
        },
        {
          "browserName": "chrome",
          "platform": "Windows 10",
          "version": "44"
        },
         {
          "browserName": "microsoftedge",
          "platform": "Windows 10"
         
        },
        {
          "browserName": "internet explorer",
          "platform": "Windows 8.1",
          "version": "11"
        },
         {
          "browserName": "firefox",
          "platform": "Windows 8.1",
          "version": "44"
        },
         {
          "browserName": "chrome",
          "platform": "Windows 8.1",
          "version": "48"
        },
        
         
        
         {
          "browserName": "chrome",
          "platform": "OS X 10.11",
          "version": "48"
        },
             
           
        {
          "browserName": "safari",
          "platform": "OS X 10.11",
          "version": "9"
        }
      ]
             
           
            
            
        }
    },
    suites: [
      'test/px-data-table-fixture.html'
    ]
};
