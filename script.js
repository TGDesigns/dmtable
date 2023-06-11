// Active class
$(document).ready(function() {
    $("#nav-fixed-box ul li a").click(function () {
        $("#nav-fixed-box ul li a").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });
});

// accordion trigger
$( ".detail-accordion" ).on( "click", function() {
  $(this).next(".accordion-info").toggle( "fast" );
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

