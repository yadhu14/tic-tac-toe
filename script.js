$(document).ready(function() {
    $("#chooseGame")
      .show()
      .addClass("animated fadeInDown");
    $("#chooseGame").one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $("#chooseGame").removeClass("animated fadeInDown");
      }
    );
    $("#choosePlayer").hide();
    $("#gameBox").hide();
    $("#winBox").hide();
    $("#loseBox").hide();
    $("#playerXwins").hide();
    $("#player0wins").hide();
  });
  $("#vsComp").click(function() {
    $("#chooseGame").hide();
    $("#choosePlayer")
      .show()
      .addClass("animated flipInX");
    $("#choosePlayer").one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $("#choosePlayer").removeClass("animated flipInX");
      }
    );
    $("#winBox").hide();
    $("#loseBox").hide();
    $("#playerXwins").hide();
    $("#player0wins").hide();
  
    var turn;
    var computersTurn;
    var turns = ["", "", "", "", "", "", "", "", ""];
    var count = 0;
    var gameOn = false;
    var slot;
    var computersMove;
  
    function checkForWinner(symbol) {
      if (
        $("#box0").hasClass(symbol) &&
        $("#box1").hasClass(symbol) &&
        $("#box2").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box3").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box5").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box6").hasClass(symbol) &&
        $("#box7").hasClass(symbol) &&
        $("#box8").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box0").hasClass(symbol) &&
        $("#box3").hasClass(symbol) &&
        $("#box6").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box0").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box8").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box1").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box7").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box2").hasClass(symbol) &&
        $("#box5").hasClass(symbol) &&
        $("#box8").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box2").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box6").hasClass(symbol)
      ) {
        return true;
      } else {
        return false;
      }
    }
  
   
    function computerTurn() {
      var taken = false;
      while (taken === false && count !== 5) {
        computersMove = (Math.random() * 8).toFixed();
        var move = $("#box" + computersMove).text();
        if (move === "") {
          $("#box" + computersMove)
            .text(computersTurn)
            .addClass("oh");
          taken = true;
          turns[computersMove] = computersTurn;
        }
      }
    }
  
   
    function playerTurn(turn, id) {
      var spotTaken = $("#" + id).text();
      if (spotTaken === "") {
        turns[id] = turn;
        $("#" + id)
          .text(turn)
          .addClass("ex");
        count++;
        if (checkForWinner("ex")) {
          $(".tic").text("");
          $("#choosePlayer").hide();
          $("#gameBox").hide();
          $("#winBox").show()
            .addClass("animated fadeInUp");
          $("#winBox").one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function() {
              $("#winBox").removeClass("animated fadeInUp");
            }
          );
          $("#loseBox").hide();
          $("#playerXwins").hide();
          $("#player0wins").hide();
        }
        if (gameOn === false) {
          computerTurn();
          if (checkForWinner("oh")) {
            $(".tic").text("");
            $("#choosePlayer").hide();
            $("#gameBox").hide();
            $("#winBox").hide();
            $("#loseBox")
              .show()
              .addClass("animated fadeInUp");
            $("#loseBox").one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                $("#loseBox").removeClass("animated fadeInUp");
              }
            );
            $("#playerXwins").hide();
            $("#player0wins").hide();
          }
        }
      }
    }
  $(".tic").click(function() {
      slot = $(this).attr("id");
      playerTurn(turn, slot);
    });
  
   
    $("#playerX").click(function() {
      turn = "X";
      computersTurn = "0";
      $("#chooseGame").hide();
      $("#choosePlayer").hide();
      $("#gameBox")
        .show()
        .addClass("animated flipInX");
      $("#winBox").hide();
      $("#loseBox").hide();
      $("#playerXwins").hide();
      $("#player0wins").hide();
    });
    $("#player0").click(function() {
      turn = "0";
      computersTurn = "X";
      $("#chooseGame").hide();
      $("#choosePlayer").hide();
      $("#gameBox")
        .show()
        .addClass("animated flipInX");
      $("#winBox").hide();
      $("#loseBox").hide();
      $("#playerXwins").hide();
      $("#player0wins").hide();
    });
  
    function resetVScomp() {
      turns = ["", "", "", "", "", "", "", "", ""];
      count = 0;
      gameOn = false;
      $(".tic").text("");
      $(".tic").removeClass("ex");
      $(".tic").removeClass("oh");
      $("#chooseGame").hide();
      $("#choosePlayer")
        .show()
        .addClass("animated flipInX");
      $("#choosePlayer").one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $("#choosePlayer").removeClass("animated flipInX");
        }
      );
      $("#gameBox").hide();
      $("#winBox").hide();
      $("#loseBox").hide();
      $("#playerXwins").hide();
      $("#player0wins").hide();
    }
   $(".btn").click(function() {
      resetVScomp();
    });
    $("#main").click(function() {
      resetVScomp();
    });
  });
  $("#2players").click(function() {
   
    $("#chooseGame").hide();
    $("#choosePlayer")
      .show()
      .addClass("animated flipInX");
    $("#choosePlayer").one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        $("#choosePlayer").removeClass("animated flipInX");
      }
    );
    $("#gameBox").hide();
    $("#winBox").hide();
    $("#loseBox").hide();
    $("#playerXwins").hide();
    $("#player0wins").hide();
  
    var player;
   
    $("#playerX").click(function() {
      player = "X";
     
      $("#chooseGame").hide();
      $("#choosePlayer").hide();
      $("#gameBox")
        .show()
        .addClass("animated flipInX");
      $("#gameBox").one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $("#gameBox").removeClass("animated flipInX");
        }
      );
      $("#winBox").hide();
      $("#loseBox").hide();
      $("#playerXwins").hide();
      $("#player0wins").hide();
    });
   
    $("#player0").click(function() {
      player = "0";
     
      $("#chooseGame").hide();
      $("#choosePlayer").hide();
      $("#gameBox")
        .show()
        .addClass("animated flipInX");
      $("#gameBox").one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $("#gameBox").removeClass("animated flipInX");
        }
      );
      $("#winBox").hide();
      $("#loseBox").hide();
      $("#playerXwins").hide();
      $("#player0wins").hide();
    });
   
    function checkIfSomeoneWon(symbol) {
      if (
        $("#box0").hasClass(symbol) &&
        $("#box1").hasClass(symbol) &&
        $("#box2").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box3").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box5").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box6").hasClass(symbol) &&
        $("#box7").hasClass(symbol) &&
        $("#box8").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box0").hasClass(symbol) &&
        $("#box3").hasClass(symbol) &&
        $("#box6").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box0").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box8").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box1").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box7").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box2").hasClass(symbol) &&
        $("#box5").hasClass(symbol) &&
        $("#box8").hasClass(symbol)
      ) {
        return true;
      } else if (
        $("#box2").hasClass(symbol) &&
        $("#box4").hasClass(symbol) &&
        $("#box6").hasClass(symbol)
      ) {
        return true;
      } else {
        return false;
      }
    }
   
    $(".tic").click(function() {
      var fieldClicked = $(this);
     
      if (fieldClicked.hasClass("ex") || fieldClicked.hasClass("oh")) {
        fieldClicked.addClass("animated jello");
        fieldClicked.one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function() {
            fieldClicked.removeClass("animated jello");
          }
        );
      } else {
        if (player === "X") {
          fieldClicked.addClass("ex").text(player);
          if (checkIfSomeoneWon("ex")) {
            $(".tic").text("");
            $("#choosePlayer").hide();
            $("#gameBox").hide();
            $("#winBox").hide();
            $("#loseBox").hide();
            $("#playerXwins")
              .show()
              .addClass("animated fadeInUp");
            $("#playerXwins").one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                $("#playerXwins").removeClass("animated fadeInUp");
              }
            );
            $("#player0wins").hide();
          } else {
            player = "0";
          }
        } else {
          fieldClicked.addClass("oh").text(player);
          if (checkIfSomeoneWon("oh")) {
            $(".tic").text("");
            $("#choosePlayer").hide();
            $("#gameBox").hide();
            $("#winBox").hide();
            $("#loseBox").hide();
            $("#playerXwins").hide();
            $("#player0wins")
              .show()
              .addClass("animated fadeInUp");
            $("#player0wins").one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                $("#player0wins").removeClass("animated fadeInUp");
              }
            );
          } else {
            player = "X";
          }
        }
      }
    });
    function reset() {
      $(".tic").text("");
      $(".tic").removeClass("ex");
      $(".tic").removeClass("oh");
      $("#chooseGame").hide();
      $("#choosePlayer")
        .show()
        .addClass("animated flipInX");
      $("#choosePlayer").one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          $("#choosePlayoneer").removeClass("animated flipInX");
        }
      );
      $("#gameBox").hide();
      $("#winBox").hide();
      $("#loseBox").hide();
      $("#playerXwins").hide();
      $("#player0wins").hide();
    }
    $(".btn").click(function() {
      reset();
    });
    $("#main").click(function() {
      reset();
    });
  });