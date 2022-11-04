#Automation_Test_Keego
This is the repository for showing the Keego developers team my script automation.

Cypress installation tutorial

System requirements
Node.js 8 or higher and Windows 7 or higher

Installation

First go to your project folder or create one.
$ mkdir example-cypress

Inside the directory create the project's package.json
$ npm init -y

Install cypress.
$ npm install cypress@9.7.0 --save-dev (This is the stable version and the one used in project development)

After installing cypress, open the package.json file and add the command cypress:open

Then run cypress with the command.
$ npm run cypress:open

After installation and execution, a screen will open with several tests created. Now we can create our tests. By default, cypress creates several sample tests that are initially useful for visualizing how to select elements and perform actions in the browser.

At the root of the project, a new folder called cypress will be created with the following structure:

FIXTURES: is where your mocks are stored and can be used in tests.

INTEGRATION: is the directory where the test files will be created.
ex: login.spec.js or saveContact.spec.js

PLUGINS: It is possible to extend or modify the internal behavior of cypress.
ex: Using fs and reading the configuration values ​​and being able to change them dynamically.

SUPPORT: it is possible to create commands that can be executed within the tests or to subscribe to existing commands.

Now to run the developed project:
1 - go to: https://github.com/GabriellSilva/Automation_Test_Keego/tree/main/cypress and click on code(green icon) and copy the HTTPS link;

2 - In the folder where cypress was installed, open git bash and enter git clone + link copied in the previous step;

3 - After cloned, in the git bash terminal, enter: npx cypress open

Now just choose the desired scenario, click and follow the tests.
