# mySQL-Employee-Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description 

This project is a specific type of database called CMS, or content management system. 

These types of databases allow a non-developer user an easy way to interact with database information. 

Utilizing the command-line in the terminal, a user can both view and add employees, departments, and roles.

Here is an image of the results of the query "View All Employees":

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If you have found this generator outside of GitHub and wish to view the original, [visit my Repository link here.](https://github.com/tdusenbury/mySQL-Employee-Tracker)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Please see the video of the Slayer Sitch Employee Tracker in action here!](https://www.veed.io/view/14902dfb-75c9-4c7a-a37b-6de28a5e2c49?panel=share)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![alt text](./img/ScreenShot.PNG)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Technology Used 

| [![My Skills](https://skillicons.dev/icons?i=js,nodejs,vscode,github,mysql&theme=light)](https://skillicons.dev) 


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Table of Contents

  - [**Description**](#description)
  - [**Installation**](#installation)
  - [**Usage**](#usage)
  - [**Contribution**](#contributing)
  - [**Testing**](#tests)
  - [**Author Info**](#author-info)
  - [**License**](#license)


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Installation

The Slayer Sitch Tracker requires installation of mysql2, inquirer, console.table, dotenv, and figlet. After cloning down the repository, go to the command-line in the terminal and do an 'npm install' to install all the dependencies stated in the 'package.json' file.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Usage 

Once the Slayer Sitch Tracker has been installed, the user will type 'node index-js' into the terminal command-line. A list of options is then presented to the user to view or add employees, roles, and departments. Each option will either auto-generate the requested information or ask a series of questions that, once answered, will be used to populate the corresponding chart which will then be displayed. To reset any additions back to the original list, enter 'mysql -u root -p' into the command-line, enter your login information, and then run the schema.sql and the seeds.sql.
*************
Here is the menu of initial questions to choose from:

![alt text](./img/FirstQuestions.PNG)

****************
These are the questions asked to add an employee and the new table showing the new employee:

![alt text](./img/AddEmployee.PNG)

*****************
Here the role of "Accountant" has been added:

![alt text](./img/AddRoleAccountant.PNG)
**************************************
When the role of "Armorer" is added later, you can see that "Accountant" has been retained:

![alt text](./img/AddRoleArmorer.PNG)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Learning Points

I love being organized and color-coding and sorting and all the things. 

Learning how to use SQL has been a joy.

Rules, order, structure....but also a lot of thinking about how to deconstruct and then reconstruct the information to show correctly.

I look forward to learning more about SQL and its various versions to see all the many things I can do with it!


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Author Info
My name is Tamara "T" Dusenbury
If you have any questions about me or this project, please contact me:
  
- [**Github**](https://github.com/tdusenbury)

- [**LinkedIn**](https://linkedin.com/in/tamara-dusenbury-02ab8591)

- [**Email**](mailto:tamara.dusenbury@gmail.com)


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Credits

Shout outs to the cohort and study group!!! We made it half-way!!!!

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Contributing

If you would like to contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## License

This projects holds an MIT License.