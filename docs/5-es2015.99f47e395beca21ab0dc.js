(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{D57K:function(e,t,r){"use strict";function s(e,t,r,s){return new(r||(r=Promise))((function(i,n){function o(e){try{u(s.next(e))}catch(t){n(t)}}function c(e){try{u(s.throw(e))}catch(t){n(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}u((s=s.apply(e,t||[])).next())}))}r.d(t,"a",(function(){return s}))},doNb:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r("sUYu"),i=r("EM62"),n=r("vobO");let o=(()=>{class e extends s.b{constructor(e){super(Object.assign(Object.assign({},s.d),{serverUrl:"http://localhost:3000/v1",sourceUrl:"/sys/tenants"}),e),this.query=new s.e(new s.c({pageSize:5}))}}return e.\u0275fac=function(t){return new(t||e)(i.Yb(n.b))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})()},sUYu:function(e,t,r){"use strict";r.d(t,"a",(function(){return D})),r.d(t,"b",(function(){return q})),r.d(t,"c",(function(){return z})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return $}));var s=r("D57K"),i=r("EM62"),n=r("YtkY"),o=(r("TLy2"),r("J+dc"),r("ZTXN"));r("pBDD"),r("mW0F"),r("cJ9h"),r("BwBJ");var c=r("xVbo"),u=r("8j5Y"),a=(r("Ohay"),r("wqq/"),r("4e/d")),h=r("ruxD"),l=(r("47ST"),r("ROBh")),p=r("Ti3e"),g=r("C05f"),b=r("6Oco"),d=r("i9xl"),f=r("P4Xx"),y=r("eY+9"),C=r("FlRo"),O=r("vobO");function v(e){return null!=e&&(Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{e.hasOwnProperty(t)&&null!=e[t]&&"object"==typeof e[t]&&!Object.isFrozen(e[t])&&v(e[t])})),e}r("W1gw");var w=function(e){return e.default="",e.json=".json",e.html=".html",e.csv=".csv",e}({});const j={storagePrefix:"idg-",maxCacheAge:21e3,retryCount:5,dateFormat:"YYYY-MM-DD",retryDelayMs:1e3,serverUrl:null};function x(e,t){const r=[];for(const i of Object.keys(e))if(null!=e[i]&&""!==e[i]&&"pageIndex"!==i&&"pageSize"!==i&&"childUrl"!==i&&"useCache"!==i&&"baseUrl"!==i&&"format"!==i&&"orderBy"!==i){if("false"!==e[i].toString().toLowerCase())try{if(e[i]._isAMomentObject)r.push(i.toLowerCase()+"="+e[i].format(t||"YYYY-MM-DD"));else if(Object(y.a)(e[i])){const t=[];e[i].forEach(e=>{t.push(`${i}[]=${e}`)}),r.push(t.join("&"))}else r.push(i.toLowerCase()+"="+e[i])}catch(s){r.push(i.toLowerCase()+"="+e[i])}}else"orderBy"===i?r.push("order_by="+JSON.stringify(e[i])):"pageIndex"===i?r.push("page_index="+e[i]):"pageSize"===i&&r.push("page_size="+e[i]);return`?${r.join("&")}`}function m(e,t,r){let s=`${e.serverUrl}${t.baseUrl?t.baseUrl:e.sourceUrl}${r||""}${t.format}`;if(t)for(const n of Object.keys(t))"orderBy"!==(i=n)&&"format"!==i&&""!==i&&S(t[n])&&(s=s.replace(`:${n}`,t[n]._isAMomentObject?t[n].format(e.dateFormat):t[n]));var i;return s+(t?x(t,e.dateFormat):"")}function S(e){return null!=e}class Q{constructor(e){this.useCache=!0,this.format=e.format||w.json,this.pageIndex=e.pageIndex||0,this.pageSize=e.pageSize||10,this.orderBy=e.orderBy||null,this.childUrl=e.childUrl||"",this.accumulate=e.accumulate,this.baseUrl=e.baseUrl||"",this.useCache=e.useCache,this.token=e.token||"",this.q=e.q||""}duplicate(e){return new Q(Object.assign(Object.assign({},this),e||{}))}toQueryParams(){return x(this)}}let k=(()=>{class e{constructor(e){this.ar=e,this.unsubscribeAll=new o.a}ngOnInit(){}ngOnDestroy(){this.unsubscribeAll.next(),this.unsubscribeAll.complete()}get urlParams(){return this.ar.paramMap.pipe(Object(n.a)(e=>e.params))}}return e.\u0275fac=function(e){i.bc()},e.\u0275dir=i.Jb({type:e}),e})(),U=(()=>{class e extends k{constructor(e,t,r){super(t),this.service=e,this.ar=t,this.router=r}ngOnInit(){super.ngOnInit(),this.setupDataSource()}ngOnDestroy(){super.ngOnDestroy(),this.querySubscription&&this.querySubscription.unsubscribe(),this.dataSubscription&&this.dataSubscription.unsubscribe()}onPage(e){this.service.pageIndexChanged(e.pageIndex)}navigateInto(e,t){return Object(s.a)(this,void 0,void 0,(function*(){yield this.router.navigate(["../",e.id,t],{relativeTo:this.ar,state:{data:{redirectUrl:location.pathname}}})}))}select(e){this.service.setCurrent(e)}setupDataSource(){this.querySubscription=this.service.Query$.subscribe(e=>{this.service.getCount(e).subscribe(()=>{}),this.service.getList(e).subscribe(()=>{})})}}return e.\u0275fac=function(e){i.bc()},e.\u0275dir=i.Jb({type:e,features:[i.zb]}),e})(),D=(()=>{class e extends U{constructor(e,t,r){super(e,t,r),this.service=e,this.ar=t,this.router=r}ngOnDestroy(){super.ngOnDestroy(),this.dataSubscription&&this.dataSubscription.unsubscribe()}setupDataSource(){super.setupDataSource(),this.dataSubscription=this.service.List$.subscribe(e=>{this.dataSource?this.dataSource.connect().next(e):this.dataSource=new C.k(e)})}}return e.\u0275fac=function(e){i.bc()},e.\u0275dir=i.Jb({type:e,features:[i.zb]}),e})();class $ extends g.a{constructor(e){super(v(e))}next(e){const t=v(e);var r,s;r=t,s=this.getValue(),JSON.stringify(r)===JSON.stringify(s)||super.next(t)}}class q extends class extends class extends class{constructor(){this.progress=new $(0),this.working=new $(!1),this.filter=new $({}),this.count=new $(0),this.list=new $([]),this.current=new $(null)}get Progress(){return this.progress.getValue()}get Working(){return this.working.getValue()}get Progress$(){return this.progress.asObservable()}get Working$(){return this.working.asObservable()}get Filter(){return this.filter.getValue()}get Filter$(){return this.filter.asObservable()}get Count(){return this.count.getValue()}get Count$(){return this.count.asObservable()}get List(){return this.list.getValue()}get List$(){return this.list.asObservable()}get Current(){return this.current.getValue()}get Current$(){return this.current.asObservable()}setProgress(e){this.progress.next(e)}setWorking(e){this.working.next(e)}setFilter(e){this.filter.next(e)}setCount(e){this.count.next(e)}setList(e){this.list.next(e)}setCurrent(e){this.current.next(e)}}{constructor(e){if(super(),this.config=e,this.cache={},!e.maxCacheAge)throw new Error("IDG: ConnectionCacheService => no cache age present.");if(!e.retryCount&&0!==e.retryCount)throw new Error("IDG: ConnectionCacheService => no retry count present.")}getCache(e){return this.cache[e]}setCache(e,t){return this.cache[e]=t,this.getCache(e)}clear(e,t){if(t)for(const r of Object.keys(this.cache))delete this.cache[r];else delete this.cache[e]}errorHandler(e){return e&&this.clear(e),b.a}finalizeConnection(){return e=>e.pipe(Object(a.a)(()=>this.errorHandler()),Object(h.a)(()=>{this.setWorking(!1),this.setProgress(0)}))}fetch(e,t,r=!0){let s=this.getCache(e);if(s&&r){const r=Date.now()-this.config.maxCacheAge;if(s.created_at<r)return this.fetch(e,t,!1);console.log(`Returning cached value from: ${e}`)}else s=this.setCache(e,{created_at:Date.now(),request:t.pipe(this.finalizeConnection())});return s.request}}{constructor(e,t){if(super(e),this.config=e,this.httpClient=t,!e.sourceUrl)throw new Error("IDG: FetchConnectionService => no REST source URL present.")}get Query(){return this.query.getValue()}get Query$(){return this.query.asObservable()}setQuery(e){this.query.next(e)}getFilter(e){const t=m(this.config,e||this.Query,"/filters"),r=this.httpClient.get(t);return this.setWorking(!0),this.fetch(t,r,!1).pipe(Object(u.a)(e=>this.setFilter(e)))}queryChanged(e){this.setQuery(e)}pageIndexChanged(e){this.setQuery(this.Query.duplicate({pageIndex:e}))}queryStringChanged(e){this.setQuery(this.Query.duplicate({pageIndex:0,q:e}))}pageSizeChanged(e){this.setQuery(this.Query.duplicate({pageIndex:0,pageSize:e}))}orderByChanged(e){this.setQuery(this.Query.duplicate({pageIndex:0,orderBy:e}))}baseUrlChanged(e){this.setQuery(this.Query.duplicate({pageIndex:0,baseUrl:e}))}subscribeToQuery(e){return e?this.querySubscription||(this.querySubscription=this.Query$.subscribe(()=>{this.getCount().subscribe(),this.getList().subscribe()})):this.querySubscription&&this.querySubscription.unsubscribe(),this.querySubscription}getList(e,t=!0){const r=m(this.config,e||this.Query),s=this.httpClient.get(r);return this.setWorking(!0),this.fetch(r,s,(e||this.Query).useCache).pipe(Object(u.a)(r=>{t&&this.setList((e||this.Query).accumulate?[...this.list.getValue(),...r]:r)}))}getCount(e,t=!0){const r=m(this.config,e||this.Query,"/count"),s=this.httpClient.get(r);return this.setWorking(!0),this.fetch(r,s,(e||this.Query).useCache).pipe(Object(u.a)(e=>{t&&this.setCount(+e)}))}get(e,t={},r,s=!0){const i=m(this.config,r||this.Query,`/${e}`),n=this.httpClient.get(i);return this.setWorking(!0),function(e,t=b.a,r=b.a){return Object(d.a)(()=>e()?t:r)}(()=>"new"===e.toString().toLocaleLowerCase(),Object(l.a)(t),this.fetch(i,n,(r||this.Query).useCache)).pipe(Object(u.a)(e=>{s&&this.setCurrent(e)}))}}{constructor(e,t){super(e,t),this.config=e,this.httpClient=t}upload(e,t){const r={observe:"events",reportProgress:!0},s=function(e){const t=new FormData;for(const r of Object.keys(e)){const s=e[r];if(Object(y.a)(s))for(const e of s)t.append(`${r}[]`,e);else t.append(r,s)}return t}(e),i=t||this.Query,o=m(this.config,i,e.id?i.childUrl||`/${e.id}`:i.childUrl);return this.setWorking(!0),(e.id?this.httpClient.patch(o,s,r):this.httpClient.post(o,s,r)).pipe((a=e=>this.setProgress(e),Object(u.a)(e=>{e.type===O.d.UploadProgress&&a(Math.round(100*e.loaded/e.total))})),Object(p.a)(Object(c.a)(e=>e.type===O.d.Response),Object(n.a)(e=>e.body)),this.finalizeConnection());var a}post(e,t){const r=t||this.Query,s=m(this.config,r,r.childUrl);return this.setWorking(!0),this.httpClient.post(s,{d:e}).pipe(this.finalizeConnection())}patch(e,t){const r=t||this.Query,s=m(this.config,r,r.childUrl||`/${e.id}`);return this.setWorking(!0),this.httpClient.patch(s,{d:e}).pipe(this.finalizeConnection())}delete(e,t){const r=t||this.Query,s=m(this.config,r,r.childUrl||`/${e}`);return this.setWorking(!0),this.httpClient.delete(s).pipe(this.finalizeConnection())}save(e,t){return e.id?this.patch(e,t):this.post(e,t)}saveCurrent(e){return this.save(this.Current)}saveMany(e,t){return e.length?Object(f.a)(e.map(e=>this.save(e,t))):Object(l.a)([])}finalizeConnection(){return e=>e.pipe(Object(u.a)(()=>this.clear(null,!0)),super.finalizeConnection())}}class z extends Q{}},yXIz:function(e,t,r){"use strict";r.r(t),r.d(t,"ConnectModule",(function(){return h}));var s=r("2kYt"),i=r("jjKm"),n=r("doNb"),o=r("sEIs"),c=r("EM62");const u=[{path:"components",loadChildren:()=>r.e(6).then(r.bind(null,"pL0+")).then(e=>e.ComponentsModule)}];let a=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[o.e.forChild(u)],o.e]}),e})(),h=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},providers:[n.a],imports:[[s.c,a,i.m]]}),e})()}}]);