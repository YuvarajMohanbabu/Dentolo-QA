# Dentolo-QA
A repository to automate tests for Submitting a claim.

**Tool used to Automate :** Cypress version 9.5.1

**Programming Langauge :** JavaScript / Nodejs

**Type of Framework :** Page object model and data driven framework

**POM:** As per the page object model, I have maintained a class for every web page. Each web page has a separate class which holds functionalities and members of that web page

**Packages:** Cypress has inbuild packages like fixtures where we can use for test data,support to maintain our page objects,integrations to have our spec files

**Plugins used:** Mailosaur(Virtual SMTP servers to test account verification emails), cypress-file-upload(To upload files)

**Test Report:** Mochaawesome report

**Package.json file:** This will help to make it easy for others to manage and install the npm.

**Advantages of Cypress**

- Cypress automation is simple to setup.
- Faster test execution
- We can debug dircetly with developer tools.
- Combines functional testing with API inspection.
- Videos or Screenshots– View screenshots are taken automatically on collapse and videos of your complete test

**Note** : Didn't connect the test with Cypress Dashboard due to data privacy concerns

### Running the Test

**Pre-requisite** - Need cypress and nodejs installed

open terminal on the test folder path and enter 

       npx cypress open

A test runner will open then you can find all your test folders on left side ,just click endtoEnd_Spec.js

A new chrome window opens and test run on it

## Reports

Once the complete Test ran Successfully report will be generated under mochawesome-report folder .

Sample Pass & Fail Reports are included in the same Folder.
