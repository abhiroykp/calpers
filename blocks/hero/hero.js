export default function decorate(block) {
    $("<hr/>").insertAfter(".default-content-wrapper");
    $(".default-content-wrapper:first-child > p:first-child").remove();
    $( "#welcome-calpers-members" ).wrap( "<div class='main-heading'></div>" );
}
  