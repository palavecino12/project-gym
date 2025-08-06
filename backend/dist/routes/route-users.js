"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_users_1 = require("../controllers/controller-users");
const router = express_1.default.Router();
router.get('/getUsers', controller_users_1.getUsers);
router.get('/getUser/:id', controller_users_1.getUserById);
router.post('/addUser', controller_users_1.addUser);
router.delete('/deleteUser/:id', controller_users_1.deleteUser);
exports.default = router;
