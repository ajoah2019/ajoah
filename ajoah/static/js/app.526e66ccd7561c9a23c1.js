webpackJsonp([1],{"0goD":function(t,e){},"4vjF":function(t,e){},KXzH:function(t,e,s){t.exports=s.p+"ajoah/static/img/toilet_low.cae8353.jpg"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("yviF");s("dih4"),s("881v");n.initializeApp({apiKey:"AIzaSyDD84-nLqygHpqVN7jlZOjgZ4one6TdyUc",authDomain:"ajoah-2121f.firebaseapp.com",databaseURL:"https://ajoah-2121f.firebaseio.com",projectId:"ajoah-2121f",storageBucket:"ajoah-2121f.appspot.com",messagingSenderId:"512593003059",appId:"1:512593003059:web:a253df39ea0bd93b585946"});var i=n.firestore(),o=s("kxiW"),r=s.n(o),l={name:"Navbar",data:function(){return{about_view:!1,user:null,toilet_nav_reserves:[]}},created:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){e?(t.user=e,console.log("this.user.name =>"+t.user.name),console.log("this.user.email =>"+t.user.email),console.log("this.user.uid =>"+t.user.uid),console.log("this.user.photoURL =>"+t.user.photoURL)):t.user=null})},methods:{showReserve:function(){var t=this;this.toilet_nav_reserves.splice(0),i.collection("reservation").get().then(function(e){e.forEach(function(e){var s=e.data();console.clear(),console.table(e.data()),t.toilet_nav_reserves.push(s)})})},SetPassword:function(){this.$router.push({path:"/setPassword"})},logout:function(){var t=this;r.a.auth().signOut().then(function(){t.$router.push({name:"Login"})})},showAbout:function(){this.about_view=!0},closeAbout:function(){this.about_view=!1}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"navbar-fixed"},[s("nav",{staticClass:"nav-wrapper indigo"},[s("div",{staticClass:"container"},[s("a",{staticClass:"brand-logo",attrs:{href:"#"}},[t._v("AJOAH~!")]),t._v(" "),t._m(0),t._v(" "),s("ul",{staticClass:"right hide-on-med-and-down"},[t.user?t._e():s("li",[s("router-link",{attrs:{to:{name:"Signup"}}},[t._v("Signup")])],1),t._v(" "),t.user?t._e():s("li",[s("router-link",{attrs:{to:{name:"Login"}}},[t._v("Login")])],1),t._v(" "),t.user?s("li",[s("a",[t._v(t._s(t.user.email))])]):t._e(),t._v(" "),t.user?s("li",[s("a",{on:{click:t.SetPassword}},[t._v("Set Password")])]):t._e(),t._v(" "),t.user?s("li",[s("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e(),t._v(" "),t.user?s("li",[s("a",{staticClass:"sidenav-close",on:{click:function(e){return t.showAbout()}}},[t._v("About")])]):t._e(),t._v(" "),t.user?t._e():s("li",[s("a",{staticClass:"sidenav-close",on:{click:function(e){return t.showAbout()}}},[t._v("About")])]),t._v(" "),t.user?s("li",[s("a",{attrs:{href:"https://t.me/ajoah_bot",target:"_blank"}},[t._v("텔레그램봇 바로가기")])]):t._e()])])])]),t._v(" "),s("ul",{staticClass:"sidenav",attrs:{id:"mobile-links"}},[t.user?t._e():s("li",{staticClass:"sidenav-close",on:{click:function(e){return t.closeAbout()}}},[s("router-link",{attrs:{to:{name:"Signup"}}},[t._v("Signup")])],1),t._v(" "),t.user?t._e():s("li",{staticClass:"sidenav-close",on:{click:function(e){return t.closeAbout()}}},[s("router-link",{attrs:{to:{name:"Login"}}},[t._v("Login")])],1),t._v(" "),t.user?s("li",{staticClass:"sidenav-close"},[s("a",[t._v(t._s(t.user.email))])]):t._e(),t._v(" "),t.user?s("li",{staticClass:"sidenav-close",on:{click:function(e){return t.closeAbout()}}},[s("router-link",{attrs:{to:{name:"Index"}}},[t._v("메인화면")])],1):t._e(),t._v(" "),t.user?s("li",{staticClass:"sidenav-close",on:{click:function(e){return t.closeAbout()}}},[s("router-link",{attrs:{to:{name:"SetPassword"}}},[t._v("Set Password")])],1):t._e(),t._v(" "),t.user?s("li",{staticClass:"sidenav-close"},[s("a",{on:{click:t.logout}},[t._v("Logout")])]):t._e(),t._v(" "),t.user?s("li",[s("a",{staticClass:"sidenav-close",on:{click:function(e){return t.showAbout()}}},[t._v("About")])]):t._e(),t._v(" "),t.user?t._e():s("li",[s("a",{staticClass:"sidenav-close",on:{click:function(e){return t.showAbout()}}},[t._v("About")])]),t._v(" "),t.user?s("li",[s("a",{attrs:{href:"https://t.me/ajoah_bot",target:"_blank"}},[t._v("텔레그램봇 바로가기")])]):t._e()]),t._v(" "),s("div",{staticClass:"modal bottom-sheet",attrs:{id:"view_nav_reservation"}},[s("ul",{staticClass:"collection with-header"},[t._m(1),t._v(" "),t._l(t.toilet_nav_reserves,function(e){return s("li",{key:e.id,staticClass:"collection-item avatar"},[(e.gender="M")?s("i",{staticClass:"material-icons circle blue"},[t._v("person")]):s("i",{staticClass:"material-icons circle pink"},[t._v("person")]),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(e.nickname))]),t._v(" "),s("p",{staticClass:"grey-text"},[t._v(t._s(e.resv_channel))]),t._v(" "),s("p",{staticClass:"grey-text"},[t._v(t._s(e.resv_dttm))])])})],2)]),t._v(" "),t.about_view?s("div",{staticClass:"card",attrs:{id:"about"}},[t._m(2),t._v(" "),s("div",{staticClass:"card-content"},[t._m(3),t._v(" "),s("p",[s("a",{staticClass:"right",on:{click:function(e){return t.closeAbout()}}},[t._v("닫기")])])]),t._v(" "),t._m(4)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"sidenav-trigger",attrs:{href:"#","data-target":"mobile-links"}},[e("i",{staticClass:"material-icons"},[this._v("menu")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Subscribers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-image waves-effect waves-block waves-light"},[e("img",{staticClass:"activator",attrs:{src:s("kl20")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"card-title activator grey-text text-darken-4"},[this._v("기관개발부 ETAX Unit"),e("i",{staticClass:"material-icons right"},[this._v("more_vert")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-reveal"},[e("span",{staticClass:"card-title grey-text text-darken-4"},[this._v("기관개발부 ETAX Unit"),e("i",{staticClass:"material-icons right"},[this._v("close")])]),this._v(" "),e("p",[this._v("기관개발부 송준수, 윤경민, 정종현이 만들었어요.")])])}]};var u={name:"App",props:["user"],components:{Navbar:s("VU/8")(l,c,!1,function(t){s("SIg0")},null,null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar",{attrs:{user:this.user}}),this._v(" "),e("router-view",{attrs:{user:this.user}})],1)},staticRenderFns:[]};var v=s("VU/8")(u,d,!1,function(t){s("xchW")},null,null).exports,h=s("/ocq"),_=(s("PJh5"),{name:"Index",props:["user"],data:function(){return{toilet_currents:[],toilet_reserves:[],toilet_selected_nm:"",toilet_selected_val:"",nickname:null,phone_num:null,feedback:null,showPreloader:!1,toilet_reserve_nickname:"",toilet_reserve_phone_no:"",toilet_reserve_seq:0}},created:function(){var t=this;i.collection("current").onSnapshot(function(e){e.docChanges().forEach(function(e){"modified"==e.type&&(console.table("Modified Toilet Detected: "),t.doJohoi())})})},mounted:function(){this.toilet_currents.splice(0);var t=document.getElementById("toilet_select"),e=t.options[t.selectedIndex].value,s=t.options[t.selectedIndex].text;this.toilet_selected_val=e,this.toilet_selected_nm=s,this.doJohoi()},methods:{onChange:function(t){this.showPreloader=!0,this.toilet_currents.splice(0);var e=document.getElementById("toilet_select"),s=e.options[e.selectedIndex].value,a=e.options[e.selectedIndex].text;this.toilet_selected_val=s,this.toilet_selected_nm=a,this.doJohoi()},doJohoi:function(){var t=this;this.toilet_currents.splice(0);var e=document.getElementById("toilet_select"),s=e.options[e.selectedIndex].value,a=e.options[e.selectedIndex].text;this.toilet_selected_val=s,this.toilet_selected_nm=a,i.collection("current").where("group","==",s).get().then(function(e){e.forEach(function(e){var s=e.data();t.toilet_currents.push(s)})}),this.showPreloader=!1,this.show=!0},showReserve:function(){var t=this;this.toilet_reserves.splice(0),i.collection("reservation").get().then(function(e){e.forEach(function(e){var s=e.data();console.clear(),console.table(e.data()),t.toilet_reserves.push(s)})})},DoReserve:function(){var t=this,e=(n.auth().currentUser,n.auth().currentUser.phoneNumber);console.log("phoneNumber = "+e),i.collection("users").doc(e).get().then(function(e){e.exists?(t.toilet_reserve_nickname=e.data().nickname,t.toilet_reserve_phone_no=e.data().sms_phone_number,console.log("toilet_reserve_nickname = "+t.toilet_reserve_nickname),console.log("toilet_reserve_phone_no = "+t.toilet_reserve_phone_no),i.collection("reservation").where("location","==",t.toilet_selected_val).get().then(function(e){t.toilet_reserve_seq=e.size+1,console.log("this.toilet_reserve_seq = "+t.toilet_reserve_seq),i.collection("reservation").add({nickname:t.toilet_reserve_nickname,phone_num:t.toilet_reserve_phone_no,resv_dttm:Date.now(),resv_channel:"MobileWeb",location:t.toilet_selected_val,seq:t.toilet_reserve_seq}).catch(function(t){console.log(t)}),M.toast({html:"예약 신청 되었습니다.",classes:"rounded"})})):alert("회원가입이 되어 있지 않습니다.")})}}});document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".fixed-action-btn");M.FloatingActionButton.init(t,{direction:"top"})});var p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("select",{attrs:{id:"toilet_select"},on:{change:function(e){return t.onChange(e)}}},[t._m(0),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("div",{staticClass:"card"},[t._m(3),t._v(" "),a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v(t._s(t.toilet_selected_nm))])])])])]),t._v(" "),a("div",{staticClass:"row"},[t.showPreloader?a("div",{staticClass:"col s12 center"},[t._m(4)]):t._e()]),t._v(" "),t._l(t.toilet_currents,function(e){return a("div",{key:e.id,staticClass:"row"},[a("div",{staticClass:"col s12 l6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[e.using?a("img",{attrs:{src:s("nDk+"),alt:""}}):a("img",{attrs:{src:s("KXzH"),alt:""}}),t._v(" "),e.using?a("a",{staticClass:"halfway-fab btn-floating red pulse",attrs:{href:""}},[a("i",{staticClass:"material-icons"},[t._v("clear")])]):a("a",{staticClass:"halfway-fab btn-floating yellow pulse",attrs:{href:""}},[a("i",{staticClass:"material-icons"},[t._v("sentiment_satisfied_alt")])])]),t._v(" "),a("div",{staticClass:"card-content"},[a("span",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),e.using?a("span",{staticClass:"badge white-text pink"},[t._v("사용중")]):a("span",{staticClass:"badge black-text yellow pulse"},[t._v("비었음")])])])])])})],2),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"reserveconfirm"}},[t._m(6),t._v(" "),a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"modal-close btn orange",attrs:{href:"#!"}},[t._v("취소")]),t._v(" "),a("a",{staticClass:"modal-close btn orange",on:{click:function(e){return t.DoReserve()}}},[t._v("확인")])])]),t._v(" "),a("div",{staticClass:"modal bottom-sheet",attrs:{id:"view_reservation"}},[a("ul",{staticClass:"collection with-header"},[t._m(7),t._v(" "),t._l(t.toilet_reserves,function(e){return a("li",{key:e.id,staticClass:"collection-item avatar"},[(e.gender="M")?a("i",{staticClass:"material-icons circle blue"},[t._v("person")]):a("i",{staticClass:"material-icons circle pink"},[t._v("person")]),t._v(" "),a("span",{staticClass:"title"},[t._v(t._s(e.nickname))]),t._v(" "),a("p",{staticClass:"grey-text"},[t._v(t._s(e.resv_channel))]),t._v(" "),a("p",{staticClass:"grey-text"},[t._v(t._s(e.resv_dttm))])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("optgroup",{attrs:{label:"연호빌딩 8층"}},[e("option",{attrs:{value:"Y8.M",selected:""}},[this._v("연호8층 남자")]),this._v(" "),e("option",{attrs:{value:"Y8.F"}},[this._v("연호8층 여자")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("optgroup",{attrs:{label:"연호빌딩 7층"}},[e("option",{attrs:{value:"Y7.M"}},[this._v("연호7층 남자")]),this._v(" "),e("option",{attrs:{value:"Y7.F"}},[this._v("연호7층 여자")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 l12"},[e("span",{staticClass:"card-title right"},[this._v("[변경사항은 실시간 업데이트 됩니다. - 테스트]")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-card-image"},[e("a",{staticClass:"btn-floating halfway-fab waves-effect waves-light teal modal-trigger",attrs:{href:"#reserveconfirm"}},[e("i",{staticClass:"material-icons"},[this._v("add")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preloader-wrapper big active center"},[e("div",{staticClass:"spinner-layer spinner-blue-only center"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"page-footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col l6 s12"},[e("h5",{staticClass:"white-text"},[this._v("Another Joy Of Ah~!")]),this._v(" "),e("p",{staticClass:"grey-text text-lighten-4"},[this._v("화장실을 스마트하게 사용해 보세요.")])])])]),this._v(" "),e("div",{staticClass:"footer-copyright"},[e("div",{staticClass:"container"},[this._v("\n          © 2019 Copyright Ajoah   \n           ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-content"},[e("h6",[this._v("화장실 예약하시겠습니까?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Subscribers")])])}]};var m=s("VU/8")(_,p,!1,function(t){s("qgO6")},null,null).exports,f=(s("wffv"),{name:"Signup",data:function(){return{email:null,password:null,alias:null,feedback:null,slug:null,phNo:"6505551234",appVerifier:"",otp:"",answer:"",nickname:"",vefication_code:!1}},methods:{signup:function(){var t=this,e=this,s="+1"+this.phNo,a=i.collection("users").doc(s);a.get().then(function(s){s.exists?alert(t.phNo+" 핸드폰번호로 이미 가입 되었습니다."):a.set({nickname:t.nickname,reg_datetime:Date.now(),sms_phone_number:t.phNo,sms_auth_number:t.otp,sms_auth_yn:"Y",sms_auth_datetime:Date.now()}).then(function(){console.log("Document successfully written!"),M.toast({html:"회원 가입 되었습니다.",classes:"rounded"}),e.$router.push({path:"/setPassword"})}).catch(function(t){console.error("Error writing document: ",t)})})},sendOtp:function(){if(this.phNo.length<10)alert("Invalid Phone Number Format !"+this.phNo.length);else{var t="+1"+this.phNo,e=this.appVerifier;n.auth().signInWithPhoneNumber(t,e).then(function(t){window.confirmationResult=t,this.vefication_code=!0}).catch(function(t){})}},verifyOtp:function(){this.otp;this.signup()},initReCaptcha:function(){var t=this;setTimeout(function(){window.recaptchaVerifier=new n.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:function(t){},"expired-callback":function(){}}),t.appVerifier=window.recaptchaVerifier},1e3)}},created:function(){this.initReCaptcha()}}),g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{attrs:{id:"recaptcha-container"}}),t._v(" "),s("form",{staticClass:"card-panel",on:{submit:function(e){return e.preventDefault(),t.verifyOtp(e)}}},[s("h3",{staticClass:"center deep-purple-text"},[t._v("Signup")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"field col s12"},[s("label",{attrs:{for:"icon_prefix"}},[t._v("이름(별명)")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],staticClass:"validate",attrs:{id:"icon_prefix",type:"text","data-length":"20"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}}),t._v(" "),s("span",{staticClass:"helper-text",attrs:{"data-error":"wrong","data-success":"right"}},[t._v("이름(별명)입력해 주세요")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"field col s12"},[s("label",{attrs:{for:"icon_prefix"}},[t._v("핸드폰번호")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phNo,expression:"phNo"}],staticClass:"validate",attrs:{id:"icon_prefix",type:"number","data-length":"20"},domProps:{value:t.phNo},on:{input:function(e){e.target.composing||(t.phNo=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field right"},[s("a",{staticClass:"waves-effect waves-teal btn-flat",on:{click:t.sendOtp}},[t._v("인증코드받기")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"field col s12"},[s("label",{attrs:{for:"otp"}},[t._v("인증코드")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.otp,expression:"otp"}],attrs:{id:"otp",type:"number",value:""},domProps:{value:t.otp},on:{input:function(e){e.target.composing||(t.otp=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col 12"},[s("div",{staticClass:"field left"},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{id:"answer",type:"text",value:""},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"answer"}},[this._v("가입질문 : AJOAH 만든이 3명의 중간글자를 입력하세요."),e("br"),this._v("(힌트 : 송*수, 윤*민, 정*현)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field center"},[e("button",{staticClass:"btn deep-purple"},[this._v("Signup")])])}]};var w=s("VU/8")(f,g,!1,function(t){s("4vjF")},null,null).exports,C={data:function(){return{password:"",password_2:""}},methods:{setPassword:function(){if(this.password!=this.password_2)alert("입력하신 비밀번호와 확인 비밀번호가 일치 하지 않습니다.");else if(this.password.length<6)alert("패스워드가 너무 짧습니다. 패스워드는 적어도 6자리 이상 입력해 주세요.");else{var t=this,e=n.auth().currentUser,s=n.auth().currentUser.phoneNumber+"@ajoah2019.com";console.log("newEmail"+s);var a=this.password;e.updateEmail(s).then(function(){e.updatePassword(a).then(function(){alert("패스워드 설정이 성공했습니다. 앞으로는 핸드폰번호와 설정하신 비밀번호로 로그인이 가능합니다."),t.$router.push("/")}).catch(function(t){alert("Error :"+t.message)})}).catch(function(e){"auth/requires-recent-login"==e.code&&(alert("세션이 만료 되었습니다. 재 접속해 주세요."),t.signout())})}},signout:function(){n.auth().signOut(),this.$router.push({path:"/"}),window.location.reload()}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup container"},[s("form",{staticClass:"card-panel",on:{submit:function(e){return e.preventDefault(),t.setPassword(e)}}},[s("h2",{staticClass:"center deep-purple-text"},[t._v("Set Password")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"field col s12"},[s("label",{attrs:{for:"password"}},[t._v("Enter Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"field col s12"},[s("label",{attrs:{for:"password_2"}},[t._v("Re-enter Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password_2,expression:"password_2"}],attrs:{id:"password_2",type:"password"},domProps:{value:t.password_2},on:{input:function(e){e.target.composing||(t.password_2=e.target.value)}}})])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field center"},[e("button",{staticClass:"btn deep-purple"},[this._v("Set Password")])])}]},b=s("VU/8")(C,j,!1,null,null,null).exports,k={data:function(){return{phNo:"6505551234",password:"123456"}},methods:{login:function(){var t=this,e="+1"+this.phNo+"@ajoah2019.com",s=this.password;n.auth().signInWithEmailAndPassword(e,s).then(function(){t.$router.push({path:"/main"})}).catch(function(t){t.code,t.message;for(var e=t.message.toLowerCase();-1!=e.indexOf("email");)e=e.replace("email address","phone number");alert("Error: "+e)})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup container"},[s("form",{staticClass:"card-panel",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("h3",{staticClass:"center deep-purple-text"},[t._v("AJOAH~ Login")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"field col s12"},[s("label",{attrs:{for:"phNo"}},[t._v("Enter Your HandPhone Number")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phNo,expression:"phNo"}],attrs:{id:"phNo",type:"number"},domProps:{value:t.phNo},on:{input:function(e){e.target.composing||(t.phNo=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"field col s12"},[s("label",{attrs:{for:"password"}},[t._v("Enter Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"field center"},[e("button",{staticClass:"btn deep-purple"},[this._v("Login")])])}]},y=s("VU/8")(k,x,!1,null,null,null).exports,E={name:"ViewProfile",data:function(){return{profile:null,newComment:null,feedback:null,comments:[]}},created:function(){var t=this,e=i.collection("users");e.where("user_id","==",firebase.auth().currentUser.uid).get().then(function(e){e.forEach(function(e){t.user=e.data(),t.user.id=e.id})}),e.doc(this.$route.params.id).get().then(function(e){t.profile=e.data()}),i.collection("comments").where("to","==",this.$route.params.id).orderBy("time").onSnapshot(function(e){e.docChanges.forEach(function(e){"added"==e.type&&t.comments.unshift({from:e.doc.data().from,content:e.doc.data().content})})})},methods:{addComment:function(){var t=this;this.newComment?(this.feedback=null,i.collection("comments").add({to:this.$route.params.id,from:this.user.id,content:this.newComment,time:Date.now()}).then(function(e){t.newComment=null})):this.feedback="You must enter a comment to add it"}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-profile container"},[t.profile?s("div",{staticClass:"card"},[s("h2",{staticClass:"deep-purple-text center"},[t._v(t._s(t.profile.alias)+"'s Wall")]),t._v(" "),s("ul",{staticClass:"comments collection"},t._l(t.comments,function(e,a){return s("li",{key:a},[s("div",{staticClass:"deep-purple-text"},[t._v(t._s(e.from))]),t._v(" "),s("div",{staticClass:"grey-text text-darken-2"},[t._v(t._s(e.content))])])}),0),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"comment"}},[t._v("Add a comment")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment,expression:"newComment"}],attrs:{type:"text",name:"comment"},domProps:{value:t.newComment},on:{input:function(e){e.target.composing||(t.newComment=e.target.value)}}}),t._v(" "),t.feedback?s("p",{staticClass:"red-text center"},[t._v(t._s(t.feedback))]):t._e()])])]):t._e()])},staticRenderFns:[]};var P=s("VU/8")(E,N,!1,function(t){s("0goD")},null,null).exports;a.a.use(h.a);var z=new h.a({routes:[{path:"/",name:"Login",component:y},{path:"/signup",name:"Signup",component:w},{path:"/main",name:"Index",component:m},{path:"/setPassword",name:"SetPassword",component:b},{path:"/login",name:"Login",component:y},{path:"/profile/:id",name:"ViewProfile",component:P}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:z,components:{App:v},template:'<App :user="user" ></App>',data:function(){return{user:{}}},methods:{getLoginStatus:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){e?(t.user=e,console.log("// User is signed in by Phone Number : ",e.phoneNumber)):(t.user=null,console.log("// No user is signed in."))})}},updated:function(){this.getLoginStatus()},created:function(){this.getLoginStatus()}})},SIg0:function(t,e){},kl20:function(t,e,s){t.exports=s.p+"ajoah/static/img/about_low.1add417.jpg"},"nDk+":function(t,e,s){t.exports=s.p+"ajoah/static/img/toilet_ing_6_low.abe5cb8.jpg"},qgO6:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},xchW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.526e66ccd7561c9a23c1.js.map