---
layout: post
title: Short js rant
date: 2025-10-27 16:09 -0300
categories:
  - rant
description: why just why
---
May I ask why is the following `true`:

```js
100 * true ? 2 : 3 == 2
```

Oh no, sorry. It's not `true`.

That's equal to `2`. 

And what happens if you fix the loose `\==` and replace it with stricter `\=\==`? 

Yeah, right: `2` again.

Please don't tell me multiplication with a BOOLEAN actually has precedence over ternary evaluation??? 

And don't even get me started on equality having lower precedence than a ternary.

Gotta really love parentheses to make any useful calculation in js, huh.