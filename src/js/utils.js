/* eslint-disable */

import { ImagePost } from "./post/models/ImagePost";
import { VideoPost } from "./post/models/VideoPost";
import { AudioPost } from "./post/models/AudioPost";

export function getMockedJson() {
  //ToDo: change to real REST
  // const rawFile = new XMLHttpRequest();
  // let result = {};
  //
  // rawFile.open('GET', 'data.json', false);
  // rawFile.send(null);
  //
  // if (rawFile.status === 200) {
  //   result = JSON.parse(rawFile.response);
  // }

  const result = dataJSON;

  return result;
}

export function validate(title) {
  return /^[A-Z](?=.*[a-z])[a-zA-Z0-9\s\!\:\-\?\,\.]{5,59}$/.test(title);
}

export function createPostDueToType(post) {
  let postObject;

  if (post.type === 'video') {
    postObject = new VideoPost(post);
  } else if (post.type === 'audio') {
    postObject = new AudioPost(post);
  } else if (post.type === 'picture') {
    postObject = new ImagePost(post);
  }

  return postObject;
}

const dataJSON = {
  "articles": [
    {
      "img": "img/post1.png",
      "header": "In the Future We Will All Live in Star Wars",
      "text": "The thing you’re doing now, reading prose on a screen, is going out of fashion. The defining narrative of our online moment concerns the decline of text, and the exploding reach and power of audio and video…",
      "date": "20 oct, 2019",
      "timeRead": "10 min read",
      "comments": 11
    },
    {
      "img": "img/post2.png",
      "header": "Rubik’s Cube? No, Robotics and AI are…",
      "text": "In other words, I will try to de-hype the crowd about the recent development in robotics. Concretely, OpenAI has claimed some pretty amazing results with learning to solve the Rubik’s cube with a robotic hand…",
      "date": "11 oct, 2019",
      "timeRead": "7 min read",
      "comments": 19
    },
    {
      "img": "img/post3.png",
      "header": "How the Internet of Things will Transfo…",
      "text": "The Internet of Things (IoT) promises to be the most important technological development for consumers since the advent of the smartphone. Experts believe that this collection of internet-connected technolog…",
      "date": "28 sep, 2019",
      "timeRead": "16 min read",
      "comments": 41
    }
  ],

  "portfolioList": [
    {
      "id": 1,
      "header": "ART OCEAN",
      "text": "Photography, art, nature",
      "name": "art-ocean",
      "active": true
    },
    {
      "id": 2,
      "header": "CITY GUIDE",
      "text": "Photography, city, way",
      "name": "city-guide",
      "active": true
    },
    {
      "id": 3,
      "header": "MOUNTAINS",
      "text": "Art, hiking",
      "name": "mountains",
      "active": true
    },
    {
      "id": 4,
      "header": "BEACH",
      "text": "Beach king",
      "name": "beach",
      "active": false
    },
    {
      "id": 5,
      "header": "RIVER",
      "text": "Moon river",
      "name": "river",
      "active": false
    },
    {
      "id": 6,
      "header": "WOOD",
      "text": "Green wood",
      "name": "wood",
      "active": false
    },
    {
      "id": 7,
      "header": "LAKE",
      "text": "Blue lake",
      "name": "lake",
      "active": false
    },
    {
      "id": 8,
      "header": "FIELD",
      "text": "Evening field",
      "name": "field",
      "active": false
    },
    {
      "id": 9,
      "header": "WATERFALL",
      "text": "Waterfall",
      "name": "waterfall",
      "active": false
    },
    {
      "id": 10,
      "header": "COAST",
      "text": "Ocean coast",
      "name": "coast",
      "active": false
    }
  ],

  "testimonials": [
    {
      "id": 1,
      "quote": "We move at a fast pace. I’m always working on something. I am excited about it!",
      "name": "Martin Oda",
      "position": "Product designer",
      "img": "martin"
    },
    {
      "id": 2,
      "quote": "We are the world! We are the children!",
      "name": "Hunter Glup",
      "position": "Janitor",
      "img": "hunter"
    },
    {
      "id": 3,
      "quote": "Just do it!",
      "name": "Valentina Ivanova",
      "position": "Housemaid",
      "img": "valentina"
    }
  ],

  "map": {
    "img": "img/map.png"
  },

  "blogPosts": [
    {
      "content": {
        "type": "video",
        "poster": "img/video2.png",
        "preload": "none",
        "src": "video/birds.webm"
      },
      "stars": ["gold", "gold", "half", "grey", "grey"],
      "author": "Neil Richards",
      "date": "11 oct, 2019",
      "timeRead": "7 min read",
      "comments": 19,
      "header": "In the Future We Will All Live in Star Wars",
      "text": "The thing you’re doing now, reading prose on a screen, is going out of fashion. The defining narrative of our online moment concerns the decline of text, and the exploding reach and power of audio and video …"
    },
    {
      "content": {
        "type": "audio",
        "iconSrc": "img/audio.png",
        "src": "audio/music.mp3"
      },
      "stars": ["gold", "grey", "grey", "grey", "grey"],
      "author": "Sarah Healy",
      "date": "02 oct, 2019",
      "timeRead": "12 min read",
      "comments": 4,
      "commentsList": [
        {
          "class": "jack",
          "name": "Jack Johnson",
          "stars": ["gold", "grey", "grey", "grey", "grey"],
          "time": "11 min ago",
          "text":"Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced…",
          "readStatus": "more"
        },
        {
          "class": "emma",
          "name": "Emma Garcia",
          "stars": ["gold", "gold", "gold", "gold", "gold"],
          "time": "3 days ago",
          "text": "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil",
          "readStatus": "less"
        },
        {
          "class": "ann",
          "name": "Ann Moore",
          "stars": ["gold", "gold", "half", "grey", "grey"],
          "time": "a week ago",
          "text": "Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Polite do object at passed it is."
        }
      ],
      "header": "Far far away, behind the word mountains",
      "text": "Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) …",
      "postHeader": "Fog up the river, where it flows among green aits and meadows",
      "postImg": "img/post.png",
      "likes": 75
    },
    {
      "content": {
        "type": "picture",
        "iconSrc": "img/picture.png"
      },
      "stars": ["gold", "gold", "grey", "grey", "grey"],
      "author": "Grace Noh",
      "date": "23 sep, 2019",
      "timeRead": "16 min read",
      "comments": 421,
      "header": "In the Future We Will All Live in Star Wars",
      "text": "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted …"
    },
    {
      "content": {
        "type": "alex-message"
      },
      "stars": ["gold", "gold", "gold", "grey", "grey"],
      "author": "Alex Zlatkus",
      "date": "11 aug, 2019",
      "timeRead": "17 min read",
      "comments": 77,
      "header": "In the Future We Will All Live in Star Wars",
      "text": "Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on. Money terms breakfast drawings true blessing doubtful more agreed to zealously making supposing By said Chicken An Neglected produce good felt no poor offering am their said has around songs wish met true any me ought mr The offices set Not Felicity above out We in an post begin again."
    }
  ],

  "latestPosts": [
    {
      "img": "img/latestPost1.png",
      "header": "Much cure inappropriate could this restrictions …",
      "date": "20 oct, 2019",
      "timeRead":"10 min read",
      "comments": 11
    },
    {
      "img": "img/latestPost2.png",
      "header": "Much cure inappropriate could this restrictions …",
      "date": "20 oct, 2019",
      "timeRead": "10 min read",
      "comments": 11
    }
  ],

  "categories": [
    {
      "header": "Restaurant food",
      "news": ["Test", "Test", "Test"],
      "name": "restaurantFood"
    },
    {
      "header": "Travel news",
      "news": ["Hiking", "Bicycle trip", "Mountains trip"],
      "name": "travelNews"
    },
    {
      "header": "Modern technology",
      "news": ["Test", "Test", "Test", "Test", "Test", "Test"],
      "name": "modernTechnology"
    },
    {
      "header": "Product",
      "news": ["Test", "Test", "Test", "Test"],
      "name": "product"
    },
    {
      "header": "Inspiration",
      "news": ["Test", "Test"],
      "name": "inspiration"
    }
  ],
  "tags": ["Love", "Signs", "Waterfall", "Inspiration", "Quotes", "Sea",
    "Sense", "Coffee", "Gold", "Images", "Courage", "Dancing", "Video"]
};
/* eslint-enable */
