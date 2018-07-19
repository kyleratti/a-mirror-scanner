import Downloader from './downloader';
import YouTubeDownloader from './youtubedownloader';

export default class {
    /**
     * Matches a url to the appropriate downloader
     * @param url The url to match to a downloader
     */
    static match(url: string): Downloader {
        if(YouTubeDownloader.validateUrl(url))
            return new YouTubeDownloader(url);
    }
}
