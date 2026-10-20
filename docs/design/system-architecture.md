# System Architecture

The browser-based client sends HTTP requests to the Express REST API. The API authenticates users, validates requests, applies business rules, and stores data in MongoDB through Mongoose models. Uploaded item images will be stored in the root `uploads/` directory.
