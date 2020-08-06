!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=e=>{let t=e.title,n=e.description,s=e.dueDate,i=e.priority,d=e.note,o=!1;return{getTitle:()=>t,getDescription:()=>n,getDueDate:()=>s,getPriority:()=>i,getNote:()=>d,editTitle:e=>{t=e},editDescription:e=>{n=e},editDueDate:e=>{s=e},editPriority:e=>{i=e},editNote:e=>{d=e},toggleFinished:()=>{o=!o},isFinished:()=>o,title:t,description:n,dueDate:s,priority:i,note:d,finished:o}},i=(e,t)=>{let n,s=e;n=void 0!==t?[...t]:[];return{getName:function(){return s},editName:function(e){return s=e},getItems:()=>n,getItemsNumber:()=>n.length,addItem:e=>{n.unshift(e)},removeItem:e=>{const t=n.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());n.splice(t,1)},name:s,items:n}};let d={title:"Zvezda",description:"opis",dueDate:"datum",priority:"hitno",note:"nesto"},o={title:"Stefan",description:"Nesto",dueDate:"datum",priority:"dsa61161d",note:"daaaa"};const a=(()=>{let e=i("Personal"),t=i("Work"),n=i("Grocery store"),a=s(d),r=s(o),l=s(d);e.addItem(a),e.addItem(r),t.addItem(l),t.addItem(r),n.addItem(r),n.addItem(a);let c=[e,t,n];const u=()=>{let e=localStorage.getItem("lists"),t=JSON.parse(e);return c.length=0,t.forEach(e=>{c.push(i(e.name,e.items))}),c};return{getLists:u,addList:e=>{c=u(),c.push(e),localStorage.setItem("lists",JSON.stringify(c))},removeList:e=>{c=u();const t=c.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());c.splice(t,1),localStorage.setItem("lists",JSON.stringify(c))},getList:function(e){return c=u(),c.find(t=>t.getName().toLowerCase()===e.toLowerCase())},setListsToStorage:function(){c=u(),localStorage.setItem("lists",JSON.stringify(c))},lists:c}})(),r={addTask:function(e){e.preventDefault();const t=document.querySelector("#title"),n=document.querySelector("#listSelect"),i=document.querySelector("#description"),d=document.querySelector("#dueDate"),o=document.querySelector("#priority"),r=document.querySelector("#note"),c=document.querySelector("#addTask"),m={title:t.value,description:i.value,dueDate:d.value,priotity:o.value,note:r.value};if(c.classList.contains("enabled")&&null==n){const e=s(m),t=u.getCurrentList();t.addItem(e),localStorage.setItem("lists",JSON.stringify(a.lists)),h.renderLists(),h.renderShortcuts(),l.exitModalOnButton(),u.renderListTasks(void 0,t.getName())}else if(c.classList.contains("enabled")&&null!==n)if(""!==n.value){const e=s(m),t=a.getList(n.value);t.addItem(e),localStorage.setItem("lists",JSON.stringify(a.lists)),h.renderLists(),h.renderShortcuts(),l.exitModalOnButton(),u.renderListTasks(void 0,t.getName())}else n.style.backgroundColor="rgba(156, 54, 54, 0.4)";else t.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},l=(()=>{const e=document.querySelector("#tasksContainer");document.querySelector(".taskItem");let t;function n(e){e.target===this&&t.parentNode.removeChild(t)}function s(e){const t=document.querySelector("#title"),n=document.querySelector("#addTask");t.style="",""!==t.value?n.classList.add("enabled"):n.classList.remove("enabled")}return{showModal:function(i){t=document.createElement("div"),t.classList.add("modalBg");const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)";const o=document.createElement("form");o.setAttribute("autocomplete","off");const l=document.createElement("input");let c;if(l.addEventListener("change",s),l.addEventListener("keyup",s),l.addEventListener("keydown",s),setTimeout((function(){l.focus()}),500),l.setAttribute("type","text"),l.setAttribute("id","title"),l.setAttribute("size","20"),l.setAttribute("placeholder","Task name"),l.setAttribute("maxlength","50"),"menuAddTask"===this.getAttribute("id")){c=document.createElement("select"),c.setAttribute("id","listSelect");const e=document.createElement("option");e.setAttribute("selected","selected"),e.setAttribute("hidden","hidden"),e.setAttribute("disabled","disabled"),e.setAttribute("value",""),e.textContent="Choose list:",c.appendChild(e);a.getLists().forEach(e=>{const t=document.createElement("option");t.setAttribute("value",e.getName()),t.textContent=e.getName(),c.appendChild(t)}),d.style.height="60rem",c.addEventListener("click",(function(){c.style=""})),c.addEventListener("mousedown",(function(){c.style=""}))}const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","description"),u.setAttribute("size","20"),u.setAttribute("placeholder","Description");const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","dueDate"),m.setAttribute("name","dueDate");const p=document.createElement("select");p.setAttribute("id","priority");const h=document.createElement("option");h.setAttribute("selected","selected"),h.setAttribute("hidden","hidden"),h.setAttribute("disabled","disabled"),h.setAttribute("value",""),h.textContent="Priority";const L=document.createElement("option");L.setAttribute("value","low"),L.textContent="Low";const g=document.createElement("option");g.setAttribute("value","medium"),g.textContent="Medium";const f=document.createElement("option");f.setAttribute("value","high"),f.textContent="High";const y=document.createElement("option");y.setAttribute("value","urgent"),y.textContent="Urgent",p.appendChild(h),p.appendChild(L),p.appendChild(g),p.appendChild(f),p.appendChild(y);const b=document.createElement("textarea");b.setAttribute("id","note"),b.setAttribute("cols","20"),b.setAttribute("rows","5"),b.setAttribute("placeHolder","Note");const v=document.createElement("button");v.setAttribute("id","addTask"),v.textContent="Add task",v.addEventListener("click",r.addTask),o.appendChild(l),"menuAddTask"===this.getAttribute("id")&&o.appendChild(c),o.appendChild(u),o.appendChild(m),o.appendChild(p),o.appendChild(b),o.appendChild(v),d.appendChild(o),t.addEventListener("click",n),t.appendChild(d),e.appendChild(t)},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),c={addTask:function(){const e={title:this.parentNode.querySelector(".quickTaskInput").value,description:"",dueDate:"",priotity:"",note:""};if(this.classList.contains("enabled")){const t=s(e),n=u.getCurrentList();n.addItem(t),localStorage.setItem("lists",JSON.stringify(a.lists)),h.renderLists(),h.renderShortcuts(),u.renderListTasks(void 0,n.getName())}},addTaskOnEnter:function(e){const t={title:e.value,description:"",dueDate:"",priotity:"",note:""},n=s(t),i=u.getCurrentList();i.addItem(n),localStorage.setItem("lists",JSON.stringify(a.lists)),h.renderLists(),h.renderShortcuts(),u.renderListTasks(void 0,i.getName())}},u=(()=>{const e=document.querySelector("#tasks");let t;const n=()=>{let e=tasks.lastChild;for(;e;)tasks.removeChild(e),e=tasks.lastChild};function s(e){const t=this,n=this.parentNode.querySelector(".up");""!==t.value?(n.classList.add("enabled"),t.classList.add("enabled"),"Enter"===e.key&&c.addTaskOnEnter(t)):(n.classList.remove("enabled"),t.classList.remove("enabled"))}return{renderListTasks:function(i,d){let o;n(),"LI"===this.tagName&&(this.parentNode.querySelectorAll("li").forEach(e=>{e.classList.remove("active")}),this.classList.add("active")),o=void 0!==i?this.firstChild.textContent:d;const r=document.createElement("div");r.classList.add("listItem");const u=document.createElement("div");u.classList.add("listHeader");const m=document.createElement("h2");m.textContent=o,u.appendChild(m);const p=document.createElement("span");p.classList.add("add"),p.addEventListener("click",l.showModal);const h=document.createElement("i");h.classList.add("fas"),h.classList.add("fa-plus-circle"),p.appendChild(h),u.appendChild(p),r.appendChild(u);const L=a.getList(o).getItems(),g=document.createElement("div");g.classList.add("listTasks"),L.forEach(e=>{const t=document.createElement("div");t.classList.add("taskDiv");const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",e.title),n.setAttribute("value",e.title),n.classList.add("checkbox");const s=document.createElement("p");s.innerText=e.title,t.append(n),t.appendChild(s),g.appendChild(t)}),r.appendChild(g);const f=document.createElement("div");f.classList.add("quickTask");const y=document.createElement("input");y.classList.add("quickTaskInput"),y.setAttribute("type","text"),y.setAttribute("maxlength","50"),y.setAttribute("placeholder","Click to quickly add task"),y.addEventListener("change",s),y.addEventListener("keydown",s),y.addEventListener("keyup",s);const b=document.createElement("span"),v=document.createElement("i");v.classList.add("fas"),v.classList.add("fa-arrow-circle-up"),b.appendChild(v),b.classList.add("up"),b.addEventListener("click",c.addTask),f.appendChild(y),f.appendChild(b),r.appendChild(f),e.appendChild(r),t=a.getList(o)},getCurrentList:()=>t}})(),m={addList:function(e){event.preventDefault();const t=e.value;if(document.querySelector("#createList").classList.contains("enabled")){const e=i(t,[]);a.addList(e),h.renderLists(),h.renderShortcuts(),p.exitModalOnButton()}else e.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},p=(()=>{const e=document.querySelector("#tasksContainer");let t;function n(e){const t=this,n=document.querySelector("#createList");t.style.backgroundColor="",""!==t.value?(n.classList.add("enabled"),"Enter"===e.key&&m.addList(t)):n.classList.remove("enabled")}function s(e){e.target===this&&t.parentNode.removeChild(t)}function i(){t.parentNode.removeChild(t)}return{showModal:function(){t=document.createElement("div"),t.classList.add("modalBg"),t.addEventListener("click",s);const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)",d.style.width="40rem",d.style.height="15rem";const o=document.createElement("form");o.setAttribute("autocomplete","off"),o.style.width="95%",o.setAttribute("onkeydown","return event.key != 'Enter';");const a=document.createElement("input");a.addEventListener("change",n),a.addEventListener("keydown",n),a.addEventListener("keyup",n),a.addEventListener("mousedown",n),a.setAttribute("type","text"),a.setAttribute("id","title"),a.setAttribute("size","20"),a.setAttribute("placeholder","List name"),a.setAttribute("maxlength","23"),a.style.width="100%",a.style.margin="0",setTimeout((function(){a.focus()}),500);const r=document.createElement("div");r.setAttribute("id","modalButtons");const l=document.createElement("button");l.textContent="Cancel",l.setAttribute("id","cancel"),l.addEventListener("click",i);const c=document.createElement("button");c.textContent="Create",c.setAttribute("id","createList"),c.addEventListener("click",(function(){m.addList(a)})),r.appendChild(l),r.appendChild(c),o.appendChild(a),d.appendChild(o),d.appendChild(r),t.appendChild(d),e.appendChild(t)},exitModalOnButton:i}})(),h=(()=>{function e(){const e=document.querySelector("#listsList"),t=document.querySelector("#shortcutsList"),n=document.querySelector("#icons");"lists"==this.getAttribute("id")?(e.classList.toggle("hide"),e.classList.contains("hide")?setTimeout((function(){e.style.display="none"}),500):e.style.display="block",n.classList.toggle("hide")):"shortcuts"==this.getAttribute("id")&&(t.classList.toggle("hide"),t.classList.contains("hide")?setTimeout((function(){t.style.display="none"}),500):t.style.display="block"),this.firstChild.classList.toggle("fa-chevron-down"),this.firstChild.classList.toggle("fa-chevron-up")}function t(e){e.querySelectorAll("li").forEach(e=>{e.parentNode.removeChild(e)})}return document.querySelectorAll(".arrow").forEach(t=>{t.addEventListener("click",e)}),document.querySelector("#menuAddTask").addEventListener("click",l.showModal),document.querySelector("#menuBars").addEventListener("click",(function(){const e=document.querySelector("#menu");e.classList.toggle("hide"),e.querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notHide")?e.classList.toggle("minimize"):e.classList.toggle("hide"),"add"==e.getAttribute("id")&&e.classList.contains("minimize")?e.querySelector("button").innerHTML='<i class="fas fa-plus"></i>':"add"!=e.getAttribute("id")||e.classList.contains("minimize")||(e.querySelector("button").innerHTML='<i class="fas fa-plus"></i> Create a task')})})),document.querySelector("#addList").addEventListener("click",p.showModal),document.querySelector("#edit").addEventListener("click",(function(){const e=document.querySelector("#listsList").querySelectorAll("li");document.querySelector("#menu").querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notOverlay")||e.classList.toggle("overlayed")}),e.forEach(e=>{if(e.classList.toggle("editable"),e.classList.contains("editable")){e.removeChild(e.lastChild);const t=document.createElement("i");t.classList.add("fas"),t.classList.add("fa-bars"),t.classList.add("dragIcon"),e.insertBefore(t,e.firstChild);const n=document.createElement("img");n.setAttribute("src","./images/edit.svg"),n.classList.add("editIcon"),e.appendChild(n),e.removeEventListener("click",u.renderListTasks)}else{e.removeChild(e.firstChild),e.removeChild(e.lastChild);const t=document.createElement("span");t.classList.add("taskNumber"),t.textContent=""+a.getList(e.textContent).items.length,e.appendChild(t),e.addEventListener("click",u.renderListTasks)}})})),{renderLists:()=>{const e=document.querySelector("#listsList");let n=a.getLists();t(e),n.forEach(t=>{const n=document.createElement("li");n.setAttribute("id",t.getName().replace(" ","").toLowerCase()),n.textContent=t.getName();const s=document.createElement("span");s.classList.add("taskNumber"),s.textContent=""+t.getItems().length,n.appendChild(s),e.appendChild(n),n.addEventListener("click",u.renderListTasks)})},renderShortcuts:()=>{const e=document.createElement("li");e.textContent="Today",e.setAttribute("id","today");const n=document.createElement("li");n.textContent="Next 7 days",n.setAttribute("id","sevenDays");const s=document.createElement("li");s.textContent="All tasks",s.setAttribute("id","allTasks");const i=document.querySelector("#shortcutsList");t(i),i.appendChild(e),i.appendChild(n),i.appendChild(s)}}})();window.onload=(a.setListsToStorage(),h.renderLists(),void h.renderShortcuts())}]);