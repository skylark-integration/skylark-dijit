/**
 * dijit - A version of dijit.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dijit/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/mouse","dojo/on","../typematic","./RangeBoundTextBox","dojo/text!./templates/Spinner.html","./_TextBoxMixin"],function(t,e,i,o,s,a,r,h,n,l){return t("dijit.form._Spinner",h,{defaultTimeout:500,minimumTimeout:10,timeoutChangeRate:.9,smallDelta:1,largeDelta:10,templateString:n,baseClass:"dijitTextBox dijitSpinner",cssStateNodes:{upArrowNode:"dijitUpArrowButton",downArrowNode:"dijitDownArrowButton"},adjust:function(t){return t},_arrowPressed:function(t,e,i){this.disabled||this.readOnly||(this._setValueAttr(this.adjust(this.get("value"),e*i),!1),l.selectInputText(this.textbox,this.textbox.value.length))},_arrowReleased:function(){this._wheelTimer=null},_typematicCallback:function(t,i,o){var s=this.smallDelta;if(i==this.textbox){var a=o.keyCode;s=a==e.PAGE_UP||a==e.PAGE_DOWN?this.largeDelta:this.smallDelta,i=a==e.UP_ARROW||a==e.PAGE_UP?this.upArrowNode:this.downArrowNode}-1==t?this._arrowReleased(i):this._arrowPressed(i,i==this.upArrowNode?1:-1,s)},_wheelTimer:null,_mouseWheeled:function(t){t.stopPropagation(),t.preventDefault();var e=t.wheelDelta/120;Math.floor(e)!=e&&(e=t.wheelDelta>0?1:-1);var i=t.detail?-1*t.detail:e;if(0!==i){var o=this[i>0?"upArrowNode":"downArrowNode"];this._arrowPressed(o,i,this.smallDelta),this._wheelTimer&&this._wheelTimer.remove(),this._wheelTimer=this.defer(function(){this._arrowReleased(o)},50)}},_setConstraintsAttr:function(t){this.inherited(arguments),this.focusNode&&(void 0!==this.constraints.min?this.focusNode.setAttribute("aria-valuemin",this.constraints.min):this.focusNode.removeAttribute("aria-valuemin"),void 0!==this.constraints.max?this.focusNode.setAttribute("aria-valuemax",this.constraints.max):this.focusNode.removeAttribute("aria-valuemax"))},_setValueAttr:function(t,e){this.focusNode.setAttribute("aria-valuenow",t),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.own(a(this.domNode,s.wheel,i.hitch(this,"_mouseWheeled")),r.addListener(this.upArrowNode,this.textbox,{keyCode:e.UP_ARROW,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout),r.addListener(this.downArrowNode,this.textbox,{keyCode:e.DOWN_ARROW,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout),r.addListener(this.upArrowNode,this.textbox,{keyCode:e.PAGE_UP,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout),r.addListener(this.downArrowNode,this.textbox,{keyCode:e.PAGE_DOWN,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout,this.minimumTimeout))}})});
//# sourceMappingURL=../sourcemaps/form/_Spinner.js.map