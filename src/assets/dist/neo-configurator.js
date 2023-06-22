(()=>{"use strict";var t={n:e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=jQuery;var i=t.n(e);i().fn.insertAt=function(t,e){return this.each((function(){0===t?e.prepend(this):e.children().eq(t-1).after(this)}))};const n=Garnish;var s=t.n(n);const o=Craft;var a=t.n(o);const l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let r;const c=new Uint8Array(16);function d(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(c)}const h=[];for(let t=0;t<256;++t)h.push((t+256).toString(16).slice(1));function g(t,e=0){return(h[t[e+0]]+h[t[e+1]]+h[t[e+2]]+h[t[e+3]]+"-"+h[t[e+4]]+h[t[e+5]]+"-"+h[t[e+6]]+h[t[e+7]]+"-"+h[t[e+8]]+h[t[e+9]]+"-"+h[t[e+10]]+h[t[e+11]]+h[t[e+12]]+h[t[e+13]]+h[t[e+14]]+h[t[e+15]]).toLowerCase()}const p=function(t,e,i){if(l.randomUUID&&!e&&!t)return l.randomUUID();const n=(t=t||{}).random||(t.rng||d)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){i=i||0;for(let t=0;t<16;++t)e[i+t]=n[t];return e}return g(n)},u={_stack:[[]],enter(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("string"==typeof t&&(t=this.fromFieldName(t)),e){const e=this.getNamespace();e.push(...t),t=e}this._stack.push(t)},enterByFieldName(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.enter(this.fromFieldName(t),e)},leave(){return this._stack.length>1?this._stack.pop():this.getNamespace()},getNamespace(){return Array.from(this._stack[this._stack.length-1])},parse(t){return"string"==typeof t?t.indexOf("[")>-1?this.fromFieldName(t):t.indexOf("-")>-1?t.split("-"):t.indexOf(".")>-1?t.split("."):t:Array.from(t)},value(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";const i=this.getNamespace();return i.push(t),i.join(e)},fieldName(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const e=this.toFieldName();return e?e+t.replace(/([^'"[\]]+)([^'"]*)/,"[$1]$2"):t},toString(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-";return this.getNamespace().join(t)},toFieldName(){const t=this.getNamespace();switch(t.length){case 0:return"";case 1:return t[0]}return t[0]+"["+t.slice(1).join("][")+"]"},fromFieldName:t=>t.match(/[^[\]\s]+/g)||[]},m={settings:null},f=s().Base.extend({$container:null,_field:null,_selected:!1,init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},m,t),this._field=t.field,this._settings=t.settings},getField(){return this._field},getSettings(){return this._settings},getSortOrder(){return this.$container.index()+1},select(){this.toggleSelect(!0)},deselect(){this.toggleSelect(!1)},toggleSelect:function(t){this._selected="boolean"==typeof t?t:!this._selected,this.trigger("toggleSelect",{selected:this._selected})},isSelected(){return this._selected}}),k={namespace:[],html:"",layout:null,id:-1,blockId:null,blockName:""},y=s().Base.extend({_templateNs:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},k,t),this._templateNs=u.parse(t.namespace),this._id=0|t.id,this._blockTypeId=t.blockTypeId,this.$container=i()(t.html).find(".layoutdesigner"),this.$container.removeAttr("id");const e=this.$container.find('input[name="fieldLayout"]');e.length>0&&(e[0].name="neoBlockType".concat(this._blockTypeId,"[fieldLayout]"),t.layout&&(e[0].value=JSON.stringify(t.layout))),u.enter(this._templateNs),this._fld=new(a().FieldLayoutDesigner)(this.$container,{customizableTabs:!0,customizableUi:!0}),u.leave();const n=()=>{const t="[data-type=benf-neo-fieldlayoutelements-ChildBlocksUiElement]",e=this._fld.$uiLibraryElements.filter(t),n=this._fld.$tabContainer.find(t);e.toggleClass("hidden",n.length>0||i()("body.dragging .draghelper"+t).length>0),n.hasClass("velocity-animating")&&n.removeClass("hidden")};n(),this._tabObserver=new window.MutationObserver(n),this._tabObserver.observe(this._fld.$tabContainer[0],{childList:!0,subtree:!0})},getId(){return this._id},getBlockTypeId(){return this._blockTypeId},getConfig(){const t={tabs:[]};for(const e of this._fld.config.tabs){const i=[];for(const t of e.elements){const e={};for(const i in t)e[i]="required"!==i||t[i]?t[i]:"";i.push(e)}t.tabs.push({elements:i,name:e.name.slice()})}return t}}),_={namespace:[],fieldLayout:null},b=f.extend({_templateNs:[],_loaded:!1,init(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.base(e);const i=this.getSettings();e=Object.assign({},_,e),this._templateNs=u.parse(e.namespace),this._field=e.field,this._fieldLayout=e.fieldLayout;const n=null===(t=this.getField())||void 0===t?void 0:t.$sidebarContainer.find('[data-neo-bt="container.'.concat(this.getId()));(null==n?void 0:n.length)>0?this.$container=n:this.$container=this._generateBlockType(i);const s=this.$container.find("[data-neo-bt]");this.$nameText=s.filter('[data-neo-bt="text.name"]'),this.$handleText=s.filter('[data-neo-bt="text.handle"]'),this.$moveButton=s.filter('[data-neo-bt="button.move"]'),this.$actionsButton=s.filter('[data-neo-bt="button.actions"]'),this.$actionsMenu=s.filter('[data-neo-bt="container.menu"]'),this.$actionsButton.menubtn(),this._actionsMenu=this.$actionsButton.data("menubtn"),this._actionsMenu.on("optionSelect",(t=>this["@actionSelect"](t))),this.addListener(this.$actionsButton,"click",(t=>t.stopPropagation())),i&&(i.on("change",(()=>this._updateTemplate())),i.on("destroy",(()=>this.trigger("destroy"))),this._updateTemplate()),this.deselect()},_generateBlockType(t){const e=[...this._templateNs];e.pop(),u.enter(e);const n=u.fieldName("sortOrder");u.leave();const s=t.getErrors(),o=(Array.isArray(s)?s:Object.keys(s)).length>0;return i()('\n      <div class="nc_sidebar_list_item'.concat(o?" has-errors":"",'" data-neo-bt="container.').concat(this.getId(),'">\n        <div class="label" data-neo-bt="text.name">').concat(t.getName(),'</div>\n        <div class="smalltext light code" data-neo-bt="text.handle">').concat(t.getHandle(),'</div>\n        <a class="move icon" title="').concat(a().t("neo","Reorder"),'" role="button" data-neo-bt="button.move"></a>\n        <button class="settings icon menubtn" title="').concat(a().t("neo","Actions"),'" role="button" type="button" data-neo-bt="button.actions"></button>\n        <div class="menu" data-neo-bt="container.menu">\n          <ul class="padded">\n            <li><a data-icon="field" data-action="copy">').concat(a().t("neo","Copy"),'</a></li>\n            <li class="disabled"><a data-icon="brush" data-action="paste">').concat(a().t("neo","Paste"),'</a></li>\n            <li><a data-icon="share" data-action="clone">').concat(a().t("neo","Clone"),'</a></li>\n            <li><a class="error" data-icon="remove" data-action="delete">').concat(a().t("neo","Delete"),'</a></li>\n          </ul>\n        </div>\n        <input type="hidden" name="').concat(n,'[]" value="blocktype:').concat(this.getId(),'" data-neo-gs="input.sortOrder">\n      </div>'))},getId(){return this.getSettings().getId()},getFieldLayout(){return this._fieldLayout},loadFieldLayout(){this.load()},load(){if(this._loaded)return Promise.resolve();this.trigger("beforeLoad"),this.trigger("beforeLoadFieldLayout");const t=this.getSettings(),e=t.getFieldLayoutConfig(),i=t.getFieldLayoutId(),n={blockTypeId:this.getId(),layout:e};return new Promise(((t,e)=>{a().sendActionRequest("POST","neo/configurator/render-block-type",{data:n}).then((e=>{var s;this._fieldLayout=new y({namespace:[...this._templateNs,this._id],html:e.data.layoutHtml,id:i,blockTypeId:n.blockTypeId}),this._settings.createContainer({html:e.data.settingsHtml.replace(/__NEOBLOCKTYPE_ID__/g,n.blockTypeId),js:e.data.settingsJs.replace(/__NEOBLOCKTYPE_ID__/g,n.blockTypeId)}),null===(s=this._field)||void 0===s||s.addItem(this),this._loaded=!0,this.trigger("afterLoad"),this.trigger("afterLoadFieldLayout"),t()})).catch(e)}))},toggleSelect:function(t){var e;this.base(t);const i=this.getSettings(),n=this.getFieldLayout(),s=this.isSelected();null!==(e=null==i?void 0:i.$container)&&void 0!==e&&e&&i.$container.toggleClass("hidden",!s),n?n.$container.toggleClass("hidden",!s):s&&this.load(),this.$container.toggleClass("is-selected",s)},_updateTemplate(){const t=this.getSettings();t&&(this.$nameText.text(t.getName()),this.$handleText.text(t.getHandle()),this.$container.toggleClass("is-child",!t.getTopLevel()))},"@actionSelect"(t){var e;const n=i()(t.option);if(!n.hasClass("disabled"))switch(null===(e=this._actionsMenu)||void 0===e||e.hideMenu(),n.attr("data-action")){case"copy":this.trigger("copy");break;case"paste":this.trigger("paste");break;case"clone":this.trigger("clone");break;case"delete":window.confirm(a().t("neo","Are you sure you want to delete this block type?"))&&this.getSettings().destroy()}}}),B=s().Base.extend({$container:new(i()),getSortOrder(t){console.warn("Settings.getSortOrder() is deprecated. Use Item.getSortOrder() instead.")},setSortOrder(t){console.warn("Settings.setSortOrder() is deprecated and no longer used.")},getFocusElement:()=>new(i()),destroy(){var t;null===(t=this.$foot)||void 0===t||t.remove(),this.trigger("destroy")},_refreshSetting(t,e,i){(i=!s().prefersReducedMotion()&&("boolean"!=typeof i||i))?e?t.hasClass("hidden")&&t.removeClass("hidden").css({opacity:0,marginBottom:-t.outerHeight()}).velocity({opacity:1,marginBottom:24},"fast"):t.hasClass("hidden")||t.css({opacity:1,marginBottom:24}).velocity({opacity:0,marginBottom:-t.outerHeight()},"fast",(()=>{t.addClass("hidden")})):t.toggleClass("hidden",!e).css("margin-bottom",e?24:"")}}),$={namespace:[],id:null,sortOrder:0,fieldLayoutId:null,fieldLayoutConfig:null,name:"",handle:"",description:"",enabled:!0,ignorePermissions:!0,minBlocks:0,maxBlocks:0,minSiblingBlocks:0,maxSiblingBlocks:0,minChildBlocks:0,maxChildBlocks:0,topLevel:!0,childBlocks:null,childBlockTypes:[],html:null,js:null,errors:{}},w=B.extend({_templateNs:[],_childBlockTypes:[],_initialised:!1,$container:null,$nameInput:new(i()),$handleInput:new(i()),$descriptionInput:new(i()),$minBlocksInput:new(i()),$maxBlocksInput:new(i()),$minSiblingBlocksInput:new(i()),$maxSiblingBlocksInput:new(i()),$minChildBlocksInput:new(i()),$maxChildBlocksInput:new(i()),init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},$,t),this._templateNs=u.parse(t.namespace),this._childBlockTypes=[],this._childBlocks=t.childBlocks,this._id=t.id,this._fieldLayoutId=t.fieldLayoutId,this._fieldLayoutConfig=t.fieldLayoutConfig,this._errors=t.errors,this._settingsChildBlockTypes=t.childBlockTypes,this._originalSettings=t,this._afterCreateContainer=()=>{this.setName(t.name),this.setHandle(t.handle),this.setDescription(t.description),this._setIconId(t.iconId),this.setEnabled(t.enabled),this.setIgnorePermissions(t.ignorePermissions),this.setMinBlocks(t.minBlocks),this.setMaxBlocks(t.maxBlocks),this.setMinSiblingBlocks(t.minSiblingBlocks),this.setMaxSiblingBlocks(t.maxSiblingBlocks),this.setMinChildBlocks(t.minChildBlocks),this.setMaxChildBlocks(t.maxChildBlocks),this.setTopLevel(t.topLevel)},void 0!==t.html&&null!==t.html&&this.createContainer({html:t.html,js:t.js})},createContainer(t){var e;if(null!==this.$container)return;this.$container=i()(t.html),this._js=null!==(e=t.js)&&void 0!==e?e:"";const n=this.$container.find("[data-neo-bts]");this.$nameInput=n.filter('[data-neo-bts="input.name"]'),this.$handleInput=n.filter('[data-neo-bts="input.handle"]'),this.$descriptionInput=n.filter('[data-neo-bts="input.description"]'),this.$iconIdContainer=n.filter('[data-neo-bts="container.iconId"]'),this.$enabledInput=n.filter('[data-neo-bts="input.enabled"]'),this.$enabledContainer=n.filter('[data-neo-bts="container.enabled"]'),this.$ignorePermissionsInput=n.filter('[data-neo-bts="input.ignorePermissions"]'),this.$ignorePermissionsContainer=n.filter('[data-neo-bts="container.ignorePermissions"]'),this.$minBlocksInput=n.filter('[data-neo-bts="input.minBlocks"]'),this.$maxBlocksInput=n.filter('[data-neo-bts="input.maxBlocks"]'),this.$minSiblingBlocksInput=n.filter('[data-neo-bts="input.minSiblingBlocks"]'),this.$maxSiblingBlocksInput=n.filter('[data-neo-bts="input.maxSiblingBlocks"]'),this.$minChildBlocksInput=n.filter('[data-neo-bts="input.minChildBlocks"]'),this.$minChildBlocksContainer=n.filter('[data-neo-bts="container.minChildBlocks"]'),this.$maxChildBlocksInput=n.filter('[data-neo-bts="input.maxChildBlocks"]'),this.$maxChildBlocksContainer=n.filter('[data-neo-bts="container.maxChildBlocks"]'),this.$topLevelInput=n.filter('[data-neo-bts="input.topLevel"]'),this.$topLevelContainer=n.filter('[data-neo-bts="container.topLevel"]'),this.$groupChildBlockTypesInput=n.filter('[data-neo-bts="input.groupChildBlockTypes"]'),this.$groupChildBlockTypesContainer=n.filter('[data-neo-bts="container.groupChildBlockTypes"]'),this.$childBlocksInput=n.filter('[data-neo-bts="input.childBlocks"]'),this.$childBlocksContainer=n.filter('[data-neo-bts="container.childBlocks"]'),this.$deleteButton=n.filter('[data-neo-bts="button.delete"]'),this._afterCreateContainer()},initUi(){if(!this._initialised&&null!==this.$container){this.$foot=i()(this._js),s().$bod.append(this.$foot),a().initUiElements(this.$container),this._childBlocksSelect=this.$childBlocksInput.data("checkboxSelect"),this._enabledLightswitch=this.$enabledInput.data("lightswitch"),this._ignorePermissionsLightswitch=this.$ignorePermissionsInput.data("lightswitch"),this._topLevelLightswitch=this.$topLevelInput.data("lightswitch"),this._groupChildBlockTypesLightswitch=this.$groupChildBlockTypesInput.data("lightswitch"),this._handleGenerator=new(a().HandleGenerator)(this.$nameInput,this.$handleInput),""!==this.getHandle()&&this._handleGenerator.stopListening();for(const t of this._settingsChildBlockTypes)this.addChildBlockType(t);this.setChildBlocks(this._childBlocks),this.addListener(this.$nameInput,"keyup change",(()=>{this.setName(this.$nameInput.val()),this._handleGenerator.listening&&setTimeout((()=>this.setHandle(this.$handleInput.val())),200)})),this.addListener(this.$handleInput,"keyup change textchange",(()=>this.setHandle(this.$handleInput.val()))),this.addListener(this.$descriptionInput,"keyup change textchange",(()=>this.setDescription(this.$descriptionInput.val()))),this.addListener(this.$iconIdContainer,"change",(()=>{setTimeout((()=>{const t=this.$iconIdInput,e=t.length>0?t.val():null;this._setIconId(e)}),500)})),this.addListener(this._enabledLightswitch,"change",(()=>this.setEnabled(this._enabledLightswitch.on))),this.addListener(this._ignorePermissionsLightswitch,"change",(()=>this.setIgnorePermissions(this._ignorePermissionsLightswitch.on))),this.addListener(this.$minBlocksInput,"keyup change",(()=>this.setMinBlocks(this.$minBlocksInput.val()))),this.addListener(this.$maxBlocksInput,"keyup change",(()=>this.setMaxBlocks(this.$maxBlocksInput.val()))),this.addListener(this.$minSiblingBlocksInput,"keyup change",(()=>this.setMinSiblingBlocks(this.$minSiblingBlocksInput.val()))),this.addListener(this.$maxSiblingBlocksInput,"keyup change",(()=>this.setMaxSiblingBlocks(this.$maxSiblingBlocksInput.val()))),this.addListener(this.$minChildBlocksInput,"keyup change",(()=>this.setMinChildBlocks(this.$minChildBlocksInput.val()))),this.addListener(this.$maxChildBlocksInput,"keyup change",(()=>this.setMaxChildBlocks(this.$maxChildBlocksInput.val()))),this.addListener(this.$topLevelInput,"change",(()=>this.setTopLevel(this._topLevelLightswitch.on))),this.addListener(this.$groupChildBlockTypesInput,"change",(()=>this.setTopLevel(this._groupChildBlockTypesLightswitch.on))),this.addListener(this.$deleteButton,"click",(()=>{window.confirm(a().t("neo","Are you sure you want to delete this block type?"))&&this.destroy()})),this.$childBlocksInput.on("change","input",(()=>this._refreshChildBlockSettings())),this._initialised=!0}},_generateChildBlocksCheckbox(t){u.enter(this._templateNs);const e=u.value("childBlock-"+t.getId(),"-"),n=u.fieldName("childBlocks");return u.leave(),i()('\n      <div data-neo-btsc="container.'.concat(t.getId(),'">\n        <input type="checkbox" value="').concat(t.getHandle(),'" id="').concat(e,'" class="checkbox" name="').concat(n,'[]" data-neo-btsc="input.').concat(t.getId(),'">\n        <label for="').concat(e,'" data-neo-btsc="text.label">').concat(t.getName(),"</label>\n      </div>"))},get $iconIdInput(){return this.$iconIdContainer.find('input[type="hidden"]')},getFocusInput(){return this.$nameInput},getId(){return this._id},getFieldLayoutId(){return this._fieldLayoutId},getFieldLayoutConfig(){return Object.assign({},this._fieldLayoutConfig)},isNew(){return/^new/.test(this.getId())},getErrors(){return this._errors},setSortOrder(t){console.warn("BlockTypeSettings.setSortOrder() is deprecated and no longer used.")},getName(){return this._name},setName(t){if(t!==this._name){const e=this._name;this._name=t,this.$nameInput.val()!==this._name&&this.$nameInput.val(this._name),this.trigger("change",{property:"name",oldValue:e,newValue:this._name})}},getHandle(){return this._handle},setHandle(t){if(t!==this._handle){const e=this._handle;this._handle=t,this.$handleInput.val()!==this._handle&&this.$handleInput.val(this._handle),this.trigger("change",{property:"handle",oldValue:e,newValue:this._handle})}},getDescription(){return this._description},setDescription(t){if(t!==this._description){const e=this._description;this._description=t,this.$descriptionInput.val()!==this._description&&this.$descriptionInput.val(this._description),this.trigger("change",{property:"description",oldValue:e,newValue:this._description})}},getIconId(){return this._iconId},_setIconId(t){if(t!==this._iconId){const e=this._iconId;this._iconId=t,this.$iconIdInput.val(),this._iconId,this.trigger("change",{property:"iconId",oldValue:e,newValue:this._iconId})}},getEnabled(){return this._enabled},setEnabled(t){this._setLightswitchField("enabled",t)},getIgnorePermissions(){return this._ignorePermissions},setIgnorePermissions(t){this._setLightswitchField("ignorePermissions",t)},getMinBlocks(){return this._minBlocks},setMinBlocks(t){this._setBlocksConstraint("minBlocks",t)},getMaxBlocks(){return this._maxBlocks},setMaxBlocks(t){this._setBlocksConstraint("maxBlocks",t)},getMinSiblingBlocks(){return this._minSiblingBlocks},setMinSiblingBlocks(t){this._setBlocksConstraint("minSiblingBlocks",t)},getMaxSiblingBlocks(){return this._maxSiblingBlocks},setMaxSiblingBlocks(t){this._setBlocksConstraint("maxSiblingBlocks",t)},getMinChildBlocks(){return this._minChildBlocks},getMaxChildBlocks(){return this._maxChildBlocks},setMinChildBlocks(t){this._setBlocksConstraint("minChildBlocks",t)},setMaxChildBlocks(t){this._setBlocksConstraint("maxChildBlocks",t)},_setBlocksConstraint(t,e){const i="_".concat(t),n="$".concat(t,"Input"),s=this[i],o=Math.max(0,0|e);0===o&&this[n].val(null),s!==o&&(this[i]=o,this[i]>0&&parseInt(this[n].val())!==this[i]&&this[n].val(this[i]),this.trigger("change",{property:t,oldValue:s,newValue:this[i]}))},getTopLevel(){var t;return null!==(t=this._topLevel)&&void 0!==t?t:this._originalSettings.topLevel},setTopLevel(t){this._setLightswitchField("topLevel",t)},_setLightswitchField(t,e){const i="_".concat(t),n="".concat(i,"Lightswitch"),s=this[i],o=!!e;s!==o&&(this[i]=o,this[n]&&this[n].on!==this[i]&&(this[n].on=this[i],this[n].toggle()),this.trigger("change",{property:t,oldValue:s,newValue:o}))},getChildBlocks(){const t=this._childBlocksSelect,e=[];var n;return void 0===t?!0===this._childBlocks||Array.from(null!==(n=this._childBlocks)&&void 0!==n?n:[]):!!t.$all.prop("checked")||(t.$options.each((function(t){const n=i()(this);n.prop("checked")&&e.push(n.val())})),e.length>0&&e)},setChildBlocks(t){const e=this._childBlocksSelect;if(!0===t||"*"===t)e.$all.prop("checked",!0),e.onAllChange();else if(Array.isArray(t)){e.$all.prop("checked",!1);for(const i of t)e.$options.filter('[value="'.concat(i,'"]')).prop("checked",!0)}else e.$all.prop("checked",!1),e.$options.prop("checked",!1);this._refreshChildBlockSettings(!1)},addChildBlockType(t){if(!this._childBlockTypes.includes(t)){const e=t.getSettings(),i=this.$childBlocksContainer.find('[data-neo-btsc="input.'.concat(e.getId(),'"]')),n=i.length>0?i:this._generateChildBlocksCheckbox(e);this._childBlockTypes.push(t),0===i.length&&(this.$childBlocksContainer.append(n),this._refreshChildBlocks(t));const s=this._childBlocksSelect,o=s.$all.prop("checked");s.$options=s.$options.add(n.find("input")),o&&s.onAllChange();const a=".childBlock"+this.getId();e.on("change"+a,(e=>this["@onChildBlockTypeChange"](e,t,n))),e.on("destroy"+a,(e=>this.removeChildBlockType(t)))}},removeChildBlockType(t){const e=this._childBlockTypes.indexOf(t);if(e>=0){this._childBlockTypes.splice(e,1);const i=t.getSettings(),n=this.$childBlocksContainer.children().eq(e);n.remove();const s=this._childBlocksSelect;s.$options=s.$options.remove(n.find("input"));const o=".childBlock"+this.getId();i.off(o),this._refreshChildBlocks(t)}},getConditions(){u.enter(this._templateNs);const t=u.toFieldName().replaceAll("\\","\\\\");u.leave();const e="".concat(t,"[conditions]"),i=e.replaceAll("\\\\","\\"),n=this.$container.find('[name^="'.concat(e,'"]')).get().map((t=>t.name)),s=new window.FormData(this.$container.closest("form").get(0)),o={};return n.forEach((t=>{let e=o;const n=[i],a=t.replace(i,"").slice(1,-1).split("][");a.forEach(((t,i)=>{n.push("[".concat(t,"]")),""===t||t in e?""===t&&e.push(...s.getAll(n.join(""))):"values"===t?e[t]=[]:i<a.length-1?e[t]={}:e[t]=s.get(n.join("")),e=e[t]}))})),o},_refreshChildBlocks(t){const e=t.getField().$sidebarContainer.find('[data-neo-bt="container.'.concat(t.getId(),'"]')),i=this.$childBlocksContainer.children('[data-neo-btsc="container.'.concat(t.getId(),'"]'));if(e.length>0){const t=e.index(".nc_sidebar_list_item:not(.type-heading)"),n=this.$childBlocksContainer.children().eq(t);n.length>0?i.insertBefore(n):i.appendTo(this.$childBlocksContainer)}else i.remove()},_refreshChildBlockSettings(t){const e=!!this.getChildBlocks();this._refreshSetting(this.$minChildBlocksContainer,e,t),this._refreshSetting(this.$maxChildBlocksContainer,e,t),this._refreshSetting(this.$groupChildBlockTypesContainer,e,t)},"@onChildBlockTypeChange"(t,e,i){const n=i.find("[data-neo-btsc]"),s=n.filter('[data-neo-btsc="input"]'),o=n.filter('[data-neo-btsc="text.label"]');switch(t.property){case"name":o.text(t.newValue);break;case"handle":s.val(t.newValue);break;case"sortOrder":this._refreshChildBlocks(e)}}},{_totalNewBlockTypes:0,getNewId(){return"new".concat(this._totalNewBlockTypes++)}}),I={namespace:[]},v=f.extend({_templateNs:[],init(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.base(e),e=Object.assign({},I,e);const i=this.getSettings();this._templateNs=u.parse(e.namespace);const n=null===(t=this.getField())||void 0===t?void 0:t.$sidebarContainer.find('[data-neo-g="container.'.concat(this.getId()));(null==n?void 0:n.length)>0?this.$container=n:this.$container=this._generateGroup(i);const s=this.$container.find("[data-neo-g]");this.$nameText=s.filter('[data-neo-g="text.name"]'),this.$moveButton=s.filter('[data-neo-g="button.move"]'),i&&(i.on("change",(()=>this._updateTemplate())),i.on("destroy",(()=>this.trigger("destroy")))),this.deselect()},_generateGroup(t){var e;const n=[...this._templateNs];n.pop(),u.enter(n);const s=u.fieldName("sortOrder");return u.leave(),i()('\n      <div class="nc_sidebar_list_item type-heading" data-neo-g="container.'.concat(this.getId(),'">\n        <div class="label" data-neo-g="text.name">').concat(null!==(e=t.getName())&&void 0!==e?e:"",'</div>\n        <a class="move icon" title="').concat(a().t("neo","Reorder"),'" role="button" data-neo-g="button.move"></a>\n        <input type="hidden" name="').concat(s,'[]" value="group:').concat(this.getId(),'" data-neo-g="input.sortOrder">\n      </div>'))},getId(){return this.getSettings().getId()},toggleSelect:function(t){this.base(t);const e=this.getSettings(),i=this.isSelected();e&&e.$container.toggleClass("hidden",!i),this.$container.toggleClass("is-selected",i)},_updateTemplate(){const t=this.getSettings();t&&this.$nameText.text(t.getName())}}),C={namespace:[],id:null,sortOrder:0,name:"",alwaysShowDropdown:null,defaultAlwaysShowGroupDropdowns:!0},S=B.extend({_templateNs:[],$sortOrderInput:new(i()),$nameInput:new(i()),$handleInput:new(i()),$maxBlocksInput:new(i()),init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},C,t),this._templateNs=u.parse(t.namespace),this._id=t.id,this._alwaysShowDropdown=t.alwaysShowDropdown,this._defaultAlwaysShowGroupDropdowns=t.defaultAlwaysShowGroupDropdowns,this.$container=this._generateGroupSettings();const e=this.$container.find("[data-neo-gs]");this.$nameInput=e.filter('[data-neo-gs="input.name"]'),this.$deleteButton=e.filter('[data-neo-gs="button.delete"]'),this.$alwaysShowDropdownContainer=e.filter('[data-neo-gs="container.alwaysShowDropdown"]'),this.setName(t.name),this.addListener(this.$nameInput,"keyup change",(()=>this.setName(this.$nameInput.val()))),this.addListener(this.$deleteButton,"click",(()=>{window.confirm(a().t("neo","Are you sure you want to delete this group?"))&&this.destroy()}))},_generateGroupSettings(){u.enter(this._templateNs);const t=u.value("name","-"),e=u.fieldName("name"),n=u.value("alwaysShowDropdown","-"),s=u.fieldName("alwaysShowDropdown");u.leave();const o=[{value:"show",label:a().t("neo","Show")},{value:"hide",label:a().t("neo","Hide")},{value:"global",label:this._defaultAlwaysShowGroupDropdowns?a().t("neo","Use global setting (Show)"):a().t("neo","Use global setting (Hide)")}],l=a().ui.createTextField({type:"text",id:t,name:e,label:a().t("neo","Name"),instructions:a().t("neo","This can be left blank if you just want an unlabeled separator."),value:this.getName()});return l.find("input").attr("data-neo-gs","input.name"),i()("\n      <div>\n        <div>\n          ".concat(i()('<div class="field">').append(l).html(),'\n          <div data-neo-gs="container.alwaysShowDropdown">\n            <div class="field">\n              ').concat(a().ui.createSelectField({label:a().t("neo","Always Show Dropdown?"),instructions:a().t("neo","Whether to show the dropdown for this group if it only has one available block type."),id:n,name:s,options:o,value:this._alwaysShowDropdown?"show":!1===this._alwaysShowDropdown?"hide":"global"}).html(),'\n            </div>\n          </div>\n        </div>\n        <hr>\n        <a class="error delete" data-neo-gs="button.delete">').concat(a().t("neo","Delete group"),"</a>\n      </div>"))},getFocusInput(){return this.$nameInput},getId(){return this._id},setSortOrder(t){console.warn("GroupSettings.setSortOrder() is deprecated and no longer used.")},getName(){return this._name},setName(t){if(t!==this._name){const e=this._name;this._name=t,this.$nameInput.val(this._name),this._refreshAlwaysShowDropdown(),this.trigger("change",{property:"name",oldValue:e,newValue:this._name})}},getAlwaysShowDropdown(){return this._alwaysShowDropdown},_refreshAlwaysShowDropdown(t){this._refreshSetting(this.$alwaysShowDropdownContainer,!!this._name,t)}},{_totalNewGroups:0,getNewId(){return"new".concat(this._totalNewGroups++)}});function T(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function L(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?T(Object(i),!0).forEach((function(e){x(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function x(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const N={namespace:[],blockTypes:[],groups:[],blockTypeSettingsHtml:"",blockTypeSettingsJs:"",fieldLayoutHtml:""},O=s().Base.extend({_templateNs:[],_items:[],init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({},N,t);const e=a().formatInputId(t.namespace),n=i()("#".concat(e,"-neo-configurator"));this.$container=n.children(".field").children(".input"),this._templateNs=u.parse(t.namespace),this._blockTypeSettingsHtml=t.blockTypeSettingsHtml,this._blockTypeSettingsJs=t.blockTypeSettingsJs,this._fieldLayoutHtml=t.fieldLayoutHtml,this._items=[];const o=this.$container.find("[data-neo]");this.$mainContainer=o.filter('[data-neo="container.main"]'),this.$sidebarContainer=o.filter('[data-neo="container.sidebar"]'),this.$blockTypesContainer=o.filter('[data-neo="container.blockTypes"]'),this.$settingsContainer=o.filter('[data-neo="container.settings"]'),this.$fieldLayoutContainer=o.filter('[data-neo="container.fieldLayout"]'),this.$blockTypeButton=o.filter('[data-neo="button.blockType"]'),this.$groupButton=o.filter('[data-neo="button.group"]'),this.$settingsButton=o.filter('[data-neo="button.settings"]'),this.$fieldLayoutButton=o.filter('[data-neo="button.fieldLayout"]'),this._itemSort=new(s().DragSort)(null,{container:this.$blockTypesContainer,handle:'[data-neo-bt="button.move"], [data-neo-g="button.move"]',axis:"y",onSortChange:()=>this._updateItemOrder()});const l=[],r=[...this._templateNs,"items","blockTypes"],c=[...this._templateNs,"items","groups"];for(const e of t.blockTypes){const t=new w({namespace:[...r,e.id],sortOrder:e.sortOrder,id:e.id,name:e.name,handle:e.handle,description:e.description,iconId:e.iconId,enabled:e.enabled,ignorePermissions:e.ignorePermissions,minBlocks:e.minBlocks,maxBlocks:e.maxBlocks,minSiblingBlocks:e.minSiblingBlocks,maxSiblingBlocks:e.maxSiblingBlocks,minChildBlocks:e.minChildBlocks,maxChildBlocks:e.maxChildBlocks,topLevel:e.topLevel,html:e.settingsHtml,js:e.settingsJs,errors:e.errors,fieldLayoutId:e.fieldLayoutId,fieldLayoutConfig:e.fieldLayoutConfig,childBlockTypes:l.filter((t=>t instanceof b))}),n=new b({namespace:r,field:this,settings:t});n.on("copy.configurator",(()=>this._copyBlockType(n))),n.on("paste.configurator",(()=>this._pasteBlockType())),n.on("clone.configurator",(()=>this._createBlockTypeFrom(n))),n.on("beforeLoad.configurator",(()=>{this.$fieldLayoutContainer.append(i()('<span class="spinner"/></span>')),this.$settingsContainer.append(i()('<span class="spinner"/></span>'))})),n.on("afterLoad.configurator",(()=>{this.$fieldLayoutContainer.children(".spinner").remove(),this.$settingsContainer.children(".spinner").remove()})),l.push(n)}for(const e of t.groups){const i=new S({namespace:[...c,e.id],sortOrder:e.sortOrder,id:e.id,name:e.name,alwaysShowDropdown:e.alwaysShowDropdown,defaultAlwaysShowGroupDropdowns:t.defaultAlwaysShowGroupDropdowns}),n=new v({namespace:c,field:this,settings:i});l.push(n)}for(const t of l.sort(((t,e)=>t.getSortOrder()-e.getSortOrder())))this.addItem(t);for(const e of this.getBlockTypes()){const i=e.getSettings();if(null!=i&&i.$container){const e=t.blockTypes.find((t=>t.handle===i.getHandle()));i.setChildBlocks(e.childBlocks)}}const d=()=>{const t=!window.localStorage.getItem("neo:copyBlockType");for(const e of this.getBlockTypes())e.$actionsMenu.find('[data-action="paste"]').parent().toggleClass("disabled",t)};d(),this.addListener(document,"visibilitychange.configurator",d),this.selectTab("settings"),this.addListener(this.$blockTypeButton,"click","@newBlockType"),this.addListener(this.$groupButton,"click","@newGroup"),this.addListener(this.$settingsButton,"click",(()=>this.selectTab("settings"))),this.addListener(this.$fieldLayoutButton,"click",(()=>this.selectTab("fieldLayout")))},addItem(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;const i=t.getSettings();if(document.contains(t.$container[0])||this._insertAt(t.$container,e),0===this._itemSort.$items.filter(t.$container).length&&this._itemSort.addItems(t.$container),null!=i&&i.$container&&(this.$settingsContainer.append(i.$container),t instanceof b&&i.initUi()),this.$mainContainer.removeClass("hidden"),this.addListener(t.$container,"click","@selectItem"),t.on("destroy.configurator",(()=>this.removeItem(t,!1))),t instanceof b&&this._addFieldLayout(t.getFieldLayout()),this._items.push(t),e>=0&&e<this._items.length-1&&this._updateItemOrder(),t instanceof b)for(const e of this.getBlockTypes()){const i=e.getSettings();null!=i&&i.$container&&i.addChildBlockType(t)}this.trigger("addItem",{item:t,index:e})},_addFieldLayout(t){t&&this.$fieldLayoutContainer.append(t.$container)},removeItem(t,e){if(e="boolean"==typeof e&&e){const e=a().t("neo","Are you sure you want to delete this {type}?",{type:t instanceof b?"block type":t instanceof v?"group":"item"});window.confirm(e)&&this.removeItem(t,!1)}else{const e=t.getSettings();if(this._itemSort.removeItems(t.$container),t.$container.remove(),null!=e&&e.$container&&e.$container.remove(),t instanceof b){const e=t.getFieldLayout();e&&e.$container.remove()}this.removeListener(t.$container,"click"),t.off(".configurator"),this._items=this._items.filter((e=>e!==t)),0===this._items.length&&this.$mainContainer.addClass("hidden"),this.trigger("removeItem",{item:t})}},getItems(){return Array.from(this._items)},getItemByElement(t){return this._items.find((e=>e.$container.is(t)))},getSelectedItem(){return this._items.find((t=>t.isSelected()))},selectItem(t,e){e="boolean"!=typeof e||e;const i=t?t.getSettings():null;for(const e of this._items){const i=e===t;if(e.toggleSelect(i),i){const t=!(e instanceof b);this.$fieldLayoutButton.toggleClass("hidden",t),t&&this.selectTab("settings")}}a().ElementThumbLoader.retryAll(),e&&i&&!s().isMobileBrowser()&&setTimeout((()=>i.getFocusInput().focus()),100)},getBlockTypes(){return this._items.filter((t=>t instanceof b))},getGroups(){return this._items.filter((t=>t instanceof v))},selectTab(t){this.$settingsContainer.toggleClass("hidden","settings"!==t),this.$fieldLayoutContainer.toggleClass("hidden","fieldLayout"!==t),this.$settingsButton.toggleClass("is-selected","settings"===t),this.$fieldLayoutButton.toggleClass("is-selected","fieldLayout"===t)},_getNewBlockTypeSettingsHtml(t,e){return this._blockTypeSettingsHtml.replace(/__NEOBLOCKTYPE_ID__/g,t)},_getNewBlockTypeSettingsJs(t){return this._blockTypeSettingsJs.replace(/__NEOBLOCKTYPE_ID__/g,t)},_getNewFieldLayoutHtml(){return this._fieldLayoutHtml.replace(/&quot;uid&quot;:&quot;([a-f0-9-]+)&quot;/,"&quot;uid&quot;:&quot;".concat(p(),"&quot;"))},_updateItemOrder(){const t=[];this._itemSort.$items.each(((e,i)=>{const n=this.getItemByElement(i);n&&t.push(n)})),this._items=t},_createBlockTypeFrom(t){const e=[...this._templateNs,"items","blockTypes"],n=w.getNewId(),s=this.getSelectedItem(),o=s?s.getSortOrder():-1;if(null===t){const t=new w({childBlockTypes:this.getBlockTypes(),id:n,namespace:[...e,n],sortOrder:this._items.length,html:this._getNewBlockTypeSettingsHtml(n,o),js:this._getNewBlockTypeSettingsJs(n)}),i=new y({blockTypeId:n,html:this._getNewFieldLayoutHtml(),namespace:[...e,n]});this._initBlockType(e,t,i,o)}else{const s=t.getSettings(),l={childBlocks:s.getChildBlocks(),conditions:s.getConditions(),handle:"".concat(s.getHandle(),"_").concat(Date.now()),id:n,minBlocks:s.getMinBlocks(),maxBlocks:s.getMaxBlocks(),minChildBlocks:s.getMinChildBlocks(),maxChildBlocks:s.getMaxChildBlocks(),minSiblingBlocks:s.getMinSiblingBlocks(),maxSiblingBlocks:s.getMaxSiblingBlocks(),name:s.getName(),description:s.getDescription(),iconId:s.getIconId(),enabled:s.getEnabled(),ignorePermissions:s.getIgnorePermissions(),sortOrder:this._items.length,topLevel:s.getTopLevel()},r=new w(L(L({},l),{},{childBlockTypes:this.getBlockTypes(),namespace:[...e,n]})),c=i()('<div class="nc_sidebar_list_item type-spinner"><span class="spinner"></span></div>');this._insertAt(c,o),t.load().then((()=>{const i=t.getFieldLayout().getConfig(),s={settings:l,layout:i.tabs.length>0?i:null};a().queue.push((()=>new Promise(((t,i)=>{a().sendActionRequest("POST","neo/configurator/render-block-type",{data:s}).then((i=>{const s=new y({blockTypeId:n,html:i.data.layoutHtml,namespace:[...e,n]});r.createContainer({html:i.data.settingsHtml.replace(/__NEOBLOCKTYPE_ID__/g,n),js:i.data.settingsJs.replace(/__NEOBLOCKTYPE_ID__/g,n)}),this.$blockTypesContainer.find(".type-spinner").remove(),this._initBlockType(e,r,s,o),t()})).catch(i)}))))})).catch((()=>a().cp.displayError(a().t("neo","Couldn’t create new block type."))))}},_initBlockType(t,e,i,n){const s=new b({namespace:t,field:this,settings:e,fieldLayout:i});this.addItem(s,n),this.selectItem(s),this.selectTab("settings"),s.on("copy.configurator",(()=>this._copyBlockType(s))),s.on("paste.configurator",(()=>this._pasteBlockType())),s.on("clone.configurator",(()=>this._createBlockTypeFrom(s)))},_copyBlockType(t){t.load().then((()=>{const e=t.getSettings(),i={childBlocks:e.getChildBlocks(),conditions:e.getConditions(),description:e.getDescription(),enabled:e.getEnabled(),iconId:e.getIconId(),ignorePermissions:e.getIgnorePermissions(),handle:e.getHandle(),layout:t.getFieldLayout().getConfig(),minBlocks:e.getMinBlocks(),maxBlocks:e.getMaxBlocks(),minChildBlocks:e.getMinChildBlocks(),maxChildBlocks:e.getMaxChildBlocks(),minSiblingBlocks:e.getMinSiblingBlocks(),maxSiblingBlocks:e.getMaxSiblingBlocks(),name:e.getName(),topLevel:e.getTopLevel()};window.localStorage.setItem("neo:copyBlockType",JSON.stringify(i)),this.getBlockTypes().forEach((t=>t.$actionsMenu.find('[data-action="paste"]').parent().removeClass("disabled")))})).catch((()=>a().cp.displayError(a().t("neo","Couldn’t copy block type."))))},_pasteBlockType(){const t=window.localStorage.getItem("neo:copyBlockType");if(!t)return;const e=JSON.parse(t),i=this.getBlockTypes().map((t=>t.getSettings().getHandle())),n=Array.isArray(e.childBlocks)?e.childBlocks.filter((t=>i.includes(t))):!!e.childBlocks||[],s=new w({childBlocks:n,childBlockTypes:this.getBlockTypes(),conditions:e.conditions,description:e.description,iconId:e.iconId,enabled:e.enabled,ignorePermissions:e.ignorePermissions,handle:e.handle,minBlocks:e.minBlocks,maxBlocks:e.maxBlocks,minChildBlocks:e.minChildBlocks,maxChildBlocks:e.maxChildBlocks,minSiblingBlocks:e.minSiblingBlocks,maxSiblingBlocks:e.maxSiblingBlocks,name:e.name,topLevel:e.topLevel,html:""}),o=new y({html:this._getNewFieldLayoutHtml(),layout:e.layout}),a=new b({field:this,settings:s,fieldLayout:o});this._createBlockTypeFrom(a)},_insertAt(t,e){const n=i()(t);e>=0&&e<this._items.length?n.insertAt(e,this.$blockTypesContainer):this.$blockTypesContainer.append(n)},"@newBlockType"(){this._createBlockTypeFrom(null)},"@newGroup"(){const t=[...this._templateNs,"items","groups"],e=S.getNewId(),i=new S({namespace:[...t,e],sortOrder:this._items.length,id:e}),n=new v({namespace:t,field:this,settings:i}),s=this.getSelectedItem(),o=s?s.getSortOrder():-1;this.addItem(n,o),this.selectItem(n)},"@selectItem"(t){const e=this.getItemByElement(t.currentTarget);this.selectItem(e)}});var D;const P=null!==(D=window)&&void 0!==D?D:void 0,M=[];P.Neo={Configurator:O,configurators:M,createConfigurator(){const t=new O(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return M.push(t),t}}})();
//# sourceMappingURL=neo-configurator.js.map