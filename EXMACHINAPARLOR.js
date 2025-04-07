document.addEventListener('DOMContentLoaded', () => {
  loadPageWithAnimation('page1'); // Ensure DOM is fully loaded before calling this
});

function loadPageWithAnimation(pageId) {
  const container = document.getElementById('animationContainer');
  container.innerHTML = `
   <!-- #start  load bar -->
<!--
      <div class="intro-wrap">
        <div class="noise"></div>
        <div class="noise noise-moving"></div>
        <div class="pre-load">
          <div class="load-wrap">
            <div id="load-bar">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      
-->
<!-- #end load bar-->
  `;
  const sections = document.querySelectorAll('#content section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  setTimeout(() => {
    container.innerHTML = ''; 
  }, 0);
}

//end of transition tool

Math.Ran = function (max) {
  let rn = Math.round(Math.random() * max);
  rn *= Math.random() > 0.5 ? -1 : 1;
  return rn;
};

function generateRandomKeyFrames(dis, len, name) {
  let keyframes = ``;
  for (var i = 0; i < len; i++) {
    keyframes += `${(i / len) * 100}%{transform: translateX(${Math.Ran(
      dis
    )}px)}`;
  }

  let style = document.createElement("style");
  style.innerHTML = `@keyframes ${name} { ${keyframes} }`;

  document.body.appendChild(style);
}
function generateRandomClipFrames(len, name) {
  let keyframes = ``;
  let size = 100;
  for (var i = 0; i < len; i++) {
    keyframes += `${(i / len) * 100}%{
    clip-path: inset(${Math.Ran(size)}% ${Math.Ran(size)}% ${Math.Ran(
      size
    )}% ${Math.Ran(size)}%)
}`;
  }

  let style = document.createElement("style");
  style.innerHTML = `@keyframes ${name} {
${keyframes} 
}`;

  document.body.appendChild(style);
}

generateRandomKeyFrames(7, 8, "random1");
generateRandomKeyFrames(5, 5, "random2");
generateRandomClipFrames(100, "random-clip-1");

var $circle = $(".cursor"),
  $follow = $(".cursor-follower");

function moveCircle(e) {
  TweenLite.to($circle, 0.05, {
    x: e.clientX,
    y: e.clientY
  });
  TweenLite.to($follow, 0.7, {
    x: e.clientX,
    y: e.clientY
  });
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    scale: 0
  });
  TweenLite.to($follow, 0.3, {
    scale: 2
  });
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    scale: 1
  });
  TweenLite.to($follow, 0.3, {
    scale: 1
  });
}

$(window).on("mousemove", moveCircle);

$("a").hover(hoverFunc, unhoverFunc);

$(window).on('load', function () {
  $(".pre-load").css("z-index", "9999999999999999999999999999999999999999999999999999999999999999999999999999999999")
    .delay(3000)
    .fadeOut("slow");
});


console.clear();
Splitting();

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("recordSpeed").innerText = time;
  document.getElementById("recordSpeed").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

     const neonLinks = document.querySelectorAll('.neon');

    neonLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.add('hidden');
        setTimeout(() => {
          this.classList.remove('hidden');
        }, 2000);
      });
    });