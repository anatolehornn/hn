// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
    {
      "id": "lFthoYgwXZzfpNWyr5FD",
      "tags": [
        "react",
        "reactjs",
        "javascript",
        "web-development",
        "website-development",
        "loading-screen",
        "reactjs-loading",
        "webdev",
        "web-monetization"
      ],
      "markup": "<div class=\"paragraph\">Hey People,\r</div><div class=\"paragraph\">\rI was finding a good way to make Loading screen/animation for my small React application, and I found 3 different ways to make good loading screens,\r</div><div class=\"paragraph\"><em>Type-1</em> : Using <a href=\"https://www.npmjs.com/package/react-loading\">react-loading</a> library.\r</div><div class=\"paragraph\"><em>Type-2</em> : Using <a href=\"https://www.npmjs.com/package/react-lottie\">react-lottie</a> library.\r</div><div class=\"paragraph\"><em>Type-3</em> : Using simple <strong>CSS</strong>.\r</div><div class=\"paragraph\">\rIf you prefer to watch video tutorial then you can watch it here else just watch first 2 minutes to get an idea of what we&#x27;re going to build here..and keep reading!😄</div><div class=\"youtube-container\"><iframe title=\"ytcontainer\" width=\"700\" height=\"394\" src=\"https://www.youtube.com/embed/Y7pL5wG5QOg\" frameBorder=\"0\"></iframe></div><h2>Let&#x27;s Start Building...\r</h2><div class=\"paragraph\">\rCreate your react app with,\r</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code>\nnpx create-react-app React-Loading-Screen\n</code></pre></div><div class=\"paragraph\">\rNext, install two libraries that we&#x27;re going to use.\r</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code>\nnpm install react-loading react-lottie\n</code></pre></div><div class=\"paragraph\">\r<strong>NOTE:</strong> Here, I&#x27;m using <a href=\"https://jsonplaceholder.typicode.com/guide/\">jsonplaceholder API</a> to get data, to show how we can use pre-loader when using API.</div><h2>Type-1</h2><div class=\"paragraph\">Create separate file like PreLoader1.js. </div><div class=\"paragraph\">Create Functional Component and here, we&#x27;re going to use two state,</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code><span style=\"color:#c397d8\">const</span> [data, setData] = useState([]);\n<span style=\"color:#c397d8\">const</span> [done,setDone]=useState(<span style=\"color:#e78c45\">undefined</span>);</code></pre></div><div class=\"paragraph\"><strong><em>data state</em></strong>: To store data which comes from API call.\r</div><div class=\"paragraph\"><strong><em>done state</em></strong>: It is boolean to decide weather to show pre-loader or not.</div><div class=\"paragraph\">Now in the useEffect,\r</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code>  useEffect(<span class=\"hljs-function\"><span style=\"color:#e78c45\">()</span> =&gt;</span> {\n    setTimeout(<span class=\"hljs-function\"><span style=\"color:#e78c45\">()</span> =&gt;</span> {\n      fetch(<span style=\"color:#b9ca4a\">&quot;https://jsonplaceholder.typicode.com/posts&quot;</span>)\n        .then(<span class=\"hljs-function\">(<span style=\"color:#e78c45\">response</span>) =&gt;</span> response.json())\n        .then(<span class=\"hljs-function\">(<span style=\"color:#e78c45\">json</span>) =&gt;</span> {\n          <span style=\"color:#e78c45\">console</span>.log(json);\n          setData(json);\n          setDone(<span style=\"color:#e78c45\">true</span>);\n        });\n    }, <span style=\"color:#e78c45\">2000</span>);\n  }, []);</code></pre></div><blockquote>You can put your own logic in useEffect!</blockquote><div class=\"paragraph\">Now in the above useEffect method,\r</div><div class=\"paragraph\">First we use fetch method to get data from api then we convert that data into json,\rthen we will set data state with json data, and after that set done state to true.\r</div><blockquote>NOTE: Here I have used time out function for 2 seconds so that we can see loading screen for more time.\r</blockquote><div class=\"paragraph\">\rNow let&#x27;s render our component.</div><div class=\"gist-container\"><iframe width=\"100%\" frameBorder=\"0\" id=\"gist-c173c40b93fdb4e48269c00cdeeec9d8\"></iframe></div><div class=\"paragraph\"><strong>Line 22: </strong>\r we will check if <pre><code><strong>done</strong></code></pre> state is false then we will render pre-loading component else we will render data we want to show.\r</div><div class=\"paragraph\">\r<strong>Line 23: </strong>\rHere I have used react-loading library, where we only have to set type, color, height and width. you can find more functionalities on <a href=\"https://www.npmjs.com/package/react-loading\"></a><a href=\"https://www.npmjs.com/package/react-loading\">here</a>.\r</div><div class=\"paragraph\">\r<strong>Line 30:</strong>\r From here I have mapped data state inside the ul tag which returns title of each post in li tag. <em>(use console.log() inside useEffect to see what kind of data we are getting)</em>\r</div><div class=\"paragraph\">\rThat&#x27;s the end of Part-1 here.</div><div class=\"Divider\"><i></i><i></i><i></i><i></i><i></i><i></i></div><h2><strong>Type-2</strong></h2><div class=\"paragraph\">Create new file and name it as PreLoader2.js</div><div class=\"paragraph\">Create functional component, and import react-Lottie library.</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code><span style=\"color:#c397d8\">import</span> Lottie <span style=\"color:#c397d8\">from</span> <span style=\"color:#b9ca4a\">&quot;react-lottie&quot;</span></code></pre></div><div class=\"paragraph\">In this type of loading screen we have to download animation files from <a href=\"https://lottiefiles.com/\">https://lottiefiles.com/</a></div><div class=\"paragraph\">For this tutorial i&#x27;m using below two files,</div><div class=\"paragraph\">Earth animation : <a href=\"https://lottiefiles.com/1055-world-locations\">https://lottiefiles.com/1055-world-locations</a></div><div class=\"paragraph\">Success animation: <a href=\"https://lottiefiles.com/1127-success\">https://lottiefiles.com/1127-success</a></div><div class=\"paragraph\">Download this file (Lottie JSON) and keep them in your project directory.</div><div class=\"paragraph\">Let&#x27;s import this json files like below,</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code><span style=\"color:#c397d8\">import</span> * <span style=\"color:#c397d8\">as</span> location <span style=\"color:#c397d8\">from</span> <span style=\"color:#b9ca4a\">&quot;../1055-world-locations.json&quot;</span>;\n<span style=\"color:#c397d8\">import</span> * <span style=\"color:#c397d8\">as</span> success <span style=\"color:#c397d8\">from</span> <span style=\"color:#b9ca4a\">&quot;../1127-success.json&quot;</span>;</code></pre></div><div class=\"paragraph\">As mentioned <a href=\"https://www.npmjs.com/package/react-lottie\">here</a> in the react-Lottie library documentation, we need to set default options to use this animation files in our project so first declare this options as,</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code><span style=\"color:#c397d8\">const</span> defaultOptions1 = {\n  <span class=\"hljs-attr\">loop</span>: <span style=\"color:#e78c45\">true</span>,\n  <span class=\"hljs-attr\">autoplay</span>: <span style=\"color:#e78c45\">true</span>,\n  <span class=\"hljs-attr\">animationData</span>: location.default,\n  <span class=\"hljs-attr\">rendererSettings</span>: {\n    <span class=\"hljs-attr\">preserveAspectRatio</span>: <span style=\"color:#b9ca4a\">&quot;xMidYMid slice&quot;</span>,\n  },\n};\n\n<span style=\"color:#c397d8\">const</span> defaultOptions2 = {\n  <span class=\"hljs-attr\">loop</span>: <span style=\"color:#e78c45\">true</span>,\n  <span class=\"hljs-attr\">autoplay</span>: <span style=\"color:#e78c45\">true</span>,\n  <span class=\"hljs-attr\">animationData</span>: success.default,\n  <span class=\"hljs-attr\">rendererSettings</span>: {\n    <span class=\"hljs-attr\">preserveAspectRatio</span>: <span style=\"color:#b9ca4a\">&quot;xMidYMid slice&quot;</span>,\n  },\n};</code></pre></div><div class=\"paragraph\"><em>defaultOptions1</em> for first file while <em>defaultOptions2</em> for second file.</div><div class=\"paragraph\">In this tutorial we&#x27;re going to use 3 state:</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code>  <span style=\"color:#c397d8\">const</span> [data, setData] = useState([]);\n  <span style=\"color:#c397d8\">const</span> [loading, setloading] = useState(<span style=\"color:#e78c45\">undefined</span>);\n  <span style=\"color:#c397d8\">const</span> [completed, setcompleted] = useState(<span style=\"color:#e78c45\">undefined</span>);</code></pre></div><div class=\"paragraph\"><strong>data state</strong>: To store data which comes from API call.</div><div class=\"paragraph\"><strong>loading state</strong>: Boolean state for first animation file.</div><div class=\"paragraph\"><strong>completed state</strong>: Boolean state for second animation file when API call is completed.</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code>useEffect(<span class=\"hljs-function\"><span style=\"color:#e78c45\">()</span> =&gt;</span> {\n    setTimeout(<span class=\"hljs-function\"><span style=\"color:#e78c45\">()</span> =&gt;</span> {\n      fetch(<span style=\"color:#b9ca4a\">&quot;https://jsonplaceholder.typicode.com/posts&quot;</span>)\n        .then(<span class=\"hljs-function\">(<span style=\"color:#e78c45\">response</span>) =&gt;</span> response.json())\n        .then(<span class=\"hljs-function\">(<span style=\"color:#e78c45\">json</span>) =&gt;</span> {\n          <span style=\"color:#e78c45\">console</span>.log(json);\n          setData(json);\n          setloading(<span style=\"color:#e78c45\">true</span>);\n\n          setTimeout(<span class=\"hljs-function\"><span style=\"color:#e78c45\">()</span> =&gt;</span> {\n            setcompleted(<span style=\"color:#e78c45\">true</span>);\n          }, <span style=\"color:#e78c45\">1000</span>);\n        });\n    }, <span style=\"color:#e78c45\">2000</span>);\n  }, []);</code></pre></div><blockquote>You can put your own logic in useEffect!</blockquote><div class=\"paragraph\">UseEffect method is almost same as in part-1, only difference is that instead of done state we have to set completed and loading state to true,<br/>Also, I have used one more timeout function for 1 sec to see the 2nd animation.</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code><span style=\"color:#c397d8\">return</span> (\n    <span class=\"xml\"><span style=\"color:#d54e53\">&lt;&gt;</span>\n      {!completed ? (\n        <span style=\"color:#d54e53\">&lt;&gt;</span>\n          {!loading ? (\n            </span>&lt;Lottie options={defaultOptions1} height={200} width={200} /&gt;\n          ) : (\n            &lt;Lottie options={defaultOptions2} height={100} width={100} /&gt;\n          )}\n        &lt;/&gt;\n      ) : (\n        &lt;&gt;\n          &lt;h1&gt;Your Data&lt;/h1&gt;\n        &lt;/&gt;\n      )}\n    &lt;/&gt;\n  );\n}</code></pre></div><div class=\"paragraph\">As shown in the above code,</div><div class=\"paragraph\">in the return, if completed state is false then we will render loading screen else we will render our data.</div><div class=\"paragraph\">In the animation part we will do one more conditional rendering,</div><div class=\"paragraph\">when loading state is false then we will render the earth animation else we will render the success animation.</div><div class=\"paragraph\">Dont&#x27;t forget to set <pre><code>options={defaultOptions1}</code></pre> for file 1 and <pre><code>options={defaultOptions2}</code></pre> for file 2.</div><div class=\"paragraph\">Full Code:</div><div class=\"gist-container\"><iframe width=\"100%\" frameBorder=\"0\" id=\"gist-b09aa861ac0d34c36ab886c559b38af0\"></iframe></div><div class=\"paragraph\">Now as per the Creative Commons License of <a href=\"https://lottiefiles.com/page/license\">https://lottiefiles.com/page/license</a> <em>The creator(s) must be attributed in your application.</em></div><div class=\"paragraph\">You can attribute creator as shown in line no 60 to 71.</div><div class=\"paragraph\">That&#x27;s the end of Part-2.</div><div class=\"Divider\"><i></i><i></i><i></i><i></i><i></i><i></i></div><h2><strong>Type-3</strong></h2><div class=\"paragraph\">In this type we are not going to use any library instead we are only using simple css styling.</div><div class=\"paragraph\">Now the logic of displaying pre-loader is same as in the part-2 so here I&#x27;m not going to show you the whole process.</div><div class=\"paragraph\">Create new file PreLoader3.js</div><div class=\"paragraph\">Copy the whole code from PreLoader2.js file and remove all code related with react-Lottie library and keep everything as it is.</div><div class=\"paragraph\">only change return statement as shown below,</div><div class=\"code-container\"><pre style=\"display:block;overflow-x:auto;background:black;color:#eaeaea;padding:30px\"><code> <span style=\"color:#c397d8\">return</span> (\n    <span class=\"xml\"><span style=\"color:#d54e53\">&lt;&gt;</span>\n      {!completed ? (\n        <span style=\"color:#d54e53\">&lt;&gt;</span>\n          {!loading ? (\n            </span>&lt;div className=&quot;spinner&quot;&gt;\n              &lt;span&gt;Loading...&lt;/span&gt;\n              &lt;div className=&quot;half-spinner&quot;&gt;&lt;/div&gt;\n            &lt;/div&gt;<span class=\"xml\">\n          ) : (\n            </span>&lt;div className=&quot;completed&quot;&gt;&amp;#x2713;&lt;/div&gt;<span class=\"xml\">\n          )}\n        <span style=\"color:#d54e53\">&lt;/&gt;</span>\n      ) : (\n        <span style=\"color:#d54e53\">&lt;&gt;</span>\n          </span>&lt;h1&gt;Your Data&lt;/h1&gt;<span class=\"xml\">\n        <span style=\"color:#d54e53\">&lt;/&gt;</span>\n      )}\n    <span style=\"color:#d54e53\">&lt;/&gt;</span>\n  );</span></code></pre></div><div class=\"paragraph\">In the above code,</div><div class=\"paragraph\">div with the class spinner contains Loading text and spinner.<br/>while div with the className completed contains success symbol.(✓).</div><div class=\"paragraph\">Now let&#x27;s do some css styling.</div><div class=\"paragraph\">crate separate file preloader3.css for styling and import it in the preloader3.js file.</div><div class=\"gist-container\"><iframe width=\"100%\" frameBorder=\"0\" id=\"gist-8e5552dcc539f15aca7916480b84c3dc\"></iframe></div><div class=\"paragraph\">Now,</div><div class=\"paragraph\"><strong>.spinner</strong> class is simply box for spinner.</div><div class=\"paragraph\"><strong>.spinner span</strong> contains styling and animation for loading text.</div><div class=\"paragraph\"><strong>.half-spinner</strong> contains styling for spinner. </div><div class=\"paragraph\">now to cut this whole spinner as in line no 20 you just have to set border top to transparent.</div><div class=\"paragraph\"><strong>.completed</strong> contains styling and animation for success(✓) symbol.</div><div class=\"paragraph\">This is the End of type 3.</div><div class=\"paragraph\">You can find Full-Code repository from <a href=\"https://github.com/codebucks27/React-Loading-Screen\">here</a>.</div><div class=\"paragraph\"><strong>Thanks for reading and supporting.</strong>😄</div><div class=\"paragraph\">Feel free to visit my youtube channel:</div><div class=\"paragraph\"><a href=\"https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA\">@CodeBucks</a></div><div class=\"paragraph\"><em>Previously published </em><a href=\"https://dev.to/codebucks/create-3-different-types-of-loading-screens-in-react-5bba\"><em>here</em></a><em>.</em></div>",
      "publishedAt": 1613943161,
      "mainImageAttributionLink": null,
      "fromSlack": false,
      "firstSeenAt": false,
      "title": "Step by Step Guide to Create 3 Different Types of Loading Screens in React",
      "mainImage": "https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg",
      "slug": "step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd",
      "createdAt": 1613943155,
      "wordCount": 1459,
      "editor": {
        "displayName": "Rianke K",
        "id": "vs58yHu80FMCBlLC590ASRmc8Hl1",
        "handle": "rianke"
      },
      "excerpt": "Here I will show you 3 ways to create cool loading screen or preloader in React.",
      "profile": {
        "github": "codebucks27",
        "adText": "Subscribe to Learn ReactJS by building!",
        "preferredCharity": null,
        "showStatsPublicly": true,
        "publicBookmarks": true,
        "id": "541r0RExUOQ3nFAQs7oJuST9Axf2",
        "bio": "Helping you to learn code! \nhere you'll find tutorials around web development. Keep Coding...😜",
        "youtube": "CodeBucks",
        "avatar": "https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg",
        "twitter": "code_bucks",
        "adLink": "https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA",
        "adIcon": "fas fa-user-astronaut",
        "displayName": "CodeBucks",
        "handle": "codebucks"
      },
      "images": {
        "%2Fimages%2F541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg": {
          "width": 1366,
          "height": 657
        }
      },
      "estimatedTime": 6,
      "published": true,
      "reactions": {
        "sections": {},
        "total": 6,
        "storyReactions": {
          "light": 2,
          "boat": 0,
          "heart": 2,
          "money": 2
        }
      },
      "relatedStories": [
        {
          "companyName": "HackerEarth",
          "image": "https://hackernoon.com/images/img-8v033bs.jpeg",
          "type": "tag",
          "active": true,
          "tags": [],
          "category": [
            {
              "value": "mixedbag",
              "label": "Mixed Bag"
            },
            {
              "label": "Programming",
              "value": "programming"
            }
          ],
          "website": "https://bit.ly/3b8DfWr",
          "text": "Fill HackerEarth Developer Survey 2021 & win Amazon gift vouchers",
          "link": "https://bit.ly/3b8DfWr",
          "reactionsCount": 0
        },
        {
          "id": "DeF63pTcXuPYqnkpfWT5",
          "owner": "541r0RExUOQ3nFAQs7oJuST9Axf2",
          "publishedAt": 1610613024,
          "slug": "reactjs-pagination-tutorial-building-from-scratch-video-tr4g316w",
          "title": "ReactJS Pagination Tutorial: Building from Scratch",
          "firstSeenAt": "https://dev.to/codebucks/create-pagination-component-from-scratch-in-reactjs-45j5",
          "excerpt": "Create pagination component from scratch in ReactJS. Pagination component are of two types, one loads items vertically and one display items with page numbers ",
          "estimatedTime": 8,
          "createdAt": 1611032835,
          "profile": {
            "youtube": "CodeBucks",
            "adLink": "https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA",
            "id": "541r0RExUOQ3nFAQs7oJuST9Axf2",
            "displayName": "CodeBucks",
            "github": "codebucks27",
            "twitter": "code_bucks",
            "adText": "Subscribe to Learn ReactJS by building!",
            "facebook": "",
            "paymentPointer": "$ilp.uphold.com/mp4L6Fj6MXfq",
            "linkedin": "",
            "handle": "codebucks",
            "avatar": "https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg",
            "bio": "Helping you to learn code! \nhere you'll find tutorials around web development. Keep Coding...😜"
          },
          "mainImage": "https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-mg9p317b.jpeg",
          "published": true,
          "tags": [
            "reactjs",
            "web-development",
            "nodejs",
            "webdev",
            "webdevelopment",
            "javascript",
            "ux",
            "reactjs-pagination-tutorial",
            "web-monetization"
          ],
          "reactionsCount": 6
        },
        {
          "id": "CKyUzyghF7UX46k1UJtw",
          "title": "We Built a Face and Mask Detection Web App for Google Chrome",
          "slug": "we-built-a-face-and-mask-detection-web-app-for-google-chrome-836n33aq",
          "mainImage": "https://hackernoon.com/images/oO6rUouOWRYlzw88QM9pb0KyMIJ3-82bk3j2w.png",
          "tags": [
            "javascript",
            "tensorflowjs",
            "face-mask-detection",
            "computer-vision",
            "face-recognition",
            "mask-recognition",
            "machine-learning",
            "image-detection"
          ],
          "profile": {
            "displayName": "Yan Tiersen",
            "linkedin": "https://www.linkedin.com/in/yantti/",
            "id": "oO6rUouOWRYlzw88QM9pb0KyMIJ3",
            "bio": "Skilled front end developer with 5+ years experience in developing web and SmartTV applications",
            "avatar": "https://lh3.googleusercontent.com/a-/AOh14GhusYvdC0wNcF4K5CysAbKT-_tBWKvUBPjWBdEe=s96-c",
            "github": "yantsishko",
            "handle": "yantsishko"
          },
          "publishedAt": 1615147712,
          "reactionsCount": 4
        }
      ]
    }
      
  )
}
