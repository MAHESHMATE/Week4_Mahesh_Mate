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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClient = void 0;
const clientService_1 = require("../services/clientService");
function registerClient(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clientData = req.body;
            const client = yield (0, clientService_1.createClient)(clientData);
            res.status(201).json({ message: 'Client registered successfully', client });
        }
        catch (error) {
            console.error('Error while registering client!!', error);
            res.status(500).json({ error: 'Internal Server Error!!' });
        }
    });
}
exports.registerClient = registerClient;
//# sourceMappingURL=clientController.js.map