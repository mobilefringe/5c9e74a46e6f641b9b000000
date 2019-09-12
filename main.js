var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};require.config({paths:{Vue:"https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue",vue_router:"https://cdnjs.cloudflare.com/ajax/libs/vue-router/2.7.0/vue-router.min",axios:"https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.1/axios.min",jquery:"https://code.jquery.com/jquery-3.2.1.min",lodash:"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min",moment:"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min","moment-timezone":"https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.14/moment-timezone-with-data-2012-2022.min","vue-moment":"https://mmvue.codecloudapp.com/vue-moment","vue2-filters":"https://cdn.jsdelivr.net/vue2-filters/0.1.8/vue2-filters.min",vue:"https://mmvue.codecloudapp.com/require-vuejs.min",vuex:"https://cdnjs.cloudflare.com/ajax/libs/vuex/2.3.1/vuex.min","vue-i18n":"https://cdnjs.cloudflare.com/ajax/libs/vue-i18n/6.1.1/vue-i18n.min",text:"https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",json:"https://unpkg.com/requirejs-plugins-current@1.0.3/src/json","js-cookie":"https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min","vue-meta":"https://unpkg.com/vue-meta@1.0.4/lib/vue-meta.min",Fuse:"https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.0.4/fuse.min",datastore_mutation_types:"https://mmvue.codecloudapp.com/datastore_mutation_types",datastore_getters:"https://mmvue.codecloudapp.com/datastore_getters",datastore_actions:"https://mmvue.codecloudapp.com/datastore_actions_test",datastore_mutations:"https://mmvue.codecloudapp.com/datastore_mutations",datastore:"https://mmvue.codecloudapp.com/datastore","vuex-router-sync":"https://mmvue.codecloudapp.com/vuex-router-sync","vue-simple-spinner":"https://cdn.jsdelivr.net/npm/vue-simple-spinner@1.2.8/dist/vue-simple-spinner.min","vue-breadcrumbs":"https://cdn.jsdelivr.net/npm/vue-breadcrumbs@1.1.2/dist/vue-breadcrumbs.min",today_hours:"https://mmvue.codecloudapp.com/today_hours.vue?noext","search-component":"https://mmvue.codecloudapp.com/search-component.vue?noext",slick:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min","vue-slick":"https://mmvue.codecloudapp.com/slick.vue?noext","vue-social-sharing":"https://cdn.jsdelivr.net/npm/vue-social-sharing@2.3.3/dist/vue-social-sharing.min",lightbox:"https://codecloud.cdn.speedyrails.net/sites/5b1550796e6f641cab010000/application/javascript/1530111447000/lightbox_accessibility","vue-lazy-load":"https://unpkg.com/vue-lazyload/vue-lazyload","vee-validate":"https://cdn.jsdelivr.net/npm/vee-validate@2.1.4/dist/vee-validate","vue-select":"https://cdn.jsdelivr.net/npm/vue-select@2.3.0/dist/vue-select.min","bootstrap-vue":"https://codecloud.cdn.speedyrails.net/sites/59347e776e6f64538f150000/text/javascript/1554736414383/bootstrap-vue",masonry:"https://cdnjs.cloudflare.com/ajax/libs/masonry/4.0.0/masonry.pkgd.min","vue-masonry-plugin":"https://cdn.jsdelivr.net/npm/vue-masonry@0.10.16/dist/vue-masonry-plugin",mousewheel:"https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min",mapplic:"https://mmvue.codecloudapp.com/mapplic",hammer:"https://codecloud.cdn.speedyrails.net/sites/59bac7db6e6f644f22ba0000/text/javascript/1484859750000/hammer.min","mapplic-png-map":"https://mmvue.codecloudapp.com/mapplic_png.vue?noext",loader:"https://mmvue.codecloudapp.com/loader.vue?noext","google-map-api":"https://maps.googleapis.com/maps/api/js?key=AIzaSyCukCjH3fsuDYBdI44hZKL43m60jEToJjY",google_map:"https://mmvue.codecloudapp.com/google_map.vue?noext"}}),require(["Vue","vuex","vue2-filters","vue_router","routes","vuex-router-sync","datastore","vue-i18n","locales","moment","vue-meta","vue-breadcrumbs","vue!loading.vue","vue!messages.vue","vue!header.vue","vue!footer.vue","vue!inside_header.vue","vue!breadcrumb.vue"],function(e,t,s,a,o,n,r,c,m,u,i,l){e.use(i),e.use(a),e.use(s),e.use(c),e.use(l);var p=new a({mode:"history",routes:o,scrollBehavior:function(){return{x:0,y:0}}}),d=new c({locale:"en-ca",fallbackLocale:"en-ca",messages:m});n.sync(r,p);new e({el:"#app",data:function(){return{breadcrumb:this.$breadcrumbs,menu_items:[{name:"Directory",id:"menu1",href:"#",sub_menu:[{name:"Directory",href:"/stores"},{name:"Dining",href:"/dine"}]},{name:"Center Map",href:"/map"},{name:"Events & Promotions",href:"/events-and-promotions"},{name:"Location",href:"/location"},{name:"Center Information",id:"menu2",href:"#",sub_menu:[{name:"Contact Us",href:"/contact-us"},{name:"Jobs",href:"/jobs"},{name:"Leasing",href:"/leasing"},{name:"Newsletter Sign Up",href:"/newsletter"}]}],social_media:[{name:"Facebook",url:"https://www.facebook.com/miramesamarket/",iconClass:"fab fa-facebook"},{name:"Instagram",url:"https://www.instagram.com/miramesamarket/",iconClass:"fab fa-instagram"}]}},created:function(){var e=this;this.loadData().then(function(){e.$store.dispatch("setDataLoaded",!0)})},watch:{locale:function(e){this.$i18n.locale=e,u.locale(e)}},computed:_extends({locale:{get:function(){return this.$store.state.locale},set:function(e){this.$store.commit("SET_LOCALE",{lang:e})}}},t.mapGetters(["dataLoaded","property"])),methods:{loadData:function(){var e;return regeneratorRuntime.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("initializeApi",{site:"miramesa",version:"v4"}));case 3:return t.next=5,regeneratorRuntime.awrap(Promise.all([this.$store.dispatch("getData","property")]));case 5:return this.property.mm_host=this.property.mm_host.replace("http:",""),t.next=8,regeneratorRuntime.awrap(Promise.all([this.$store.dispatch("INITIALIZE_LOCALE"),this.$store.dispatch("getData","hours"),this.$store.dispatch("getData","stores"),this.$store.dispatch("getData","repos")]));case 8:return e=t.sent,t.abrupt("return",e);case 12:t.prev=12,t.t0=t["catch"](0),console.log("Error loading data: "+t.t0.message);case 15:case"end":return t.stop()}},null,this,[[0,12]])},changeLocale:function(e){this.locale=e}},router:p,store:r,i18n:d})});