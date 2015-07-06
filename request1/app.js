var request = require('request');
var cheerio = require('cheerio');

request('http://www.cnblogs.com/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body); //拿到body，作为选择器
    var title = $(".editor_pick").text();
    console.log(title);
  }
});
