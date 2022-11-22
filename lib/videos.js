import videoData from "../data/videos.json";

export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = "youtube.googleapis.com/youtube/v3";
    // const URL =`search?part=snippet&type=video&maxResults=25&q=${searchQuery}`
    const response = await fetch(
      `https://${BASE_URL}/${url}&key=AIzaSyBl_rfLXmPktOQFGDj65ebleo4CkGaP3YY`
    );

    const data = await response.json();

    if (data?.error) {
      console.log("youtube api error", data.error);
      return [];
    }

    return data.items.map((item) => {
      const snippet = item.snippet;
      return {
        title: snippet?.title,
        imgUrl: snippet.thumbnails.high.url,
        id,
        description: snippet.description,
        publishTime: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        statistics: item.statistics ? item.statistics : { viewCount: 0 },
      };
    });
  } catch (error) {
    console.error("oppppppppppppppppppsssssss", error);
    return [];
  }
};

export const getVideos = (searchQuery) => {
  const URL = `search?part=snippet&type=video&maxResults=25&q=${searchQuery}`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getCommonVideos(URL);
};

export const getYoutubeVideoById = (videoId) => {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`;
  return getCommonVideos(URL);
};
