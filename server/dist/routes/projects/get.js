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
exports.getProjectsByClientId = exports.getProjectById = exports.getProjects = void 0;
const express_1 = __importDefault(require("express"));
const Project_1 = __importDefault(require("../../db/models/Project"));
const router = express_1.default.Router();
// @route   GET api/v1/projects/
// @desc    Get all projects
// @access  Public
const getProjects = router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
}));
exports.getProjects = getProjects;
// @route   GET api/v1/projects/:id
// @desc    Get project by id
// @access  Public
const getProjectById = router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Project_1.default.findById(req.params.id);
        res.status(200).json(project);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
}));
exports.getProjectById = getProjectById;
// @route   GET api/v1/projects/:clientId
// @desc    Get projects by clientId
// @access  Public
const getProjectsByClientId = router.get('/client/:clientId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.find({
            clientId: req.params.clientId,
        });
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json({ msg: err.message });
    }
}));
exports.getProjectsByClientId = getProjectsByClientId;
