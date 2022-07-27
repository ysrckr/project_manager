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
// Load environment variables from .env file
dotenv_1.default.config({
    path: '.env',
});
// Create a new express application instance
const app = (0, express_1.default)();
// Allow cross-origin requests
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
}));
// Configure express to use body-parser as middle-ware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Connect to MongoDB
(0, db_1.default)();
// Define PORT
const port = Number(process.env.PORT) || 8000;
// Define routes for Client
app.use('/api/v1/clients', get_1.getClients, get_1.getClientById);
app.use('/api/v1/clients', post_1.postClient);
app.use('/api/v1/clients', put_1.editClient);
app.use('/api/v1/clients', delete_1.deleteClient);
// Start the server
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
