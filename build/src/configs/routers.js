"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const PagesRoute_1 = require("../api/pages/routes/PagesRoute");
const routes = [
    PagesRoute_1.PagesRoute,
];
exports.router = (0, express_1.Router)();
for (const route of routes)
    exports.router.use('/', route);
