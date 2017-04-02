const assert = require('assert');

describe('md2json', function() {
  const md2json = require('..');
  describe('hexo post content', function() {
    it('should parse the front-matter and convert the markdown to html', function() {
      console.log(md2json);
      const post = md2json(
`---
title: I am post title
date: 2016-04-23 13:47:59
categories: Diary
---
# Title
## Sub-title
[Link](http://www.example.com)`
      );
      const expect = {
        title: 'I am post title',
        date: new Date('2016-04-23T13:47:59.000Z'),
        categories: 'Diary',
        __content: '<h1 id="title">Title</h1>\n<h2 id="subtitle">Sub-title</h2>\n<p><a href="http://www.example.com">Link</a></p>'
      };
      assert.deepEqual(expect, post);
    });
  });
});
