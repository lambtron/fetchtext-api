FetchText API
=================

> A simple text extraction API.

### Request

A simple `GET` request to the endpoint with querystring `URL`, as per example below:
```bash
curl http://fetchtext-api.herokuapp.com/fetch/?url=http://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u
```

### Response

You get an object response:
```javascript
{
    "title":"Shovel Knight review",
    "favicon":"https://cdn1.vox-cdn.com/community_logos/42931/favicon.ico",
    "description":"Shovel Knight is inspired by the past in all the right ways — but it's far from stuck in it.",
    "lang":"en",
    "canonicalLink":"http://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u",
    "tags":[],
    "image":"https://cdn1.vox-cdn.com/thumbor/WZp9mXYh34UoVjXCZWqd9MQ_LOA=/1x0:1914x1076/1280x720/cdn0.vox-cdn.com/uploads/chorus_image/image/34817507/jellyfish_hero.0.png",
    "videos":[],
    "text":"Shovel Knight is inspired by the past in all the right ways — but it's far from ..."
}
```

### Try it

Click [here](http://fetchtext-api.herokuapp.com/fetch/?url=http://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u).

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

