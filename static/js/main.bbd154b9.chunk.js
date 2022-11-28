(this["webpackJsonpyt-stats"]=this["webpackJsonpyt-stats"]||[]).push([[0],{151:function(e,t,n){},217:function(e,t,n){},219:function(e,t,n){},224:function(e,t,n){},390:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(44),s=n.n(c),i=(n(217),n(218),n(219),n(23)),o=n(24),l=n(29),d=n(30),u=n(398),j=n(397),b=n(399),h=n(400),f=n(401),O=n(402),m=n(403),x=n(52),y=n(184),g=n.n(y),p=n(83),v=n(84),k=(n(224),n(5)),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).toggleNavbar=function(){a.setState({collapsed:!a.state.collapsed})},a.toggleDarkMode=function(e){localStorage.setItem("darkMode",e?"true":"false"),a.setState({isDarkModeEnabled:e},(function(){var t=document.body;e?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}))},a.state={collapsed:!0,isDarkModeEnabled:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("darkMode");("true"===e||!e&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&this.toggleDarkMode(!0)}},{key:"render",value:function(){return Object(k.jsx)("header",{children:Object(k.jsx)(j.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0,children:Object(k.jsxs)(u.a,{children:[Object(k.jsxs)(b.a,{tag:x.b,to:"/",children:[Object(k.jsx)("img",{src:"./logo192.png",height:"40px",alt:"Logo"})," Your YT Stats"]}),Object(k.jsx)(h.a,{onClick:this.toggleNavbar,className:"mr-2"}),Object(k.jsx)(f.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0,children:Object(k.jsxs)("ul",{className:"navbar-nav flex-grow",children:[Object(k.jsx)(O.a,{style:{marginTop:8},children:Object(k.jsx)(g.a,{checked:this.state.isDarkModeEnabled,onChange:this.toggleDarkMode,height:26,checkedIcon:Object(k.jsx)(p.a,{icon:v.a,style:{marginLeft:5}}),onColor:"#cc4b4c",uncheckedIcon:Object(k.jsx)(p.a,{icon:v.c,style:{marginLeft:10}})})}),Object(k.jsx)(O.a,{children:Object(k.jsx)(m.a,{tag:x.b,className:"text-dark",to:"/",children:"Instructions"})}),Object(k.jsx)(O.a,{children:Object(k.jsx)(m.a,{tag:x.b,className:"text-dark",to:"/stats",children:"Stats"})}),Object(k.jsx)(O.a,{children:Object(k.jsx)(m.a,{tag:x.b,className:"text-dark",to:"/about",children:"About"})})]})})]})})})}}]),n}(a.Component);w.displayName=w.name;var D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(w,{}),Object(k.jsx)(u.a,{children:this.props.children})]})}}]),n}(a.Component);D.displayName=D.name;var N=n(25),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"How to use it"}),Object(k.jsxs)("ol",{className:"instructions",children:[Object(k.jsxs)("li",{children:["Go to ",Object(k.jsx)("a",{href:"https://takeout.google.com/",target:"_blank",rel:"noopener noreferrer",children:"Google Takeout"})]}),Object(k.jsx)("li",{children:"Deselect all products"}),Object(k.jsxs)("li",{children:["Scroll down to ",Object(k.jsx)("i",{children:"YouTube and YouTube Music"})," section and select it"]}),Object(k.jsxs)("li",{children:["Click on ",Object(k.jsx)("i",{children:"Multiple formats"})," button"]}),Object(k.jsxs)("li",{children:["In a modal find ",Object(k.jsx)("i",{children:"History"})," section and select ",Object(k.jsx)("b",{children:"JSON"})," in a file format dropdown"]}),Object(k.jsxs)("li",{children:["Click on ",Object(k.jsx)("i",{children:"All YouTube data included"})," button"]}),Object(k.jsxs)("li",{children:["In a modal click on  ",Object(k.jsx)("i",{children:"Deselect all"})," button and select ",Object(k.jsx)("b",{children:"history"})," option"]}),Object(k.jsxs)("li",{children:["Go to ",Object(k.jsx)("b",{children:"Next step"})]}),Object(k.jsxs)("li",{children:["Leave the default values and click on ",Object(k.jsx)("b",{children:"Create export"})]}),Object(k.jsx)("li",{children:"Wait a couple of minutes. You will receive an email from Google Takeout"}),Object(k.jsx)("li",{children:"Download the file"}),Object(k.jsxs)("li",{children:["Add your Google Takeout file ",Object(k.jsx)(x.b,{to:"/stats",children:"HERE"})]})]})]})}}]),n}(a.Component);C.displayName=C.name;var T,A=n(14),F=n(12),S=n(187),M=n.n(S),P=n(206),B=n(38),I=n(404),H=n(405),U=(n(151),function(e,t){return e<t?-1:e===t?0:1}),E=n(208),Y=n(189),L=n.n(Y),W=function(e){var t=r.a.createRef();Object(a.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.scrollTo(0)}),[e.data,t]);var n=function(e){var t=e.onScroll,n=e.forwardedRef,r=e.style,c=e.children,s=Object(a.useCallback)((function(e){n(e?e.view:null)}),[n]);return Object(k.jsx)(L.a,{ref:s,style:Object(A.a)(Object(A.a)({},r),{},{overflow:"hidden"}),onScroll:t,children:c})},c=r.a.forwardRef((function(e,t){return Object(k.jsx)(n,Object(A.a)(Object(A.a)({},e),{},{forwardedRef:t}))}));return Object(k.jsx)("div",{className:"data-items mb-2",children:Object(k.jsx)(E.a,{height:400,itemCount:e.data.length,itemSize:40,width:"100%",outerElementType:c,ref:t,children:function(t){var n=t.index,a=t.style;return Object(k.jsx)("div",{className:"d-flex stats-row",style:a,onClick:function(t){return a=e.data[n],void e.onSubsetChanged(a);var a},children:e.columns.map((function(t){return Object(k.jsxs)("div",{style:t.style,className:"data-cell",children:[t.isLink&&Object(k.jsx)("a",{href:t.selector(e.data[n]),target:"_blank",rel:"noreferrer",children:Object(k.jsx)(p.a,{icon:v.b})}),!t.isLink&&t.selector(e.data[n])]},t.header)}))})}})})},G=function(e,t){return e.data===t.data},R=r.a.memo(W,G),z=n(406),J=n(407),K=n(411),V=n(203),_=n(204),$=n(95),q=n(207),Q=r.a.createContext({listeningHistory:[],since:new Date,to:new Date,allData:[],minDate:new Date,maxDate:new Date}),X=Q.Provider,Z=Q,ee=function(e){var t=Object(a.useState)({chartFuncId:0}),n=Object(F.a)(t,2),c=n[0],s=n[1],i=Object(a.useContext)(Z),o=void 0!==e.subset,l=[function(e){return e.getHours()},function(e){return 0===e.getDay()?7:e.getDay()},function(e){return j(e)}],d=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],u=[function(e){return e.name.toString().padStart(2,"0")},function(e){return d[e.name]},function(e){return"".concat((e.name%100).toString().padStart(2,"0"),".").concat(Math.floor(e.name/100)-2e3)}],j=function(e){return 100*e.getFullYear()+e.getMonth()+1},b=function(e){var t=new Date(i.since),n=new Date(t.setMonth(t.getMonth()+e));return j(n)},h=[Object(B.b)(0,24).select((function(e){return{name:e,totalTime:0,totalPlaybacks:0,mostPlayedTrack:"",mostPlayedArtist:""}})).toArray(),Object(B.b)(1,7).select((function(e){return{name:e,totalTime:0,totalPlaybacks:0,mostPlayedTrack:"",mostPlayedArtist:""}})).toArray(),Object(B.b)(0,function(e,t){var n=0;return n=12*(t.getFullYear()-e.getFullYear()),n-=e.getMonth(),(n+=t.getMonth())<=0?0:n}(i.since,i.to)).select((function(e){return{name:b(e),totalTime:0,totalPlaybacks:0,mostPlayedTrack:"",mostPlayedArtist:""}})).toArray()],f=Object(B.a)(void 0!==e.subset?e.subset:i.listeningHistory).groupBy((function(e){return l[c.chartFuncId](e.time)})).select((function(e){return{name:e.key,totalPlaybacks:e.count(),mostPlayedTrack:e.groupBy((function(e){return e.titleUrl})).select((function(e){return{data:e,count:e.count()}})).orderByDescending((function(e){return e.count}),U).select((function(e){return"".concat(e.data.first().title," by ").concat(e.data.first().channelName," (").concat(e.count,")")})).first(),mostPlayedArtist:e.groupBy((function(e){return e.channelUrl})).select((function(e){return{data:e,count:e.count()}})).orderByDescending((function(e){return e.count}),U).select((function(e){return"".concat(e.data.first().channelName," (").concat(e.count,")")})).first()}})).union(h[c.chartFuncId]).groupBy((function(e){return e.name})).select((function(e){return e.first()})).toArray();if(void 0!==e.subset&&0===e.subset.length)return Object(k.jsx)("p",{children:"Select a track or an artist in the table to see it's details"});return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)("span",{className:o?"mb-2":"section-header mb-3",children:e.description}),Object(k.jsxs)(I.a,{className:"d-flex mb-3",size:o?"sm":"md",children:[Object(k.jsx)(H.a,{active:0===c.chartFuncId,color:"primary",onClick:function(){return s({chartFuncId:0})},children:"Hours"}),Object(k.jsx)(H.a,{active:1===c.chartFuncId,color:"primary",onClick:function(){return s({chartFuncId:1})},children:"Days of week"}),Object(k.jsx)(H.a,{active:2===c.chartFuncId,color:"primary",onClick:function(){return s({chartFuncId:2})},children:"Months"})]}),Object(k.jsx)(z.a,{width:"100%",height:"70%",children:Object(k.jsxs)(J.a,{data:f,children:[Object(k.jsx)(K.a,{strokeDasharray:"5 5"}),Object(k.jsx)(V.a,{dataKey:u[c.chartFuncId]}),Object(k.jsx)(_.a,{}),Object(k.jsx)($.a,{content:function(e){var t,n=e.active,a=e.payload,r=e.label;return n&&a&&(null===(t=a[0].payload)||void 0===t?void 0:t.totalPlaybacks)>0?Object(k.jsxs)("div",{className:"custom-tooltip",children:[Object(k.jsx)("p",{className:"label",children:r}),Object(k.jsxs)("p",{className:"desc",children:["Total videos watched: ",a[0].payload.totalPlaybacks,Object(k.jsx)("br",{}),"Favorite video: ",a[0].payload.mostPlayedTrack,Object(k.jsx)("br",{}),"Favorite channel: ",a[0].payload.mostPlayedArtist,Object(k.jsx)("br",{})]})]}):null}}),Object(k.jsx)(q.a,{type:"monotone",dataKey:"totalPlaybacks",stroke:"#ff5d5f",strokeWidth:5})]})})]})};!function(e){e[e.trackAndArtist=0]="trackAndArtist",e[e.artistOnly=1]="artistOnly"}(T||(T={}));var te=function(e){var t=Object(a.useState)({tableType:T.artistOnly,searchPhrase:"",orderByColumn:0,descendingOrder:!1,scrollPosition:0,data:[],listeningHistorySubset:[],subsetDescription:""}),n=Object(F.a)(t,2),c=n[0],s=n[1],i=Object(a.useContext)(Z);Object(a.useEffect)((function(){var e=0,t=1,n=Object(B.a)(i.listeningHistory).groupBy(function(e){switch(e){case T.trackAndArtist:return function(e){return e.titleUrl};case T.artistOnly:return function(e){return e.channelUrl}}}(c.tableType)).select((function(e){return{x:e,count:e.count()}})).orderByDescending((function(e){return e.count}),U).select((function(n,a){var r=n.x,c=n.count,s=c===e?t:a+1,i=Object(A.a)(Object(A.a)({},r.first()),{},{id:s,playedTimes:c,entries:r.toArray()});return e=c,t=s,i})).where((function(e){return e.channelName.toLowerCase().indexOf(c.searchPhrase)>-1||c.tableType===T.trackAndArtist&&e.title.toLowerCase().indexOf(c.searchPhrase)>-1}));switch(c.orderByColumn){case 0:case 3:n=n.orderBy((function(e){return e.id}),U);break;case 1:n=n.orderBy((function(e){return e.title}));break;case 2:n=n.orderBy((function(e){return e.channelName}))}c.descendingOrder&&(n=n.reverse()),s((function(e){return Object(A.a)(Object(A.a)({},e),{},{data:n.toArray()})}))}),[i.listeningHistory,c.descendingOrder,c.orderByColumn,c.searchPhrase,c.tableType]);var o=function(e){return s(Object(A.a)(Object(A.a)({},c),{},{tableType:e,orderByColumn:0,descendingOrder:!1}))},l=[{header:"#",selector:function(e){return e.id},style:{flex:1}},{header:"Title",selector:function(e){return e.title},style:Object(A.a)({flex:10},c.tableType===T.artistOnly?{display:"none"}:{})},{header:"Channel",selector:function(e){return e.channelName},style:{flex:10}},{header:"Your views",selector:function(e){return e.playedTimes},style:{flex:2}},{header:"Watch",selector:function(e){return c.tableType===T.trackAndArtist?e.titleUrl:e.channelUrl},style:{flex:1,textAlign:"center"},isLink:!0}];return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(k.jsx)("div",{style:{flex:1},children:Object(k.jsx)("span",{className:"section-header",children:"Most watched"})}),Object(k.jsxs)("div",{style:{flex:1},children:[Object(k.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",style:{borderRadius:50},onChange:function(e){s(Object(A.a)(Object(A.a)({},c),{},{searchPhrase:e.target.value.toLowerCase()}))}}),Object(k.jsxs)("small",{children:["Found: ",c.data.length]})]})]}),Object(k.jsxs)(I.a,{className:"d-flex mb-3",size:"md",children:[Object(k.jsx)(H.a,{active:c.tableType===T.trackAndArtist,color:"primary",onClick:function(){return o(T.trackAndArtist)},children:"Most watched videos"}),Object(k.jsx)(H.a,{active:c.tableType===T.artistOnly,color:"primary",onClick:function(){return o(T.artistOnly)},children:"Most watched channels"})]}),Object(k.jsx)("div",{className:"data-header",children:l.map((function(e,t){return Object(k.jsx)("div",{className:"data-cell"+(c.orderByColumn===t?" order-by":""),style:e.style,onClick:function(){return e=t,void(c.orderByColumn===e?s(Object(A.a)(Object(A.a)({},c),{},{descendingOrder:!c.descendingOrder})):s(Object(A.a)(Object(A.a)({},c),{},{descendingOrder:!1,orderByColumn:e})));var e},children:e.header},t)}))}),Object(k.jsx)(R,{data:c.data,columns:l,onSubsetChanged:function(e){var t=c.tableType===T.artistOnly?e.channelName:"".concat(e.title," by ").concat(e.channelName);s(Object(A.a)(Object(A.a)({},c),{},{listeningHistorySubset:e.entries,subsetDescription:t}))}}),Object(k.jsx)(ee,{description:"Details for ".concat(c.subsetDescription),subset:c.listeningHistorySubset})]})};var ne=n(138),ae=n.n(ne),re=function(e){var t,n,c=Object(a.useContext)(Z),s=Object(B.a)(c.listeningHistory),i=s.count(),o=s.select((function(e){return e.channelUrl})).distinct().count(),l=Date.UTC(c.since.getFullYear(),c.since.getMonth(),c.since.getDate()),d=Date.UTC(c.to.getFullYear(),c.to.getMonth(),c.to.getDate()),u=Math.floor((d-l)/864e5),j={totalPlayCount:i,differentArtists:o,dailyAverage:(t=i/u,n=1,Math.round(t*Math.pow(10,n))/Math.pow(10,n))},b=new Date;return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)("span",{className:"section-header mb-3",children:"Summary"}),Object(k.jsxs)(I.a,{className:"d-flex mb-3",size:"sm",children:[Object(k.jsx)(H.a,{color:"primary",onClick:function(){return e.dateChanged(c.minDate,c.maxDate)},children:"All time"}),Object(k.jsx)(H.a,{color:"primary",onClick:function(){return e.dateChanged(new Date(b.getFullYear()-1,b.getMonth(),b.getDate()),b)},children:"Last 12 months"}),Object(k.jsx)(H.a,{color:"primary",onClick:function(){return e.dateChanged(new Date(b.getFullYear(),0,1,0,0,0,0),c.maxDate)},children:"This year"})]}),Object(k.jsxs)("p",{className:"text-center",style:{fontSize:"large"},children:["Since"," ",Object(k.jsx)(ae.a,{value:c.since,clearIcon:null,minDate:c.minDate,maxDate:c.to,onChange:function(t){return e.dateChanged(t,c.to)}})," ","to"," ",Object(k.jsx)(ae.a,{value:c.to,clearIcon:null,minDate:c.since,maxDate:c.maxDate,onChange:function(t){return e.dateChanged(c.since,t)}})," ","you've watched ",Object(k.jsx)("br",{}),Object(k.jsxs)("span",{className:"display-2",children:[j.totalPlayCount," videos"]}),Object(k.jsx)("br",{}),"from"," ",Object(k.jsxs)("span",{className:"display-3",children:[j.differentArtists," channels"]}),Object(k.jsx)("br",{}),"for an average of"," ",Object(k.jsxs)("span",{className:"display-4",children:[j.dailyAverage," videos a day"]})]})]})},ce=(n(390),function(e){var t=Object(a.useState)({progress:0,files:[],jsonFiles:[],data:{listeningHistory:[],since:new Date,to:new Date,allData:[],minDate:new Date,maxDate:new Date}}),n=Object(F.a)(t,2),c=n[0],s=n[1];Object(a.useEffect)((function(){0!==c.files.length&&(c.files[0].name.endsWith(".zip")?(new M.a).loadAsync(c.files[0]).then((function(e){Promise.all(Object.keys(e.files).map((function(t){if(t.endsWith(".json"))return e.files[t].async("string").then((function(e){return new File([e],t)}))}))).then((function(e){var t=[];e.forEach((function(e){e instanceof File&&t.push(e)})),s((function(e){return Object(A.a)(Object(A.a)({},e),{},{jsonFiles:t})}))}))})):s((function(e){return Object(A.a)(Object(A.a)({},e),{},{progress:3})})))}),[c.files]),Object(a.useEffect)((function(){0!==c.jsonFiles.length&&Promise.all(c.jsonFiles.map(i)).then((function(e){try{var t=e.map((function(e){return JSON.parse(e)})).flat();t.forEach((function(e){return e.title=e.title.substring(e.title.indexOf(" "))}));var n=Object(B.a)(t).where((function(e){return e.subtitles&&e.subtitles.length>0})).orderBy((function(e){return e.time})).groupBy((function(e){return e.time+e.title})).select((function(e){return e.first()})).select((function(e){var t,n;return{title:e.title||"UNKNOWN",channelName:(null===(t=e.subtitles)||void 0===t?void 0:t.length)>0?e.subtitles[0].name:"UNKNOWN",time:new Date(e.time),titleUrl:e.titleUrl,channelUrl:(null===(n=e.subtitles)||void 0===n?void 0:n.length)>0?e.subtitles[0].url:"UNKNOWN"}})).toArray();if(0===n.length)s((function(e){return Object(A.a)(Object(A.a)({},e),{},{progress:3})}));else{var a=n[0].time,r=n[n.length-1].time;s((function(e){return Object(A.a)(Object(A.a)({},e),{},{progress:2,data:{listeningHistory:n,since:a,to:r,minDate:a,maxDate:r,allData:n}})}));var c=document.getElementById("summary");c&&c.scrollIntoView()}}catch(i){s((function(e){return Object(A.a)(Object(A.a)({},e),{},{progress:3})}))}}))}),[c.jsonFiles]);var i=function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)},a.onerror=a.onabort=n,a.readAsText(e)}))};return 0===c.progress||3===c.progress?Object(k.jsxs)("section",{children:[Object(k.jsx)(P.a,{onDrop:function(e){s(Object(A.a)(Object(A.a)({},c),{},{progress:1,files:e}))},children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(k.jsxs)("div",Object(A.a)(Object(A.a)({},t({className:"dropzone"})),{},{children:[Object(k.jsx)("input",Object(A.a)({},n())),Object(k.jsx)("p",{children:"Drag and drop your Google Takeout file here, or click to select file"})]}))}}),3===c.progress&&Object(k.jsx)("p",{children:"Could not load your file. Make sure you've selected the correct Google Takeout file with JSON data inside"})]}):1===c.progress?Object(k.jsx)("section",{id:"otherUnits",children:Object(k.jsx)("h2",{className:"text-center display-4",children:"Loading..."})}):Object(k.jsx)(r.a.Fragment,{children:Object(k.jsxs)(X,{value:c.data,children:[Object(k.jsx)("section",{id:"summary",children:Object(k.jsx)(re,{dateChanged:function(e,t){var n=Object(B.a)(c.data.allData).where((function(n){return n.time>=e&&n.time<=t})).toArray();s(Object(A.a)(Object(A.a)({},c),{},{data:Object(A.a)(Object(A.a)({},c.data),{},{since:e,to:t,listeningHistory:n})}))}})}),Object(k.jsx)("section",{id:"chart",children:Object(k.jsx)(ee,{description:"Videos watched over time"})}),Object(k.jsx)("section",{id:"table",children:Object(k.jsx)(te,{})})]})})});ce.displayName=ce.name;var se=ce,ie=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"About"}),Object(k.jsx)("p",{children:"This app is made for fun and as a training. None of your data is stored or uploaded, everything is processed locally. It is not related to Google, YouTube or any of it's partners in any way."}),Object(k.jsx)("a",{href:"https://www.flaticon.com/free-icons/music-and-multimedia",title:"music and multimedia icons",children:"Music and multimedia icons created by Smashicons - Flaticon"})]})},oe=function(){var e=document.getElementsByTagName("base")[0].getAttribute("href");return Object(k.jsx)(x.a,{basename:e,children:Object(k.jsxs)(D,{children:[Object(k.jsx)(N.a,{exact:!0,path:"/",component:C}),Object(k.jsx)(N.a,{path:"/stats",component:se}),Object(k.jsx)(N.a,{path:"/about",component:ie})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(391),n(392);s.a.render(Object(k.jsx)(oe,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[394,1,2]]]);
//# sourceMappingURL=main.bbd154b9.chunk.js.map