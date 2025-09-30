// multiline-placeholder: Allows the placeholder text in textareas to be formatted on to multiple lines
// Disables itself for Chrome due to native support.

$(function () {
  var isOpera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;

  // Disable for chrome which already supports multiline
  if (!(!!window.chrome && !isOpera)) {
    var style = $(
      "<style>textarea[data-placeholder].active { color: #ccc; }</style>"
    );
    $("html > head").append(style);

    var canvastext = $(".visible-lg .text_show").text();

    $("textarea[placeholder]").each(function (index) {
      var text = $(this).attr("placeholder");
      var match = /\r|\n/.exec(text);

      if (!match) return;

      $(this).attr("placeholder", "");
      $(this).attr("data-placeholder", text);
      $(this).addClass("active");
      if (canvastext != "Your Text") {
        $(this).val(canvastext);
      } else {
        $(this).val(text);
      }
    });

    $("textarea[data-placeholder]").on("focus", function () {
      if ($(this).attr("data-placeholder") === $(this).val()) {
        $(this).attr("data-placeholder", $(this).val());
        $(this).val("");
        $(this).removeClass("active");
      }
    });

    $("textarea[data-placeholder]").on("blur", function () {
      if ($(this).val() === "") {
        var text = $(this).attr("data-placeholder");
        if (canvastext != "Your Text") {
          $(this).val(canvastext);
        } else {
          $(this).val(text);
        }
        $(this).addClass("active");
      }
    });
  }
});
// End multiline-placeholder
