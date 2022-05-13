# How Web Works
What happens behind the scenes when we type github.com in a browser?

###  1. URL parsing :-
* The browser parses the information contained in the URL. This includes the protocol (“https”), the domain name (“github.com”) and the resource (“/”).
* Anything after ".com" is a specific resource located on the server.( like home page)
<img src="https://i.imgur.com/BW04kqy.png" />


### 2. DNS Lookup :-
* The first step in the navigation is to figure out the IP address for the visited domain.
* Each domain name (eg. youtube.com / google.com) is mapped to a particular IP address and the DNS (Domain Name Server) contains the list of records which maps a particular domain name to it's unique IP address.
<img src="https://kinsta.com/wp-content/uploads/2018/05/what-is-dns.png" />

### 3. Setting up connection :-
* Once the IP address is located for a requested website via DNS the browser takes the IP address and the given port number from the URL (the HTTP protocol defaults to port 80 and HTTPS defaults to port 443) and opens a TCP socket connection. At this point, web browser and web server are finally connected.
<img src="https://i.imgur.com/3Mr3B8P.png" title="source: imgur.com" />

### 4. Request / Response Cycle :-
* The web browser sends an HTTP request to the web server for the main HTML web page of github.
<img src="https://i.imgur.com/mU6syrq.png" title="source: imgur.com" />

* The web server receives the request and looks for that HTML page. If the page exists, the web server prepares the response and sends it back to your browser.
<img src="https://i.imgur.com/wNH6D7e.png" title="source: imgur.com" />

### 5.Behind the scenes of the Browser :-
* Once the server supplies the resources (HTML, CSS, JS, images, etc.) to the browser it undergoes the below process:
  1. Parsing - HTML, CSS, JS
  2. Rendering - Construct DOM Tree → Render Tree → Layout of Render Tree → Painting the render tree.
* For each asset listed (i.e, CSS or image files), the browser repeats the entire process above, making additional HTTP requests to the server for each resource.

### 6. Final Steps :-
* Once the browser has the resources comprising the website (HTML, CSS, JavaScript, images), it has to go through several steps to present the resources to you as a human-readable webpage.

<img src="https://i.imgur.com/i32HTTw.png" title="source: imgur.com" />

  1.  The rendering engine will start parsing the HTML document and convert elements to DOM nodes . The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: **render tree**.

<img src="https://i.imgur.com/TDXfpMC.png" />

2. The **render tree** contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.
3. After the construction of the render tree it goes through a **layout** process. This means giving each node the exact coordinates where it should appear on the screen.
4. The next stage is **painting** the render tree will be traversed and each node will be painted using the UI backend layer.

**NOTE :-**
* The rendering process by browsers is a gradual process it will try to display contents on the screen as soon as possible and will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network. 

### 7. References
* https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c#.7l3tokoh1
* https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/