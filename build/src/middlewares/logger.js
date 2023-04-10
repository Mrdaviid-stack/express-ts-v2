"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const morgan_1 = __importDefault(require("morgan"));
const chalk_1 = __importDefault(require("chalk"));
exports.logger = (0, morgan_1.default)((tokens, request, response) => {
    return [
        chalk_1.default.yellowBright(`[${tokens.date(request, response, 'web')}]`),
        chalk_1.default.cyanBright(tokens.method(request, response)),
        chalk_1.default.yellow(tokens.status(request, response)),
        chalk_1.default.white(tokens.url(request, response)),
        `(${chalk_1.default.greenBright(tokens['response-time'](request, response) + ' ms')})`,
        `Remote IP: ${chalk_1.default.blueBright(tokens['remote-addr'](request, response))}`,
        `| User-agent: ${chalk_1.default.blueBright(tokens['user-agent'](request, response))}`,
    ].join(' ');
});
