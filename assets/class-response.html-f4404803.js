import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as e,b as s,d as a,f as t}from"./app-3f278ba4.js";const d={},h=t('<h1 id="class-response" tabindex="-1"><a class="header-anchor" href="#class-response" aria-hidden="true">#</a> class: Response</h1><ul><li>since: v1.8</li></ul><p>[Response] class represents responses which are received by page.</p><h2 id="async-method-response-allheaders" tabindex="-1"><a class="header-anchor" href="#async-method-response-allheaders" aria-hidden="true">#</a> async method: Response.allHeaders</h2><ul><li>since: v1.15</li></ul><ul><li>returns: &lt;[Object]&lt;[string], [string]&gt;&gt;</li></ul><p>An object with all the response HTTP headers associated with this response.</p><h2 id="async-method-response-body" tabindex="-1"><a class="header-anchor" href="#async-method-response-body" aria-hidden="true">#</a> async method: Response.body</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[Buffer]&gt;</li></ul><p>Returns the buffer with response body.</p><h2 id="async-method-response-finished" tabindex="-1"><a class="header-anchor" href="#async-method-response-finished" aria-hidden="true">#</a> async method: Response.finished</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[null]|[string]&gt;</li></ul><p>Waits for this response to finish, returns always <code>null</code>.</p><h2 id="async-method-response-finished-1" tabindex="-1"><a class="header-anchor" href="#async-method-response-finished-1" aria-hidden="true">#</a> async method: Response.finished</h2><ul><li>since: v1.8</li><li>langs: js</li></ul><ul><li>returns: &lt;[null]|[Error]&gt;</li></ul><h2 id="method-response-frame" tabindex="-1"><a class="header-anchor" href="#method-response-frame" aria-hidden="true">#</a> method: Response.frame</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[Frame]&gt;</li></ul><p>Returns the [Frame] that initiated this response.</p><h2 id="method-response-fromserviceworker" tabindex="-1"><a class="header-anchor" href="#method-response-fromserviceworker" aria-hidden="true">#</a> method: Response.fromServiceWorker</h2><ul><li>since: v1.23</li></ul><ul><li>returns: &lt;[boolean]&gt;</li></ul>',25),c={href:"https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith",target:"_blank",rel:"noopener noreferrer"},u=t('<h2 id="method-response-headers" tabindex="-1"><a class="header-anchor" href="#method-response-headers" aria-hidden="true">#</a> method: Response.headers</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[Object]&lt;[string], [string]&gt;&gt;</li></ul><p>An object with the response HTTP headers. The header names are lower-cased.<br> Note that this method does not return security-related headers, including cookie-related ones.<br> You can use [<code>method: Response.allHeaders</code>] for complete list of headers that include <code>cookie</code> information.</p><h2 id="async-method-response-headersarray" tabindex="-1"><a class="header-anchor" href="#async-method-response-headersarray" aria-hidden="true">#</a> async method: Response.headersArray</h2><ul><li>since: v1.15</li></ul><ul><li>returns: &lt;[Array]&lt;[Object]&gt;&gt; <ul><li><code>name</code> &lt;[string]&gt; Name of the header.</li><li><code>value</code> &lt;[string]&gt; Value of the header.</li></ul></li></ul><p>An array with all the request HTTP headers associated with this response. Unlike [<code>method: Response.allHeaders</code>], header names are NOT lower-cased.<br> Headers with multiple entries, such as <code>Set-Cookie</code>, appear in the array multiple times.</p><h2 id="async-method-response-headervalue" tabindex="-1"><a class="header-anchor" href="#async-method-response-headervalue" aria-hidden="true">#</a> async method: Response.headerValue</h2><ul><li>since: v1.15</li></ul><ul><li>returns: &lt;[null]|[string]&gt;</li></ul><p>Returns the value of the header matching the name. The name is case insensitive. If multiple headers have<br> the same name (except <code>set-cookie</code>), they are returned as a list separated by <code>, </code>. For <code>set-cookie</code>, the <code>\\n</code> separator is used. If no headers are found, <code>null</code> is returned.</p>',12),p={id:"param-response-headervalue-name",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#param-response-headervalue-name","aria-hidden":"true"},"#",-1),f={href:"http://Response.headerValue.name",target:"_blank",rel:"noopener noreferrer"},g=t('<ul><li>since: v1.15</li></ul><ul><li><code>name</code> &lt;[string]&gt;</li></ul><p>Name of the header.</p><h2 id="async-method-response-headervalues" tabindex="-1"><a class="header-anchor" href="#async-method-response-headervalues" aria-hidden="true">#</a> async method: Response.headerValues</h2><ul><li>since: v1.15</li></ul><ul><li>returns: &lt;[Array]&lt;[string]&gt;&gt;</li></ul><p>Returns all values of the headers matching the name, for example <code>set-cookie</code>. The name is case insensitive.</p>',7),b={id:"param-response-headervalues-name",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#param-response-headervalues-name","aria-hidden":"true"},"#",-1),v={href:"http://Response.headerValues.name",target:"_blank",rel:"noopener noreferrer"},R=t('<ul><li>since: v1.15</li></ul><ul><li><code>name</code> &lt;[string]&gt;</li></ul><p>Name of the header.</p><h2 id="async-method-response-json" tabindex="-1"><a class="header-anchor" href="#async-method-response-json" aria-hidden="true">#</a> async method: Response.json</h2><ul><li>since: v1.8</li><li>langs: js, python</li></ul><ul><li>returns: &lt;[Serializable]&gt;</li></ul><p>Returns the JSON representation of response body.</p><p>This method will throw if the response body is not parsable via <code>JSON.parse</code>.</p><h2 id="async-method-response-json-1" tabindex="-1"><a class="header-anchor" href="#async-method-response-json-1" aria-hidden="true">#</a> async method: Response.json</h2><ul><li>since: v1.8</li><li>langs: csharp</li></ul><ul><li>returns: &lt;[null]|[JsonElement]&gt;</li></ul><p>Returns the JSON representation of response body.</p><p>This method will throw if the response body is not parsable via <code>JSON.parse</code>.</p><h2 id="method-response-ok" tabindex="-1"><a class="header-anchor" href="#method-response-ok" aria-hidden="true">#</a> method: Response.ok</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[boolean]&gt;</li></ul><p>Contains a boolean stating whether the response was successful (status in the range 200-299) or not.</p><h2 id="method-response-request" tabindex="-1"><a class="header-anchor" href="#method-response-request" aria-hidden="true">#</a> method: Response.request</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[Request]&gt;</li></ul><p>Returns the matching [Request] object.</p><h2 id="async-method-response-securitydetails" tabindex="-1"><a class="header-anchor" href="#async-method-response-securitydetails" aria-hidden="true">#</a> async method: Response.securityDetails</h2><ul><li>since: v1.13</li></ul><ul><li>returns: &lt;[null]|[Object]&gt; <ul><li><code>issuer</code> ?&lt;[string]&gt; Common Name component of the Issuer field.<br> from the certificate. This should only be used for informational purposes. Optional.</li><li><code>protocol</code> ?&lt;[string]&gt; The specific TLS protocol used. (e.g. <code>TLS 1.3</code>). Optional.</li><li><code>subjectName</code> ?&lt;[string]&gt; Common Name component of the Subject<br> field from the certificate. This should only be used for informational purposes. Optional.</li><li><code>validFrom</code> ?&lt;[float]&gt; Unix timestamp (in seconds) specifying<br> when this cert becomes valid. Optional.</li><li><code>validTo</code> ?&lt;[float]&gt; Unix timestamp (in seconds) specifying<br> when this cert becomes invalid. Optional.</li></ul></li></ul><p>Returns SSL and other security information.</p><h2 id="async-method-response-serveraddr" tabindex="-1"><a class="header-anchor" href="#async-method-response-serveraddr" aria-hidden="true">#</a> async method: Response.serverAddr</h2><ul><li>since: v1.13</li></ul><ul><li>returns: &lt;[null]|[Object]&gt; <ul><li><code>ipAddress</code> &lt;[string]&gt; IPv4 or IPV6 address of the server.</li><li><code>port</code> &lt;[int]&gt;</li></ul></li></ul><p>Returns the IP address and port of the server.</p><h2 id="method-response-status" tabindex="-1"><a class="header-anchor" href="#method-response-status" aria-hidden="true">#</a> method: Response.status</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[int]&gt;</li></ul><p>Contains the status code of the response (e.g., 200 for a success).</p><h2 id="method-response-statustext" tabindex="-1"><a class="header-anchor" href="#method-response-statustext" aria-hidden="true">#</a> method: Response.statusText</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[string]&gt;</li></ul><p>Contains the status text of the response (e.g. usually an &quot;OK&quot; for a success).</p><h2 id="async-method-response-text" tabindex="-1"><a class="header-anchor" href="#async-method-response-text" aria-hidden="true">#</a> async method: Response.text</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[string]&gt;</li></ul><p>Returns the text representation of response body.</p><h2 id="method-response-url" tabindex="-1"><a class="header-anchor" href="#method-response-url" aria-hidden="true">#</a> method: Response.url</h2><ul><li>since: v1.8</li></ul><ul><li>returns: &lt;[string]&gt;</li></ul><p>Contains the URL of the response.</p>',45);function x(_,w){const r=o("ExternalLinkIcon");return i(),l("div",null,[h,e("p",null,[s("Indicates whether this Response was fulfilled by a Service Worker's Fetch Handler (i.e. via "),e("a",c,[s("FetchEvent.respondWith"),a(r)]),s(").")]),u,e("h3",p,[m,s(" param: "),e("a",f,[s("Response.headerValue.name"),a(r)])]),g,e("h3",b,[y,s(" param: "),e("a",v,[s("Response.headerValues.name"),a(r)])]),R])}const j=n(d,[["render",x],["__file","class-response.html.vue"]]);export{j as default};