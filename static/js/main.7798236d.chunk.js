(this["webpackJsonptaco-app"]=this["webpackJsonptaco-app"]||[]).push([[0],{12:function(e,t,c){e.exports={img_background:"single-recipe_img_background__PV4g3",return_button:"single-recipe_return_button__2-OVN",return_icon:"single-recipe_return_icon__2uYsr",recipe_container:"single-recipe_recipe_container__ZUQNv",recipe_content:"single-recipe_recipe_content__4YLCX",recipe_title:"single-recipe_recipe_title__2RAv-",recipe_dif:"single-recipe_recipe_dif__36Fv3",recipe_ing_title:"single-recipe_recipe_ing_title__2abVa",recipe_ing_content:"single-recipe_recipe_ing_content__1Sbdo",recipe_dir_content:"single-recipe_recipe_dir_content__1jw1B",recipe_dir_title:"single-recipe_recipe_dir_title__Ycr3e",recipe_author:"single-recipe_recipe_author__3Ai3l"}},17:function(e,t,c){e.exports={wrapper:"start-page_wrapper__o_OsQ",title:"start-page_title__XHrO6",subTitle:"start-page_subTitle__1hH9X",credits:"start-page_credits__2rrrS",start_button:"start-page_start_button__3tfl1",button:"start-page_button__vSF5n",author:"start-page_author__2t53R",author_container:"start-page_author_container__3hFsA"}},68:function(e,t,c){},69:function(e,t,c){},9:function(e,t,c){e.exports={container_wrapper:"discover-page_container_wrapper__3TGDj",title:"discover-page_title__xK32t",menu_icon:"discover-page_menu_icon__2VICz",RecipePreview_container:"discover-page_RecipePreview_container__18HHS",recipeWrapper:"discover-page_recipeWrapper__2vDU4",recipePreview:"discover-page_recipePreview__hihgK",recipeData_preview:"discover-page_recipeData_preview__2lGsB",recipeData_preview_title:"discover-page_recipeData_preview_title__1mmZ8",recipeData_preview_shortDesc:"discover-page_recipeData_preview_shortDesc__3T4Ox",recipeData_preview_diff:"discover-page_recipeData_preview_diff__1cSXN",recipePreview_icon:"discover-page_recipePreview_icon__11dpY",recipe_img:"discover-page_recipe_img__1qwND",addRecipe_container:"discover-page_addRecipe_container__2GM4i",required:"discover-page_required__1lW_L","control-label":"discover-page_control-label__3gIfL",difficulty:"discover-page_difficulty__2hP9P"}},95:function(e,t,c){"use strict";c.r(t);var r=c(2),a=c(1),n=c(27),i=c.n(n),s=(c(68),c(8)),o=(c(69),c(98)),l=c(99),j=c(100),d=c(29),p=c(20),b=c(17),_=c.n(b),u=c.p+"static/media/start_logo.fa382c7a.png";var h=function(e){return Object(r.jsxs)(o.a,{className:_.a.wrapper,children:[Object(r.jsx)("h1",{className:_.a.title,children:"Garnachas App"}),Object(r.jsx)("p",{className:_.a.subTitle,children:"Garnachas recipes from the community to the community"}),Object(r.jsx)(d.a.div,{animate:{scale:[1,1.5,1]},transition:{ease:"easeOut",duration:1.5},children:Object(r.jsx)(l.a,{src:u})}),Object(r.jsx)("a",{href:"https://www.freepik.com/vectors/background",className:_.a.credits,children:"Background vector created by freepik - www.freepik.com"}),Object(r.jsx)(d.a.div,{whileHover:{scale:1.2},whileTap:{scale:1.5},children:Object(r.jsx)(j.a,{className:_.a.start_button,onClick:function(){return window.location.href="/discover"},children:Object(r.jsx)(p.b,{to:"/garnachas-app-test/discover",children:"Get Started"})})}),Object(r.jsx)("div",{className:_.a.author_container,children:Object(r.jsx)("p",{className:_.a.author,children:"by Dilan Ramirez"})})]})},O=c(49),x=c.n(O),m=c(61),g=c(15),v=c(104),f=c(103),w=c(34),N=c(38),C=c.n(N),y=c(9),k=c.n(y),D=c(39);var S=function(e){var t=e.recipes,c=Object(s.e)(),a=t.map((function(e,t){return Object(r.jsxs)(d.a.div,{whileHover:{scale:1.1},whileTap:{scale:1},onClick:function(){c.push({pathname:"/recipe",state:{item:e}})},children:[Object(r.jsxs)("div",{className:k.a.recipeWrapper,children:[Object(r.jsxs)("div",{className:k.a.recipePreview,children:[Object(r.jsx)(l.a,{src:e.image,rounded:!0,className:k.a.recipe_img}),Object(r.jsxs)("div",{className:k.a.recipeData_preview,children:[Object(r.jsx)("p",{className:k.a.recipeData_preview_title,children:e.name}),Object(r.jsx)("p",{className:k.a.recipeData_preview_shortDesc,children:e.short_desc}),Object(r.jsx)("p",{className:k.a.recipeData_preview_diff,children:e.difficulty})]})]}),Object(r.jsx)(j.a,{style:{backgroundColor:"#fff",borderColor:"#fff",zIndex:1},onClick:function(){c.push({pathname:"/recipe",state:{item:e}})},children:Object(r.jsx)("i",{children:Object(r.jsx)(D.b,{className:k.a.recipePreview_icon})})})]},e.id),Object(r.jsx)("hr",{className:k.a.dividor})]},t)}));return Object(r.jsx)("div",{children:a})},L=function(){return Object(r.jsxs)(v.a,{expand:"lg",style:{backgroundColor:"#d9534f !important"},children:[Object(r.jsx)(v.a.Brand,{href:"#home",children:"Discover"}),Object(r.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav",children:Object(r.jsx)("i",{children:Object(r.jsx)(w.a,{className:k.a.menu_icon})})}),Object(r.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsx)(f.a,{className:"mr-auto",children:Object(r.jsx)(f.a.Link,{as:p.b,to:"/add-recipe",children:"Add Recipe"})})})]})};var G=function(e){var t=Object(a.useState)([]),c=Object(g.a)(t,2),n=c[0],i=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://garnachas-app.herokuapp.com/recipes");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(L,{}),Object(r.jsx)(o.a,{fluid:!0,className:k.a.RecipePreview_container,children:Object(r.jsx)(S,{recipes:n})})]})},P=c(12),T=c.n(P);function E(e){var t=e.location.state.item,c=Object(s.e)(),a=t.ingredients.split("@"),n=t.directions.split("@"),i=t.comments?t.comments.split("@"):["no comments"];return Object(r.jsxs)(d.a.div,{animate:{scale:[1.1,1]},transition:{duration:1.1},style:{backgroundImage:'url("'+t.image+'")',backgroundSize:"cover",backgroundPosition:"center center"},children:[Object(r.jsx)("div",{className:T.a.img_background,children:Object(r.jsx)(j.a,{className:T.a.return_button,onClick:function(){return c.goBack()},children:Object(r.jsx)(D.a,{className:T.a.return_icon})})},t._id),Object(r.jsx)(o.a,{className:T.a.recipe_container,children:Object(r.jsxs)("div",{className:T.a.recipe_content,children:[Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(r.jsxs)("h2",{className:T.a.recipe_title,children:[t.name,Object(r.jsxs)("p",{className:T.a.recipe_author,children:["by ",t.author?t.author:"Unknown"]})]}),Object(r.jsx)("p",{className:T.a.recipe_dif,children:t.difficulty})]}),Object(r.jsx)("h4",{className:T.a.recipe_ing_title,children:"Ingredients"}),Object(r.jsx)("p",{className:T.a.recipe_ing_content,children:a.map((function(e){return Object(r.jsx)("li",{children:e})}))}),Object(r.jsx)("h4",{className:T.a.recipe_dir_title,children:"Directions"}),Object(r.jsx)("p",{className:T.a.recipe_ing_content,children:n.map((function(e){return Object(r.jsx)("li",{children:e})}))}),Object(r.jsx)("h4",{className:T.a.recipe_dir_title,children:"Comments"}),Object(r.jsx)("p",{className:T.a.recipe_ing_content,children:i.map((function(e){return Object(r.jsx)("li",{children:e})}))})]})})]},t._id)}var I=c(102),R=c(50),H=c(101);function B(e){return Object(r.jsxs)(H.a,Object(R.a)(Object(R.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(r.jsxs)(H.a.Body,{children:[Object(r.jsx)("h4",{children:"Missing Information"}),Object(r.jsx)("p",{children:"You are missing some required fields."})]}),Object(r.jsx)(H.a.Footer,{children:Object(r.jsx)(j.a,{className:_.a.button,variant:"flat",onClick:e.onHide,children:"Close"})})]}))}var F=function(){return Object(r.jsxs)(v.a,{expand:"lg",style:{backgroundColor:"#d9534f !important"},children:[Object(r.jsx)(v.a.Brand,{href:"#home",children:"Add Recipe"}),Object(r.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav",children:Object(r.jsx)("i",{children:Object(r.jsx)(w.a,{className:k.a.menu_icon})})}),Object(r.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsx)(f.a,{className:"mr-auto",children:Object(r.jsx)(f.a.Link,{as:p.b,to:"/discover",children:"Discover"})})})]})};function A(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(g.a)(i,2),l=s[0],d=s[1],p=Object(a.useState)(""),b=Object(g.a)(p,2),u=b[0],h=b[1],O=Object(a.useState)(""),x=Object(g.a)(O,2),m=x[0],v=x[1],f=Object(a.useState)(""),w=Object(g.a)(f,2),N=w[0],y=w[1],D=Object(a.useState)(""),S=Object(g.a)(D,2),L=S[0],G=S[1],P=Object(a.useState)(""),T=Object(g.a)(P,2),E=T[0],R=T[1],H=Object(a.useState)(""),A=Object(g.a)(H,2),U=A[0],q=A[1],z=Object(a.useState)(""),Y=Object(g.a)(z,2),V=Y[0],W=Y[1],X=Object(a.useState)(!1),J=Object(g.a)(X,2),K=J[0],M=J[1],Q=Object(a.useRef)("1"),Z={name:c,category:l,short_desc:u,difficulty:m,ingredients:N,directions:L,image:E,comments:U,author:V},$=function(e){e.preventDefault();var t=0!==c.length&&0!==l.length&&0!==m.length&&0!==N.length&&0!==L.length||(console.log(c.length,l.length,m.length,N.length,L.length),M(!0),!1);console.log(Z),t&&(C.a.post("https://garnachas-app.herokuapp.com/recipes/add",Z).then((function(e){return console.log(e.data)})),window.location="/discover")};return Object(r.jsxs)("div",{children:[Object(r.jsx)(B,{show:K,onHide:function(){return M(!1)}}),Object(r.jsx)(F,{}),Object(r.jsx)(o.a,{className:k.a.addRecipe_container,children:Object(r.jsxs)(I.a,{name:"add_recipe_form",onSubmit:function(e){return $(e)},children:[Object(r.jsxs)(I.a.Group,{children:[Object(r.jsxs)(I.a.Label,{children:["Name ",Object(r.jsx)("b",{style:{color:"red"},children:"*"})]}),Object(r.jsx)(I.a.Control,{placeholder:"Enter recipe name",onChange:function(e){return function(e){n(e.target.value)}(e)}})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsxs)(I.a.Label,{children:["Category ",Object(r.jsx)("b",{style:{color:"red"},children:"*"})]}),Object(r.jsx)(I.a.Control,{placeholder:"Enter recipe category",onChange:function(e){return function(e){d(e.target.value)}(e)}})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsx)(I.a.Label,{children:"Short Description"}),Object(r.jsx)(I.a.Control,{placeholder:"Enter a recipe short description",onChange:function(e){return function(e){h(e.target.value)}(e)}}),Object(r.jsx)(I.a.Text,{className:"text-muted",children:"Say something about this recipe in a few words."})]}),Object(r.jsxs)(I.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(r.jsxs)(I.a.Label,{className:k.a.required,children:["Difficulty ",Object(r.jsx)("b",{style:{color:"red"},children:"*"})]}),Object(r.jsxs)(I.a.Control,{sef:Q,as:"select",onClick:function(e){return function(e){console.log(e.target.value),v(e.target.value),console.log(m)}(e)},children:[Object(r.jsx)("option",{value:"Easy",children:"Easy"}),Object(r.jsx)("option",{value:"Normal",children:"Normal"}),Object(r.jsx)("option",{value:"Hard",children:"Hard"})]})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsxs)(I.a.Label,{children:["Ingredients ",Object(r.jsx)("b",{style:{color:"red"},children:"*"})]}),Object(r.jsx)(I.a.Control,{placeholder:"Enter recipe ingredients",onChange:function(e){return function(e){y(e.target.value)}(e)}}),Object(r.jsx)(I.a.Text,{className:"text-muted",children:"Use @ after every ingredient to be able to separe them all."})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsxs)(I.a.Label,{children:["Directions ",Object(r.jsx)("b",{style:{color:"red"},children:"*"})]}),Object(r.jsx)(I.a.Control,{placeholder:"Enter recipe directions",onChange:function(e){return function(e){G(e.target.value)}(e)}}),Object(r.jsx)(I.a.Text,{className:"text-muted",children:"Use @ after every step to be able to separe them all."})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsx)(I.a.Label,{children:"Image"}),Object(r.jsx)(I.a.Control,{placeholder:"Enter the link of your picture",onChange:function(e){return function(e){R(e.target.value)}(e)}})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsx)(I.a.Label,{children:"Comments"}),Object(r.jsx)(I.a.Control,{placeholder:"Enter personal comments",onChange:function(e){return function(e){q(e.target.value)}(e)}}),Object(r.jsx)(I.a.Text,{className:"text-muted",children:"Use this field to add some personal comments, and Use @ after every step to be able to separe them all."})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsx)(I.a.Label,{children:"Author"}),Object(r.jsx)(I.a.Control,{placeholder:"Enter recipe description",onChange:function(e){return function(e){W(e.target.value)}(e)}})]}),Object(r.jsx)(j.a,{className:_.a.button,type:"submit",children:"Submit"})]})})]})}var U=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(s.a,{path:"/",exact:!0,component:h}),Object(r.jsx)(s.a,{path:"/discover",component:G}),Object(r.jsx)(s.a,{path:"/recipe",component:E}),Object(r.jsx)(s.a,{path:"/add-recipe",component:A})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,105)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),r(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(p.a,{children:Object(r.jsx)(U,{})}),document.getElementById("root")),q()}},[[95,1,2]]]);
//# sourceMappingURL=main.7798236d.chunk.js.map