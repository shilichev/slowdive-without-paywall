var animationSpeed = 1;
var timeOfAnimation = 1;
var questionObjList = [
  {
    question: "What do money & material things mean to you?",
    image: "",
    answerObjList: [
      {
        text: "The most important things in life",
        correct: false,
      },
      {
        text: "They are just tools",
        correct: true,
      },
      {
        text: "They don't matter",
        correct: false,
      },
    ],
  },
  {
    question: "How often do you limit yourself?",
    image: "",
    answerObjList: [
      {
        text: "I don't limit myself at all",
        correct: false,
      },
      {
        text: "Only when I see a reason to do so",
        correct: true,
      },
      {
        text: "I limit myself in many ways",
        correct: false,
      },
    ],
  },
  {
    question: "Do you care what other people say?",
    image: "",
    answerObjList: [
      {
        text: "Yes, I care what people say about me",
        correct: false,
      },
      {
        text: "I do, but I don't depend on other people’s approval",
        correct: true,
      },
      {
        text: "I ignore other people's opinions",
        correct: false,
      },
    ],
  },
  {
    question: "How do you express your feelings?",
    image: "",
    answerObjList: [
      {
        text: "I might be too emotional at times",
        correct: false,
      },
      {
        text: "I can manage my feelings",
        correct: true,
      },
      {
        text: "It's always difficult for me to express them",
        correct: false,
      },
    ],
  },
  {
    question: "Do you voice your opinion often?",
    image: "",
    answerObjList: [
      {
        text: "At every chance I get",
        correct: false,
      },
      {
        text: "I do it when it’s appropriate",
        correct: true,
      },
      {
        text: "I have a problem expressing it",
        correct: false,
      },
    ],
  },
  {
    question: "How do you see your place in the world?",
    image: "",
    answerObjList: [
      {
        text: "As somewhat separated from the world",
        correct: false,
      },
      {
        text: "As one with all the things",
        correct: true,
      },
      {
        text: "As a distinct individual",
        correct: false,
      },
    ],
  },
  {
    question: "How do you generally feel about life?",
    image: "",
    answerObjList: [
      {
        id: 1,
        text: "Life has no meaning",
        correct: false,
      },
      {
        id: 2,
        text: "Life is a game",
        correct: true,
      },
      {
        id: 3,
        text: "Life is unfair",
        correct: false,
      },
    ],
  },
];
var resultObjList = [
  {
    title: "THE ROOT CHAKRA IMBALANCE",
    text:
      "Your root chakra is what connects you to life force energy in the Earth and keeps you grounded and steady. When this chakra is balanced, you feel secure and steady in who you are and where you are going. However, when there is an imbalance in this chakra, you may experience extreme volatility in your emotions. Because this is like the gateway chakra to Kundalini energy, it is one of the more important chakras to heal first. When you open the chakras, energy first needs to flow through the Muladhara chakra, so it’s important to keep it clear and healthy.<br><br>" +
      "In order to balance the chakra you should use a special chakra balancing meditation.",
  },
  {
    title: "THE SACRAL CHAKRA IMBALANCE",
    text:
      "If your sacral chakra is dominant, then you are not afraid of your sexuality or your ability to experience pleasure. You have healthy boundaries, yet you love to nurture yourself and others. However, if it’s blocked, then you likely are feeling an immense amount of guilt, have problems with boundaries, and may even find yourself with an addictive personality.<br><br>" +
      "In order to balance the chakra you should use a special chakra balancing meditation.",
  },
  {
    title: "THE SOLAR PLEXUS CHAKRA IMBALANCE",
    text:
      "When your solar plexus chakra is dominant, then you are likely confident in who you are and not afraid to show it! Others might even gravitate toward your fun-loving nature. However, if it’s blocked, then you might experience shame, stubbornness, or even an intense urge to control things in your life. Because this chakra is at your core, it’s often the drive that pushes you forward. Healing this chakra can help you find a sense of balance in your entire life, not just your chakras.<br><br>" +
      "In order to balance the chakra you should use a special chakra balancing meditation.",
  },
  {
    title: "THE HEART CHAKRA IMBALANCE",
    text:
      "Your heart chakra is where unconditional love resides and when there is balance and harmony in the heart chakra, then there is likely balance and harmony in your daily life. If this chakra center is blocked or not functioning properly, then you might experience grief and heartache. Loss and unrequited love can cause jealousy and resentment.<br><br>" +
      "In order to balance the chakra you should use a special chakra balancing meditation.",
  },
  {
    title: "THE THROAT CHAKRA IMBALANCE",
    text:
      "Your throat chakra is, as you might expect, where your voice and ability to communicate resides. When this chakra center is flowing freely, you may feel as if you can stand up for yourself and speak clearly. When it is blocked, however, it might feel as if you can’t stay true to yourself or speak your mind clearly.<br><br>" +
      "In order to balance the chakra you should use a special chakra balancing meditation.",
  },
  {
    title: "THE THIRD EYE CHAKRA IMBALANCE",
    text:
      "If your third eye chakra is dominant, then you are connected with your intuition and creativity. If it is not balanced, though, then you might be living in a state of illusion. Depending on your current situation, a blocked third eye can make for a very confusing experience.<br><br>" +
      "In order to balance the chakra you should use a special chakra balancing meditation.",
  },
  {
    title: "THE CROWN CHAKRA IMBALANCE",
    text:
      "The crown chakra is what connects you to the spiritual energy of the Great Divine. With this open chakra, you may be very open-minded and connected to your intuition. You might experience vital energy throughout all of the chakra energy centers, feeling as if your thoughts and actions are perfectly aligned with your greater purpose. And if it’s blocked. Then you may be too attached to your thoughts and feel confusion about what is reality and what is in your mind.<br><br>" +
      "In order to balance the chakra you should use a special chakra balancing meditation.",
  },
];

var transitionList = [
  '.animation--container[data-position="animation"]',
  '.animation--container-1[data-position="animation"]',
  '.animation--container-2[data-position="animation"]',
  '.animation--container-3[data-position="animation"]',
  '.animation--container-4[data-position="animation"]',
  '.animation--container-5[data-position="animation"]',
  '.animation--container-6[data-position="animation"]',
  '.animation--container-7[data-position="animation"]',
];

var payWall = {
  one_month: {
    value: 19.99,
  },
  one_year: {
    value: 39.99,
  },
  full_time: {
    value: 69.99,
  },
};
var userIncorrectAnswersIDs = [];
$(document).ready(function () {
  $("#questionCNT").html(questionObjList.length);
  var views = $("body").find(".views");
  $(views).each(function (view) {
    $(view).hide();
  });
  fadeOutTransitionElements(0);

  $('.view[data-position="start"] .header').stop().fadeOut(0);
  $('.view[data-position="start"] .content').stop().fadeOut(0);
  $('.view[data-position="start"] .footer').stop().fadeOut(0);
  $('.view[data-position="start"]')
    .stop()
    .fadeIn("300", function () {
      $('.view[data-position="start"] .header').stop().fadeIn(animationSpeed);
      setTimeout(function () {
        $('.view[data-position="start"] .content')
          .stop()
          .fadeIn(animationSpeed);
        setTimeout(function () {
          $('.view[data-position="start"] .footer')
            .stop()
            .fadeIn(animationSpeed);
        }, 300);
      }, 300);
    });
  $(".btn--start").click(function () {
    showQuestion(0);
    $('.view[data-position="start"] .footer').stop().fadeOut(animationSpeed);
    setTimeout(function () {
      $('.view[data-position="start"] .content').stop().fadeOut(animationSpeed);
      setTimeout(function () {
        $('.view[data-position="start"] .header')
          .stop()
          .fadeOut(animationSpeed, function () {
            $('.view[data-position="start"]').stop().fadeOut(300);
          });
      }, 300);
    }, 300);
  });

  $(".btn--answer").click(function () {
    var btnAnswerList = $(this).parent().find(".btn--answer");
    $(btnAnswerList).each(function (i, val) {
      $(val).removeClass("btn--selected");
    });
    $(this).addClass("btn--selected");
    if (!$(this).parents(".view").hasClass("selected")) {
      $(this).parents(".view").find(".btn--next").stop().fadeOut(0);
      $(this).parents(".view").find(".btn--next").removeClass("hidden");
      $(this).parents(".view").find(".btn--next").stop().fadeIn(300);
    }
    $(this).parents(".view").addClass("selected");
  });
  $(".btn--next").click(function () {
    $(this).parents(".view").removeClass("selected");
    if (!$(this).hasClass("hidden")) {
      if (
        $(this).parents(".view").data("question") + 1 <
        questionObjList.length
      ) {
        // next question
        var btnAnswersList = $(this).parents(".view").find(".btn--answer");
        var correct = true;
        $(btnAnswersList).each(function (i, val) {
          if (i == 1) {
            correct = $(this).hasClass("btn--selected");
          }
        });
        if (!correct) {
          userIncorrectAnswersIDs.push(
            $(this).parents(".view").data("question")
          );
        }
        showQuestion($(this).parents(".view").data("question") + 1);
      } else {
        // show result
        console.log(userIncorrectAnswersIDs);
        if (userIncorrectAnswersIDs.length == 0) {
          showResult(6);
        } else {
          showResult(
            userIncorrectAnswersIDs[
              Math.floor(Math.random() * userIncorrectAnswersIDs.length)
            ]
          );
        }
      }
    }
  });
  $(".btn--continue").click(function () {
    $('.view[data-position="finish"] .header').stop().fadeOut(0);
    $('.view[data-position="finish"] .content').stop().fadeOut(0);
    $('.view[data-position="finish"] .footer').stop().fadeOut(0);
    $('.view[data-position="finish"] .enter-email').stop().fadeOut(0);
    $('.view[data-position="finish"] .btn--ended').stop().fadeOut(0);
    $('.view[data-position="result"] .footer').stop().fadeOut(animationSpeed);
    setTimeout(function () {
      $('.view[data-position="result"] .content')
        .stop()
        .fadeOut(animationSpeed);
      setTimeout(function () {
        $('.view[data-position="result"] .header')
          .stop()
          .fadeOut(animationSpeed, function () {
            $(".view").stop().fadeOut(300);
            $(".bgView").stop().fadeOut(300);
            $('.animation--container[data-position="animation"]')
              .stop()
              .fadeIn(300, function () {
                setTimeout(function () {
                  $('.animation--container-1[data-position="animation"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                }, 300);
                setTimeout(function () {
                  $('.animation--container-2[data-position="animation"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                  $(".transition-text").stop().fadeIn(timeOfAnimation);
                }, timeOfAnimation);
                setTimeout(function () {
                  $('.animation--container-3[data-position="animation"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                }, timeOfAnimation * 2);
                setTimeout(function () {
                  $('.animation--container-4[data-position="animation"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                }, timeOfAnimation * 3);
                setTimeout(function () {
                  $('.animation--container-5[data-position="animation"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                }, timeOfAnimation * 4);
                setTimeout(function () {
                  $('.animation--container-6[data-position="animation"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                  $(".transition-text").stop().fadeOut(timeOfAnimation);
                }, timeOfAnimation * 5);
                setTimeout(function () {
                  $('.animation--container-7[data-position="animation"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                }, timeOfAnimation * 6);
                setTimeout(function () {
                  $('.view[data-position="finish"]')
                    .stop()
                    .fadeIn(timeOfAnimation);
                  $('.view[data-position="finish"] .header')
                    .stop()
                    .fadeIn(timeOfAnimation);
                  $('.view[data-position="finish"] .your-first-meditation')
                    .stop()
                    .fadeOut(0);
                  $('.view[data-position="finish"] .title--question')
                    .stop()
                    .fadeOut(0);
                  $('.view[data-position="finish"] .divider').stop().fadeOut(0);
                  $('.view[data-position="finish"] .content-finish')
                    .stop()
                    .fadeOut(0);
                  $('.view[data-position="finish"] .footer-finish')
                    .stop()
                    .fadeOut(0);
                  $('.view[data-position="finish"] .title--finish_image')
                    .stop()
                    .fadeIn(timeOfAnimation);
                  setTimeout(function () {
                    $('.view[data-position="finish"] .your-first-meditation')
                      .stop()
                      .fadeIn(300);
                  }, timeOfAnimation);
                  setTimeout(function () {
                    $('.view[data-position="finish"] .your-first-meditation')
                      .stop()
                      .fadeOut(timeOfAnimation);
                  }, timeOfAnimation * 2);
                  setTimeout(function () {
                    $('.view[data-position="finish"] .title--question')
                      .stop()
                      .fadeIn(timeOfAnimation);
                    $('.view[data-position="finish"] .divider')
                      .stop()
                      .fadeIn(timeOfAnimation);
                    $('.view[data-position="finish"] .content-finish')
                      .stop()
                      .fadeIn(timeOfAnimation);
                    $('.view[data-position="finish"] .footer-finish')
                      .stop()
                      .fadeIn(timeOfAnimation);
                  }, timeOfAnimation * 3);
                }, timeOfAnimation * 7);
              });
          });
      }, 300);
    }, 300);
    $(".btn--finish").click(function () {
      window.open(
        "https://apps.apple.com/us/app/slowdive-meditation-sleep/id1172138662"
      );
    });
  });
});

function showResult(resultID) {
  $('.view[data-position="play"] .footer').stop().fadeOut(animationSpeed);
  $('.view[data-position="play"] .divider').stop().fadeOut(animationSpeed);
  setTimeout(function () {
    $('.view[data-position="play"] .content').stop().fadeOut(animationSpeed);
    setTimeout(function () {
      $('.view[data-position="play"] .header')
        .stop()
        .fadeOut(animationSpeed, function () {
          $('.view[data-position="play"]').fadeOut(300, function () {
            $('.view[data-position="result"] .title').html(
              resultObjList[resultID].title
            );
            $('.view[data-position="result"] .text-finish').html(
              resultObjList[resultID].text
            );
            $('.view[data-position="result"] .header').fadeOut(0);
            $('.view[data-position="result"] .content').fadeOut(0);
            $('.view[data-position="result"] .footer').fadeOut(0);
            $('.view[data-position="result"]')
              .stop()
              .fadeIn(300, function () {
                $('.view[data-position="result"] .header')
                  .stop()
                  .fadeIn(animationSpeed);
                setTimeout(function () {
                  $('.view[data-position="result"] .content')
                    .stop()
                    .fadeIn(animationSpeed);
                  setTimeout(function () {
                    $('.view[data-position="result"] .footer')
                      .stop()
                      .fadeIn(animationSpeed);
                  }, 300);
                }, 300);
              });
          });
        });
    }, 300);
  }, 300);
}
function showQuestion(questionNumber) {
  $(".special-overlay").show();
  $('.view[data-position="play"]').data("question", questionNumber);
  $('.view[data-position="play"] .footer').stop().fadeOut(animationSpeed);
  $('.view[data-position="play"] .divider').stop().fadeOut(animationSpeed);
  setTimeout(function () {
    $('.view[data-position="play"] .content').stop().fadeOut(animationSpeed);
    setTimeout(function () {
      $('.view[data-position="play"] .header')
        .stop()
        .fadeOut(animationSpeed, function () {
          $('.view[data-position="play"] .title--question').html(
            questionObjList[questionNumber].question
          );
          $('.view[data-position="play"] .question-image').attr(
            "src",
            "images/q" + (questionNumber + 1) + ".png"
          );
          $('.view[data-position="play"] .question-image').attr(
            "title",
            questionObjList[questionNumber].question
          );
          var btnList = $('.view[data-position="play"] .content').find(".btn");
          $(btnList).each(function (i, val) {
            $(val).removeClass("btn--selected");
            $(val).html(questionObjList[questionNumber].answerObjList[i].text);
            if (questionObjList[questionNumber].answerObjList[i].correct) {
              $(val).data("correct", 1);
            } else {
              $(val).data("correct", 0);
            }
          });
          $('.view[data-position="play"] .btn--next').addClass("hidden");
          $("#questionNumber").html(questionNumber + 1);
          $('.view[data-position="play"]')
            .stop()
            .fadeIn(300, function () {
              $('.view[data-position="play"] .header')
                .stop()
                .fadeIn(animationSpeed);
              $('.view[data-position="play"] .divider')
                .stop()
                .fadeIn(animationSpeed);
              setTimeout(function () {
                $('.view[data-position="play"] .content')
                  .stop()
                  .fadeIn(animationSpeed);
                setTimeout(function () {
                  $('.view[data-position="play"] .footer')
                    .stop()
                    .fadeIn(animationSpeed, function () {
                      $(".special-overlay").hide();
                    });
                }, 300);
              }, 300);
            });
        });
    }, 300);
  }, 300);
}

function fadeOutTransitionElements(time) {
  transitionList.forEach((item) => {
    $(item).stop().fadeOut(time);
  });
  $(".transition-text").stop().fadeOut(0);
}
