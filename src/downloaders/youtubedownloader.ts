import ytdl from 'ytdl-core';

import Downloader from './downloader';

export default class YouTubeDownloader implements Downloader {
    /** The video's url */
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    validateUrl() {
        return ytdl.validateURL(this.url);
    }

    static validateUrl(url) {
        return (new YouTubeDownloader(url)).validateUrl();
    }
}
