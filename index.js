'use strict';

const yaml = require('yaml-front-matter');
const showdown  = require('showdown');

// Input hexo-like post content:
// ---
// title: I am post title
// date: 2016-04-23 13:47:59
// categories: Diary
// ---
// # Title
// ## Sub-title
// [Link](http://www.example.com)

module.exports = (fileContent) => {
    let post = yaml.loadFront(fileContent);
    const converter = new showdown.Converter();
    post.__content = converter.makeHtml(post.__content);
    return post;
};
