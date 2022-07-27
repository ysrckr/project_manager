"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postClient = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = __importDefault(require("../../db/models/Client"));
const router = express_1.default.Router();
// @route   POST api/clients
// @desc    Create a new client
// @access  Public
const postClient = router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield Client_1.default.create({
            name: req.body.name,
            email: req.body.email,
        });
        res.status(201).json(client);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: err.message });
    }
}));
exports.postClient = postClient;
