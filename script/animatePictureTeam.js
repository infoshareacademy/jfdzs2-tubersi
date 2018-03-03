$(function ()
{
  $('.team-foto-1').mouseenter(function()
  {
      setTimeout(function(){ $('.team-foto-1').attr('src','images/facebook.png'); },300);
  }).mouseleave(function ()
  {
      setTimeout(function () {$('.team-foto-1').attr('src', 'images/piotr.jpg'); }, 300);
  })

  $('.team-foto-2').mouseenter(function()
  {
      setTimeout(function(){ $('.team-foto-2').attr('src','images/facebook.png'); },300);
  }).mouseleave(function ()
  {
      setTimeout(function () {$('.team-foto-2').attr('src', 'images/dorota.jpg'); }, 300);
  })

  $('.team-foto-3').mouseenter(function()
  {
      setTimeout(function(){ $('.team-foto-3').attr('src','images/facebook.png'); },300);
  }).mouseleave(function ()
  {
      setTimeout(function () {$('.team-foto-3').attr('src', 'images/eryk.jpg'); }, 300);
  })
});

