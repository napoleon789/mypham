/**
 * Created by taoln on 12/11/14.
 */


(function ($) {

    /**
     */
    Drupal.behaviors.simpleTestMenuCollapse = {
        attach: function (context, settings) {
            $(document).ready(function() {
                //append title and price before mouse hover item
                $(".panel-2col-stacked  .views-field-field-image").mouseover(function(){
                    $('#hover').remove();
                    var  tpm1 = $(this).parents('td').children('.views-field-title').html()
                        ,tpm2 = $(this).parents('td').children('.views-field-field-price').html();
                    $(this).parents('td').css('position','relative')
                    tpm = '<div id="hover" style="position: absolute; bottom: 6px;left: 0; background: #836b65; height: 30%;width: 100%; display: block;text-align: center;">'+tpm1+tpm2+'</div>'
                   $(this).parent().append(tpm).animation();
                    console.log(tpm);
                });
                //remove title and price before mouse leave item
                /*$( "#hover" ).live( "mouseleave", function() {
                    console.log("mouseleave");
                    $(this).remove();
                });*/
            });

        }
    };

})(jQuery);