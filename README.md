# OFFLINE MIYA ZINE

This is a simple static website for **OFFLINE**, a free [zine](https://en.wikipedia.org/wiki/Zine) about Miya Chinen from SK8.
You can find more info about the zine on the site [itself](https://www.offlinemiyazine.xyz/) or on [Twitter](https://twitter.com/chinenmiyazine)!

Posts can be added to the site by putting markdown-files *(.md)* in the `posts` directory.
These files should have a header that contains some specific metadata that tells the site how to handle them, like this:

```
---
title: 'The title that will be shown in post list and in header'
shortTitle: 'This will be the tab title'
date: 'should just be a YYYY-MM-DD string, used to sort posts'
showInList: 'true/false, whether to show the post on the front page or not'
---
```

Anything below this header will be parsed and compiled into html using [remark-html](https://github.com/remarkjs/remark-html) and rendered on the page `localhost:3000/filename`
