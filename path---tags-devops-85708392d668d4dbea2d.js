webpackJsonp([0xc1b5bd8be376],{412:function(e,a){e.exports={pathContext:{posts:[{html:'<h3>Create a container with a mongo database and connect to it</h3>\n<p>Start with displaying all currently running containers:</p>\n<pre><code class="language-bash">docker ps\n</code></pre>\n<p>Then create locally the container associated with the mongo docker image:</p>\n<pre><code class="language-bash">docker run -p 27017:27017 -d mongo\n</code></pre>\n<p>Executing another time <code>docker ps</code> results in information on the created container like the following being displayed:</p>\n<pre><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES\n2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky\n</code></pre>\n<p>Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor.\nFinally, the container when not needed anymore can be stopped with:</p>\n<pre><code>docker stop 2c6a61aba41b\n</code></pre>\n<h3>Create a container with a PostgreSQL database given the database name and the user credentials</h3>\n<p>Let us assume we need to connect to a database called course_data in a PostgreSQL SGBD with the following credentials: the user is postgres and the password is password. The command line to launch a docker container with such a database is:</p>\n<pre><code class="language-bash">docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=course_data -d -p 5432:5432 postgres\n</code></pre>\n<p>Terminal access to the database prompt is obtained by first accessing the container shell:</p>\n<pre><code class="language-bash">docker container exec -it postgresdb bash\n</code></pre>\n<p>The postgre prompt of user \'postgres\' may then be accessed with:</p>\n<pre><code class="language-bash">psql course_data postgres\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-03-31-docker-recipes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-03-31T16:09:12.235Z",path:"/docker",title:"Docker Recipes",excerpt:"Some Docker Recipes",tags:["docker","container","devops"]}}],tagName:"devops"}}}});
//# sourceMappingURL=path---tags-devops-85708392d668d4dbea2d.js.map