// Garden Gnome Software - Skin
// Pano2VR 7.0.10/20025
// Filename: ?? VR ??? - ????.ggsk
// Generated 2024-05-06T19:38:50

function pano2vrSkin(player,base) {
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_short', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_button_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skin_show', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_long', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footprint', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 1, defaultValue: false } });
	player.addVariable('vis_footprint_no', 2, false, { ignoreInState: 0 , customProperty: { variableType: 2, propertyType: 0, defaultValue: false } });
	player.addVariable('vis_direction', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_tag', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonClick', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sound', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapangle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_onefloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_secondfloor', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__37=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100%;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__37.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__37.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__37.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__37.style.transition='right 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me.__37.ggCurrentLogicStatePosition == 0) {
					me.__37.style.right='0px';
					me.__37.style.bottom='0%';
				}
				else {
					me.__37.style.right='0px';
					me.__37.style.bottom='-100%';
				}
			}
		}
		me.__37.logicBlock_position();
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -55%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__39.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__39.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__39.style.transition='left 0s, top 0s';
				if (me.__39.ggCurrentLogicStatePosition == 0) {
					me.__39.style.left='0px';
					me.__39.style.top='-52%';
				}
				else {
					me.__39.style.left='0px';
					me.__39.style.top='-55%';
				}
			}
		}
		me.__39.logicBlock_position();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		me.__37.appendChild(me.__39);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 199px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 607px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 608px; height: 0px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 608px; height: 0px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 200px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -260%;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1.style.left = 'calc(50% - (95% / 2))';
					me._scrollarea_1.style.top='-203%';
				}
				else {
					me._scrollarea_1.style.left='calc(50% - ((95% + 0px) / 2) + 0%)';
					me._scrollarea_1.style.top='-260%';
				}
			}
		}
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._scrollarea_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._scrollarea_1.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._scrollarea_1.ggCurrentLogicStateSize == 0) {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					me._scrollarea_1.style.left = 'calc(50% - (95% / 2))';
					skin.updateSize(me._scrollarea_1);
				}
				else {
					me._scrollarea_1.style.width='95%';
					me._scrollarea_1.style.height='200px';
					me._scrollarea_1.style.left = 'calc(50% - (95% / 2))';
					skin.updateSize(me._scrollarea_1);
				}
			}
		}
		me._scrollarea_1.logicBlock_size();
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggHorScrollVisible = true;
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__38;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__38.ggUpdating == true) return;
			me.__38.ggUpdating = true;
			var el=me.__38;
			var curNumRows = 0;
			curNumRows = me.__38.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__38.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__38.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__38.getFilteredNodes(tourNodes, filter);
			me.__38.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__38.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__38.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__38.ggWidth) + 'px';
				parameter.width=me.__38.ggWidth + 'px';
				parameter.height=me.__38.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__38_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me.__38.ggNodeCount = me.__38.ggNumFilterPassed;
			me.__38.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__38.parentNode && me.__38.parentNode.classList.contains('ggskin_subelement') && me.__38.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__38.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "메인";
		el.ggId="\uc9c0\ud558\uce35";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__38.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__38.ggCurrentLogicStateSize = newLogicStateSize;
				me.__38.style.transition='width 0s, height 0s';
				if (me.__38.ggCurrentLogicStateSize == 0) {
					me.__38.ggWidth=100;
					me.__38.ggHeight=150;
					me.__38.ggUpdate();
					skin.updateSize(me.__38);
				}
				else {
					me.__38.ggWidth=150;
					me.__38.ggHeight=200;
					me.__38.ggUpdate();
					skin.updateSize(me.__38);
				}
			}
		}
		me.__38.logicBlock_size();
		me.__38.ggCurrentLogicStateSize = -1;
		me.__38.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__38.childNodes.length; i++) {
				var child=me.__38.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__38.ggUpdatePosition=function (useTransition) {
			me.__38.ggUpdate();
		}
		me.__18a.appendChild(me.__38);
		me._scrollarea_1__content.appendChild(me.__18a);
		me.__37.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__37);
		el=me.__14=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 380px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : calc(50% - ((380px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__14.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__14.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__14.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__14.style.transition='right 0s, top 0s, transform 0s';
				if (me.__14.ggCurrentLogicStatePosition == 0) {
					me.__14.style.right='10px';
					me.__14.style.top = 'calc(50% - (380px / 2) + (0px / 2) + 5px)';
				}
				else {
					me.__14.style.right='15px';
					me.__14.style.top='calc(50% - ((380px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__14.logicBlock_position();
		me.__14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__14.style.transition='right 0s, top 0s, transform 0s';
				if (me.__14.ggCurrentLogicStateScaling == 0) {
					me.__14.ggParameter.sx = 0.9;
					me.__14.ggParameter.sy = 0.85;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
				else {
					me.__14.ggParameter.sx = 1;
					me.__14.ggParameter.sy = 1;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
			}
		}
		me.__14.logicBlock_scaling();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._rectangle_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._rectangle_2.style.transition='width 500ms ease-in 0ms, height 500ms ease-in 0ms, top 500ms ease-in 0ms';
				if (me._rectangle_2.ggCurrentLogicStateSize == 0) {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='0%';
					me._rectangle_2.style.top = 'calc(50% - (0% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.style.width='100%';
					me._rectangle_2.style.height='100%';
					me._rectangle_2.style.top = 'calc(50% - (100% / 2))';
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_size();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58\ubc15\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uacf5\uac04\uc120\ud0dd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
				else if (me.__35.ggCurrentLogicStateVisible == 1) {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
				else {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.onclick=function (e) {
			player.setVariableValue('vis_roomchoice', !player.getVariableValue('vis_roomchoice'));
			me.__4.ggVisible = !me.__4.ggVisible;
			var flag=me.__4.ggVisible;
			me.__4.style.transition='none';
			me.__4.style.visibility=((flag)&&(Number(me.__4.style.opacity)>0||!me.__4.style.opacity))?'inherit':'hidden';
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='background-color 0s';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
				else {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_roomchoice') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__210.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__210.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__210.style.transition='background-color 0s';
				if (me.__210.ggCurrentLogicStateBackgroundColor == 0) {
					me.__210.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__210.style.backgroundColor="rgba(34,30,31,1)";
				}
			}
		}
		me.__210.logicBlock_backgroundcolor();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__210);
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc120\ud0dd\ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\n\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		el.appendChild(els);
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me.__36);
		me.__17.appendChild(me.__35);
		el=me.__32=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__32.style.transition='';
				if (me.__32.ggCurrentLogicStateVisible == 0) {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
				else if (me.__32.ggCurrentLogicStateVisible == 1) {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
				else {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
			}
		}
		me.__32.logicBlock_visible();
		me.__32.onclick=function (e) {
			me.__.ggVisible = !me.__.ggVisible;
			var flag=me.__.ggVisible;
			me.__.style.transition='none';
			me.__.style.visibility=((flag)&&(Number(me.__.style.opacity)>0||!me.__.style.opacity))?'inherit':'hidden';
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				player.setVariableValue('vis_mobilemap', false);
			}
			player.setVariableValue('vis_roomchoice', false);
			me.__34.style.transition='none';
			me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
			me.__34.ggVisible=true;
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd2c\uc601\uc815\ubcf4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\n\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me.__33);
		me.__17.appendChild(me.__32);
		el=me.__29=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 113px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__29.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__29.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__29.style.transition='';
				if (me.__29.ggCurrentLogicStateVisible == 0) {
					me.__29.style.visibility="hidden";
					me.__29.ggVisible=false;
				}
				else if (me.__29.ggCurrentLogicStateVisible == 1) {
					me.__29.style.visibility="hidden";
					me.__29.ggVisible=false;
				}
				else {
					me.__29.style.visibility=(Number(me.__29.style.opacity)>0||!me.__29.style.opacity)?'inherit':'hidden';
					me.__29.ggVisible=true;
				}
			}
		}
		me.__29.logicBlock_visible();
		me.__29.onclick=function (e) {
			me.__11.style.transition='none';
			me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
			me.__11.ggVisible=true;
			me.__15.style.transition='none';
			me.__15.style.visibility='hidden';
			me.__15.ggVisible=false;
			me.__6.style.transition='none';
			me.__6.style.visibility='hidden';
			me.__6.ggVisible=false;
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me.__37.style.transition='none';
			me.__37.style.visibility='hidden';
			me.__37.ggVisible=false;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__31);
		el=me.__30=document.createElement('div');
		els=me.__30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud31f\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\n\uc81c\uac70", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__30.ggUpdateText();
		el.appendChild(els);
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__30);
		me.__17.appendChild(me.__29);
		el=me.__26=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__26.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__26.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__26.style.transition='';
				if (me.__26.ggCurrentLogicStateVisible == 0) {
					me.__26.style.visibility="hidden";
					me.__26.ggVisible=false;
				}
				else if (me.__26.ggCurrentLogicStateVisible == 1) {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
				else {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
			}
		}
		me.__26.logicBlock_visible();
		me.__26.onclick=function (e) {
			player.toggleAutorotate();
			me.__28.ggVisible = !me.__28.ggVisible;
			var flag=me.__28.ggVisible;
			me.__28.style.transition='none';
			me.__28.style.visibility=((flag)&&(Number(me.__28.style.opacity)>0||!me.__28.style.opacity))?'inherit':'hidden';
			player.setVariableValue('vis_icon5', true);
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__27.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\n\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__27.ggUpdateText();
		el.appendChild(els);
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__26.appendChild(me.__27);
		me.__17.appendChild(me.__26);
		el=me.__22=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__22.style.transition='';
				if (me.__22.ggCurrentLogicStateVisible == 0) {
					me.__22.style.visibility="hidden";
					me.__22.ggVisible=false;
				}
				else if (me.__22.ggCurrentLogicStateVisible == 1) {
					me.__22.style.visibility="hidden";
					me.__22.ggVisible=false;
				}
				else {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
			}
		}
		me.__22.logicBlock_visible();
		me.__22.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__25.ggVisible = !me.__25.ggVisible;
			var flag=me.__25.ggVisible;
			me.__25.style.transition='none';
			me.__25.style.visibility=((flag)&&(Number(me.__25.style.opacity)>0||!me.__25.style.opacity))?'inherit':'hidden';
			me.__24.style.transition='none';
			me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
			me.__24.ggVisible=true;
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\uc0ac\uc644\ub8cc\ud0dd\uc2a4\ud2b8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\n\uc644\ub8cc\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__24);
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\n\ubcf5\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__23.ggUpdateText();
		el.appendChild(els);
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.onclick=function (e) {
			me.__23.style.transition='none';
			me.__23.style.visibility='hidden';
			me.__23.ggVisible=false;
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__23);
		me.__17.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ud0c0\uc774\uba38";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -234px;';
		hs+='position : absolute;';
		hs+='top : 157px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			return (me.__21.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me.__21.ggTimestamp) / me.__21.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.__21.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__21.style.transition='';
				if (me.__21.ggCurrentLogicStateVisible == 0) {
					me.__21.style.visibility=(Number(me.__21.style.opacity)>0||!me.__21.style.opacity)?'inherit':'hidden';
					me.__21.ggVisible=true;
				}
				else {
					me.__21.style.visibility=(Number(me.__21.style.opacity)>0||!me.__21.style.opacity)?'inherit':'hidden';
					me.__21.ggVisible=true;
				}
			}
		}
		me.__21.logicBlock_visible();
		me.__21.ggActivate=function () {
			me.__24.style.transition='none';
			me.__24.style.visibility='hidden';
			me.__24.ggVisible=false;
			me.__23.style.transition='none';
			me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
			me.__23.ggVisible=true;
			me.__25.style.transition='none';
			me.__25.style.visibility='hidden';
			me.__25.ggVisible=false;
		}
		me.__21.ggCurrentLogicStateVisible = -1;
		me.__21.ggUpdateConditionTimer=function () {
			me.__21.logicBlock_visible();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__17.appendChild(me.__21);
		el=me.__18=document.createElement('div');
		el.ggId="\uc544\uc774\ucf58-\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 271px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin_show') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
				else if (me.__18.ggCurrentLogicStateVisible == 1) {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
				else {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__20.style.transition='';
				if (me.__20.ggCurrentLogicStateVisible == 0) {
					me.__20.style.visibility=(Number(me.__20.style.opacity)>0||!me.__20.style.opacity)?'inherit':'hidden';
					me.__20.ggVisible=true;
				}
				else {
					me.__20.style.visibility="hidden";
					me.__20.ggVisible=false;
				}
			}
		}
		me.__20.logicBlock_visible();
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me.__20);
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\n\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me.__19);
		me.__17.appendChild(me.__18);
		me._rectangle_2.appendChild(me.__17);
		me.__14.appendChild(me._rectangle_2);
		el=me.__15=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWElEQVR4nO2bS29VVRiGn0pL7QVNnEsc+jdMnLVcbIsOFCXiwJgQRdGCCCXYhIGApZREEyheEBEKTYy/wX9gnBKYGS/0QiGKHAfv3omF/e3Ld9beu4P1TE722Wt9e533rO+2etrT6XSIPM4TbS9goxKFMYjCGERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiD3qw3b9663fQ6+oEXgV+Am00++Lmtz2a+vxF2zBAwCfwEnAKeanc5InPHNMiTwEfAJ8n1WPK6B1hpY0Epbe+YI8D7j6xjDLiMdlJrtCVMDzANfAgMZ9wfBX4w7jVCG8IMA8dQXOnLGTcCfE9LO6dpYTYB+1FcKRPfRoFLtLBzmhRmAP'+
			'gYOI6Cbll2AhdpOFs1lZWG0C456pw/geLSm8ByqEXl0dSOOQh80KWNceAbGnKrJoQ5DhwgTBDdAVwJZCuXOoUZAE6guFIlphQxQgPi1CXMAIop+1EmCs0oSuW1uVUdwmwG3kNlfn8N9lO2AV8BW+owHjorDaFqdiqwXYtxoAO8BSyFNBxSmD6UfSYD2izDBNr5ewjYeIZ0pSkUU/LK/Dz+AmaBVcfcMVQhBwvIIYTpQw3hJP6FLaG0/i7wKvDQYWM7ajwHnWtYR7fCDKN0PInfLe+jpvJccv0jsMtpK1gq70aYTegbPoRflLuo+JsF/vnf+zeQe9xz2NwGfEeXqdwrzCBKx9P4U/K9xMY82a6zCOzG1xvtoMvG0/NNp13yYe9D0U45BJwtGHcdNY/zVK9XJpLXvTjE9eyYw8iFvCyjLrtIlJQFVKd43GoC+BqHW1UV'+
			'5hgq9b3+u4Lc73TFeVeB14F/Hc/cieMksKwwW9AHOoK/TrmbzD/jnL8AvIwq3aqkZ8ilxSkjTD8q3A6UHJ/FGgq0c8DfThugbDUOPHDMHaHCXx+KPuhmJMgU/uyzhlqFc/hc4VEWgVfwVcjbgW8pEcjzhBlEgXa6YFweqyiDfcn6OqVbbqDeyJPKXwIuAE/nDbLSdS9Kp90cR67QXUwpIk3lF6meDHahAnUvcCdrgCXMLPAGqlk8LKPepy5RUhaQOJeQ21dhDHgGeCHrpiXMr/ibsSXW9z51cw1Vzlep7vJ/WDcsQ2eBfRUfAmoIj6LsEzKmFHGd6o3neeAd62aewnPoiLJsalxDxd9chTkhSRvP+yXGzqMY+ps1oGjrnUkMFKXZtE45j+8sJRSLwGvkZ6vL6Av8Pc9QmSbyZPL6mXF/FWWfmRK2miDNVhdY310/RG'+
			'c1b1PiCLRssDpJduq+g2LKTEk7TZE2nmvJdQc1k/soeS5c5djhNFL98+R6GfiU+lOyl2tIkCvo4Oog8GfZyVXPY2bQLjuF3OcL2o0pRSyg9uFncgJtFj1Z/yxa8KvNXuB5VOuE6H1axfrVZqYwkfZ/nLhhicIYRGEMojAGURiDKIxBFMYgCmMQhTGIwhhEYQyiMAZRGIMojEEUxuA/j2DFlHKsEz0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58up";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74.4186%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((74.4186% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up.style.transition='';
				if (me._up.ggCurrentLogicStateVisible == 0) {
					me._up.style.visibility="hidden";
					me._up.ggVisible=false;
				}
				else {
					me._up.style.visibility=(Number(me._up.style.opacity)>0||!me._up.style.opacity)?'inherit':'hidden';
					me._up.ggVisible=true;
				}
			}
		}
		me._up.logicBlock_visible();
		me._up.onclick=function (e) {
			player.setVariableValue('vis_short', true);
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me.__15.appendChild(me._up);
		el=me.__16=document.createElement('div');
		el.ggId="\ud654\uc0b4\ud45c\ub2e4\uc6b4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me.elementMouseOver['_16'] == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__16.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__16.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__16.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__16.ggCurrentLogicStatePosition == 0) {
					me.__16.style.left='-10px';
					me.__16.style.top = 'calc(50% - (43px / 2))';
				}
				else if (me.__16.ggCurrentLogicStatePosition == 1) {
					me.__16.style.left='20px';
					me.__16.style.top = 'calc(50% - (43px / 2))';
				}
				else {
					me.__16.style.left='0px';
					me.__16.style.top='calc(50% - ((43px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__16.logicBlock_position();
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else if (me.__16.ggCurrentLogicStateVisible == 1) {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
				else {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_long') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__16.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__16.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__16.style.transition='left 500ms ease 500ms, top 500ms ease 500ms, opacity 500ms ease 0ms';
				if (me.__16.ggCurrentLogicStateAlpha == 0) {
					me.__16.style.visibility=me.__16.ggVisible?'inherit':'hidden';
					me.__16.style.opacity=1;
				}
				else if (me.__16.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me.__16.style.opacity == 0.0) { me.__16.style.visibility="hidden"; } }, 505);
					me.__16.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me.__16.style.opacity == 0.0) { me.__16.style.visibility="hidden"; } }, 505);
					me.__16.style.opacity=0;
				}
			}
		}
		me.__16.logicBlock_alpha();
		me.__16.onmouseover=function (e) {
			me.elementMouseOver['_16']=true;
			me.__16.logicBlock_position();
		}
		me.__16.onmouseout=function (e) {
			me.elementMouseOver['_16']=false;
			me.__16.logicBlock_position();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(34,30,31,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style.transition='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
				else {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
			}
		}
		me._rectangle_3.logicBlock_visible();
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('vis_long', true);
			player.setVariableValue('vis_short', false);
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._dowm=document.createElement('div');
		els=me._dowm__img=document.createElement('img');
		els.className='ggskin ggskin_dowm';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAEWElEQVR4nO2bS29VVRiGn0pL7QVNnEsc+jdMnLVcbIsOFCXiwJgQRdGCCCXYhIGApZREEyheEBEKTYy/wX9gnBKYGS/0QiGKHAfv3omF/e3Ld9beu4P1TE722Wt9e533rO+2etrT6XSIPM4TbS9goxKFMYjCGERhDKIwBlEYgyiMQRTGIApjEIUxiMIYRGEMojAGURiD3qw3b9663fQ6+oEXgV+Am00++Lmtz2a+vxF2zBAwCfwEnAKeanc5InPHNMiTwEfAJ8n1WPK6B1hpY0Epbe+YI8D7j6xjDLiMdlJrtCVMDzANfAgMZ9wfBX4w7jVCG8IMA8dQXOnLGTcCfE9LO6dpYTYB+1FcKRPfRoFLtLBzmhRmAP'+
			'gYOI6Cbll2AhdpOFs1lZWG0C456pw/geLSm8ByqEXl0dSOOQh80KWNceAbGnKrJoQ5DhwgTBDdAVwJZCuXOoUZAE6guFIlphQxQgPi1CXMAIop+1EmCs0oSuW1uVUdwmwG3kNlfn8N9lO2AV8BW+owHjorDaFqdiqwXYtxoAO8BSyFNBxSmD6UfSYD2izDBNr5ewjYeIZ0pSkUU/LK/Dz+AmaBVcfcMVQhBwvIIYTpQw3hJP6FLaG0/i7wKvDQYWM7ajwHnWtYR7fCDKN0PInfLe+jpvJccv0jsMtpK1gq70aYTegbPoRflLuo+JsF/vnf+zeQe9xz2NwGfEeXqdwrzCBKx9P4U/K9xMY82a6zCOzG1xvtoMvG0/NNp13yYe9D0U45BJwtGHcdNY/zVK9XJpLXvTjE9eyYw8iFvCyjLrtIlJQFVKd43GoC+BqHW1UV'+
			'5hgq9b3+u4Lc73TFeVeB14F/Hc/cieMksKwwW9AHOoK/TrmbzD/jnL8AvIwq3aqkZ8ilxSkjTD8q3A6UHJ/FGgq0c8DfThugbDUOPHDMHaHCXx+KPuhmJMgU/uyzhlqFc/hc4VEWgVfwVcjbgW8pEcjzhBlEgXa6YFweqyiDfcn6OqVbbqDeyJPKXwIuAE/nDbLSdS9Kp90cR67QXUwpIk3lF6meDHahAnUvcCdrgCXMLPAGqlk8LKPepy5RUhaQOJeQ21dhDHgGeCHrpiXMr/ibsSXW9z51cw1Vzlep7vJ/WDcsQ2eBfRUfAmoIj6LsEzKmFHGd6o3neeAd62aewnPoiLJsalxDxd9chTkhSRvP+yXGzqMY+ps1oGjrnUkMFKXZtE45j+8sJRSLwGvkZ6vL6Av8Pc9QmSbyZPL6mXF/FWWfmRK2miDNVhdY310/RG'+
			'c1b1PiCLRssDpJduq+g2LKTEk7TZE2nmvJdQc1k/soeS5c5djhNFL98+R6GfiU+lOyl2tIkCvo4Oog8GfZyVXPY2bQLjuF3OcL2o0pRSyg9uFncgJtFj1Z/yxa8KvNXuB5VOuE6H1axfrVZqYwkfZ/nLhhicIYRGEMojAGURiDKIxBFMYgCmMQhTGIwhhEYQyiMAZRGIMojEEUxuA/j2DFlHKsEz0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ud654\uc0b4\ud45c\uc544\uc774\ucf58dowm";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:0.6,sy:0.6,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 74.4186%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((74.4186% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._dowm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dowm.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_short') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dowm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dowm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dowm.style.transition='';
				if (me._dowm.ggCurrentLogicStateVisible == 0) {
					me._dowm.style.visibility=(Number(me._dowm.style.opacity)>0||!me._dowm.style.opacity)?'inherit':'hidden';
					me._dowm.ggVisible=true;
				}
				else {
					me._dowm.style.visibility="hidden";
					me._dowm.ggVisible=false;
				}
			}
		}
		me._dowm.logicBlock_visible();
		me._dowm.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._dowm);
		me.__16.appendChild(me._rectangle_3);
		me.__15.appendChild(me.__16);
		me.__14.appendChild(me.__15);
		me.divSkin.appendChild(me.__14);
		el=me.__11=document.createElement('div');
		el.ggId="\uc2a4\ud0a8 \ubcf4\uc774\uae30 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__11.onclick=function (e) {
			me.__6.style.transition='none';
			me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
			me.__6.ggVisible=true;
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me.__37.style.transition='none';
			me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
			me.__37.ggVisible=true;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
			me._rectangle_2.ggVisible=true;
			me.__11.style.transition='none';
			me.__11.style.visibility='hidden';
			me.__11.ggVisible=false;
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ubcf4\uae30 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : rgba(34,30,31,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__13);
		el=me.__12=document.createElement('div');
		els=me.__12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud0a8 \ubcf4\uae30";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__12.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc2a4\ud0a8\n\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__12.ggUpdateText();
		el.appendChild(els);
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__12);
		me.divSkin.appendChild(me.__11);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 326px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._start);
		el=me.__6=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 54px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='left 0s, top 0s, transform 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.left='-40px';
					me.__6.style.top='5px';
				}
				else {
					me.__6.style.left='0px';
					me.__6.style.top='5px';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__6.style.transition='left 0s, top 0s, transform 0s';
				if (me.__6.ggCurrentLogicStateScaling == 0) {
					me.__6.ggParameter.sx = 0.8;
					me.__6.ggParameter.sy = 0.8;
					me.__6.style.transform=parameterToTransform(me.__6.ggParameter);
					skin.updateSize(me.__6);
				}
				else {
					me.__6.ggParameter.sx = 1;
					me.__6.ggParameter.sy = 1;
					me.__6.style.transform=parameterToTransform(me.__6.ggParameter);
					skin.updateSize(me.__6);
				}
			}
		}
		me.__6.logicBlock_scaling();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\ub85c\uace0\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((51px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 125.59%;';
		hs+='left : calc(50% - ((89.4118% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((125.59% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 89.4118%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		els=me.__8__img=document.createElement('img');
		els.className='ggskin ggskin__8';
		hs='data:image/png;base64,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'+
			'AAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc5b8\ud53d\uc158\ub85c\uace0";
		el.ggDx=25;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 25px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me.__8);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=20;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 20px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("HABANG", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_1);
		me._container_2.appendChild(me._container_1);
		me.__7.appendChild(me._container_2);
		me.__6.appendChild(me.__7);
		me.divSkin.appendChild(me.__6);
		el=me.__4=document.createElement('div');
		el.ggId="\ud558\ubc29 \uc6cc\ud130\ub9c8\ud06c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__4.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__4.ggCurrentLogicStatePosition == 0) {
					me.__4.style.left='-100px';
					me.__4.style.bottom='10px';
				}
				else {
					me.__4.style.left='0px';
					me.__4.style.bottom='10px';
				}
			}
		}
		me.__4.logicBlock_position();
		me.__4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__4.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__4.ggCurrentLogicStateScaling == 0) {
					me.__4.ggParameter.sx = 0.5;
					me.__4.ggParameter.sy = 0.6;
					me.__4.style.transform=parameterToTransform(me.__4.ggParameter);
					skin.updateSize(me.__4);
				}
				else {
					me.__4.ggParameter.sx = 1;
					me.__4.ggParameter.sy = 1;
					me.__4.style.transform=parameterToTransform(me.__4.ggParameter);
					skin.updateSize(me.__4);
				}
			}
		}
		me.__4.logicBlock_scaling();
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		els=me.__5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0ac\uc804\uc810\uac80\ub300\ud589";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,0.705882);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc804\uc810\uac80\ub300\ud589\uc5c5\uccb4 \ud558\ubc29(\ubb38\uc758: 1566-2384)", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5.ggUpdateText();
		el.appendChild(els);
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me.__5);
		me.divSkin.appendChild(me.__4);
		el=me.__=document.createElement('div');
		el.ggId="\uc138\ubd80\uc815\ubcf4\ud31d\uc5c5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 500px;';
		hs+='left : calc(50% - ((380px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((500px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 380px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__.style.transition='transform 0s';
				if (me.__.ggCurrentLogicStateScaling == 0) {
					me.__.ggParameter.sx = 0.8;
					me.__.ggParameter.sy = 0.8;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
				else {
					me.__.ggParameter.sx = 1;
					me.__.ggParameter.sy = 1;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_scaling();
		me.__.onclick=function (e) {
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
			me.__34.style.transition='none';
			me.__34.style.visibility='hidden';
			me.__34.ggVisible=false;
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		el.ggId="\uc138\ubd80\uc815\ubcf4\ud31d\uc5c5\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3=document.createElement('div');
		els=me.__3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4\ub0b4\uc6a9";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 350px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd2c\uc601\uc815\ubcf4\n\ub0a0  \uc9dc : 2024\ub144 4\uc6d4 30\uc77c \ud654\uc694\uc77c\n\uc7a5  \uc18c : \uc6b8\uc0b0 OOO OO \uc544\ud30c\ud2b8\n\uace0\uac1d\uba85 : OOO \ub2d8\n\n\ud558\ubc29(HABANG)\n\ubc95\uc778\uba85 : \uc8fc\uc2dd\ud68c\uc0ac \uc5d0\uc774\uce58\uc5d4\ube44\ud14c\ud06c\n\ube0c\ub79c\ub4dc : \ud558\ubc29\n\uc11c\ube44\uc2a4 : [\uc2e4\uc0ac VR(360\ub3c4) \ucd2c\uc601]\n\uc8fc  \uc18c : \uc6b8\uc0b0\uad11\uc5ed\uc2dc \uc911\uad6c \ub3d9\ucc9c 1\uae38 \uc138\uc601\uc774\ub178\uc138\ube10 \uc9c0\uc2dd\uc0b0\uc5c5\uc13c\ud130\nE-mail : hnb-tech@nate.com\nTEL. 1566-2384\nFAX. 070-4773-2028\n\n\uc81c\ud488\uc124\uba85\n\uc0c1\uae30 VR(360\ub3c4) \ucd2c\uc601 \uc11c\ube44\uc2a4\ub294 VR(360\ub3c4) \ucd2c\uc601 \uc601\uc0c1 \ubc0f \uc774\ubbf8\uc9c0\ub97c \ud558\uc5ec \ub514\uc9c0\ud138\ud654 \ud558\uc5ec \uacf5\uac04\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uccb4\ud5d8 \ubc0f \uc800\uc7a5(\uae30\ub85d) \ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uc11c\ube44\uc2a4 \uc785\ub2c8\ub2e4.  \n\n\uc801\uc6a9\uc0ac\ub840\n1. \uc0ac\uc804\uc810\uac80 \uc2dc \uc544\ud30c\ud2b8 \uacf5\uac04 \ucd2c\uc601 \uc815\ubcf4 \uc800\uc7a5\n2. \uc8fc\ud0dd \uc784\ub300\ucc28\uacc4\uc57d \uc2dc \uc6d0\uc0c1\ubcf5\uad6c \uc758\ubb34 \uad00\ub828 \uacf5\uac04 \ucd2c\uc601 \uc815\ubcf4 \uc800\uc7a5\n3. \uc0c1\uac00 \uc784\ub300\ucc28\uacc4\uc57d \uc2dc \uc6d0\uc0c1\ubcf5\uad6c \uc758\ubb34 \uad00\ub828 \uacf5\uac04 \ucd2c\uc601 \uc815\ubcf4 \uc800\uc7a5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3.ggUpdateText();
		el.appendChild(els);
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		els=me.__2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc138\ubd80\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ubd80\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2.ggUpdateText();
		el.appendChild(els);
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		els=me.__1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud648\ud398\uc774\uc9c0 \ubc14\ub85c\uac00\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='bottom : 25px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 900;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc608\uc57d\ubb38\uc758", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1.ggUpdateText();
		el.appendChild(els);
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.onclick=function (e) {
			player.openUrl("https:\/\/www.habang.kr\/36\n","");
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__1);
		me.__.appendChild(me.__0);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAitJREFUeF7tmuFOwzAMhLM3gycDngzebJPFgqKqaWznzp5IKvEH0vjuyzlbQ29l8eu2uP+yAewELE5gt8DiAdib4G6B3QKLE/C2wFspRX4+X4ifS5MHwPfTfPX+Xkr5SQQhxj8aTaJFNKkuKwBZcSl2vLIgiHlZELceK4BeQREQDeFKy5e2Pa0AxOixBVr6URCuzIsetS/1wMblqDgbArS+B4CwgIpQ7Va/g+B1vQAoYgYg4OZNvdIRRxF1UotWZyYBVSdN3LMAdX4EAGY7UM0jWqBNK1oser7TLkYlAN0OIebRCUBBCDPPAjCzJ4SaZwLwQAg3zwZggZBiPgKABoI8uZ09Ytc9hfpsgf4U6H2bHa1w7z6q+agEaD8djhDo5q'+
			'MBaNohJPYt6agWaGv2jtXqGPVpTq9vLL+PBqDdC0LiH90CWvOhbRCVAKv5MAgRAEbm//X3gJH52uvacZb9TTWWmQCrKet4lcHRIBYArxnvfSOf3b8zAMyamL3fBAMNACUeNc8QBhIAWjR6vlMYKAAssax5/2AgALBFUuefBUAV12SWVmcGAE1UZ+ei1PMCoIgZbtkv8t/hLPPakyXTo7QnAfeLlTIVV6y454wx5SUpERplXpMEtRZrAnrxVxecWPWzW3t61MdqVgAion1JSuImxbLfE2xflaO2QF0FOdiUQpnGj4lwafIkAJzi3Ok2gFz++dV3AvLXIFfBTkAu//zqOwH5a5CrYPkEPADiMJpBN5ipjwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -30px;';
		hs+='top : -28px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._image_1);
		me.divSkin.appendChild(me.__);
		me.__37.logicBlock_position();
		me.__39.logicBlock_position();
		me._scrollarea_1.logicBlock_position();
		me._scrollarea_1.logicBlock_size();
		me.__38.logicBlock_size();
		me.__14.logicBlock_position();
		me.__14.logicBlock_scaling();
		me._rectangle_2.logicBlock_size();
		me.__35.logicBlock_visible();
		me.__210.logicBlock_visible();
		me.__210.logicBlock_backgroundcolor();
		me.__32.logicBlock_visible();
		me.__29.logicBlock_visible();
		me.__26.logicBlock_visible();
		me.__22.logicBlock_visible();
		me.__21.logicBlock_visible();
		me.__18.logicBlock_visible();
		me.__20.logicBlock_visible();
		me._up.logicBlock_visible();
		me.__16.logicBlock_position();
		me.__16.logicBlock_visible();
		me.__16.logicBlock_alpha();
		me._rectangle_3.logicBlock_visible();
		me._dowm.logicBlock_visible();
		me.__6.logicBlock_position();
		me.__6.logicBlock_scaling();
		me.__4.logicBlock_position();
		me.__4.logicBlock_scaling();
		me.__.logicBlock_scaling();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__37.logicBlock_position();
			me.__38.ggUpdateConditionNodeChange();
			me._rectangle_2.logicBlock_size();
			me.__35.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__32.logicBlock_visible();
			me.__29.logicBlock_visible();
			me.__26.logicBlock_visible();
			me.__22.logicBlock_visible();
			me.__21.logicBlock_visible();
			me.__18.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__16.logicBlock_position();
			me.__16.logicBlock_visible();
			me.__16.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__37.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_2.logicBlock_size();
			me.__35.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
			me.__32.logicBlock_visible();
			me.__29.logicBlock_visible();
			me.__26.logicBlock_visible();
			me.__22.logicBlock_visible();
			me.__18.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__16.logicBlock_position();
			me.__16.logicBlock_visible();
			me.__16.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
			player.setMediaVisibility("\uc5d0\uc5b4\ucee8","0",0);
		});
		player.addListener('fullscreenenter', function(event) {
			me.__20.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me.__20.logicBlock_visible();
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			for(var i = 0; i < me.__38.ggInstances.length; i++) {
				me.__38.ggInstances[i].ggEvent_sizechanged(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__39.logicBlock_position();
			me._scrollarea_1.logicBlock_position();
			me._scrollarea_1.logicBlock_size();
			me.__38.logicBlock_size();
			me.__14.logicBlock_position();
			me.__14.logicBlock_scaling();
			me.__6.logicBlock_position();
			me.__6.logicBlock_scaling();
			me.__4.logicBlock_position();
			me.__4.logicBlock_scaling();
			me.__.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_long', function(event) {
			me.__16.logicBlock_visible();
			me.__16.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_roomchoice', function(event) {
			me.__37.logicBlock_position();
			me.__210.logicBlock_visible();
			me.__210.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_short', function(event) {
			me._rectangle_2.logicBlock_size();
			me.__35.logicBlock_visible();
			me.__32.logicBlock_visible();
			me.__29.logicBlock_visible();
			me.__26.logicBlock_visible();
			me.__22.logicBlock_visible();
			me.__18.logicBlock_visible();
			me._up.logicBlock_visible();
			me.__16.logicBlock_position();
			me.__16.logicBlock_visible();
			me.__16.logicBlock_alpha();
			me._rectangle_3.logicBlock_visible();
			me._dowm.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin_show', function(event) {
			me.__35.logicBlock_visible();
			me.__32.logicBlock_visible();
			me.__29.logicBlock_visible();
			me.__26.logicBlock_visible();
			me.__22.logicBlock_visible();
			me.__18.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__38.ggUpdate();
		});
	};
	function SkinCloner__38_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 100px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 670))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodeimage_118a.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodeimage_118a.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodeimage_118a.style.transition='width 0s, height 0s';
				if (me._nodeimage_118a.ggCurrentLogicStateSize == 0) {
					me._nodeimage_118a.style.width='95px';
					me._nodeimage_118a.style.height='95px';
					skin.updateSize(me._nodeimage_118a);
				}
				else {
					me._nodeimage_118a.style.width='115px';
					me._nodeimage_118a.style.height='115px';
					skin.updateSize(me._nodeimage_118a);
				}
			}
		}
		me._nodeimage_118a.logicBlock_size();
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
			skin.__4.style.transition='none';
			skin.__4.style.visibility=(Number(skin.__4.style.opacity)>0||!skin.__4.style.opacity)?'inherit':'hidden';
			skin.__4.ggVisible=true;
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a0.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a0);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
		me._nodeimage_118a.logicBlock_size();
			me.ggEvent_sizechanged=function(event) {
				me._nodeimage_118a.logicBlock_size();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -25px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='0px';
				}
				else {
					me._lottie_2.style.left='-25px';
					me._lottie_2.style.top='-40px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		els=me.__10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px; line-height:12px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__10.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__10.ggUpdateText();
		player.addListener('changenode', function() {
			me.__10.ggUpdateText();
		});
		el.appendChild(els);
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__10.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__10.ggCurrentLogicStatePosition == 0) {
					me.__10.style.left = 'calc(50% - (65px / 2))';
					me.__10.style.bottom='0px';
				}
				else {
					me.__10.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__10.style.bottom='-28px';
				}
			}
		}
		me.__10.logicBlock_position();
		me.__10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__10.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__10.ggCurrentLogicStateSize = newLogicStateSize;
				me.__10.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__10.ggCurrentLogicStateSize == 0) {
					me.__10.style.width='100px';
					me.__10.style.height='25px';
					me.__10.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me.__10);
				}
				else {
					me.__10.style.width='65px';
					me.__10.style.height='25px';
					me.__10.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me.__10);
				}
			}
		}
		me.__10.logicBlock_size();
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else if (me.__10.ggCurrentLogicStateVisible == 1) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__10.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__10.ggCurrentLogicStateBackgroundColor == 0) {
					me.__10.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__10.style.backgroundColor="rgba(255,255,255,0.54902)";
				}
			}
		}
		me.__10.logicBlock_backgroundcolor();
		me.__10.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__10.ggCurrentLogicStateText != newLogicStateText) {
				me.__10.ggCurrentLogicStateText = newLogicStateText;
				me.__10.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__10.ggCurrentLogicStateText == 0) {
					if (me.__10.ggUpdateText) {
					me.__10.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__10.ggUpdateText();
					} else {
						if (me.__10.ggUpdatePosition) me.__10.ggUpdatePosition();
					}
				}
				else {
					if (me.__10.ggUpdateText) {
					me.__10.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__10.ggUpdateText();
					} else {
						if (me.__10.ggUpdatePosition) me.__10.ggUpdatePosition();
					}
				}
			}
		}
		me.__10.logicBlock_text();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__10);
		el=me.__9=document.createElement('div');
		els=me.__9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(34,34,34,1);';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__9.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__9.ggUpdateText();
		player.addListener('changenode', function() {
			me.__9.ggUpdateText();
		});
		el.appendChild(els);
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__9.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__9.ggCurrentLogicStatePosition == 0) {
					me.__9.style.left = 'calc(50% - (65px / 2))';
					me.__9.style.bottom='0px';
				}
				else if (me.__9.ggCurrentLogicStatePosition == 1) {
					me.__9.style.left = 'calc(50% - (65px / 2) + (0px / 2) + -5px)';
					me.__9.style.bottom='40px';
				}
				else {
					me.__9.style.left='calc(50% - ((65px + 0px) / 2) + 0px)';
					me.__9.style.bottom='-40px';
				}
			}
		}
		me.__9.logicBlock_position();
		me.__9.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__9.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__9.ggCurrentLogicStateSize = newLogicStateSize;
				me.__9.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__9.ggCurrentLogicStateSize == 0) {
					me.__9.style.width='50px';
					me.__9.style.height='25px';
					me.__9.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__9);
				}
				else if (me.__9.ggCurrentLogicStateSize == 1) {
					me.__9.style.width='50px';
					me.__9.style.height='25px';
					me.__9.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__9);
				}
				else if (me.__9.ggCurrentLogicStateSize == 2) {
					me.__9.style.width='100px';
					me.__9.style.height='30px';
					me.__9.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me.__9);
				}
				else {
					me.__9.style.width='65px';
					me.__9.style.height='30px';
					me.__9.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me.__9);
				}
			}
		}
		me.__9.logicBlock_size();
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
				else if (me.__9.ggCurrentLogicStateVisible == 1) {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
				else {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
			}
		}
		me.__9.logicBlock_visible();
		me.__9.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__9.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__9.ggCurrentLogicStateBackgroundColor == 0) {
					me.__9.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__9.style.backgroundColor="rgba(255,255,255,0.54902)";
				}
			}
		}
		me.__9.logicBlock_backgroundcolor();
		me.__9.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__9.ggCurrentLogicStateText != newLogicStateText) {
				me.__9.ggCurrentLogicStateText = newLogicStateText;
				me.__9.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__9.ggCurrentLogicStateText == 0) {
					if (me.__9.ggUpdateText) {
					me.__9.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__9.ggUpdateText();
					} else {
						if (me.__9.ggUpdatePosition) me.__9.ggUpdatePosition();
					}
				}
				else {
					if (me.__9.ggUpdateText) {
					me.__9.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__9.ggUpdateText();
					} else {
						if (me.__9.ggUpdatePosition) me.__9.ggUpdatePosition();
					}
				}
			}
		}
		me.__9.logicBlock_text();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__9);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__10.logicBlock_position();
		me.__10.logicBlock_size();
		me.__10.logicBlock_visible();
		me.__10.logicBlock_backgroundcolor();
		me.__10.logicBlock_text();
		me.__9.logicBlock_position();
		me.__9.logicBlock_size();
		me.__9.logicBlock_visible();
		me.__9.logicBlock_backgroundcolor();
		me.__9.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__10.logicBlock_size();
				me.__10.logicBlock_backgroundcolor();
				me.__10.logicBlock_text();
				me.__9.logicBlock_size();
				me.__9.logicBlock_backgroundcolor();
				me.__9.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__10.logicBlock_size();
				me.__10.logicBlock_backgroundcolor();
				me.__10.logicBlock_text();
				me.__9.logicBlock_size();
				me.__9.logicBlock_backgroundcolor();
				me.__9.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__10.logicBlock_size();
				me.__10.logicBlock_visible();
				me.__10.logicBlock_backgroundcolor();
				me.__10.logicBlock_text();
				me.__9.logicBlock_position();
				me.__9.logicBlock_size();
				me.__9.logicBlock_visible();
				me.__9.logicBlock_backgroundcolor();
				me.__9.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__10.logicBlock_position();
				me.__9.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_size();
				me.__10.logicBlock_visible();
				me.__9.logicBlock_size();
				me.__9.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me.__21.ggUpdateConditionTimer();
		if (me.__21.ggLastIsActive!=me.__21.ggIsActive()) {
			me.__21.ggLastIsActive=me.__21.ggIsActive();
			if (me.__21.ggLastIsActive) {
				me.__24.style.transition='none';
				me.__24.style.visibility='hidden';
				me.__24.ggVisible=false;
				me.__23.style.transition='none';
				me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
				me.__23.ggVisible=true;
				me.__25.style.transition='none';
				me.__25.style.visibility='hidden';
				me.__25.ggVisible=false;
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggskin.headers { font-family: "Nanum Pen Script", cursive; font-weight: 400; font-style: normal; font-size:14px; text-shadow:4px 4px 10px rgba(0,0,0,0.5); } .ggskin.headerb{ font-family: "Do Hyeon", sans-serif; font-weight: 400; font-style: normal; font-size:14px; text-shadow:4px 4px 10px rgba(0,0,0,0.5); } .ggskin.headerc{ font-family: "Nanum Gothic", sans-serif; font-weight: 400; font-style: normal; font-size:14px; text-shadow:4px 4px 10px rgba(0,0,0,0.5); } .ggskin.headerd{ font-family: "Black Han Sans", sans-serif; font-weight: 400; font-style: normal; font-size:14px; text-shadow:4px 4px 10px rgba(0,0,0,0.5); } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};