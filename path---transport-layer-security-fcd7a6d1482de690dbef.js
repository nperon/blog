webpackJsonp([0xae86d7968e40],{419:function(e,a){e.exports={data:{markdownRemark:{html:'<h3>Getting a letsencrypt certificate on a host with shell access</h3>\n<p>Use the Certbot ACME client documented in the <a href="https://certbot.eff.org">certbot pages</a>.</p>\n<h3>Decoding and evaluating a TLS certificate</h3>\n<ul>\n<li>\n<p>paste the certificate contained in the <code>cert.pem</code> file found somewhere under the\n<code>/etc/letsencryot</code> directory into the form provided\nin the <a href="https://www.sslshopper.com/certificate-decoder.html">SSLHopper pages</a>.\nThe same test can be done with the <code>chain.pem</code> or with\nthe <code>fullchain.pem</code> file.</p>\n</li>\n<li>\n<p>paste the domain of the site to be evaluated into the form found in\nthe SSL Server test page of the <a href="https://www.ssllabs.com/ssltest/">www.ssllabs.com/ssltest/</a>.</p>\n</li>\n<li>\n<p>another similar test is available at <a href="https://www.digicert.com/help">www.digicert.com/help</a>.</p>\n</li>\n</ul>',frontmatter:{title:"Transport Layer Security",date:"November 01, 2020",path:"/transport-layer-security",tags:["TLS","web security","TLS certificate"],excerpt:""}}},pathContext:{prev:{html:'<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>Memory usage with watch</h3>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>',id:"/home/nperon/Documents/workshop/src/pages/2020-10-11-linux-utils/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-10-11T22:47:32.235Z",path:"/linux-utils",title:"Linux Utils",excerpt:"",tags:["Linux","utils","bash","vi","find","grep","rename"]}},next:null}}}});
//# sourceMappingURL=path---transport-layer-security-fcd7a6d1482de690dbef.js.map