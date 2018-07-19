export default interface Downloader {
    /**
     * Validate the URL against the downloader
     * @param url The url to check
     */
    validateUrl(url: string): boolean;
}
