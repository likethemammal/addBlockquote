$(document).ready(function() {

$("span").each(function() {

if($(this).hasClass("callout-right")){
   var $spantext = $(this).html();
   var $parentp = $(this).parent();

   $("<blockquote></blockquote>").prependTo($parentp).addClass("quote right").html($spantext);
}
if($(this).hasClass("callout-left")){
   var $spantext = $(this).html();
   var $parentp = $(this).parent();

   $("<blockquote></blockquote>").prependTo($parentp).addClass("quote left").html($spantext);
}

});

});
