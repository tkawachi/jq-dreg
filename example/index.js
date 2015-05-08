$.readyDreg.after('aaa').always(function() {
  console.log("after aaa");
});

$(function() { console.log("document ready"); });

setTimeout(function() {
  console.log('aaa');
  $.readyDreg.deferredFor('aaa').resolve();
}, 1000);

$.readyDreg.after('aaa', 'xxx').always(function() {
  console.log('never executed');
});

