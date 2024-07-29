(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false},"history":{},"name":"Player675","displayTooltipInTouchScreens":true},"backgroundColorRatios":[0],"hash": "a0697f728cc8a46ce0fd026c442a68771796423739351cba04185b2dca887dfe", "definitions": [{"click":"this.enableVR()","id":"IconButton_FBF64380_ECD9_2B36_41B0_FEA60E04B604","horizontalAlign":"center","verticalAlign":"middle","data":{"name":"IconButton13323"},"tabIndex":0,"right":"6.32%","maxHeight":42,"maxWidth":42,"bottom":"8.96%","minWidth":1,"backgroundOpacity":0,"minHeight":1,"width":42,"class":"IconButton","iconURL":"skin/IconButton_FBF64380_ECD9_2B36_41B0_FEA60E04B604.png","height":42,"propagateClick":false},{"items":[{"class":"Model3DPlayListItem","media":"this.model_FF53D380_ECE6_F219_41E1_A2A275C622C7","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","player":"this.MainViewerModel3DPlayer"}],"class":"PlayList","id":"mainPlayList"},{"height":"100%","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"toolTipPaddingRight":6,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"toolTipPaddingBottom":4,"subtitlesBottom":50,"subtitlesGap":0,"progressBackgroundColor":["#000000"],"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","progressBottom":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":2,"data":{"name":"Main Viewer"},"playbackBarHeight":10,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontSize":"3vmin","progressBorderSize":0,"subtitlesTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"propagateClick":false,"toolTipBorderColor":"#767676","toolTipShadowColor":"#333138","playbackBarRight":0,"progressBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","progressOpacity":0.7,"progressRight":"33%","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","progressLeft":"33%","toolTipTextShadowColor":"#000000","id":"MainViewer","subtitlesTextShadowOpacity":1,"subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","toolTipFontSize":"1.11vmin","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarBackgroundOpacity":1,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderRadius":0,"progressBorderColor":"#000000","minHeight":50,"playbackBarProgressBorderColor":"#000000","minWidth":100,"subtitlesFontColor":"#FFFFFF","class":"ViewerArea","vrPointerSelectionColor":"#FF6600","width":"100%","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderRadius":0,"vrThumbstickRotationStep":20},{"thumbnailUrl":"media/model_FF53D380_ECE6_F219_41E1_A2A275C622C7_t.jpg","surfaceSelectionCoef":2,"surfaceReticleMaxRadius":50,"objects":["this.model_FF53D380_ECE6_F219_41E1_A2A275C622C7_110","this.model_FF53D380_ECE6_F219_41E1_A2A275C622C7_117"],"camera":"this.cam_F8EDA380_ECE6_F82A_41DF_D783F413ED58","model":"this.res_F8ED3380_ECE6_F82A_41EC_FA08099A9112","label":trans('model_FF53D380_ECE6_F219_41E1_A2A275C622C7.label'),"surfaceReticleMinRadius":15,"autoplay":true,"id":"model_FF53D380_ECE6_F219_41E1_A2A275C622C7","data":{"showOnlyHotspotsLineSight":true,"label":"separte10","showOnlyHotspotsLineSightInPanoramas":true},"floorRadius":40,"animations":["this.anim_F8BA8380_ECE6_F81E_41C9_80CC68FD86FA","this.anim_F8BAE380_ECE6_F81E_41D2_1984BA9D5083","this.anim_F8BAF380_ECE6_F81E_41DE_ECA9E8706228","this.anim_F8E9D380_ECE6_F823_41C6_7FEBBDF97C56","this.anim_F8E82380_ECE6_F823_41E9_77A8E655A8B1","this.anim_F8E83380_ECE6_F823_41D3_CDFC8065A0D6","this.anim_F8E80380_ECE6_F823_4197_DF18BA69A608","this.anim_F8E81380_ECE6_F823_41D3_B608C586C23A","this.anim_F8E86380_ECE6_F823_41CB_2AC0EF6EDC7A","this.anim_F8E87380_ECE6_F823_41D5_4FB3E0B431EA","this.anim_F8E84380_ECE6_F823_41AE_7876F384CD34","this.anim_F8E85380_ECE6_F823_41E3_52287AE784AD","this.anim_F8E8A380_ECE6_F823_41E7_469655DE128D","this.anim_F8E8B380_ECE6_F823_41DB_B8A137F5C75C","this.anim_F8E88380_ECE6_F823_41E3_FBEA83443810"],"class":"Model3D","loop":true,"backgroundColor":"#333333","castShadow":true,"surfaceReticleRadius":0.02,"environmentIntensity":0.52,"lights":["this.light_F8ED9380_ECE6_F82A_41E1_4A5CC121AFA9","this.light_F8ECF380_ECE6_F82B_41E9_83181EC5AE9B"]},{"class":"Model3DPlayer","viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer"},{"class":"InnerModel3DObject","data":{"label":"Object_0.001"},"rollOverEnabled":false,"useHandCursor":false,"id":"model_FF53D380_ECE6_F219_41E1_A2A275C622C7_110","objectId":"110"},{"class":"InnerModel3DObject","data":{"label":"Cylinder"},"rollOverEnabled":false,"useHandCursor":false,"receiveShadow":true,"id":"model_FF53D380_ECE6_F219_41E1_A2A275C622C7_117","objectId":"117"},{"vrEnabled":true,"maxX":60,"autoNearFar":true,"minPitch":-90,"minZ":-60,"minDistance":8.21,"maxZ":60,"maxDistance":65.71,"maxY":2.93,"id":"cam_F8EDA380_ECE6_F82A_41DF_D783F413ED58","minX":-60,"class":"OrbitModel3DCamera","initialPitch":-30,"initialY":-0.57,"maxPitch":0,"initialDistance":32.85,"minY":-4.08},{"class":"Model3DResource","levels":[{"url":"media/model_FF53D380_ECE6_F219_41E1_A2A275C622C7/scene.glb","class":"Model3DResourceLevel"},{"tags":"mobile","url":"media/model_FF53D380_ECE6_F219_41E1_A2A275C622C7/scene_mobile.glb","class":"Model3DResourceLevel"}],"id":"res_F8ED3380_ECE6_F82A_41EC_FA08099A9112"},{"class":"Model3DAnimation","id":"anim_F8BA8380_ECE6_F81E_41C9_80CC68FD86FA","name":"_bee_hover_GLTF_created_0","index":0},{"class":"Model3DAnimation","id":"anim_F8BAE380_ECE6_F81E_41D2_1984BA9D5083","name":"_bee_hover","index":1},{"class":"Model3DAnimation","id":"anim_F8BAF380_ECE6_F81E_41DE_ECA9E8706228","name":"_bee_idle_GLTF_created_0","index":2},{"class":"Model3DAnimation","id":"anim_F8E9D380_ECE6_F823_41C6_7FEBBDF97C56","name":"_bee_idle","index":3},{"class":"Model3DAnimation","id":"anim_F8E82380_ECE6_F823_41E9_77A8E655A8B1","name":"_bee_take_off_and_land_GLTF_created_0","index":4},{"class":"Model3DAnimation","id":"anim_F8E83380_ECE6_F823_41D3_CDFC8065A0D6","name":"_bee_take_off_and_land","index":5},{"class":"Model3DAnimation","id":"anim_F8E80380_ECE6_F823_4197_DF18BA69A608","autoplay":true,"name":"hover_GLTF_created_0","index":6},{"class":"Model3DAnimation","id":"anim_F8E81380_ECE6_F823_41D3_B608C586C23A","name":"hover_GLTF_created_0.001_GLTF_created_0","index":7},{"class":"Model3DAnimation","id":"anim_F8E86380_ECE6_F823_41CB_2AC0EF6EDC7A","name":"hover_GLTF_created_0_GLTF_created_0","index":8},{"class":"Model3DAnimation","id":"anim_F8E87380_ECE6_F823_41D5_4FB3E0B431EA","name":"idle_GLTF_created_0","index":9},{"class":"Model3DAnimation","id":"anim_F8E84380_ECE6_F823_41AE_7876F384CD34","name":"idle_GLTF_created_0.001_GLTF_created_0","index":10},{"class":"Model3DAnimation","id":"anim_F8E85380_ECE6_F823_41E3_52287AE784AD","name":"idle_GLTF_created_0_GLTF_created_0","index":11},{"class":"Model3DAnimation","id":"anim_F8E8A380_ECE6_F823_41E7_469655DE128D","name":"take_off_and_land_GLTF_created_0","index":12},{"class":"Model3DAnimation","id":"anim_F8E8B380_ECE6_F823_41DB_B8A137F5C75C","name":"take_off_and_land_GLTF_created_0.001_GLTF_created_0","index":13},{"class":"Model3DAnimation","id":"anim_F8E88380_ECE6_F823_41E3_FBEA83443810","name":"take_off_and_land_GLTF_created_0_GLTF_created_0","index":14},{"shadowTolerance":2,"class":"OrbitLight","id":"light_F8ED9380_ECE6_F82A_41E1_4A5CC121AFA9","pitch":45,"intensity":0.5,"yaw":-45,"castShadow":true},{"shadowTolerance":2,"class":"OrbitLight","id":"light_F8ECF380_ECE6_F82B_41E9_83181EC5AE9B","pitch":75,"intensity":0.3,"yaw":135,"castShadow":true}],"defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"layout":"absolute","start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_FBF64380_ECD9_2B36_41B0_FEA60E04B604], 'cardboardAvailable')","scripts":{"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"disableVR":TDV.Tour.Script.disableVR,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"initQuiz":TDV.Tour.Script.initQuiz,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"shareSocial":TDV.Tour.Script.shareSocial,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clone":TDV.Tour.Script.clone,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"enableVR":TDV.Tour.Script.enableVR,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setValue":TDV.Tour.Script.setValue,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizStart":TDV.Tour.Script.quizStart,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"init":TDV.Tour.Script.init,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playAudioList":TDV.Tour.Script.playAudioList,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getKey":TDV.Tour.Script.getKey,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"createTween":TDV.Tour.Script.createTween,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"existsKey":TDV.Tour.Script.existsKey,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showWindow":TDV.Tour.Script.showWindow,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"registerKey":TDV.Tour.Script.registerKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"translate":TDV.Tour.Script.translate,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"toggleVR":TDV.Tour.Script.toggleVR,"setLocale":TDV.Tour.Script.setLocale},"minHeight":0,"minWidth":0,"width":"100%","class":"Player","height":"100%","scrollBarColor":"#000000","propagateClick":false,"gap":10,"children":["this.MainViewer","this.IconButton_FBF64380_ECD9_2B36_41B0_FEA60E04B604"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.11.js.map
})();
//Generated with v2024.0.11, Fri Jul 26 2024