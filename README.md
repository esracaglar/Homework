
# Proje1 #

1. Download Project
2. Open command prompt run environmentSetup.bat (If you don’t want to run environmentSetup.bat yplease follow:https://codecept.io/quickstart/#quickstart)
  a) Environment inludes:
     i. Chocolatey and NodeJS
     ii. CodeceptJS, Webdriverio and Selenium-standalone
     iii.Jdk8
     iv. Browsers Chrome, Opera, Internet Explorer, Mozilla Firefox
3. After environment setup is finished, prepare selenium server 
  a)```js selenium-standalone start ```
4. Open new command prompt
  a)Run 
    i.Execute tests:
      1. To run all test : ```js  codeceptjs run --steps     ```
      2. To run specific test: ```js  codeceptjs run homePage_test.js     ```
      3. To run all suites for all browsers: ```js  codeceptjs run-multiple --all  ```
      4. Selenium Grid - Setup
          1.Open command prompt 
              a)``` java -jar selenium-server-standalone-3.3.1.jar     ```
          2.Register a node
              a)``` java -jar selenium-server-standalone-3.3.1.jar  -role node -hub http://localhost:4444/grid/register   ```
          3.Register the node including the path for the executable as shown below.(drivers exist in project)
              a)``` Java  -Dwebdriver.chrome.driver=..\…\chromedriver.exe -jar selenium-server-standalone-3.3.1.jar -role node -hub                         http://localhost:4444/grid/register -port 7777 -browser browserName=chrome,maxInstances=3

====================================================================================================================================

# Proje2 #

Getting Started with Frisby.js

#### Installation ####

To get started with Frisby.js, add it to your project as a dev dependency:

```npm install frisby --save-dev```

#### Writing and Running Tests ####
If you don't have Jest installed in your project yet, install it:

```npm install --save-dev jest```

#### Create your tests ####
By default, Jest looks for a folder named __tests__. If it does not exist in your project yet, go ahead and create it:
```mkdir -p __tests__/api
touch __tests__/api/api_spec.js ```

#### Run tests ####

Jest or nmp test api_spec.js

