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
exports.getClientById = exports.getClients = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = __importDefault(require("../../db/models/Client"));
const router = express_1.default.Router();
// @route   GET api/client/get
// @desc    Get all clients
// @access  Public
const getClients = router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield Client_1.default.find();
        res.status(200).json(clients);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
}));
exports.getClients = getClients;
// @route   GET api/client/get/:id
// @desc    Get client by id
// @access  Public
const getClientById = router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield Client_1.default.findById(req.params.id);
        res.status(200).json(client);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
}));
exports.getClientById = getClientById;
