### Login Flow Documentation

#### Overview

This document describes the login flow for the application, including the components involved, the sequence of actions, and the data flow.

#### Components

##### Frontend (Client)

*   **Header Component:** Handles the login form and user input (`cin`, `password`).
*   **Header Service:** Communicates with the API to perform the login request.
*   **Auth service:** used to handle the token and storing it in the local storage and logging out.
##### Backend (API)

*   **Auth Controller:** Exposes the `/auth/login` route and delegates authentication to the Auth Service.
*   **Auth Service:** Handles user authentication logic, password verification, and JWT token generation.
* **users.json**: contains users data
##### Data

*   **users.json:** Stores user data (including `cin`, hashed password, and role).

#### Text-Based Flowchart
```
+-----------------+     +-----------------+     +-----------------+     +-----------------+     +-----------------+
| User (Frontend) | --> | Header Component| --> | Header Service  | --> | Auth Controller | --> | Auth Service    |
+-----------------+     +-----------------+     +-----------------+     +-----------------+     +-----------------+
      ^                                                                                                 |
      |                                                                                                 |
      |                                                                                                 v
      |                                                                                       +-----------------+
      |                                                                                       |  users.json    |
      |                                                                                       +-----------------+
      |                                                                                           |
      |                                                                                           v
      |                                                                                       +-----------------+
      |                                                                                       |   JWT Token     |
      +----------------------------------------------------------------------------------------|   Generation    |
                                                                                              +-----------------+
```
#### Block Diagram
```
+-----------------+      +---------------------+      +---------------------+
| Frontend (Client)|------| API (Backend/Server) |------| Data (JSON File)    |
+-----------------+      +---------------------+      +---------------------+
|                 |      |                     |      |                     |
| - Header Comp.  |------| - Auth Controller   |------| - users.json        |
| - Header Serv.  |      | - Auth Service      |      |                     |
| - Auth Service  |      |                     |      |                     |
+-----------------+      +---------------------+      +---------------------+
```
#### Login Process

1.  **User Interaction:** The user enters their `cin` and `password` in the login form.
2.  **Frontend Communication:** The Header Component sends the `cin` and `password` to the Header Service.
3.  **API Request:** The Header Service makes a POST request to the `/auth/login` endpoint of the API.
4.  **API Validation:** The Auth Controller receives the request, validates the data, and passes it to the Auth Service.
5.  **User Authentication:** The Auth Service checks if the provided `cin` and `password` (after hashing) match any user in the `users.json` file.
6.  **Token Generation:** If the credentials are correct, the Auth Service generates a JWT token.
7. **The token goes back** through all the flow to the header service.
8.  **Response:** The token is returned to the Header Service.
9.  **Token Storing:** The header service call the auth service on the front end to store the token

#### Key Concepts

*   **Password Security:** Passwords are never stored in plain text; they are always hashed using `bcrypt`.
*   **JWT:** JSON Web Tokens (JWT) are used to authenticate users.
*   **Data Flow:** The diagrams show how data flows between components.

#### Notes

*   This documentation describes the simplified login flow, including storing user data in a JSON file. For a production application, a database should be used.
*   This flow currently does not include refresh tokens. They can be added later.
* The auth service is now independant and can be used by other components.
* A DTO was added to validate incomming data.
* The cin data type was fixed to be a number.
* The password are now hashed and the cin is used to login the user.
* The token storing is fixed.