(this.webpackJsonpeasynotes=this.webpackJsonpeasynotes||[]).push([[0],{224:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(27),s=n.n(c),r=(n(92),n(87)),i=n(7),l=(n(93),n(13)),d=n.n(l),j=n(76),u=n.n(j),h=n(77),b=n.n(h),O=n(78),f=n.n(O),x=n(79),m=n.n(x),v=n(86),N=n(84),g=(n(221),n(3)),p=function(e){var t=e.note,n=e.handleDeleteNote,o=e.handleEditNote,c=Object(a.useState)("#fef68a"),s=Object(i.a)(c,2),r=s[0],l=s[1];return Object(g.jsxs)("div",{className:"note",style:{backgroundColor:r},children:[Object(g.jsxs)("div",{className:"noteHeader",children:[Object(g.jsx)("h3",{children:t.title}),Object(g.jsx)("span",{id:"noteText",children:Object(g.jsx)(m.a,{properties:{target:"_blank"},children:t.text})})]}),Object(g.jsxs)("div",{className:"note-footer",children:[Object(g.jsx)("small",{children:t.date}),Object(g.jsx)(N.a,{trigger:Object(g.jsx)("div",{children:Object(g.jsx)(d.a,{animation:f.a,className:"delete-icon",size:26,speed:.8})}),position:"top center",on:"hover",children:Object(g.jsx)("div",{children:Object(g.jsx)(v.a,{colors:["#fef68a","#f44336","#e91e63","#9c27b0","#673ab7"],color:r,onChangeComplete:function(e){l(e.hex)}})})}),Object(g.jsx)(d.a,{animation:b.a,className:"edit-icon",onClick:function(){o(t.id)},size:26,speed:.8}),Object(g.jsx)(d.a,{animation:u.a,className:"delete-icon",onClick:function(){window.confirm("Are you sure to delete this note?")&&n(t.id)},size:26,speed:.8})]})]})},w=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],s=o[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),d=l[0],j=l[1],u=function(e){var t=e.color;return Object(g.jsx)("hr",{style:{color:t,backgroundColor:t,height:1,width:"100%"}})};return Object(g.jsxs)("div",{className:"note new",children:[Object(g.jsx)("textarea",{row:"1",cols:"10",placeholder:"Title",value:d,onChange:function(e){j(e.target.value)},style:{fontSize:"120%"}}),Object(g.jsx)(u,{color:"black"}),Object(g.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note",value:c,onChange:function(e){200-e.target.value.length>=0&&s(e.target.value)}}),Object(g.jsxs)("div",{className:"note-footer",children:[Object(g.jsxs)("small",{children:[200-c.length," Remaining"]}),Object(g.jsx)("button",{className:"saveBtn",onClick:function(){d&&c?t(c,d):alert("Not Specified"),j(""),s("")},children:"Save"})]})]})},y=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote,o=e.handleEditNote;return Object(g.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(g.jsx)(p,{note:e,handleDeleteNote:a,handleEditNote:o},e.id)})),Object(g.jsx)(w,{handleAddNote:n})]})},C=n(14),S=n(85),k=n.n(S),D=function(e){var t=e.handleSearchNote;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"SearchBox",children:[Object(g.jsx)(d.a,{animation:k.a}),Object(g.jsx)("input",{type:"text",onChange:function(e){return t(e.target.value)},name:"search",id:"searchBar",placeholder:"Search"})]})})},E=function(e){var t=e.handleDarkMode;return Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("h1",{children:"Notes"}),Object(g.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"modeBtn",children:"Toggle Mode"}),Object(g.jsx)("button",{onClick:function(){window.confirm("The Notes app stores notes data locally on your device.Do you want to delete all data.NOTE: Your notes will be unrecoverable and the sites will show default notes after this action")?(window.localStorage.removeItem("MyKeytoGetData"),alert("Data Removal Done! You can refresh the site.")):alert("Data Removal Cancelled")},className:"modeBtn",children:"Remove Saved Notes"})]})};var A=function(){var e=Object(a.useState)([{id:Object(C.a)(),title:"Welcome User!\nFeature #1",text:"You can Add Notes,Edit them and delete them!",date:"3/6/2021"},{id:Object(C.a)(),title:"Feature #2",text:"Can't find a note? Use the search bar to get it.",date:"3/6/2021"},{id:Object(C.a)(),title:"Feature #3",text:'You can even add web links and they will remain as "links".Check this out: https://www.youtube.com/channel/UC-Zcse8tC53G34Uo4kzLeAg',date:"3/6/2021"},{id:Object(C.a)(),title:"Feature #4",text:"You can change color of your note.Use the icons near the date to explore more",date:"3/6/2021"}]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),l=s[0],d=s[1],j=Object(a.useState)(!1),u=Object(i.a)(j,2),h=u[0],b=u[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("MyKeytoGetData"));e&&o(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("MyKeytoGetData",JSON.stringify(n))}),[n]);var O=Object(a.useState)(!1),f=Object(i.a)(O,2);return f[0],f[1],Object(g.jsx)("div",{className:"".concat(h&&"dark-mode"),children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(E,{handleDarkMode:b}),Object(g.jsx)(D,{handleSearchNote:d}),Object(g.jsx)(y,{notes:n.filter((function(e){return e.text.toLowerCase().includes(l.toLowerCase())||e.title.toLowerCase().includes(l.toLowerCase())})),handleAddNote:function(e,t){var a=new Date,c={id:Object(C.a)(),title:t,text:e,date:a.toLocaleDateString()};o([].concat(Object(r.a)(n),[c]))},handleDeleteNote:function(e){o(n.filter((function(t){return t.id!==e})))},handleEditNote:function(e){var t=n.filter((function(t){return t.id===e})),a=n.filter((function(t){return t.id!==e}));console.log(a);var c=prompt("Edit Title[Press Enter/Ok for no change]",t[0].title),s=prompt("Edit Content of Note[Press Enter/Ok for no change]",t[0].text);t[0].text=s,t[0].title=c,a.push(t[0]),o(a)}})]})})};s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root"))},92:function(e,t,n){},93:function(e,t,n){}},[[224,1,2]]]);
//# sourceMappingURL=main.f5ed7b56.chunk.js.map