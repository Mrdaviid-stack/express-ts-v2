"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesRoute = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.PagesRoute = (0, express_1.Router)().use('/pages', router);
router.get('/', (request, response) => {
    response.status(200).send('pages');
});
