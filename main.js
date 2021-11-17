const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

const header = $(".header");

$(window)
  .scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 20) {
      header.addClass("header-small");
      header.addClass("header-shadow");
    } else {
      header.removeClass("header-small");
      header.removeClass("header-shadow");
    }
    if (
      $(".module-header").length <= 0 &&
      $(".module-slides").length <= 0 &&
      $(".flexslider").length <= 0
    ) {
      header.addClass("header-small");
    }
  })
  .scroll();

var typingBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".main__text>ul>li").length;

// 타이핑될 텍스트를 가져온다
var typingTxt = $(".main__text>ul>li").eq(liIndex).text();
typingTxt = typingTxt.split(""); // 한글자씩 자른다.
if (typingBool == false) {
  // 타이핑이 진행되지 않았다면
  typingBool = true;
  var tyInt = setInterval(typing, 100); // 반복동작
}

function typing() {
  $(".text__blink ul li").removeClass("on");
  $(".text__blink ul li").eq(liIndex).addClass("on");
  if (typingIdx < typingTxt.length) {
    // 타이핑될 텍스트 길이만큼 반복
    $(".text__blink ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
    typingIdx++;
  } else {
    if (liIndex < liLength - 1) {
      //다음문장으로  가기위해 인덱스를 1증가
      liIndex++;
      //다음문장을 타이핑하기위한 셋팅
      typingIdx = 0;
      typingBool = false;
      typingTxt = $(".main__text>ul>li").eq(liIndex).text();

      //다음문장 타이핑전 1초 쉰다
      clearInterval(tyInt);
      //타이핑종료

      setTimeout(function () {
        //1초후에 다시 타이핑 반복 시작
        tyInt = setInterval(typing, 100);
      }, 1000);
    } else if (liIndex == liLength - 1) {
      //마지막 문장까지 써지면 반복종료
      clearInterval(tyInt);
    }
  }
}
