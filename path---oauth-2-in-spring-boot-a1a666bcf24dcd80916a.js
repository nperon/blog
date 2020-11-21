webpackJsonp([0xa98187ae188a],{390:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>OAuth 2.0 in Spring Security 5</h3>\n<p>The legacy <a href="https://github.com/spring-projects/spring-security-oauth">Spring Security OAuth Project</a> includes support for implementing all of the three roles involved in OAuth: Client, Resource Server and Authorization Server. However, that project is now deprecated and to be maintained only for a limited time\nuntil not later than may 2022. </p>\n<p>The new OAuth 2 project (<a href="https://github.com/spring-projects-experimental/spring-authorization-server">https://github.com/spring-projects-experimental/spring-authorization-server</a>)\nwhich is part of Spring Security 5 is already available but not fully developed as yet. A\nclient and a resource server are already available. However,\nthe <a href="https://github.com/spring-projects-experimental/spring-authorization-server">authorization server</a> project is not completed as of december 2020. </p>\n<h3>The two types of clients</h3>\n<p>Client applications can be split into two categories: </p>\n<ul>\n<li>confidential clients where the client secret is kept safe.</li>\n<li>public clients which cannot keep their client id and client secret safe. It is the case of\napplications which are browser based like pure front end javascript applications. It is also\nthe case of some native applications stored in smartphones. It is the case of any application\nwhose code can be viewed or decompiled.</li>\n</ul>\n<h2>The different grant types i.e. ways an application gets an access token</h2>\n<p>Authorization code and Client credentials are the most common grant types. Implicit flow and Password grant are two other grant types of Oauth 2 which are now deprecated. There are now two additional possible grant types which can be relevant in some types of applications: PKCE Enhanced authorization code and Device code. Note that PKCE stands for Proof Key for Code Exchange.</p>\n<p>Here are five different types of applications with their relevant grant types:</p>\n<ul>\n<li>Server Side Web Apps: <strong>Authorisation Code</strong> ; Password grant (deprecated).</li>\n<li>Server Side Script with no UI : <strong>Client Credentials</strong></li>\n<li>Javascript Single Page Application with no back end: <strong>PKCE Enhanced Authorization Code</strong>; Implicit Flow (deprecated) ; Password Grant (deprecated).</li>\n<li>Mobile native app : <strong>Authorization Code</strong>; <strong>PKCE Enhanced Authorization Code</strong> ; Implicit Flow (deprecated) ; Password Grant (deprecated).</li>\n<li>Device : <strong>Device Code</strong>.</li>\n</ul>\n<p>Finally, Refresh Token is an additional Grant Type where a refresh token is exchanged for an access token.</p>',frontmatter:{title:"Oauth 2.0 in Spring Boot",date:"November 15, 2020",path:"/oauth2-in-spring-boot",tags:["web security","OAuth 2.0","Spring Boot","Spring Security","Spring 5"],excerpt:""}}},pathContext:{prev:{html:'<h2>JSON stringify improved</h2>\n<p>The following is a function which stringifies an object to the required level.</p>\n<pre><code class="language-javascript">function stringify(val, depth, replacer, space) {\n    depth = isNaN(+depth) ? 1 : depth;\n    function _build(key, val, depth, o, a) {\n        return !val || typeof val != \'object\' ? val : (a=Array.isArray(val), JSON.stringify(val, function(k,v){ if (a || depth > 0) { if (replacer) v=replacer(k,v); if (!k) return (a=Array.isArray(v),val=v); !o &#x26;&#x26; (o=a?[]:{}); o[k] = _build(k, v, a?depth:depth-1); } }), o||(a?[]:{}));\n    }\n    return JSON.stringify(_build(\'\', val, depth), null, space);\n}\n</code></pre>\n<p>The stringification level is the second argument of the function:</p>\n<pre><code class="language-javascript">const value={a:[12,2,{y:3,z:{q:1}}],s:\'!\',o:{x:1,o2:{y:1}}};\nconsole.log(stringify(value, 0, null, 2));\nconsole.log(stringify(value, 1, null, 2));\nconsole.log(stringify(value, 2, null, 2));\n</code></pre>\n<h2>Memoization</h2>\n<p>In the following snippet, function memoization is implemented with some convenient functional programming features of javascript.</p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let n = args[0];\n    if (n in cache) {\n      return cache[n];\n    }\n    else {\n      let result = fn(n);\n      cache[n] = result;\n      return result;\n    }\n  }\n}\n</code></pre>\n<p>This memoize function can be\nused for instance in calculating Fibonacci\nseries as follows:</p>\n<pre><code class="language-javascript">const memoizeFib = memoize(fib);\n\nfunction fib(num) {\n  switch (num) {\n    case 0: {\n      return 0;\n    }\n    case 1: {\n      return 1;\n    }\n    default: {\n      return memoizeFib(num-2)+memoizeFib(num-1); \n    }\n  }\n}\n</code></pre>\n<p>The following is a slightly different version of memoize.\nArguments of the function, which operate as the cache keys,\nare stringified: </p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let stringifiedArgs = JSON.stringify(args);\n    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);\n    return result;\n  }\n}\n</code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2018-07-21-es6-toolbox/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-11-07T17:46:11.271Z",path:"/es6-toolbox",title:"ES6 toolbox",excerpt:"",tags:["javascript","es6","toolbox","utils","functional programming","memoization"]}},next:null}}}});
//# sourceMappingURL=path---oauth-2-in-spring-boot-a1a666bcf24dcd80916a.js.map