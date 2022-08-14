import axios from 'axios';

const KEY = 'AIzaSyC-ZQTA45cCsFUD2qw1xUMIKUHJir-Us-0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
