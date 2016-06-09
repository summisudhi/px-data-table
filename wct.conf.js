module.exports = {
  verbose: false,
  plugins: {
    local: {
        browsers: ['chrome', 'firefox']
    },

        sauce: {
             "disabled" : false,
              sauceUser: "davidfeig",
              sauceKey: "4df71105-4e1f-4fb3-b7f0-0ad04e19033f",
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
          "browserName": "internet explorer",
          "platform": "Windows 10",
          "version": "11"
        },
        {
          "browserName": "internet explorer",
          "platform": "Windows 8",
          "version": "10"
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
          "browserName": "safari",
          "platform": "OS X 10.10",
          "version": "8"
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
        },
             
         {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad Retina",
          "deviceOrientation": "portrait"
          
        },
        
        {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad 2",
          "deviceOrientation": "portrait"
          
        }
        
        
      ]
             
           
            
            

  
    }
  },
  suites: [
    'test/px-data-table-fixture.html',
    'test/px-data-table-cell-fixture.html'
  ]
};
