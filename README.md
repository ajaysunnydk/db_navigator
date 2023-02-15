#Introduction:
The db_navigator is a React project that allows users to connect to a data source and fetch objects such as catalogs, schemas, tables, and columns. The project uses a Spring Boot application as a backend that is located in https://github.com/ajaysunnydk/dextrus-spring-boot repository. The project provides a dynamic tree view of objects and is intended to be used as a tool to explore and interact with a data source.

Prerequisites:
Before using the db_navigator project, ensure that you have the following prerequisites installed on your system:

Node.js
npm (Node Package Manager)
React
Getting Started:

Clone the project from the repository using the following command:
### git clone https://github.com/ajaysunnydk/db_navigator.git
Navigate to the project directory in your terminal or command prompt.
Install the required packages by running the following command:
### npm install
Start the project by running the following command:
###npm start
The project will now be accessible on http://localhost:3000.
Usage:

Connect to a data source by clicking on the 'Connect' button in the header of the application.
Enter the required connection details such as host, port, username, and password in the 'Connect' dialog.
Click on the 'Connect' button to establish a connection to the data source.
Once connected, the tree view on the left-hand side of the application will display the available catalogs in the data source.
Click on the arrow next to a catalog to display the schemas within the catalog.
Click on the arrow next to a schema to display the tables within the schema.
Click on the arrow next to a table to display the columns within the table.
To disconnect from the data source, click on the 'Disconnect' button in the header of the application.
Note:

The project currently only supports MSSQL data sources.
The project may not work as expected for all data sources and may require additional configuration to work correctly.
The project is intended to be used as a tool to explore and interact with a data source and should not be used in a production environment.
Conclusion:
The db_navigator project is a React application that provides a dynamic tree view of objects within a data source. It is intended to be used as a tool to explore and interact with a data source and requires a Spring Boot application as a backend. The project provides a simple and intuitive interface for users to interact with the data source and is suitable for both novice and experienced users.
