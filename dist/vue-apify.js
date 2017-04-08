(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueApify = factory());
}(this, (function () { 'use strict';

var __cov_RlZ9axv4MRpE$16_ASuQNQ = (Function('return this'))();
if (!__cov_RlZ9axv4MRpE$16_ASuQNQ.__coverage__) { __cov_RlZ9axv4MRpE$16_ASuQNQ.__coverage__ = {}; }
__cov_RlZ9axv4MRpE$16_ASuQNQ = __cov_RlZ9axv4MRpE$16_ASuQNQ.__coverage__;
if (!(__cov_RlZ9axv4MRpE$16_ASuQNQ['/home/fahreevr/Projects/rollup-starter-project/lib/utils/warn.js'])) {
   __cov_RlZ9axv4MRpE$16_ASuQNQ['/home/fahreevr/Projects/rollup-starter-project/lib/utils/warn.js'] = {"path":"/home/fahreevr/Projects/rollup-starter-project/lib/utils/warn.js","s":{"1":1,"2":0,"3":0,"4":1,"5":0,"6":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"assert","line":1,"loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":43}}},"2":{"name":"warn","line":7,"loc":{"start":{"line":7,"column":7},"end":{"line":7,"column":41}}}},"statementMap":{"1":{"start":{"line":1,"column":7},"end":{"line":5,"column":1}},"2":{"start":{"line":2,"column":2},"end":{"line":4,"column":3}},"3":{"start":{"line":3,"column":4},"end":{"line":3,"column":46}},"4":{"start":{"line":7,"column":7},"end":{"line":11,"column":1}},"5":{"start":{"line":8,"column":2},"end":{"line":10,"column":3}},"6":{"start":{"line":9,"column":4},"end":{"line":9,"column":77}}},"branchMap":{"1":{"line":2,"type":"if","locations":[{"start":{"line":2,"column":2},"end":{"line":2,"column":2}},{"start":{"line":2,"column":2},"end":{"line":2,"column":2}}]},"2":{"line":8,"type":"if","locations":[{"start":{"line":8,"column":2},"end":{"line":8,"column":2}},{"start":{"line":8,"column":2},"end":{"line":8,"column":2}}]},"3":{"line":8,"type":"binary-expr","locations":[{"start":{"line":8,"column":6},"end":{"line":8,"column":43}},{"start":{"line":8,"column":47},"end":{"line":8,"column":57}}]},"4":{"line":9,"type":"binary-expr","locations":[{"start":{"line":9,"column":4},"end":{"line":9,"column":34}},{"start":{"line":9,"column":38},"end":{"line":9,"column":76}}]}}};
}
__cov_RlZ9axv4MRpE$16_ASuQNQ = __cov_RlZ9axv4MRpE$16_ASuQNQ['/home/fahreevr/Projects/rollup-starter-project/lib/utils/warn.js'];
function warn(condition,message){__cov_RlZ9axv4MRpE$16_ASuQNQ.f['2']++;__cov_RlZ9axv4MRpE$16_ASuQNQ.s['5']++;if((__cov_RlZ9axv4MRpE$16_ASuQNQ.b['3'][0]++,process.env.NODE_ENV!=='production')&&(__cov_RlZ9axv4MRpE$16_ASuQNQ.b['3'][1]++,!condition)){__cov_RlZ9axv4MRpE$16_ASuQNQ.b['2'][0]++;__cov_RlZ9axv4MRpE$16_ASuQNQ.s['6']++;(__cov_RlZ9axv4MRpE$16_ASuQNQ.b['4'][0]++,typeof console!=='undefined')&&(__cov_RlZ9axv4MRpE$16_ASuQNQ.b['4'][1]++,console.warn('[vue-apify] '+message));}else{__cov_RlZ9axv4MRpE$16_ASuQNQ.b['2'][1]++;}}

var __cov_KylCAxvDwqmTUGCjptCXBg = (Function('return this'))();
if (!__cov_KylCAxvDwqmTUGCjptCXBg.__coverage__) { __cov_KylCAxvDwqmTUGCjptCXBg.__coverage__ = {}; }
__cov_KylCAxvDwqmTUGCjptCXBg = __cov_KylCAxvDwqmTUGCjptCXBg.__coverage__;
if (!(__cov_KylCAxvDwqmTUGCjptCXBg['/home/fahreevr/Projects/rollup-starter-project/lib/create-api-map.js'])) {
   __cov_KylCAxvDwqmTUGCjptCXBg['/home/fahreevr/Projects/rollup-starter-project/lib/create-api-map.js'] = {"path":"/home/fahreevr/Projects/rollup-starter-project/lib/create-api-map.js","s":{"1":1,"2":0,"3":0,"4":0,"5":0,"6":0,"7":1,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":1,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"fnMap":{"1":{"name":"createApiMap","line":3,"loc":{"start":{"line":3,"column":7},"end":{"line":3,"column":44}}},"2":{"name":"(anonymous_2)","line":8,"loc":{"start":{"line":8,"column":18},"end":{"line":8,"column":33}}},"3":{"name":"addApiRecord","line":14,"loc":{"start":{"line":14,"column":7},"end":{"line":14,"column":49}}},"4":{"name":"(anonymous_4)","line":25,"loc":{"start":{"line":25,"column":25},"end":{"line":25,"column":42}}},"5":{"name":"exec","line":30,"loc":{"start":{"line":30,"column":21},"end":{"line":30,"column":37}}},"6":{"name":"(anonymous_6)","line":31,"loc":{"start":{"line":31,"column":38},"end":{"line":31,"column":59}}},"7":{"name":"(anonymous_7)","line":32,"loc":{"start":{"line":32,"column":22},"end":{"line":32,"column":34}}},"8":{"name":"(anonymous_8)","line":35,"loc":{"start":{"line":35,"column":31},"end":{"line":35,"column":43}}},"9":{"name":"(anonymous_9)","line":38,"loc":{"start":{"line":38,"column":33},"end":{"line":38,"column":54}}},"10":{"name":"(anonymous_10)","line":39,"loc":{"start":{"line":39,"column":22},"end":{"line":39,"column":37}}},"11":{"name":"normalizeRecord","line":48,"loc":{"start":{"line":48,"column":7},"end":{"line":48,"column":50}}},"12":{"name":"(anonymous_12)","line":56,"loc":{"start":{"line":56,"column":22},"end":{"line":56,"column":34}}}},"statementMap":{"1":{"start":{"line":3,"column":7},"end":{"line":12,"column":1}},"2":{"start":{"line":4,"column":2},"end":{"line":5,"column":35}},"3":{"start":{"line":7,"column":2},"end":{"line":7,"column":18}},"4":{"start":{"line":8,"column":2},"end":{"line":10,"column":5}},"5":{"start":{"line":9,"column":4},"end":{"line":9,"column":91}},"6":{"start":{"line":11,"column":2},"end":{"line":11,"column":16}},"7":{"start":{"line":14,"column":7},"end":{"line":46,"column":1}},"8":{"start":{"line":15,"column":2},"end":{"line":15,"column":84}},"9":{"start":{"line":17,"column":2},"end":{"line":17,"column":42}},"10":{"start":{"line":19,"column":2},"end":{"line":19,"column":24}},"11":{"start":{"line":20,"column":2},"end":{"line":22,"column":35}},"12":{"start":{"line":24,"column":2},"end":{"line":29,"column":3}},"13":{"start":{"line":25,"column":4},"end":{"line":27,"column":7}},"14":{"start":{"line":26,"column":6},"end":{"line":26,"column":115}},"15":{"start":{"line":28,"column":4},"end":{"line":28,"column":11}},"16":{"start":{"line":30,"column":2},"end":{"line":45,"column":4}},"17":{"start":{"line":31,"column":4},"end":{"line":37,"column":7}},"18":{"start":{"line":32,"column":6},"end":{"line":34,"column":9}},"19":{"start":{"line":33,"column":8},"end":{"line":33,"column":30}},"20":{"start":{"line":36,"column":6},"end":{"line":36,"column":22}},"21":{"start":{"line":38,"column":4},"end":{"line":43,"column":17}},"22":{"start":{"line":39,"column":6},"end":{"line":42,"column":9}},"23":{"start":{"line":40,"column":8},"end":{"line":40,"column":23}},"24":{"start":{"line":41,"column":8},"end":{"line":41,"column":19}},"25":{"start":{"line":44,"column":4},"end":{"line":44,"column":20}},"26":{"start":{"line":48,"column":7},"end":{"line":66,"column":1}},"27":{"start":{"line":49,"column":2},"end":{"line":50,"column":36}},"28":{"start":{"line":52,"column":2},"end":{"line":61,"column":4}},"29":{"start":{"line":57,"column":6},"end":{"line":57,"column":75}},"30":{"start":{"line":62,"column":2},"end":{"line":64,"column":3}},"31":{"start":{"line":63,"column":4},"end":{"line":63,"column":61}},"32":{"start":{"line":65,"column":2},"end":{"line":65,"column":16}}},"branchMap":{"1":{"line":15,"type":"cond-expr","locations":[{"start":{"line":15,"column":66},"end":{"line":15,"column":78}},{"start":{"line":15,"column":81},"end":{"line":15,"column":83}}]},"2":{"line":15,"type":"binary-expr","locations":[{"start":{"line":15,"column":13},"end":{"line":15,"column":33}},{"start":{"line":15,"column":37},"end":{"line":15,"column":63}}]},"3":{"line":24,"type":"if","locations":[{"start":{"line":24,"column":2},"end":{"line":24,"column":2}},{"start":{"line":24,"column":2},"end":{"line":24,"column":2}}]},"4":{"line":54,"type":"binary-expr","locations":[{"start":{"line":54,"column":34},"end":{"line":54,"column":42}},{"start":{"line":54,"column":46},"end":{"line":54,"column":48}}]},"5":{"line":55,"type":"binary-expr","locations":[{"start":{"line":55,"column":36},"end":{"line":55,"column":50}},{"start":{"line":55,"column":54},"end":{"line":55,"column":56}}]},"6":{"line":56,"type":"binary-expr","locations":[{"start":{"line":56,"column":10},"end":{"line":56,"column":18}},{"start":{"line":56,"column":22},"end":{"line":58,"column":5}}]},"7":{"line":59,"type":"binary-expr","locations":[{"start":{"line":59,"column":34},"end":{"line":59,"column":47}},{"start":{"line":59,"column":51},"end":{"line":59,"column":53}}]},"8":{"line":60,"type":"binary-expr","locations":[{"start":{"line":60,"column":14},"end":{"line":60,"column":26}},{"start":{"line":60,"column":30},"end":{"line":60,"column":32}}]},"9":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":2},"end":{"line":62,"column":2}},{"start":{"line":62,"column":2},"end":{"line":62,"column":2}}]}}};
}
__cov_KylCAxvDwqmTUGCjptCXBg = __cov_KylCAxvDwqmTUGCjptCXBg['/home/fahreevr/Projects/rollup-starter-project/lib/create-api-map.js'];
function createApiMap(options,_ref){__cov_KylCAxvDwqmTUGCjptCXBg.f['1']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['2']++;var beforeHooks=_ref.beforeHooks,afterHooks=_ref.afterHooks;__cov_KylCAxvDwqmTUGCjptCXBg.s['3']++;var apiMap={};__cov_KylCAxvDwqmTUGCjptCXBg.s['4']++;options.forEach(function(api){__cov_KylCAxvDwqmTUGCjptCXBg.f['2']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['5']++;return addApiRecord(apiMap,api,{beforeHooks:beforeHooks,afterHooks:afterHooks});});__cov_KylCAxvDwqmTUGCjptCXBg.s['6']++;return apiMap;}function addApiRecord(apiMap,api,hooks){__cov_KylCAxvDwqmTUGCjptCXBg.f['3']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['8']++;var meta=(__cov_KylCAxvDwqmTUGCjptCXBg.b['2'][0]++,arguments.length>3)&&(__cov_KylCAxvDwqmTUGCjptCXBg.b['2'][1]++,arguments[3]!==undefined)?(__cov_KylCAxvDwqmTUGCjptCXBg.b['1'][0]++,arguments[3]):(__cov_KylCAxvDwqmTUGCjptCXBg.b['1'][1]++,{});__cov_KylCAxvDwqmTUGCjptCXBg.s['9']++;api=normalizeRecord(api,hooks,meta);__cov_KylCAxvDwqmTUGCjptCXBg.s['10']++;apiMap[api.name]={};__cov_KylCAxvDwqmTUGCjptCXBg.s['11']++;var _api=api,beforeHooks=_api.beforeHooks,afterHooks=_api.afterHooks;__cov_KylCAxvDwqmTUGCjptCXBg.s['12']++;if(api.children.length){__cov_KylCAxvDwqmTUGCjptCXBg.b['3'][0]++;__cov_KylCAxvDwqmTUGCjptCXBg.s['13']++;api.children.forEach(function(child){__cov_KylCAxvDwqmTUGCjptCXBg.f['4']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['14']++;return addApiRecord(apiMap[api.name],child,{beforeHooks:beforeHooks,afterHooks:afterHooks},api.meta);});__cov_KylCAxvDwqmTUGCjptCXBg.s['15']++;return;}else{__cov_KylCAxvDwqmTUGCjptCXBg.b['3'][1]++;}__cov_KylCAxvDwqmTUGCjptCXBg.s['16']++;apiMap[api.name]=function exec(){__cov_KylCAxvDwqmTUGCjptCXBg.f['5']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['17']++;var sequence=beforeHooks.reduce(function(seq,hook){__cov_KylCAxvDwqmTUGCjptCXBg.f['6']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['18']++;return seq.then(function(){__cov_KylCAxvDwqmTUGCjptCXBg.f['7']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['19']++;return hook(api.meta);});},Promise.resolve()).then(function(){__cov_KylCAxvDwqmTUGCjptCXBg.f['8']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['20']++;return api.exec;});__cov_KylCAxvDwqmTUGCjptCXBg.s['21']++;sequence=afterHooks.reduce(function(seq,hook){__cov_KylCAxvDwqmTUGCjptCXBg.f['9']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['22']++;return seq.then(function(res){__cov_KylCAxvDwqmTUGCjptCXBg.f['10']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['23']++;hook(api.meta);__cov_KylCAxvDwqmTUGCjptCXBg.s['24']++;return res;});},sequence);__cov_KylCAxvDwqmTUGCjptCXBg.s['25']++;return sequence;};}function normalizeRecord(api,_ref2,meta){__cov_KylCAxvDwqmTUGCjptCXBg.f['11']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['27']++;var beforeHooks=_ref2.beforeHooks,afterHooks=_ref2.afterHooks;__cov_KylCAxvDwqmTUGCjptCXBg.s['28']++;var record={name:api.name,meta:Object.assign({},meta,(__cov_KylCAxvDwqmTUGCjptCXBg.b['4'][0]++,api.meta)||(__cov_KylCAxvDwqmTUGCjptCXBg.b['4'][1]++,{})),beforeHooks:beforeHooks.concat((__cov_KylCAxvDwqmTUGCjptCXBg.b['5'][0]++,api.beforeHook)||(__cov_KylCAxvDwqmTUGCjptCXBg.b['5'][1]++,[])),exec:(__cov_KylCAxvDwqmTUGCjptCXBg.b['6'][0]++,api.exec)||(__cov_KylCAxvDwqmTUGCjptCXBg.b['6'][1]++,function(){__cov_KylCAxvDwqmTUGCjptCXBg.f['12']++;__cov_KylCAxvDwqmTUGCjptCXBg.s['29']++;return warn(false,'Empty exec function on '+api.name+' method');}),afterHooks:afterHooks.concat((__cov_KylCAxvDwqmTUGCjptCXBg.b['7'][0]++,api.afterHook)||(__cov_KylCAxvDwqmTUGCjptCXBg.b['7'][1]++,[])),children:(__cov_KylCAxvDwqmTUGCjptCXBg.b['8'][0]++,api.children)||(__cov_KylCAxvDwqmTUGCjptCXBg.b['8'][1]++,[])};__cov_KylCAxvDwqmTUGCjptCXBg.s['30']++;if(api.type){__cov_KylCAxvDwqmTUGCjptCXBg.b['9'][0]++;__cov_KylCAxvDwqmTUGCjptCXBg.s['31']++;record.children.push({name:api.type,exec:api.exec});}else{__cov_KylCAxvDwqmTUGCjptCXBg.b['9'][1]++;}__cov_KylCAxvDwqmTUGCjptCXBg.s['32']++;return record;}

var __cov_hgQvs7oKOZw9y2fAkRuLmA = (Function('return this'))();
if (!__cov_hgQvs7oKOZw9y2fAkRuLmA.__coverage__) { __cov_hgQvs7oKOZw9y2fAkRuLmA.__coverage__ = {}; }
__cov_hgQvs7oKOZw9y2fAkRuLmA = __cov_hgQvs7oKOZw9y2fAkRuLmA.__coverage__;
if (!(__cov_hgQvs7oKOZw9y2fAkRuLmA['/home/fahreevr/Projects/rollup-starter-project/lib/install.js'])) {
   __cov_hgQvs7oKOZw9y2fAkRuLmA['/home/fahreevr/Projects/rollup-starter-project/lib/install.js'] = {"path":"/home/fahreevr/Projects/rollup-starter-project/lib/install.js","s":{"1":1,"2":0,"3":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"install","line":1,"loc":{"start":{"line":1,"column":7},"end":{"line":1,"column":29}}},"2":{"name":"get","line":3,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":24}}}},"statementMap":{"1":{"start":{"line":1,"column":7},"end":{"line":7,"column":1}},"2":{"start":{"line":2,"column":2},"end":{"line":6,"column":5}},"3":{"start":{"line":4,"column":6},"end":{"line":4,"column":31}}},"branchMap":{}};
}
__cov_hgQvs7oKOZw9y2fAkRuLmA = __cov_hgQvs7oKOZw9y2fAkRuLmA['/home/fahreevr/Projects/rollup-starter-project/lib/install.js'];
function install$1(Vue){__cov_hgQvs7oKOZw9y2fAkRuLmA.f['1']++;__cov_hgQvs7oKOZw9y2fAkRuLmA.s['2']++;Object.defineProperty(Vue.prototype,'$api',{get:function get(){__cov_hgQvs7oKOZw9y2fAkRuLmA.f['2']++;__cov_hgQvs7oKOZw9y2fAkRuLmA.s['3']++;return this.$options.api;}});}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var __cov_yohbYAtiXBkW$mGlGaPS0A = (Function('return this'))();
if (!__cov_yohbYAtiXBkW$mGlGaPS0A.__coverage__) { __cov_yohbYAtiXBkW$mGlGaPS0A.__coverage__ = {}; }
__cov_yohbYAtiXBkW$mGlGaPS0A = __cov_yohbYAtiXBkW$mGlGaPS0A.__coverage__;
if (!(__cov_yohbYAtiXBkW$mGlGaPS0A['/home/fahreevr/Projects/rollup-starter-project/lib/index.js'])) {
   __cov_yohbYAtiXBkW$mGlGaPS0A['/home/fahreevr/Projects/rollup-starter-project/lib/index.js'] = {"path":"/home/fahreevr/Projects/rollup-starter-project/lib/index.js","s":{"1":0,"2":0,"3":0,"4":1,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":4,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":27}}},"2":{"name":"install","line":7,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":30}}},"3":{"name":"VueApify","line":12,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":29}}},"4":{"name":"create","line":22,"loc":{"start":{"line":22,"column":11},"end":{"line":22,"column":29}}},"5":{"name":"beforeEach","line":27,"loc":{"start":{"line":27,"column":11},"end":{"line":27,"column":35}}},"6":{"name":"afterEach","line":32,"loc":{"start":{"line":32,"column":11},"end":{"line":32,"column":34}}}},"statementMap":{"1":{"start":{"line":4,"column":0},"end":{"line":37,"column":4}},"2":{"start":{"line":5,"column":2},"end":{"line":10,"column":6}},"3":{"start":{"line":8,"column":6},"end":{"line":8,"column":17}},"4":{"start":{"line":12,"column":2},"end":{"line":18,"column":3}},"5":{"start":{"line":13,"column":4},"end":{"line":13,"column":48}},"6":{"start":{"line":15,"column":4},"end":{"line":15,"column":26}},"7":{"start":{"line":16,"column":4},"end":{"line":16,"column":25}},"8":{"start":{"line":17,"column":4},"end":{"line":17,"column":27}},"9":{"start":{"line":20,"column":2},"end":{"line":35,"column":6}},"10":{"start":{"line":23,"column":6},"end":{"line":23,"column":46}},"11":{"start":{"line":28,"column":6},"end":{"line":28,"column":32}},"12":{"start":{"line":33,"column":6},"end":{"line":33,"column":31}},"13":{"start":{"line":36,"column":2},"end":{"line":36,"column":18}}},"branchMap":{}};
}
__cov_yohbYAtiXBkW$mGlGaPS0A = __cov_yohbYAtiXBkW$mGlGaPS0A['/home/fahreevr/Projects/rollup-starter-project/lib/index.js'];
__cov_yohbYAtiXBkW$mGlGaPS0A.s['1']++;var VueApify=function(){__cov_yohbYAtiXBkW$mGlGaPS0A.f['1']++;__cov_yohbYAtiXBkW$mGlGaPS0A.s['2']++;createClass(VueApify,null,[{key:'install',value:function install(){__cov_yohbYAtiXBkW$mGlGaPS0A.f['2']++;__cov_yohbYAtiXBkW$mGlGaPS0A.s['3']++;install$1();}}]);function VueApify(options){__cov_yohbYAtiXBkW$mGlGaPS0A.f['3']++;__cov_yohbYAtiXBkW$mGlGaPS0A.s['5']++;classCallCheck(this,VueApify);__cov_yohbYAtiXBkW$mGlGaPS0A.s['6']++;this.beforeHooks=[];__cov_yohbYAtiXBkW$mGlGaPS0A.s['7']++;this.afterHooks=[];__cov_yohbYAtiXBkW$mGlGaPS0A.s['8']++;this.options=options;}__cov_yohbYAtiXBkW$mGlGaPS0A.s['9']++;createClass(VueApify,[{key:'create',value:function create(){__cov_yohbYAtiXBkW$mGlGaPS0A.f['4']++;__cov_yohbYAtiXBkW$mGlGaPS0A.s['10']++;return createApiMap(this.options,this);}},{key:'beforeEach',value:function beforeEach(fn){__cov_yohbYAtiXBkW$mGlGaPS0A.f['5']++;__cov_yohbYAtiXBkW$mGlGaPS0A.s['11']++;this.beforeHooks.push(fn);}},{key:'afterEach',value:function afterEach(fn){__cov_yohbYAtiXBkW$mGlGaPS0A.f['6']++;__cov_yohbYAtiXBkW$mGlGaPS0A.s['12']++;this.afterHooks.push(fn);}}]);__cov_yohbYAtiXBkW$mGlGaPS0A.s['13']++;return VueApify;}();

return VueApify;

})));
//# sourceMappingURL=vue-apify.js.map
