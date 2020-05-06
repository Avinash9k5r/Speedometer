$("button").click(function() {
  showSpeed();
});

$(document).keypress(function(event) {
  if(event.key=="Enter") {
    showSpeed();
  }
});


function showSpeed() {

  $("h3").text($("#test").val() + " kmph");
  switch ($("#test").val()) {

    case "20":
      $("svg").attr("height", "425");
      $("svg").attr("width", "300");
      $("line").attr("x1", "100");
      $("line").attr("y1", "467");
      $("line").attr("x2", "350");
      $("line").attr("y2", "250");

      break;

    case "40":
      $("svg").attr("height", "450");
      $("svg").attr("width", "300");
      $("line").attr("x1", "100");
      $("line").attr("y1", "375");
      $("line").attr("x2", "400");
      $("line").attr("y2", "250");
      break;

    case "60":
      $("svg").attr("height", "350");
      $("svg").attr("width", "300");
      $("line").attr("x1", "100");
      $("line").attr("y1", "300");
      $("line").attr("x2", "500");
      $("line").attr("y2", "300");
      break;

    case "80":
      $("svg").attr("height", "300");
      $("svg").attr("width", "500");
      $("line").attr("x1", "100");
      $("line").attr("y1", "245");
      $("line").attr("x2", "1800");
      $("line").attr("y2", "800");
      break;

    case "100":
      $("svg").attr("height", "275");
      $("svg").attr("width", "500");
      $("line").attr("x1", "100");
      $("line").attr("y1", "175");
      $("line").attr("x2", "1200");
      $("line").attr("y2", "800");
      break;

      case "120":
        $("svg").attr("height", "305");
        $("svg").attr("width", "500");
        $("line").attr("x1", "125");
        $("line").attr("y1", "100");
        $("line").attr("x2", "800");
        $("line").attr("y2", "900");
        break;

    case "140":
      $("svg").attr("height", "300");
      $("svg").attr("width", "500");
      $("line").attr("x1", "210");
      $("line").attr("y1", "100");
      $("line").attr("x2", "450");
      $("line").attr("y2", "700");

      break;

    case "160":
      $("svg").attr("height", "300");
      $("svg").attr("width", "500");
      $("line").attr("x1", "275");
      $("line").attr("y1", "100");
      $("line").attr("x2", "300");
      $("line").attr("y2", "700");

      break;

    case "180":
      $("svg").attr("height", "300");
      $("svg").attr("width", "500");
      $("line").attr("x1", "335");
      $("line").attr("y1", "100");
      $("line").attr("x2", "180");
      $("line").attr("y2", "700");

      break;

    case "200":
      $("svg").attr("height", "300");
      $("svg").attr("width", "500");
      $("line").attr("x1", "405");
      $("line").attr("y1", "120");
      $("line").attr("x2", "-20");
      $("line").attr("y2", "700");

      break;

    case "220":
      $("svg").attr("height", "300");
      $("svg").attr("width", "500");
      $("line").attr("x1", "450");
      $("line").attr("y1", "170");
      $("line").attr("x2", "-170");
      $("line").attr("y2", "700");

      break;

      case "240":
        $("svg").attr("height", "300");
        $("svg").attr("width", "500");
        $("line").attr("x1", "475");
        $("line").attr("y1", "230");
        $("line").attr("x2", "-770");
        $("line").attr("y2", "700");

        break;

      case "260":
        $("svg").attr("height", "325");
        $("svg").attr("width", "500");
        $("line").attr("x1", "260");
        $("line").attr("y1", "250");
        $("line").attr("x2", "725");
        $("line").attr("y2", "375");

        break;

        case "280":
          $("svg").attr("height", "375");
          $("svg").attr("width", "500");
          $("line").attr("x1", "260");
          $("line").attr("y1", "250");
          $("line").attr("x2", "850");
          $("line").attr("y2", "642");

          break;

          case "300":
            $("svg").attr("height", "400");
            $("svg").attr("width", "500");
            $("line").attr("x1", "260");
            $("line").attr("y1", "250");
            $("line").attr("x2", "560");
            $("line").attr("y2", "642");

            break;


    default:
      alert("Write a valid number to show speed on the Speed-o-meter.");

  }
}
