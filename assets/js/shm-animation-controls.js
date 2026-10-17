(function () {
  var figures = document.querySelectorAll(".shm-animation-controls");

  figures.forEach(function (controls) {
    var figure = controls.closest(".lecture-figure");
    var animationObject = figure.querySelector(".shm-animation");
    var pauseButton = controls.querySelector('[data-animation-action="pause"]');
    var playButton = controls.querySelector('[data-animation-action="play"]');
    var status = controls.querySelector("[data-animation-status]");
    var initializationAttempts = 0;

    function initializeControls() {
      var svgDocument = animationObject.contentDocument;
      var svgRoot = svgDocument && svgDocument.documentElement;

      if (!svgRoot || typeof svgDocument.getAnimations !== "function" ||
          typeof svgRoot.pauseAnimations !== "function" ||
          typeof svgRoot.unpauseAnimations !== "function") {
        initializationAttempts += 1;
        if (initializationAttempts < 60) {
          window.requestAnimationFrame(initializeControls);
        } else {
          status.textContent = "Animation controls are not supported in this browser.";
        }
        return;
      }

      var isPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function updateButtons() {
        pauseButton.disabled = isPaused;
        playButton.disabled = !isPaused;
        status.textContent = isPaused ? "Animation paused." : "Animation playing.";
      }

      function setPaused(paused) {
        isPaused = paused;
        if (isPaused) {
          svgDocument.getAnimations().forEach(function (animation) {
            animation.pause();
          });
          svgRoot.pauseAnimations();
        } else {
          svgRoot.classList.add("motion-enabled");
          svgRoot.unpauseAnimations();
          svgDocument.getAnimations().forEach(function (animation) {
            animation.play();
          });
        }
        updateButtons();
      }

      pauseButton.addEventListener("click", function () {
        setPaused(true);
      });
      playButton.addEventListener("click", function () {
        setPaused(false);
      });

      if (isPaused) {
        svgDocument.getAnimations().forEach(function (animation) {
          animation.pause();
        });
        svgRoot.pauseAnimations();
      }
      updateButtons();
    }

    var svgDocument = animationObject.contentDocument;
    if (svgDocument && svgDocument.readyState === "complete") {
      initializeControls();
    } else {
      animationObject.addEventListener("load", initializeControls, { once: true });
      animationObject.addEventListener("error", function () {
        status.textContent = "The animation could not be loaded.";
      }, { once: true });
    }
  });
})();
