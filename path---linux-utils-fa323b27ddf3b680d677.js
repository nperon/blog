webpackJsonp([0xfb919dfbfe03],{380:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>Memory usage with watch</h3>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>',frontmatter:{title:"Linux Utils",date:"October 11, 2020",path:"/linux-utils",tags:["Linux","utils","bash","vi","find","grep","rename"],excerpt:""}}},pathContext:{prev:{html:'<h3>Aggregations, buckets and metrics</h3>\n<p>Bucket by rating value:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Count only 5-start ratings:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match": {\n            "rating": 5.0\n        }\n    },\n    "aggs": {\n        "ratings": {\n            "terms": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Average rating for Star Wars:</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": "Star Wars Episode IV"\n        }\n    },\n    "aggs": {\n        "avg_rating": {\n            "avg": {\n                "field": "rating"\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Histograms</h3>\n<p>Display ratings by 1.0-rating intervals</p>\n<pre><code class="language-bash">curl -XGET \'127.0.0.1:9200/ratings/_search?size=0&#x26;pretty\' -d \'\n{\n    "aggs": {\n        "whole_rating": {\n            "histogram": {\n                "field": "rating",\n                "interval": 1.0\n            }\n        }\n    }\n}\'\n</code></pre>',id:"/home/nperon/Documents/workshop/src/pages/2020-08-29-ELK-3/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-29T22:47:32.235Z",path:"/elk-searching",title:"Aggregations",excerpt:"",tags:["Elastic Search","aggregations"]}},next:null}}}});
//# sourceMappingURL=path---linux-utils-fa323b27ddf3b680d677.js.map