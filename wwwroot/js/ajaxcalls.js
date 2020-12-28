var $ = jQuery.noConflict();

var KAY = KAY || {};
(function ($) {
    "use strict";
    KAY.Cart = {        
        init: function () {
            KAY.Cart.getTopCart();
		},
        getTopCart: function () {
            $.ajax({
                url: "/Cart/TopCart",
                type: "GET"
            }).done(function (response) {
                $topCart.empty().html(response);
            });
        }
    };
    KAY.documentOnReady = {
		init: function () {
            KAY.Cart.init();
		}
    };



    var $topCart = $('#top-cart'),
          $sadfa = $('#top-f');
    $(document).ready(KAY.documentOnReady.init);
})(jQuery); 