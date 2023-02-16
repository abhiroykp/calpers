export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  $("main > div:nth-child(2)").remove();

  $(".columns.block.columns-2-cols > div").addClass("custom-column");

  $("<div class='customHeroBox'></div>").insertAfter( ".columns.block.columns-2-cols > div > div:first-of-type > h3 ");

  $('.customHeroBox').html('<div class="heroLeft">' + $('.columns.block.columns-2-cols > div > div:first-of-type > p:first-of-type').html() + '</div> '+ '<div class="heroRight"> <p>' + $('.columns.block.columns-2-cols > div > div:first-of-type > h3').html() + '</p> </div> ');

  $(".columns.block.columns-2-cols > div > div:first-of-type > p:first-of-type").remove();
  $(".columns.block.columns-2-cols > div > div:first-of-type > h3").remove();


  let contentsInSecondDiv  = $('.columns.block.columns-2-cols > div > div:nth-child(2)').html();

  $("<div class='customRightSide'></div>").insertAfter( ".columns.block.columns-2-cols > div > div:nth-child(2) > p:last-child");

  $('.customRightSide').html(contentsInSecondDiv);

  $(".columns.block.columns-2-cols > div > div:nth-child(2) > p").remove();


  let insertIframe = '<div class="customEmbededIframe"><p>See How Connected Health Care Helps You Thrive</p><iframe width="380" height="200" src="https://www.youtube.com/embed/YF9OoNS7xu8" frameborder="0" allowfullscreen></iframe></div>';
  $(insertIframe).insertAfter( ".customRightSide");
}
