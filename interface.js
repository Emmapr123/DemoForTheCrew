let samantha = new Counter;

$(document).ready(function() {
    $.get('http://localhost:4567/', function(data) {
      samantha.setCount(parseInt(data))
      $('#counting').text(samantha.count)
    })
})

$('#countUp').click(function() {
  samantha.countUp()
  $.post('http://localhost:4567/', {count: samantha.count}, function() {})
  $('#counting').text(samantha.count)
})

$('#reset').click(function() {
  samantha.reset()
  $.post('http://localhost:4567/', {count: samantha.count}, function() {})
  $('#counting').text(samantha.count)
})