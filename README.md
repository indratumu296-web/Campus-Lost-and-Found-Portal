# 🎒 Campus Lost and Found Portal

A full-stack web application designed to help students and staff report, discover, and recover lost belongings within a college campus.

The **Campus Lost and Found Portal** provides a centralized platform for managing lost and found items with secure authentication, RESTful APIs, and a responsive user interface.

## 📌 Project Overview

Losing personal belongings on campus can be stressful, and finding their owners can be difficult without a centralized system.

The Campus Lost and Found Portal addresses this problem by allowing authenticated users to report lost items, publish found-item listings, search existing reports, and manage their own posts. The application uses React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage.

## ✨ Key Features

- **User Authentication:** Register and log in securely.
- **JWT Authentication:** Authenticate users using JSON Web Tokens.
- **Password Security:** Hash passwords using bcrypt.
- **Lost Item Reporting:** Publish details about missing belongings.
- **Found Item Reporting:** List items found around campus.
- **Search and Browse:** Explore available lost and found listings.
- **Post Management:** Create, update, and delete item reports.
- **Responsive Design:** Access the application across desktop, tablet, and mobile devices.
- **RESTful API:** Manage application data through structured HTTP endpoints.
- **MongoDB Integration:** Store user accounts and item information in a database.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, HTML5, CSS3, JavaScript |
| HTTP Client | Axios |
| Backend | Node.js, Express.js |
| Authentication | JSON Web Token (JWT) |
| Password Hashing | bcrypt.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Development Tools | VS Code, Git, GitHub |
| API Testing | Postman |
| Development Server | Nodemon |

## 🏗️ Application Architecture

The application follows a client-server architecture.

1. **Frontend:** React.js provides the user interface and communicates with the backend using Axios.
2. **Backend:** Express.js handles HTTP requests, authentication, validation, and application logic.
3. **Database:** MongoDB stores user and item records, while Mongoose manages database models.
4. **Authentication:** JWT-based authentication protects routes that require a logged-in user.

```text
             User
              |
              v
      React.js Frontend
              |
        Axios / HTTP
              |
              v
     Node.js + Express.js
              |
       Authentication
         JWT + bcrypt
              |
              v
       Mongoose Models
              |
              v
        MongoDB Atlas
```

## 📂 Project Structure

```text
Campus-Lost-Found-Portal/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── screenshots/
├── .gitignore
└── README.md
```

*Note: The structure above represents the intended project organization. Adjust it to match the actual files in your repository.*

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js and npm
- Git
- A MongoDB Atlas account or a local MongoDB instance
- A code editor, such as Visual Studio Code

### 1. Clone the Repository

Replace `your-username` with your actual GitHub username.

```bash
git clone https://github.com/your-username/Campus-Lost-Found-Portal.git
```

### 2. Navigate to the Project Directory

```bash
cd Campus-Lost-Found-Portal
```

### 3. Configure the Backend

Navigate to the server directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_random_secret
CLIENT_URL=http://localhost:5173
```

Replace the placeholder values with your actual configuration. Keep your `.env` file private and never commit database credentials or JWT secrets to GitHub.

### 4. Start the Backend Server

```bash
npm run dev
```

Ensure that the `server/package.json` file defines a `dev` script, such as one using Nodemon.

The backend should start on port `5000`, provided your application is configured to use that port.

### 5. Configure the Frontend

Open a new terminal and navigate to the client directory from the project root:

```bash
cd client
npm install
```

### 6. Start the React Application

```bash
npm run dev
```

Open the local URL displayed in the terminal, commonly:

`http://localhost:5173`

*The commands assume that the frontend uses Vite. If your project uses a different setup, follow the scripts defined in its `package.json`.*

## 🌐 API Documentation

The following endpoints describe the planned API structure. Actual paths and behavior should match the implemented backend.

### Authentication Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate an existing user |

### Lost Item Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/lost` | Retrieve lost-item listings |
| POST | `/api/lost` | Create a lost-item report |
| PUT | `/api/lost/:id` | Update a lost-item report |
| DELETE | `/api/lost/:id` | Delete a lost-item report |

### Found Item Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/found` | Retrieve found-item listings |
| POST | `/api/found` | Create a found-item report |
| PUT | `/api/found/:id` | Update a found-item report |
| DELETE | `/api/found/:id` | Delete a found-item report |

**Authentication note:** Endpoints that modify user-owned records should require authentication and appropriate ownership checks. Protected requests can send a token using the `Authorization: Bearer <token>` header if supported by the implementation.

## 📸 Screenshots

Add screenshots of the actual application to demonstrate its interface and functionality.

Suggested screenshot organization:

```text
screenshots/
├── Home.png
├── Login.png
├── Register.png
├── LostItems.png
└── FoundItems.png
```

Once the images have been added, display them in this section:

```markdown
### Home Page
![Home Page](screenshots/Home.png)

### Login Page
![Login Page](screenshots/Login.png)

### Lost Items
![Lost Items](screenshots/LostItems.png)

### Found Items
![Found Items](screenshots/FoundItems.png)
```

## 🔒 Security Considerations

- Store password hashes rather than plain-text passwords.
- Use a strong, randomly generated JWT secret.
- Keep environment variables and database credentials out of version control.
- Validate and sanitize incoming request data.
- Apply authentication and authorization checks to protected routes.
- Configure CORS to allow only the intended frontend origins in production.
- Use HTTPS when deploying the application publicly.

## 🚀 Future Enhancements

- Email notifications for matching lost and found items.
- Image uploads for item identification.
- Advanced search and category filters.
- An administrator dashboard for moderation.
- Item recovery status tracking.
- In-app messaging between users.
- Automated matching of lost and found reports.
- Mobile application support.

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Commit your changes with a clear message.
5. Push your branch to GitHub.
6. Open a pull request describing your contribution.

## 📄 License

This project is developed for educational and learning purposes. If you plan to distribute it publicly, consider adding a suitable open-source license, such as the MIT License, and include the corresponding `LICENSE` file.

## 👨‍💻 Author

**Indra Reddy Tumu**

- **GitHub:** https://github.com/indratumu296-web
- **LinkedIn:** https://linkedin.com/in/tumu-indra-reddy

---

⭐ If you find this project useful, consider giving the repository a star!

*Built to make campus communities more connected, organized, and helpful.*
