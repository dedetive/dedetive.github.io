---
layout: post
title: Short js rant
date: 2025-10-27 16:09 -0300
categories:
  - rant
  - coding
description: why just why
language: English
---
May I ask why is the following `true`:  
  
```js  
100 * true ? 2 : 3 == 2  
```  
<br>
Oh no, sorry. That's not true.  
  
That equals 2.  
<br>  
And what happens if you fix the loose == and replace it with stricter ===?  

Yeah, right. 2 again.  
<br>  
Please don't tell me multiplication with a BOOLEAN actually has precedence over ternary evaluation???  
<br>  
And don't even get me started on equality having higher precedence than a ternary.  
<br>  
Gotta really love parentheses to make anything useful in js, huh.
