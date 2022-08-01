"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectInterface_1 = require("../../interface/projectInterface");
const projectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: projectInterface_1.Status,
        default: projectInterface_1.Status.new,
    },
    clientId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
});
const Project = (0, mongoose_1.model)('Project', projectSchema);
exports.default = Project;
