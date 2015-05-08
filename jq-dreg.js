"use strict";
(function (global) {
  var $ = global.jQuery;

  if (!$) {
    throw "Dreg needs JQuery. Load JQuery before Dreg.";
  }

  function Dreg() {
    var deferreds = {};
    this.main = $.Deferred();

    this.deferredFor = function (name) {
      if (!deferreds[name]) {
        deferreds[name] = $.Deferred();
      }
      return deferreds[name];
    };

    this.after = function () {
      var d = [this.main];
      for (var arg in arguments) {
        d.push(this.deferredFor(arguments[arg]));
      }
      return $.when.apply(null, d);
    };
  }

  $.Dreg = function () { return new Dreg() };
  $.readyDreg = new Dreg();
  $(function() {
    $.readyDreg.main.resolve();
  });
})(this);
