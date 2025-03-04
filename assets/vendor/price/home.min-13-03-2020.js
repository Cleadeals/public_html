 
var timeOutVar = null,
    fpHomePage = {
        offset: [254, 0],
        idAttr: "linkid",
        arrAttr: "attr",
        zx: 200,
        qfrm: !0,
        arr: "<em class='lArow'></em>",
        trkEnumLoc: 0,
        trkEnumSld: 1,
        trkEnumClks: 2,
        trkEnumQrs: 3,
        slideCount: 0,
        eventsInitialized: !1,
        mouseoutFlag: !1,
        setupFPHover: function() {
            null != doc.byId("fpHomePage") && infolayer.setup("fpHomePage", fpHomePage)
        },
        getData: function() {
            this.timer || (this.timer = js.setTimeout(this, fpHomePage._getData, 250))
        },
        _getData: function() {
            ajax.getText({
                url: "/do/fp_summary_layer/getSummaryData/" + this.linkId + "?cityhome=1",
                method: "GET",
                ctx: this
            }, infolayer.onRcvData, fpHomePage.onRcvDataErr), trackEventByGA("OnMouseOver", "FP_SUMMARY_LAYER", this.linkId)
        },
        onRcvDataErr: function(a) {
            var b = this,
                c = userActionParams.lstAcn,
                d = userActionParams.lstAcnId;
            b.lyr[CHN][1].innerHTML = "<a style='bLink' target='_blank' href='/property/redirect_links.php?" + this.linkId + "&from_src=" + this.linkId + "&lstAcn=" + c + "&lstAcnId=" + d + "&src=FP_LINK' > Click here for more details about this project </a>"
        },
        buildLyr: function() {
            var a, b, c = this;
            c.lyr || ("L" == c.getAttribute(fpHomePage.arrAttr) ? (c.offset = [-222, 0], a = "rArow", b = "<span class='lf mt15'>Loading...&nbsp;&nbsp;</span><img   src='" + IMG_BASE_URL + "/images/99loaderDesktop.gif' ></img>&nbsp;&nbsp;") : (a = "lArow", b = "<img class='lf' src='" + IMG_BASE_URL + "/images/99loaderDesktop.gif' ></img><span class='lf mt15'>Loading...</span><div class='clr'></div>"), c.lyr = js.dom.append(js.dom.create("DIV", {
                className: "fplayer",
                lyrof: c
            }, {
                position: "absolute",
                display: "none",
                backgroundColor: "#ccc",
                width: "220px",
                zIndex: 1100
            }), c), c.lyr.innerHTML = "<em class='" + a + "'></em><div class='body'><div class='p10'>" + b + "</div></div>")
        },
        onMOver: function(a, b) {
            if (1 == infolayer.gStop) return !1;
            fpHomePage.mouseoutFlag = !1;
            var c = this;
            c.lyr ? fpHomePage.onMoverExpand(a, b, c) : setTimeout(function() {
                c.buildLyr(), fpHomePage.onMoverExpand(a, b, c)
            }, 1e3)
        },
        onMOut: function(a, b) {
            if (fpHomePage.mouseoutFlag = !0, 1 == infolayer.gStop) return !1;
            var c = this;
            c.cancelGetData(), b ? jsui.hideL(c.lyr) : _cur_lyr(null)
        },
        trackLayer: function() {
            this.tracked || (userActionParams.curAcn = "FP_SUMMARY_LAYER-NEW", userActionParams.curAcnId = this.linkId, trackEventByGA("OnMouseOver", userActionParams.curAcn, userActionParams.curAcnId), this.tracked = !0)
        },
        trackFeatureProject: function(a, b, c) {},
        slideText: function() {
            var a = $('.bigbtn.[msov="1"]').attr("value");
            if (slideCount++, a) {
                var b = a.length;
                a = a.substring(slideCount)
            }
            $('.bigbtn.[msov="1"]').find("span").html(a), slideCount < b - 10 && setTimeout("fpHomePage.slideText();", 300)
        },
        getMinMax: function() {
            var a = Number.MAX_VALUE,
                b = 0,
                c = fpHomePage.renderTag();
            return $(".fporg .fpcl").empty(), $(".clone").show(), $("" + c).clone().each(function(c) {
                a > parseInt($(this).attr("min")) && (a = parseInt($(this).attr("min"))), b < parseInt($(this).attr("max")) && (b = parseInt($(this).attr("max")))
            }), $(".clone").hide(), a + "," + b
        },
        updateFilter_city: function() {
            var a = fpHomePage.getPTypeTag(),
                b = fpHomePage.getConsStatusTag();
            $(".fpContainFilter .cityChicklist li").each(function() {
                var c = $(this).find("input"),
                    d = 0,
                    e = $(".clone .prop[data-subcity = '" + c.attr("attr") + "']");
                b && "" != b && (e = fpHomePage.filterByConStatus(e, b)), a && "" != a && (e = e.filter(a)), d = e.length, 0 == d ? (c.attr("vis", "0"), $(this).hide(), c.prop("checked", !1)) : ($(this).find("label i").html(" (" + d + "+)"), $(this).show())
            })
        },
        updateFilters: function(a) {
            "city" != a && fpHomePage.updateFilter_city(), "ptype" != a && fpHomePage.updateFilter_drpdwn("ptype"), "con_status" != a && fpHomePage.updateFilter_drpdwn("con_status")
        },
        updateFilter_drpdwn: function(a) {
            var b, c, d;
            "ptype" == a ? (b = fpHomePage.getConsStatusTag(), c = "ptype_filter", d = "data-proptype") : "con_status" == a && (b = fpHomePage.getPTypeTag(), c = "con_status_filter", d = "data-comstatus");
            var e = fpHomePage.renderTag(),
                f = $("" + e);
            b && "" != b && (f = "ptype" == a ? fpHomePage.filterByConStatus(f, b) : f.filter(b));
            var g = $(".fpContainFilter ." + c + " .FI-Tag .filter_heading"),
                h = g.attr("defaultText");
            g.attr("val", "0").html(h), $(".fpContainFilter ." + c + " .dd-list-menu .ddlist a").addClass("fp_filter_drpDwn_inactive");
            var i, j = [];
            $(".fpContainFilter ." + c + " .dd-list-menu .ddlist a").each(function() {
                var a = $(this);
                if ("data-comstatus" == d) var b = fpHomePage.filterByConStatus(f, a.attr("val")).length;
                else var b = f.filter("[" + d + '="' + a.attr("val") + '"]').length;
                b > 0 ? (a.removeClass("fp_filter_drpDwn_inactive"), a.find("i").hasClass("chkbox-Yes") && (j.push(a.attr("val")), i = a.text())) : a.find("i").removeClass("chkbox-Yes").addClass("chkbox-No")
            });
            var k = j.length;
            k <= 0 ? (g.attr("val", "0"), g.html(h)) : 1 === k ? (g.html(i), g.attr("val", j[0])) : (g.attr("val", j.join(",")), g.html("(" + k + " selected)"))
        },
        reset_fp_filter: function() { },
        render: function() {
            var a = "",
                b = "",
                c = "";
            b = fpHomePage.getPTypeTag(), c = fpHomePage.getConsStatusTag(), a = b + c;
            var d = !0;
            "" == a && (d = !1, $('.fpContainFilter .subtn.[vis="-1"]').each(function(a) {
                d = !0
            }));
            var e = fpHomePage.renderPGTag(),
                f = fpHomePage.renderTag();
            $("#gallery").empty();
            var g, h;
            d ? (g = $("" + e), h = $("" + f), c && "" != c && (g = fpHomePage.filterByConStatus(g, c), h = fpHomePage.filterByConStatus(h, c)), b && "" != b && (h = h.filter(b))) : (g = $(".clone_pg div"), h = $(".clone .ortable")), g.length ? ($("#fp_filter_reset").hide(), $("#gallery").append(g.clone())) : $("#fp_filter_reset").show(), h.length ? fpHomePage.bandPassFilter(h.clone(), d) : fpHomePage.bandPassFilter("OOPS no results found. Undo search"), d && fpHomePage.layout($(".fporg #fpcl li")), fpHomePage.setupFPHover(), propgallery.setupHover()
        },
        filterByConStatus: function(a, b) {
            if (a && b)
                for (var c = b.split(","), d = a.length; d--;) {
                    var e = $(a[d]).attr("data-comstatus"),
                        f = !1;
                    jQuery.each(c, function(a, b) {
                        -1 != e.indexOf(b) && (f = !0)
                    }), f || a.splice(d, 1)
                }
            return a
        },
        renderTag: function() {
            var a = "",
                b = !0;
            return $('.fpContainFilter .subtn.[vis="-1"]').each(function(c) {
                b = !1, a += ".clone .prop.[data-subcity ='" + $(this).attr("attr") + "'],"
            }), b && (a = ".clone .prop,"), a.substr(0, a.length - 1)
        },
        renderPGTag: function() {
            var a = "",
                b = !0;
            return $('.fpContainFilter .subtn.[vis="-1"]').each(function(c) {
                b = !1, a += ".clone_pg div.[data-subcity ='" + $(this).attr("attr") + "'],"
            }), b && (a = ".clone_pg div,"), a.substr(0, a.length - 1)
        },
        getConsStatusTag: function() {
            var a = $(".con_status_filter .filter_heading").attr("val"),
                b = "";
            if ("0" != a) {
                b = "";
                a.split(",").forEach(function(a) {
                    b += a + ","
                }), b = b.substr(0, b.length - 1)
            }
            return b
        },
        getPTypeTag: function() {
            var a = $(".ptype_filter .filter_heading").attr("val"),
                b = "";
            if ("0" != a) {
                b = "";
                a.split(",").forEach(function(a) {
                    b += "[data-proptype = '" + a + "'],"
                }), b = b.substr(0, b.length - 1)
            }
            return b
        },
        bandPassFilter: function(a, b) {
            b ? $(".fporg #fpcl").empty().append(a) : $(".fporg").empty().append(a)
        },
        layout: function(a) {
            var b = "",
                c = "",
                d = "",
                e = a.length,
                f = $(".fporg #fpclthree").length ? 3 : 2,
                g = Math.ceil(e / f),
                h = Math.ceil(e / f * 2),
                i = "",
                j = "";
            a.each(function(a) {
                var e, f = "",
                    k = "",
                    l = $(this),
                    m = l.attr("com"),
                    n = l.attr("othloc"),
                    o = l.attr("sub"),
                    p = l.attr("type"),
                    q = l.attr("alp"),
                    r = l.attr("mrp");
                "0" != m ? (f = '<b class="f13">Commercial</b>', k = "") : "0" != n ? (f = "<span><b>" + o + " - </b></span><b class='f13'>All Properties</b>", k = "<b>" + p + "</b> ") : "0" != q ? (f = "<span><b>" + o + " - </b></span><b class='f13'>All Properties</b>", k = "<b>" + p + "</b> ") : "0" != r ? (f = "<span><b>" + o + " - </b></span> <b class='f13'>More Properties</b>", k = "<b>" + p + "</b> ") : (f = "<span><b>" + o + " - </b></span><b class='f13'>" + p + "</b>", k = ""), i != f ? (e = "<div class='mt10 f15'><div class='fpHding fnclr'>" + f + "</div></div>", a < g ? b += e : a < h ? c += e : d += e, i = f) : a == g ? c += "<div class='mt10 f15'><div class='fpHding fnclr'>" + f + "</div></div>" : a == h && (d += "<div class='mt10 f15'><div class='fpHding fnclr'>" + f + "</div></div>"), j != k && k ? (e = "<div class='fpHding fnclr'>" + k + "</div>", a < g ? b += e : a < h ? c += e : d += e, j = k) : k && (a == g ? c += "<div class='fpHding fnclr'>" + k + "</div>" : a == h && (d += "<div class='fpHding fnclr'>" + k + "</div>")), e = "<ul><li style='cursor:pointer; cursor:hand;' onclick=\"" + $(this).attr("onclick") + "\" linkid='" + $(this).attr("linkid") + "'>" + this.innerHTML + "</li></ul>", a < g ? b += e : a < h ? c += e : d += e
            }), $(".fporg #fpcl").html(b), $(".fporg #fpcltwo").html(c), $(".fporg #fpclthree").html(d)
        },
        scroll_city: function(a, b, c) {
            env.ie || a.stopPropagation();
            var d = !!$(".fpContainFilter").hasClass("fixPosStick");
            $(jQuery.browser.webkit ? "body" : "html").animate({
                scrollTop: $("#fp_filter_label").offset().top
            }, 400, function() {
                d && fpHomePage.applyFPFilter(b, c)
            }), d || fpHomePage.applyFPFilter(b, c)
        },
        applyFPFilter: function(a, b) {
            "fp_filter_city" == a ? fpHomePage.applyFPCityFilter(b) : fpHomePage.applyFPDrpDwnFilter(b)
        },
        applyFPCityFilter: function(a) {
            var b = a,
                c = b.attr("vis");
            b.attr("vis", ~c), fpHomePage.updateFilters("city"), fpHomePage.render(), trackEventByGA("CLICK-SCB", currentPageName + "-" + b.attr("attr").replace(/ +/g, "-"), 0), trackEventByGA("Click", "FPCitySelect")
        },
        applyFPDrpDwnFilter: function(a) {
            var b, c, d, e = a,
                f = (e.text(), e.attr("val"), e.siblings("a").andSelf()),
                g = e.closest(".filter-item"),
                h = g.find("a.dropDown>div"),
                i = h.attr("defaultText");
            e.find("i.chkbox-Yes, i.chkbox-No").toggleClass("chkbox-Yes").toggleClass("chkbox-No"), b = f.find("i.chkbox-Yes").parent(), c = b.length, c <= 0 ? (h.attr("val", "0"), h.html(i)) : 1 === c ? (h.html(b.first().text()), h.attr("val", b.attr("val"))) : (d = b.map(function() {
                return $(this).attr("val")
            }).get().join(), h.attr("val", d), h.html("(" + c + " selected)")), e.parents(".ptype_filter").length ? fpHomePage.updateFilters("ptype") : e.parents(".con_status_filter").length && fpHomePage.updateFilters("con_status"), fpHomePage.render(), $(".fpContainFilter .scrollbarfp").tinyscrollbar_update()
        },
        initCityFPSection: function() {
            if (1 == this.eventsInitialized) return !0;
            this.eventsInitialized = !0, $(".clone").empty(), $(".ortable").clone().appendTo($(".clone")), $(".clone").hide(), $(".bigbtn").mouseover(function() {
                slideCount = 0, $(this).attr("msov", "1"), fpHomePage.slideText()
            }), $(".bigbtn").mouseout(function() {
                slideCount = 0, $(this).attr("msov", "0"), $(this).find("span").html($(this).attr("value"))
            }), $(".fpContainFilter .subtn").click(function(a) {
                var b = $(this);
                fpHomePage.scroll_city(a, "fp_filter_city", b)
            }), $("#fp_filter_reset_button").click(function() {
                fpHomePage.reset_fp_filter(), fpHomePage.render(), fpHomePage.updateFilter_city()
            }), $(".fpContainFilter").click(function() {
                $(".fpContainFilter").hasClass("fpcolps") && ($(".fpContainFilter").removeClass("fpcolps"), $(".scrollbarfp .scrollbar").removeClass("disable"), $(".scrollbarfp").tinyscrollbar_update("0"))
            }), $(".fplink").click(function() {
                trackEventByGA("CLICK", "FP-NEW", $(this).parent().parent().attr("linkid"))
            }), $(".fpContainFilter a.dropDown").on("click", function(a) {
                closeAllLayersOnHtmlClk(a), $(".fpContainFilter").find(".FI-Box").css("z-index", "0");
                var b, c, d, e = $(this);
                if (e.hasClass("ddDisable")) return !0;
                d = e.parent(), $(".fpContainFilter").find(".filter-item").css("z-index", 0), c = e.next(), b = c.attr("id"), qsSrp.closeDrpDownsSpl(b), d.css("z-index", "2"), toggleSpl($("#" + b))
            }), $(".fpContainFilter .ddlist a").on("click", function(a) {
                var b = $(this);
                fpHomePage.scroll_city(a, "fp_filter_drp_dwn", b)
            })
        },
        validateChecks: function(a) {
            var b = doc.byId("panel_fp_" + a);
            if (void 0 != b) {
                var c = b.childNodes,
                    d = "",
                    e = 0;
                for (var f in c) "checkbox" == c[f].type && c[f].checked && (e > 0 && (d += " and "), d += c[f].name, e++);
                var g = doc.byId("fpQuery_" + a),
                    h = doc.byId("query_" + a),
                    i = "";
                null != g && (i = e > 0 ? "This project looks good. Please , " + d + "." : "This project looks good.", g.innerHTML = "<em class='uiIcon lf icnEmail mr5'></em>" + i, h.innerHTML = i)
            }
        },
        onMoverExpand: function(a, b, c) {
            var d;
            (d = doc.byId("_" + c.linkId)) ? (c.tracked || (c.timer = js.setTimeout(c, c.trackLayer, 1e3)), c.gotData || (c.lyr[CHN][1].innerHTML = "", c.lyr[CHN][1].appendChild(d), c.gotData = !0)) : c.gotData || c.getData(), b ? jsui.showL(c.lyr) : _cur_lyr(c.lyr), "fpclthree" == c.parentNode.parentElement.getAttribute("id") && 0 != $("#fpcl").text().trim().length && (c.offset = null != navigator.userAgent.match(/iPad/i) && window.screen.width <= 1024 ? [65, 0] : [165, 0]), jsui.showAt(c.lyr, c, c.pos, c.offset), jsui.greyThis(c.lyr, "#000", 0), jsui.grow(c.lyr.bg, env.ie ? 5 : 3), c.lyr.bg.style.zIndex = "0"
        }
    },
    homeCookieUtil = {
        setSource: function() {
            var a = inputParams,
                b = a.getParams,
                c = a.cookieParams,
                d = void 0 !== b.source ? b.source : null,
                e = isset(d) ? d : "IP";
            (void 0 !== c.PROP_SOURCE || isset(d)) && setCookieExp("PROP_SOURCE", e, 2592e3, "/")
        },
        setLogout: function() {
            1 == getCookieVal("logout") && setCookieExp("logout", "0", 0, "/")
        },
        setCity: function() {
            var a = qsSrp.selCityAtHeader,
                a = empty(a) ? "" : a;
            setCookieExp("src_city", a, 0, "/"), setCookieExp("99_citypage", a, 0, "/"), window.location.href.match(/home-real-estate.htm/g) && setCookieExp("99_city", "", 0, "/")
        },
        setDefaultCityPage: function() {
            var a = $("#srchhdr_state").val();
            setCookieExp("99_city", a, 1286e3, "/")
        }
    },
    on_load = {
        onRcvData: function(a) {
            doc.byId("fp_layers_data")[IH] = a
        }
    },
    propgallery = {},
    aif = {
        idAttr: "linkid",
        setupFPHover: function() { },
        getData: function() { },
        _getData: function() { },
        onRcvDataErr: function(a) { },
        trackLayer: function() { }
    },
    appDownload = { },
    BGInventory = { },
    ldb = {
        loadFromZedo: function() { },
        loadBanner: function() { }
    },
    ellipses = {
        attachEventHandlers: function() {}
    };
zedoLib.updateHomeParams = function() {
    this.homeParamsToBeUpdated() && this.createHomeParams() && zedo.updateZedoParameters(zedoLib.zedoParams)
}, zedoLib.homeParamsToBeUpdated = function() {
    var a = !1,
        b = $("#refresh_zedo_cookie").val(),
        c = getCookieValue("99_city");
    return -1 == b ? a = !0 : b != c && (a = !0), a
}, zedoLib.createHomeParams = function() {
    if ("undefined" == typeof currentPageName || "Home" == currentPageName) return !1;
    var a = "NRI" == currentPageName ? "NRI" : "CITY",
        b = qsSrp.getRC(),
        c = qsSrp.getPref(),
        c = "C" == b && "R" == c ? "L" : c,
        d = "NRI" == currentPageName ? "YES" : null;
    return zedoLib.zedoParams = {
        city: qsSrp.selCityAtHeader,
        locality: "",
        budgetMin: "",
        budgetMax: "",
        activity: a,
        rescom: zedoLib.resComMap[b],
        preference: zedoLib.prefMap[c],
        nri: d
    }, !0
}, qsSrp.homeSrchBarLoad = function() {
    qsSrp.initScrollPanes(), qsSrp.frm_id = "res_form", kywrd = $("#srchhdr_kywrd").val(), qsSrp.selCityAtHeader = $("#srchhdr_selCityAtHeader").val(), qsSrp.modifySrchParamsOnLoad(), submitButton = {
        IS_MAPSEARCH_DEFAULT_SEARCH: 0,
        enterKeyPressedFlag: !1
    }, Header.srchBarLoad(), Homepage.setCookieOnLoad()
}, Homepage.setCookieOnLoad = function() {
    var a = {
        R: "RES",
        C: "COM"
    };
    setCookieExp("RES_COM", a[qsSrp.getRC()], 2592e3, "/"), homeCookieUtil.setSource(), homeCookieUtil.setLogout(), homeCookieUtil.setCity(), homeCookieUtil.setDefaultCityPage()
}, Homepage.track = function() {
    var a = inputParams,
        b = a.getParams,
        c = void 0 !== b.src ? b.src : null,
        c = empty(c) ? document.referrer : "",
        d = {
            pageReferrer: document.referrer,
            src: c,
            curAcn: $('#res_form > input[name="lstAcn"]').val(),
            curAcnId: $('#res_form > input[name="lstAcnId"]').val(),
            selectedCityAtCityBarHeader: qsSrp.selCityAtHeader,
            CitySetFromCookie: $("#CitySetFromCookie").val(),
            res_com: qsSrp.getRC()
        };
    $.post("/do/siteindex/track", d, function(a) {})
}, $("#view_excl_prop_iframe, #view_belowexcl_prop_iframe").load(function() {
    resizeHeight($(this).attr("id"))
}), srchFormData.setDataOnLoad = function() {
    var a = {
        PROPERTY: remSrch.getData("PROPERTY"),
        PROJECT: remSrch.getData("PROJECT"),
        DEALER: remSrch.getData("DEALER")
    };
    document.URL.indexOf("searchHeader99?tab=Buy") >= 0 ? (a.PROPERTY.preference = void 0 != a.PROPERTY.preference ? "S" : "", a.PROJECT.preference = void 0 != a.PROJECT.preference ? "S" : "") : document.URL.indexOf("searchHeader99?tab=Rent") >= 0 && (a.PROPERTY.preference = void 0 != a.PROPERTY.preference ? "R" : "", a.PROJECT.preference = void 0 != a.PROJECT.preference ? "R" : "");
    for (var b in a) a[b] && (void 0 === a[b].city || empty(a[b].city)) && (a[b].city = qsSrp.selCityAtHeader);
    srchFormData.setData(a)
}, qsSrp.modifySrchParamsOnLoad = function() {
    var a, b, c, d = inputParams.params;
    clikTab = $("#srchhdr_clikTab").val(), a = void 0 !== d.lsp ? d.lsp : "P", b = remSrch.getRevTypeKey("NP" == clikTab ? "X" : a), c = remSrch.getData(b), void 0 === c.selected_tab || empty(c.selected_tab) || c.selected_tab, qsSrp.setST(b), srchFormData.setDataOnLoad()
}, $(document).ready(function() {
    Homepage.track(), $(".fpContainFilter").length && $(window).on("scroll touchmove", function() {
        var a = $(".fpContainFilter").offset().top;
        $(this).scrollTop() > a + 30 && $(this).scrollTop() < Math.max($("#lcol_end").offset().top - 100, $("#mcol_end").offset().top - 100) ? ($(".fpContainFilter").addClass("fpcolps").addClass("fixPosStick"), $(".scrollbarfp").tinyscrollbar_update("0"), $(".scrollbarfp  .scrollbar").addClass("disable")) : ($(".fpContainFilter").removeClass("fpcolps").removeClass("fixPosStick"), $(".scrollbarfp  .scrollbar").removeClass("disable"), $(".scrollbarfp").tinyscrollbar_update("0"))
    }), $(".sDrpL>div").on("click", function(a) {
        $(".sDrpR").css("display", "none"), $(".sDrpR.jQIn" + $(this).index()).css("display", "inline-block");
        $(".sDrpR.jQIn" + $(this).index()).width();
        $(".sDrpL>div").removeClass("actDrp"), $(this).addClass("actDrp"), a.preventDefault(), a.stopPropagation()
    }), $("#fpHomePage").on("click", "ul.fpUi li a", function(a) {
        var b = $(this),
            c = b.parent("li");
        trackEventByGA("CLICK", "FP-NEW", c.attr("linkid"))
    }), $("#dif_div").on("click", "ul.fpUi li a", function(a) {
        try {
            var b = $(this),
                c = b.parent("li"),
                d = $("#dif_div");
            appendDlrSrpTrackingParameters(b.get(0), "?" + c.attr("linkid") + "&from_src=IFLINK&lstAcn=" + d.attr("lstacn") + "&lstAcnId=" + d.attr("lstacnid") + "&src=DIF_LINK", a), jsevt.stopBubble(a)
        } catch (e) {}
    }), $("#city_fp_box").length && fpHomePage.initCityFPSection(), $(".fTabs").on("click", "span", function() {
        var a = $(this),
            b = a.attr("id"),
            c = b.split("_");
        ffChangeBuyRentTab(c[1], c[2])
    }), $("#askQuestionForm").submit(function() {
        try {
            var a = document.getElementById("questionText");
            return a.value.trim() != a.getAttribute("default") && "" != a.value.trim() || (alert("Question is required."), !1)
        } catch (b) {
            return !1
        }
    }), $("#questionText").click(function() {}).blur(function() {
        var a = document.getElementById("questionText");
        "" == a.value.trim() && (a.value = a.getAttribute("default"), a.style.color = "#ADA6AD")
    }), BGInventory.updateContainer(40), $(".projNameInfo").length > 0 && BGInventory.handleProjectNameLoc(), ellipses.attachEventHandlers(), $(".HamBookmarkLink").on(clickEventStr, function(a) {
        var b = $(this).attr("Bookmarkid"),
            c = (qsSrp.getRC(), qsSrp.homePageTabClick.bind($('#search-bar-hp .search-tabs>a[id="' + b + '"]')));
        return $("#HM-Menu").css({
            left: "-220px"
        }), c(), scrollToElement("#Header-Wrap"), jsevt.stopBubble(a), !1
    }), appDownload.attachEvents()
}), $(window).load(function() {
    $("#search-bar-hp .search-tabs>a").on("click", function() {
        var a = $(this),
            b = a.attr("data-track-args");
        void 0 !== b && trackEventByGA("TAB", !1, b, "Search_Box")
    }), BGInventory.handleImages(), zedoLib.updateHomeParams(), ldb.loadBanner();
    var a = pkb.getPageAttribute();
    $("#search-bar-Bg.searchHeader").length || pkb.initialize(a), isPortraitDisplay() || BGInventory.initializeScrollNext(), $(this).resize(function() {
        BGInventory.updateContainer(40)
    }).scroll(function() {
        BGInventory.checkScrollNext()
    }), window.setTimeout(includeBMSJS, 100), window.setTimeout(flushBmsIframes, 100), window.setTimeout(includeBMSExclIframes, 100), window.setTimeout(loadHomePageFooterBnr, 100), $("#fp_layers_data").length && (fpHomePage.setupFPHover(), ajax.getText({
        url: "/do/fp_summary_layer_all",
        method: "GET",
        ctx: this,
        params: userActionParams
    }, on_load.onRcvData)), $("#dif_div").length && aif.setupFPHover(), $("#search-bar-Bg.searchHeader").length || BGInventory.loadCarousel()
}), $(window).on("orientationchange", function() {
    var a = $(".scrollNextWrap");
    0 != window.orientation && 180 != window.orientation && (a.length > 0 ? a.fadeIn(300) : BGInventory.initializeScrollNext(), pkb._displayBannerOnScroll($(window)))
}), $(window).resize(function() {
    mySlider("card-slider-1", 4, 4)
});;