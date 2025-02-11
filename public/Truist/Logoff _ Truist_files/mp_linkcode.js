var MP = {
	Version: '3.4.0.0',
	SrcLang: 'en',
    Protocols: {'http:':'http://', 'https:':'https://'},
    UrlLang: 'mp_js_current_lang',
	SrcUrl: decodeURIComponent('mp_js_orgin_url'),
	oSite: decodeURIComponent('mp_js_origin_baseUrl'),
	tSite: decodeURIComponent('mp_js_translated_baseUrl'),
	init: function() {
		if (MP.oSite.indexOf('p_js_') == 1) {
			MP.SrcUrl = window.top.document.location.href;
			MP.oSite = MP.tSite = window.top.document.location.host;
			MP.UrlLang = MP.SrcLang;
		}
	},
	switchLanguage: function(url, pref, sync) {
		var sync = sync;
		var oSite=MP.oSite.replace('http://','').replace('https://','').replace(/\/?$/, '');
		var tSite=MP.tSite.replace('http://','').replace('https://','').replace(/\/?$/, '');
		url=url.replace('http://','').replace('https://','').replace(/\/?$/, '');
		if(sync && (typeof MpStorage !== 'undefined')&&(typeof MpStorage.updatePref !== 'undefined')){
			MpStorage.updatePref(url,pref);
		}
		lang = pref.substring(0,2);
		setTimeout(function() {
			var script = document.createElement('SCRIPT');
            var protocol = MP.Protocols[location.protocol];
			var pageLoc = encodeURIComponent(window.top.document.location.href);
			var tPageLoc = encodeURIComponent(MP.SrcUrl);
			if (url == oSite) {
				tSite = tSite.split(/[/?#]/)[0];
				script.src = encodeURI(protocol + tSite + '/' + MP.SrcLang + MP.UrlLang) + '/?1023749634;' + pageLoc;
			} else {
			 if(MP.SrcLang==lang && tSite == oSite){return false;}
				url = url.split(/[/?#]/)[0];
				script.src = encodeURI(protocol + url + '/' + MP.SrcLang + lang) + '/?1023749632;' + tPageLoc;
			}
			var target = document.getElementsByTagName('script')[0];
			target.parentNode.insertBefore(script, target);
		}, 500);
		return false;
	},
	switchToLang: function(url) {
		if(window.top.location.href == url){
			if((typeof MpStorage !== 'undefined')&&(typeof MpStorage.updatePref !== 'undefined'))
			MpStorage.updatePref(MP.oSite,MP.SrcLang);
		}else{
			url = encodeURI(url);
			window.top.location.href = url;
		}
	}
};