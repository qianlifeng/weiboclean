$(function () {
    weibo.removeUnusedDiv();
    weibo.seperateModules();
    weibo.showAllGroup();
});

var weibo =
{
    unusedSelectorForV5: new Array(
		"#trustPagelet_recom_interestv5", //maybe interest in the right nav
        "#pl_leftnav_app", //my apps in the left nav
        "#pl_rightmod_noticeboard",//noticeboard in the right nav
        "#pl_rightmod_ads35", //ads in the right nav
        "#trustPagelet_recom_allinonev5",
        "#trustPagelet_recom_memberv5",
        "#pl_rightmod_yunying",
        ".global_footer", //footer
        "#pl_leftnav_group .levmore", //group more
        "#pl_content_biztips"
    ),


    isV5: function () {
        return $("#trustPagelet_recom_memberv5") != null;
    },

    removeUnusedDiv: function () {
        if (this.isV5()) {
            for (var i = 0; i < this.unusedSelectorForV5.length; i++) {
                $(this.unusedSelectorForV5[i]).css("display", "none");
            };
        }
    },

    seperateModules: function () {
        if (this.isV5()) {
            var modules = new Array("#pl_leftnav_group",
                                    "#trustPagelet_recom_interestv5",
                                    "#trustPagelet_zt_hottopicv5"
                                    );
            for (var i = 0; i < modules.length; i++) {
                $(modules[i]).css("margin-top", "60px");
            };
        }
    },

    showAllGroup: function () {
        if (this.isV5()) {
            $("#pl_leftnav_group div[node-type='moreList']").css("display", "");
        }
    }

}

