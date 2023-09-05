# Polling API

## Overview

This application is basically for voting a particular optin inside the question. It does not have authentication, anyone can create and vote for any option they wish.

## Installation

To run this project locally, follow these steps:

1. Clone the GitHub repository.
   `git clone https://github.com/snehilrao610/Polling_API.git`
2. Navigate to the project directory.
   `cd Polling_API`
3. Install the project dependencies. (Assuming you have Node.js and npm installed)
   `npm install`

## Usage

4. Start the server.
   `npm run dev`
5. Open up **Postman**.

### Questions Routes

6. If you want to list all questions head to `http://localhost:3000/questions`
7. If you want to create a questions head to `http://localhost:3000/questions/create`
8. Fill title and that's it.
9. To view a question head to `http://localhost:3000/questions/:id`
10. To delete a quesiton head to `http://localhost:3000/questions/delete/:id` (You can not delete an Question that has more than 0 vote in any of it's option(s)).

### Options Rotues

11. You can create an option for a question by giving Question id, head to `http://localhost:3000/options/create/:id` (id of Quesiton).
12. To vote you can follow the link shown in the option(s), This will increase the number of votes for an option
13. To delete an option head to `http://localhost:3000/options/delete/:id` (You can not delete an option having more than 0 vote).

## Project Structure

The project has the following structure:

- /controllers: Contains controllers for Questions and Options handling.
- /lib: Contains `db.js` for databasde connection.
- /models: Contains Questions and Options models.
- /routes: Contains routes for Questions and Options.
- /views: Contains all view for frontend.
- app.js: The Node.js application file that serves the project.
- package.json and package-lock.json: Define project dependencies and scripts.

## Dependencies

Following are the all dependencies used: -

- body-parser
- express
- mongoose

### Command for installing all Dependencies

`npm install body-parser express mongoose`

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or create a pull request on GitHub.

## License

This project is licensed under the [License Name] License - see the LICENSE file for details.
