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
exports.editClient = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = __importDefault(require("../../db/models/Client"));
const router = express_1.default.Router();
// @route   PUT api/client/:id
// @desc    Edit client by id
// @access  Public
const editClient = router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield Client_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(client);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
}));
exports.editClient = editClient;
