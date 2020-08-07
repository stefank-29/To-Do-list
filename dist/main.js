!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=e=>{let t=e.title,n=e.description,s=e.dueDate,i=e.priority,d=e.note,o=!1;return{getTitle:()=>t,getDescription:()=>n,getDueDate:()=>s,getPriority:()=>i,getNote:()=>d,editTitle:e=>{t=e},editDescription:e=>{n=e},editDueDate:e=>{s=e},editPriority:e=>{i=e},editNote:e=>{d=e},toggleFinished:()=>{o=!o},isFinished:()=>o,title:t,description:n,dueDate:s,priority:i,note:d,finished:o}},i=(e,t)=>{let n,s=e;n=void 0!==t?[...t]:[];return{getName:function(){return s},editName:function(e){s=e},getItems:()=>n,getItemsNumber:()=>n.length,addItem:e=>{n.unshift(e)},removeItem:e=>{const t=n.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());n.splice(t,1)},name:s,items:n}};let d={title:"Zvezda",description:"opis",dueDate:"datum",priority:"hitno",note:"nesto"},o={title:"Stefan",description:"Nesto",dueDate:"datum",priority:"dsa61161d",note:"daaaa"};const a=(()=>{let e=i("Personal"),t=i("Work"),n=i("Grocery store"),a=s(d),r=s(o),l=s(d);e.addItem(a),e.addItem(r),t.addItem(l),t.addItem(r),n.addItem(r),n.addItem(a);let c=[e,t,n];const u=()=>{let e=localStorage.getItem("lists"),t=JSON.parse(e);return c.length=0,t.forEach(e=>{c.push(i(e.name,e.items))}),c};return{getLists:u,addList:e=>{c=u(),c.push(e),localStorage.setItem("lists",JSON.stringify(c))},removeList:e=>{c=u();const t=c.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());c.splice(t,1),localStorage.setItem("lists",JSON.stringify(c))},getList:function(e){return c.find(t=>t.getName().toLowerCase()===e.toLowerCase())},setListsToStorage:function(){c=u(),localStorage.setItem("lists",JSON.stringify(c))},getListIndex:function(e){return c.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase())},lists:c}})(),r={addTask:function(e){e.preventDefault();const t=document.querySelector("#title"),n=document.querySelector("#listSelect"),i=document.querySelector("#description"),d=document.querySelector("#dueDate"),o=document.querySelector("#priority"),r=document.querySelector("#note"),c=document.querySelector("#addTask"),m={title:t.value,description:i.value,dueDate:d.value,priotity:o.value,note:r.value};if(c.classList.contains("enabled")&&null==n){const e=s(m);console.log(e);const t=u.getCurrentList();console.log(t),t.addItem(e),localStorage.setItem("lists",JSON.stringify(a.lists)),v.renderLists(),v.renderShortcuts(),l.exitModalOnButton(),u.renderListTasks(void 0,t.getName())}else if(c.classList.contains("enabled")&&null!==n)if(""!==n.value){const e=s(m),t=a.getList(n.value);t.addItem(e),localStorage.setItem("lists",JSON.stringify(a.lists)),v.renderLists(),v.renderShortcuts(),l.exitModalOnButton(),u.renderListTasks(void 0,t.getName())}else n.style.backgroundColor="rgba(156, 54, 54, 0.4)";else t.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},l=(()=>{const e=document.querySelector("#tasksContainer");document.querySelector(".taskItem");let t;function n(e){e.target===this&&t.parentNode.removeChild(t)}function s(e){const t=document.querySelector("#title"),n=document.querySelector("#addTask");t.style="",""!==t.value?n.classList.add("enabled"):n.classList.remove("enabled")}return{showModal:function(i){t=document.createElement("div"),t.classList.add("modalBg");const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)";const o=document.createElement("form");o.setAttribute("autocomplete","off");const l=document.createElement("input");let c;if(l.addEventListener("change",s),l.addEventListener("keyup",s),l.addEventListener("keydown",s),setTimeout((function(){l.focus()}),500),l.setAttribute("type","text"),l.setAttribute("id","title"),l.setAttribute("size","20"),l.setAttribute("placeholder","Task name"),l.setAttribute("maxlength","50"),"menuAddTask"===this.getAttribute("id")){c=document.createElement("select"),c.setAttribute("id","listSelect");const e=document.createElement("option");e.setAttribute("selected","selected"),e.setAttribute("hidden","hidden"),e.setAttribute("disabled","disabled"),e.setAttribute("value",""),e.textContent="Choose list:",c.appendChild(e);a.getLists().forEach(e=>{const t=document.createElement("option");t.setAttribute("value",e.getName()),t.textContent=e.getName(),c.appendChild(t)}),d.style.height="60rem",c.addEventListener("click",(function(){c.style=""})),c.addEventListener("mousedown",(function(){c.style=""}))}const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","description"),u.setAttribute("size","20"),u.setAttribute("placeholder","Description");const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","dueDate"),m.setAttribute("name","dueDate");const p=document.createElement("select");p.setAttribute("id","priority");const h=document.createElement("option");h.setAttribute("selected","selected"),h.setAttribute("hidden","hidden"),h.setAttribute("disabled","disabled"),h.setAttribute("value",""),h.textContent="Priority";const L=document.createElement("option");L.setAttribute("value","low"),L.textContent="Low";const v=document.createElement("option");v.setAttribute("value","medium"),v.textContent="Medium";const f=document.createElement("option");f.setAttribute("value","high"),f.textContent="High";const g=document.createElement("option");g.setAttribute("value","urgent"),g.textContent="Urgent",p.appendChild(h),p.appendChild(L),p.appendChild(v),p.appendChild(f),p.appendChild(g);const b=document.createElement("textarea");b.setAttribute("id","note"),b.setAttribute("cols","20"),b.setAttribute("rows","5"),b.setAttribute("placeHolder","Note");const y=document.createElement("button");y.setAttribute("id","addTask"),y.textContent="Add task",y.addEventListener("click",r.addTask),o.appendChild(l),"menuAddTask"===this.getAttribute("id")&&o.appendChild(c),o.appendChild(u),o.appendChild(m),o.appendChild(p),o.appendChild(b),o.appendChild(y),d.appendChild(o),t.addEventListener("click",n),t.appendChild(d),e.appendChild(t)},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),c={addTask:function(){const e={title:this.parentNode.querySelector(".quickTaskInput").value,description:"",dueDate:"",priotity:"",note:""};if(this.classList.contains("enabled")){const t=s(e),n=u.getCurrentList();n.addItem(t),localStorage.setItem("lists",JSON.stringify(a.lists)),v.renderLists(),v.renderShortcuts(),u.renderListTasks(void 0,n.getName())}},addTaskOnEnter:function(e){const t={title:e.value,description:"",dueDate:"",priotity:"",note:""},n=s(t),i=u.getCurrentList();i.addItem(n),localStorage.setItem("lists",JSON.stringify(a.lists)),v.renderLists(),v.renderShortcuts(),u.renderListTasks(void 0,i.getName())}},u=(()=>{const e=document.querySelector("#tasks");let t;const n=()=>{let e=tasks.lastChild;for(;e;)tasks.removeChild(e),e=tasks.lastChild};function s(e){const t=this,n=this.parentNode.querySelector(".up");""!==t.value?(n.classList.add("enabled"),t.classList.add("enabled"),"Enter"===e.key&&c.addTaskOnEnter(t)):(n.classList.remove("enabled"),t.classList.remove("enabled"))}function i(e){e.querySelectorAll("li").forEach(e=>{e.classList.remove("active")})}return{renderListTasks:function(d,o){let r;n(),"LI"===this.tagName&&(i(this.parentNode),this.classList.add("active")),r=void 0!==d?this.firstChild.textContent:o;const u=document.createElement("div");u.classList.add("listItem");const m=document.createElement("div");m.classList.add("listHeader");const p=document.createElement("h2");p.textContent=r,m.appendChild(p);const h=document.createElement("span");h.classList.add("add"),h.addEventListener("click",l.showModal);const L=document.createElement("i");L.classList.add("fas"),L.classList.add("fa-plus-circle"),h.appendChild(L),m.appendChild(h),u.appendChild(m);const v=a.getList(r).getItems(),f=document.createElement("div");f.classList.add("listTasks"),v.forEach(e=>{const t=document.createElement("div");t.classList.add("taskDiv");const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",e.title),n.setAttribute("value",e.title),n.classList.add("checkbox");const s=document.createElement("p");s.innerText=e.title,t.append(n),t.appendChild(s),f.appendChild(t)}),u.appendChild(f);const g=document.createElement("div");g.classList.add("quickTask");const b=document.createElement("input");b.classList.add("quickTaskInput"),b.setAttribute("type","text"),b.setAttribute("maxlength","50"),b.setAttribute("placeholder","Click to quickly add task"),b.addEventListener("change",s),b.addEventListener("keydown",s),b.addEventListener("keyup",s);const y=document.createElement("span"),C=document.createElement("i");C.classList.add("fas"),C.classList.add("fa-arrow-circle-up"),y.appendChild(C),y.classList.add("up"),y.addEventListener("click",c.addTask),g.appendChild(b),g.appendChild(y),u.appendChild(g),e.appendChild(u),t=a.getList(r),console.log("currentList",t)},getCurrentList:()=>t,_deactiveAllLists:i,currentList:t}})(),m={addList:function(e){event.preventDefault();const t=e.value;if(document.querySelector("#createList").classList.contains("enabled")){const e=i(t,[]);a.addList(e),v.renderLists(),v.renderShortcuts(),p.exitModalOnButton()}else e.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},p=(()=>{const e=document.querySelector("#tasksContainer");let t;function n(e){const t=this,n=document.querySelector("#createList");t.style.backgroundColor="",""!==t.value?(n.classList.add("enabled"),"Enter"===e.key&&m.addList(t)):n.classList.remove("enabled")}function s(e){e.target===this&&t.parentNode.removeChild(t)}function i(){t.parentNode.removeChild(t)}return{showModal:function(){t=document.createElement("div"),t.classList.add("modalBg"),t.addEventListener("click",s);const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)",d.style.width="40rem",d.style.height="15rem";const o=document.createElement("form");o.setAttribute("autocomplete","off"),o.style.width="95%",o.setAttribute("onkeydown","return event.key != 'Enter';");const a=document.createElement("input");a.addEventListener("change",n),a.addEventListener("keydown",n),a.addEventListener("keyup",n),a.addEventListener("mousedown",n),a.setAttribute("type","text"),a.setAttribute("id","title"),a.setAttribute("size","20"),a.setAttribute("placeholder","List name"),a.setAttribute("maxlength","23"),a.style.width="100%",a.style.margin="0",setTimeout((function(){a.focus()}),500);const r=document.createElement("div");r.setAttribute("id","modalButtons");const l=document.createElement("button");l.textContent="Cancel",l.setAttribute("id","cancel"),l.addEventListener("click",i);const c=document.createElement("button");c.textContent="Create",c.setAttribute("id","createList"),c.addEventListener("click",(function(){m.addList(a)})),r.appendChild(l),r.appendChild(c),o.appendChild(a),d.appendChild(o),d.appendChild(r),t.appendChild(d),e.appendChild(t)},exitModalOnButton:i}})(),h=(()=>{const e=document.querySelector("#tasksContainer");let t,n,s;function i(){const e=this,t=document.querySelector("#saveList");e.style.backgroundColor="",""!==e.value?(t.classList.add("enabled"),"Enter"===event.key&&L.saveList(s,n,e.value)):t.classList.remove("enabled")}function d(e){e.target===this&&t.parentNode.removeChild(t)}return{showModal:function(){s=this.parentNode,n=this.parentNode.textContent,t=document.createElement("div"),t.classList.add("modalBg"),t.addEventListener("click",d);const o=document.createElement("div");o.setAttribute("id","modalTask"),o.style.transform="translateX(-50%) translateY(-50%) scale(0.1)",o.style.width="40rem",o.style.height="15rem";const a=document.createElement("form");a.setAttribute("autocomplete","off"),a.style.width="95%",a.setAttribute("onkeydown","return event.key != 'Enter';");const r=document.createElement("input");r.addEventListener("change",i),r.addEventListener("keydown",i),r.addEventListener("keyup",i),r.addEventListener("mousedown",i),r.setAttribute("type","text"),r.setAttribute("id","title"),r.setAttribute("size","20"),r.setAttribute("placeholder","List name"),r.setAttribute("maxlength","23"),r.style.width="100%",r.style.margin="0",r.value=""+n,setTimeout((function(){r.focus()}),500);const l=document.createElement("div");l.setAttribute("id","modalButtons");const c=document.createElement("button");c.textContent="Delete",c.setAttribute("id","deleteList"),c.addEventListener("click",(function(){L.deleteList(s)}));const u=document.createElement("button");u.textContent="Save",u.setAttribute("id","saveList"),u.addEventListener("click",(function(){L.saveList(s,n,r.value)})),l.appendChild(c),l.appendChild(u),a.appendChild(r),o.appendChild(a),o.appendChild(l),t.appendChild(o),e.appendChild(t)},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),L={saveList:function(e,t,n){const s=e.dataset.index;a.lists[s].name=n,e.childNodes[1].textContent=n,h.exitModalOnButton()},deleteList:function(e){console.log(e),h.exitModalOnButton()},saveEdit:function(){localStorage.setItem("lists",JSON.stringify(a.lists));const e=v.getActiveListName();console.log("a"),void 0!==e?(localStorage.setItem("lists",JSON.stringify(a.lists)),v.renderLists(),v.renderShortcuts(),u.renderListTasks(void 0,e)):v.renderLists()},cancelEdit:function(){v.renderLists()}},v=(()=>{function e(){const e=document.querySelector("#listsList"),t=document.querySelector("#shortcutsList"),n=document.querySelector("#icons");"lists"==this.getAttribute("id")?(e.classList.toggle("hide"),e.classList.contains("hide")?setTimeout((function(){e.style.display="none"}),500):e.style.display="block",n.classList.toggle("hide")):"shortcuts"==this.getAttribute("id")&&(t.classList.toggle("hide"),t.classList.contains("hide")?setTimeout((function(){t.style.display="none"}),500):t.style.display="block"),this.firstChild.classList.toggle("fa-chevron-down"),this.firstChild.classList.toggle("fa-chevron-up")}function t(e){e.querySelectorAll("li").forEach(e=>{e.parentNode.removeChild(e)})}function n(){const t=document.querySelector("#listsList").querySelectorAll("li"),s=document.querySelector("#listsHeader");if(document.querySelector("#menu").querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notOverlay")||e.classList.toggle("overlayed")}),s.classList.toggle("editable"),s.classList.contains("editable")){s.lastElementChild.classList.add("hide"),s.removeChild(s.querySelector(".arrow"));const e=document.createElement("div");e.setAttribute("id","editIcons");const t=document.createElement("i");t.classList.add("fas","fa-times"),t.classList.add("editIcon","editHeader"),t.setAttribute("id","cross"),t.addEventListener("click",L.cancelEdit),t.addEventListener("click",n);const i=document.createElement("i");i.classList.add("fas","fa-check"),i.classList.add("editIcon","editHeader"),i.setAttribute("id","check"),i.addEventListener("click",L.saveEdit),i.addEventListener("click",n),e.appendChild(t),e.appendChild(i),s.appendChild(e)}else{s.removeChild(s.lastElementChild),s.lastElementChild.classList.remove("hide");const t=document.createElement("span");t.classList.add("arrow"),t.setAttribute("id","lists"),t.addEventListener("click",e);const n=document.createElement("i");n.classList.add("fas","fa-chevron-up"),t.appendChild(n),s.insertBefore(t,s.lastElementChild)}"edit"===this.getAttribute("id")&&t.forEach(e=>{if(e.classList.toggle("editable"),e.classList.contains("editable")){e.removeChild(e.lastChild);const t=document.createElement("i");t.classList.add("fas"),t.classList.add("fa-bars"),t.classList.add("dragIcon"),e.insertBefore(t,e.firstChild);const n=document.createElement("img");n.setAttribute("src","./images/edit.svg"),n.classList.add("editIcon"),n.addEventListener("click",h.showModal),e.appendChild(n),e.removeEventListener("click",u.renderListTasks)}else{e.removeChild(e.firstChild),e.removeChild(e.lastChild);const t=document.createElement("span");t.classList.add("taskNumber"),t.textContent=""+a.getList(e.textContent).items.length,e.appendChild(t),e.addEventListener("click",u.renderListTasks)}})}return document.querySelectorAll(".arrow").forEach(t=>{t.addEventListener("click",e)}),document.querySelector("#menuAddTask").addEventListener("click",l.showModal),document.querySelector("#menuBars").addEventListener("click",(function(){const e=document.querySelector("#menu");e.classList.toggle("hide"),e.querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notHide")?e.classList.toggle("minimize"):e.classList.toggle("hide"),"add"==e.getAttribute("id")&&e.classList.contains("minimize")?e.querySelector("button").innerHTML='<i class="fas fa-plus"></i>':"add"!=e.getAttribute("id")||e.classList.contains("minimize")||(e.querySelector("button").innerHTML='<i class="fas fa-plus"></i> Create a task')})})),document.querySelector("#addList").addEventListener("click",p.showModal),document.querySelector("#edit").addEventListener("click",n),{renderLists:()=>{const e=document.querySelector("#listsList");let n=a.getLists();t(e);let s=0;n.forEach(t=>{const n=document.createElement("li");n.setAttribute("id",t.getName().replace(" ","").toLowerCase());const i=document.createElement("p");i.textContent=t.getName();const d=document.createElement("span");d.classList.add("taskNumber"),d.textContent=""+t.getItems().length,n.setAttribute("data-index",s++),n.appendChild(i),n.appendChild(d),e.appendChild(n),n.addEventListener("click",u.renderListTasks)})},renderShortcuts:()=>{const e=document.createElement("li");e.textContent="Today",e.setAttribute("id","today");const n=document.createElement("li");n.textContent="Next 7 days",n.setAttribute("id","sevenDays");const s=document.createElement("li");s.textContent="All tasks",s.setAttribute("id","allTasks");const i=document.querySelector("#shortcutsList");t(i),i.appendChild(e),i.appendChild(n),i.appendChild(s)},getActiveListName:function(){let e;return document.querySelector("#listsList").querySelectorAll("li").forEach(t=>{t.classList.contains("active")&&(e=t.querySelector("p").textContent,u.currentList=t)}),e},_editableLists:n}})();window.onload=(a.setListsToStorage(),v.renderLists(),void v.renderShortcuts())}]);