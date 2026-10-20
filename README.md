# Campus Lost and Found Portal

A university project for reporting lost and found items, searching reports, and managing ownership claims.

## Technology

- Client: HTML5, CSS3, and vanilla JavaScript (ES6)
- Server: Node.js and Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT and bcrypt

## Current setup

The project uses separate `client/` and `server/` directories so they can be deployed independently later. The first backend foundation is in `server/`.

`server/.env` is intentionally excluded from Git because it will hold your personal MongoDB connection string and JWT secret. Its safe template is `server/.env.example`.

The frontend pages, stylesheets, scripts, model files, routes, controllers, and Postman collection are scaffolded in their final locations. They will be implemented feature by feature.
