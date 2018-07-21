webpackJsonp([67335324583948],{323:function(n,e){n.exports={pathContext:{posts:[{html:'<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let n = args[0];\n    if (n in cache) {\n      return cache[n];\n    }\n    else {\n      let result = fn(n);\n      cache[n] = result;\n      return result;\n    }\n  }\n}\n</code></pre>\n<p>This memoize function can be\nused for instance in calculating Fibonacci\nseries as follows:</p>\n<pre><code class="language-javascript">const memoizeFib = memoize(fib);\n\nfunction fib(num) {\n  switch (num) {\n    case 0: {\n      return 0;\n    }\n    case 1: {\n      return 1;\n    }\n    default: {\n      return memoizeFib(num-2)+memoizeFib(num-1); \n    }\n  }\n}\n</code></pre>\n<p>In the following slightly different version of memoize,\narguments of the function, which operate as the cache keys,\nare stringified: </p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let stringifiedArgs = JSON.stringify(args);\n    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);\n    return result;\n  }\n}\n</code></pre>',id:"/home/nperon/Documents/tutorials/egghead/build-a-blog/my-blog/src/pages/2018-07-21-memoizing-a-function/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-07-21T18:49:39.175Z",path:"/memoization",title:"Memoizing a function in es6",excerpt:"Function memoization implemented in a short snippet thanks to convenient functional programming features of javascript",tags:["javascript","es6","functional programming","memoization"]}}],tagName:"javascript"}}}});
//# sourceMappingURL=path---tags-javascript-3dcb2bbbe820237a0767.js.map