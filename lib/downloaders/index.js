"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youtubedownloader_1 = __importDefault(require("./youtubedownloader"));
class default_1 {
    /**
     * Matches a url to the appropriate downloader
     * @param url The url to match to a downloader
     */
    static match(url) {
        if (youtubedownloader_1.default.validateUrl(url))
            return new youtubedownloader_1.default(url);
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map