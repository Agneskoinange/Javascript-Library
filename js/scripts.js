// jQuery(document).ready(function() {
//     jQuery("h1").click(function(){
//         alert("This is a heaading tag")
//       });
      
//       jQuery("p").click(function(){
//         alert("This is a paragraph")
//       })
      
//       jQuery("img").click(function(){
//         alert("This is an image")
//       })
      
//       jQuery("h1").click(function() {
//           alert("This is a header.");
//           alert("I told you, THIS IS A HEADER!");
//         });
// });

$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});