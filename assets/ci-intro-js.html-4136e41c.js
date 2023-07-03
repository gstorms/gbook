import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as p,a as n,b as e,d as t,w as o,f as i}from"./app-207e7d61.js";const u={},h={href:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"playwright.yml",-1),g=n("code",null,".github/workflows",-1),k=i('<p><strong>What you will learn:</strong></p><ul><li><a href="#github-actions">GitHub Actions</a><ul><li><a href="#create-a-repo-and-push-to-github">Create a Repo and Push to GitHub</a></li><li><a href="#opening-the-workflows">Opening the Workflows</a></li><li><a href="#viewing-test-logs">Viewing Test Logs</a></li></ul></li><li><a href="#html-report">HTML Report</a><ul><li><a href="#downloading-the-html-report">Downloading the HTML Report</a></li><li><a href="#viewing-the-html-report">Viewing the HTML Report</a></li><li><a href="#viewing-the-trace">Viewing the Trace</a></li></ul></li><li><a href="#whats-next">What&#39;s Next</a></li></ul><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h2>',3),m={href:"https://docs.github.com/en/actions/using-workflows/about-workflows",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Playwright Tests
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">,</span> master<span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">,</span> master<span class="token punctuation">]</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">timeout-minutes</span><span class="token punctuation">:</span> <span class="token number">60</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Playwright Browsers
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npx playwright install <span class="token punctuation">-</span><span class="token punctuation">-</span>with<span class="token punctuation">-</span>deps
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run Playwright tests
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npx playwright test
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v3
        <span class="token key atrule">if</span><span class="token punctuation">:</span> always()
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> playwright<span class="token punctuation">-</span>report
          <span class="token key atrule">path</span><span class="token punctuation">:</span> playwright<span class="token punctuation">-</span>report/
          <span class="token key atrule">retention-days</span><span class="token punctuation">:</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-a-repo-and-push-to-github" tabindex="-1"><a class="header-anchor" href="#create-a-repo-and-push-to-github" aria-hidden="true">#</a> Create a Repo and Push to GitHub</h3>`,2),w={href:"https://docs.github.com/en/get-started/quickstart/create-a-repo",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/git-guides/git-init",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"git init",-1),y={href:"https://github.com/git-guides/git-add",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/git-guides/git-commit",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/git-guides/git-push",target:"_blank",rel:"noopener noreferrer"},T=n("img",{width:"861",alt:"Create a Repo and Push to GitHub",src:"https://user-images.githubusercontent.com/13063165/183423254-d2735278-a2ab-4d63-bb99-48d8e5e447bc.png"},null,-1),L=n("h3",{id:"opening-the-workflows",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#opening-the-workflows","aria-hidden":"true"},"#"),e(" Opening the Workflows")],-1),H=n("p",null,[e("Click on the "),n("strong",null,"Actions"),e(" tab to see the workflows. Here you will see if your tests have passed or failed.")],-1),R=n("img",{width:"847",alt:"Opening the Workflows",src:"https://user-images.githubusercontent.com/13063165/183423584-2ea18038-cd49-4daa-a20c-2205352f0933.png"},null,-1),P=n("strong",null,"Details",-1),V={href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks",target:"_blank",rel:"noopener noreferrer"},M=i(`<img width="645" alt="pr status checked" src="https://user-images.githubusercontent.com/13063165/183722462-17a985db-0e10-4205-b16c-8aaac36117b9.png"><h3 id="viewing-test-logs" tabindex="-1"><a class="header-anchor" href="#viewing-test-logs" aria-hidden="true">#</a> Viewing Test Logs</h3><p>Clicking on the workflow run will show you the all the actions that GitHub performed and clicking on <strong>Run Playwright tests</strong> will show the error messages, what was expected and what was received as well as the call log.</p><img width="839" alt="Viewing Test Logs" src="https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png"><h2 id="html-report" tabindex="-1"><a class="header-anchor" href="#html-report" aria-hidden="true">#</a> HTML Report</h2><p>The HTML Report shows you a full report of your tests. You can filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests.</p><h3 id="downloading-the-html-report" tabindex="-1"><a class="header-anchor" href="#downloading-the-html-report" aria-hidden="true">#</a> Downloading the HTML Report</h3><p>In the Artifacts section click on the <strong>playwright-report</strong> to download your report in the format of a zip file.</p><img width="972" alt="Downloading the HTML Report" src="https://user-images.githubusercontent.com/13063165/183437023-524f1803-84e4-4862-9ce3-1d55af0e023e.png"><h3 id="viewing-the-html-report" tabindex="-1"><a class="header-anchor" href="#viewing-the-html-report" aria-hidden="true">#</a> Viewing the HTML Report</h3><p>Locally opening the report will not work as expected as you need a web server in order for everything to work correctly. First, extract the zip, preferably in a folder that already has Playwright installed. Using the command line change into the directory where the report is and use <code>npx playwright show-report</code> followed by the name of the extracted folder. This will serve up the report and enable you to view it in your browser.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx playwright show-report name-of-my-extracted-playwright-report
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img width="1404" alt="Playwright HTML Report" src="https://user-images.githubusercontent.com/13063165/212745273-c19487d2-bc5e-483f-9f67-f9c9e5413ff4.png">`,13),C=n("h3",{id:"viewing-the-trace",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#viewing-the-trace","aria-hidden":"true"},"#"),e(" Viewing the Trace")],-1),G=n("p",null,[e("Once you have served the report using "),n("code",null,"npx playwright show-report"),e(", click on the trace icon next to the test's file name as seen in the image above. You can then view the trace of your tests and inspect each action to try to find out why the tests are failing.")],-1),I=n("img",{width:"1976",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/13063165/212869694-61368b16-f176-4083-bbc2-fc85b95131f0.png"},null,-1),q=n("h2",{id:"what-s-next",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#what-s-next","aria-hidden":"true"},"#"),e(" What's Next")],-1);function A(W,N){const a=r("ExternalLinkIcon"),s=r("RouterLink");return c(),p("div",null,[n("p",null,[e("When installing Playwright you are given the option to add a "),n("a",h,[e("GitHub Actions"),t(a)]),e(". This creates a "),d,e(" file inside a "),g,e(" folder containing everything you need so that your tests run on each push and pull request into the main/master branch.")]),k,n("p",null,[e("Tests will run on push or pull request on branches main/master. The "),n("a",m,[e("workflow"),t(a)]),e(" will install all dependencies, install Playwright and then run the tests. It will also create the HTML report.")]),b,n("p",null,[n("a",w,[e("Create a repo on GitHub"),t(a)]),e(" and create a new repository or push an existing repository. Follow the instructions on GitHub and don't forget to "),n("a",f,[e("initialize a git repository"),t(a)]),e(" using the "),v,e(" command so you can "),n("a",y,[e("add"),t(a)]),e(", "),n("a",_,[e("commit"),t(a)]),e(" and "),n("a",x,[e("push"),t(a)]),e(" your code.")]),T,L,H,R,n("p",null,[e("On Pull Requests you can also click on the "),P,e(" link in the "),n("a",V,[e("PR status check"),t(a)]),e(".")]),M,n("p",null,[e("To learn more about reports check out our detailed guide on "),t(s,{to:"/book/playwright/test-reporters.html#html-reporter"},{default:o(()=>[e("HTML Reporter")]),_:1})]),C,G,I,n("p",null,[e("To learn more about traces check out our detailed guide on "),t(s,{to:"/book/playwright/trace-viewer.html"},{default:o(()=>[e("Trace Viewer")]),_:1}),e(".")]),n("p",null,[e("To learn more about running tests on CI check out our detailed guide on "),t(s,{to:"/book/playwright/ci.html"},{default:o(()=>[e("Continuous Integration")]),_:1}),e(".")]),q,n("ul",null,[n("li",null,[t(s,{to:"/book/playwright/locators.html"},{default:o(()=>[e("Learn how to use Locators")]),_:1})]),n("li",null,[t(s,{to:"/book/playwright/input.html"},{default:o(()=>[e("Learn how to perform Actions")]),_:1})]),n("li",null,[t(s,{to:"/book/playwright/test-assertions.html"},{default:o(()=>[e("Learn how to write Assertions")]),_:1})])])])}const D=l(u,[["render",A],["__file","ci-intro-js.html.vue"]]);export{D as default};