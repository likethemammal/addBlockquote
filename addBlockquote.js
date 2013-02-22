$(document).ready(function() {

$("span").each(function() {

if($(this).hasClass("callout-right")){
   var $spantext = $(this).text();
   var $parentp = $(this).parent();

   $("<blockquote></blockquote>").prependTo($parentp).addClass("quote right").text($spantext);
}
if($(this).hasClass("callout-left")){
   var $spantext = $(this).text();
   var $parentp = $(this).parent();

   $("<blockquote></blockquote>").prependTo($parentp).addClass("quote left").text($spantext);
}

});

});
