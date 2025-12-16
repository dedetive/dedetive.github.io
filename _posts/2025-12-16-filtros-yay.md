---
layout: post
title: yay filtros
date: 2025-12-16 12:26 -0300
categories:
  - fun
  - coding
description: prontooooo
language: Português
author: ded(0)
---
prontinhoooooooooooooo :3
  
filtros tão funcionando yay
  
eu poderia ter feito de algum jeito melhor, mas assim já tá ótimo

depois se der vontade eu deixo isso melhor
<br>  
Eu usei:
```js  
const element = document.getElementById('post-list');  
for (const child of element.children) {  
    if (child.lang !== language) child.style.display = 'none';  
}
```  
pra linguagens, e algo bem similar pras tags.

Mas isso introduz alguns problemas, como não ser possível filtrar por uma língua <em>e</em> uma ou mais tags ao mesmo tempo.

Mas mesmo assim, para o que eu tenho agora isso é o suficiente.
<br>  
<br>  
<em>woof :3</em>