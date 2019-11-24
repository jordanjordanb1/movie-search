(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{44:function(e,t,n){e.exports=n.p+"static/media/not-found.6c768850.png"},46:function(e,t,n){e.exports=n(82)},51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(51),n(6)),l=n(7),u=n(9),s=n(8),m=n(10),p=n(18),h=n(19),f=n(40),b=n(41);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{moviesList:null,apiLookup:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_MOVIES":return v({},e,{moviesList:t.payload});case"API_LOOKUP":return v({},e,{apiLookup:e.apiLookup+1});default:return e}},d=(n(57),n(58),n(59),n(45)),E=n(20),y=n(21),g=n(17),k=n(23),w=n(22),P=n(27),S=n(42),N=n.n(S),L={url:"https://simplemoviesearchapp.herokuapp.com"},I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={searchValue:""},n.handleSubmit=n.handleSubmit.bind(Object(E.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){return e.preventDefault(),this.props.fetchMovies(this.state.searchValue),this.setState({searchValue:""})}},{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{className:"mt-4"},r.a.createElement(g.a,{xs:"12",md:{span:10,offset:1},lg:{span:8,offset:2}},r.a.createElement(k.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a.Row,null,r.a.createElement(P.a,{className:"mb-3"},r.a.createElement(k.a.Control,{type:"search",placeholder:"Search for a movie here...",value:this.state.searchValue,onChange:function(t){return e.setState({searchValue:t.target.value})}}),r.a.createElement(P.a.Prepend,null,r.a.createElement(w.a,null,"Search")))))))}}]),t}(a.PureComponent),M=Object(p.b)(null,(function(e){return{fetchMovies:function(t){return e(function(e){return function(t){e&&N.a.get("".concat(L.url,"/movies?value=").concat(e)).then((function(e){200===e.status?"NOMOVIES"!==e.data.err?(t({type:"INSERT_MOVIES",payload:e.data}),t({type:"API_LOOKUP"})):t({type:"INSERT_MOVIES",payload:""}):console.error("An unknown error occured")})).catch((function(e){return console.error(e)}))}}(t))}}}))(I),V=n(15),x=(n(79),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"no-movie"},r.a.createElement("h1",null,"Please search for a movie first"))}}]),t}(a.PureComponent)),C=(n(80),n(44)),D=n.n(C),T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderMovies",value:function(){var e=this.props.moviesList;return e?e.map((function(e,t){return r.a.createElement(V.a,{className:"m-3 movie-card",key:t},r.a.createElement(V.a.Header,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(V.a.Img,{variant:"top",alt:e.Title,src:"N/A"!==e.Poster?e.Poster:D.a})),r.a.createElement(V.a.Body,null,r.a.createElement(V.a.Title,null,e.Title),r.a.createElement(V.a.Text,null,"Year: ",e.Year),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.imdb.com/title/".concat(e.imdbID)},r.a.createElement(w.a,null,"View on IMDB"))))})):r.a.createElement("div",{className:"no-movie-found"},r.a.createElement("h1",null,"No movies were found!"))}},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(g.a,{xs:"12",style:{flexWrap:"wrap"},className:this.props.moviesList?"d-flex justify-content-center":""},this.props.apiLookup?this.renderMovies():r.a.createElement(x,null)))}}]),t}(a.PureComponent),_=Object(p.b)((function(e){return{moviesList:e.movies.moviesList,apiLookup:e.movies.apiLookup}}))(T),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(M,null),r.a.createElement(_,null))}}]),t}(a.PureComponent),A=(n(81),n(28)),R=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{bg:"dark"},r.a.createElement(A.a.Brand,{href:"#",className:"text-white"},"Movie Search"),r.a.createElement("div",{className:"ml-auto"},r.a.createElement("a",{href:"https://github.com/jordanjordanb1/movie-search",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github github-icon"}))))}}]),t}(a.PureComponent),W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(B,null))}}]),t}(a.PureComponent),J=Object(h.d)(Object(h.c)({movies:j}),Object(h.a)(f.a)),K=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:J},r.a.createElement(W,null))}}]),t}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);