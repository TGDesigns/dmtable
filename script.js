// Active class
$(document).ready(function() {
  $("#top-nav ul lia ").click(function () {
      $("#top-nav ul li a").removeClass("active");
      $(this).addClass("active");   
  });
});


$(".detail-accordion").on("click", function() {
  var target = $(this).data("target");
  var accordionInfo = $("#" + target);
  
  // Close all other accordions
  $(".accordion-info").not(accordionInfo).slideUp("fast");

  // Toggle the clicked accordion
  accordionInfo.slideToggle("fast");
});


// Score increaser
$(document).ready(function() {
const modifierElements = document.querySelectorAll('.ability-modifier');
const scoreElements = document.querySelectorAll('.score');

// Loop through each pair of modifier and score elements
for (let i = 0; i < modifierElements.length; i++) {
  const modifierElement = modifierElements[i];
  const scoreElement = scoreElements[i];

  // Set the initial modifier value
  let modifier = 0;

  // Function to update the modifier based on the score
  function updateModifier() {
    const score = parseInt(scoreElement.value);

    if (score > 10) {
      modifier = "+" + Math.floor((score - 10) / 2);
    } else if (score < 10) {
      modifier = Math.ceil((score - 11) / 2);
    } else {
      modifier = 0;
    }

    modifierElement.textContent = modifier;
  }

  // Update the modifier when the page loads
  updateModifier();

  // Update the modifier when the score changes
  scoreElement.addEventListener('DOMSubtreeModified', updateModifier);
}
});

document.addEventListener('DOMContentLoaded', () => {
const imageElements = document.querySelectorAll('.fullscreen-image');

imageElements.forEach(imageElement => {
  let isFullscreen = false;

  imageElement.addEventListener('click', () => {
    if (!isFullscreen) {
      imageElement.classList.add('fullscreen');
      document.body.style.overflow = 'hidden'; // Prevent scrolling on mobile
    } else {
      imageElement.classList.remove('fullscreen');
      document.body.style.overflow = 'auto'; // Restore scrolling on mobile
    }
    isFullscreen = !isFullscreen;
  });
});
});


// Audio Player

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audio-player');
  const songButtons = document.querySelectorAll('.song-button');
  const songNameElement = document.getElementById('songName');

  songButtons.forEach(button => {
    button.addEventListener('click', () => {
      const songSrc = button.dataset.src;
      const songName = button.innerHTML;
      
      audioPlayer.src = songSrc;
      audioPlayer.play();
      
      songNameElement.innerHTML = songName;

      songButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
    });
  });
});


// checklist checked
document.addEventListener('DOMContentLoaded', () => {
  const checklistItems = document.querySelectorAll('.checklist-item');

  checklistItems.forEach(item => {
    const input = item.querySelector('input[type="checkbox"]');
    input.addEventListener('change', () => {
      if (input.checked) {
        item.classList.add('checked');
      } else {
        item.classList.remove('checked');
      }
    });
  });
});