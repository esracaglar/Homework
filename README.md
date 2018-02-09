
# Proje1 #
 1. Download Project
 2. Open command prompt as Administrator run environmentSetup.bat (If you don’t want to run environmentSetup.bat 
please follow:https://codecept.io/quickstart/#quickstart)
    1. Environment inludes:
        1. Chocolatey and NodeJS
        2. CodeceptJS, Webdriverio and Selenium-standalone
        3. JDK8
        4. Browsers: Chrome, Opera, Internet Explorer, Mozilla Firefox
3. After environment setup is finished, prepare selenium server 
     1. ``` selenium-standalone start ```
4. Open new command prompt as Administrator
     1. Run 
        1. Execute tests:
             1. To run all test : ``` codeceptjs run --steps     ```
             2. To run specific test: ``` codeceptjs run homePage_test.js     ```
             3. To run all suites for all browsers: ``` codeceptjs run-multiple --all  ```
        2. Selenium Grid - Setup
             1. Open command prompt as Administrator
                 1. ``` java -jar selenium-server-standalone-3.3.1.jar     ```
             2. Register a node
                 1. ```java -jar selenium-server-standalone-3.3.1.jar  -role node -hub http://localhost:4444/grid/register```        
             3. Register the node including the path for the executable as shown below.(drivers exist in project)
                 1. ```java  -Dwebdriver.chrome.driver=..\…\chromedriver.exe -jar selenium-server-standalone-3.3.1.jar -role node -hub http://localhost:4444/grid/register -port 7777 -browser browserName=chrome,maxInstances=3``` 
             4. You can access the selenium-grid console using: http://localhost:4444/grid/console     
             5. You can run your tests

================================================================================

# Proje2 #

#### Installation ####

To get started with Frisby.js, add it to your project as a dev dependency:

```npm install frisby --save-dev```

#### Run tests ####

```nmp test api_spec.js```

