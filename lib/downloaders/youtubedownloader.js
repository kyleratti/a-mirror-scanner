"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ytdl_core_1 = __importDefault(require("ytdl-core"));
class YouTubeDownloader {
    constructor(url) {
        this.url = url;
    }
    validateUrl() {
        return ytdl_core_1.default.validateURL(this.url);
    }
    static validateUrl(url) {
        return (new YouTubeDownloader(url)).validateUrl();
    }
}
exports.default = YouTubeDownloader;
//# sourceMappingURL=youtubedownloader.js.map