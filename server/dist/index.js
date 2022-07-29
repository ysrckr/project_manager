"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const get_1 = require("./routes/client/get");
const post_1 = require("./routes/client/post");
const put_1 = require("./routes/client/put");
const delete_1 = require("./routes/client/delete");
const get_2 = require("./routes/projects/get");
const post_2 = require("./routes/projects/post");
const put_2 = require("./routes/projects/put");
const delete_2 = require("./routes/projects/delete");
// Load environment variables from .env file
dotenv_1.default.config({
    path: '.env',
});
// Create a new express application instance
const app = (0, express_1.default)();
// Allow cross-origin requests
app.use((0, cors_1.default)());
// Configure express to use body-parser as middle-ware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Connect to MongoDB
(0, db_1.default)();
// Define PORT
const port = Number(process.env.PORT) || 8000;
// Define routes for Client
app.use('/api/v1/clients', get_1.getClients, get_1.getClientById, post_1.postClient, put_1.editClient, delete_1.deleteClient);
// Define routes for Project
app.use('/api/v1/projects', get_2.getProjects, get_2.getProjectById, get_2.getProjectsByClientId, post_2.createProject, put_2.updateProject, delete_2.deleteProject);
// Start the server
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
