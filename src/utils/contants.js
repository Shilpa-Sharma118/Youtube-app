const YOUR_API_KEY = "AIzaSyAFYCWzmbwUq0-tRAP_3O-fzCtakcsuB90";

export const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  YOUR_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const KEY_PARAM = "&key=" + YOUR_API_KEY;

export const OFFSET_LIVE_CHAT = 10;
