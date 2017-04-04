# fcms-md2json

Convert Hexo-like markdown file content to a javascript object

## Usage

```
const md2json = require('fcms-md2json');
const postContent = `---
title: I am post title
date: 2016-04-23 13:47:59
categories: Diary
---
# Title
## Sub-title
[Link](http://www.example.com)`;
const postObject = md2json(postContent);
```

## Example input and output

Input (String):
```
---
title: I am post title
date: 2016-04-23 13:47:59
categories: Diary
---
# Title
## Sub-title
[Link](http://www.example.com)
```

Output (Object):
```
{
    "title": "I am post title",
    "date": "2016-04-23T13:47:59.000Z",
    "categories": "Diary",
    "__content": "<h1 id=\"title\">Title</h1>\n<h2 id=\"subtitle\">Sub-title</h2>\n<p><a href=\"http://www.example.com\">Link</a></p>"
}
```
