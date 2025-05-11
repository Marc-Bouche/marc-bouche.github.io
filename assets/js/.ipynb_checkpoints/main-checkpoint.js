/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main'),
		$navPanelToggle, $navPanel, $navPanelInner;

	// Breakpoints.
	breakpoints({
		default:   ['1681px',   null       ],
		xlarge:    ['1281px',   '1680px'   ],
		large:     ['981px',    '1280px'   ],
		medium:    ['737px',    '980px'    ],
		small:     ['481px',    '736px'    ],
		xsmall:    ['361px',    '480px'    ],
		xxsmall:   [null,       '360px'    ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly();

	// Background.
	$wrapper._parallax(0.925);

	// Contact Form Handling
	$(document).ready(function() {
		$("#contactForm").on("submit", function(event) {
			event.preventDefault(); // Prevent default form submission

			let form = $(this);
			let formData = form.serialize(); // Get form data

			$.ajax({
				url: form.attr("action"),
				method: "POST",
				data: formData,
				dataType: "json",
				success: function(response) {
					alert("Message sent successfully! ✅");
					form[0].reset(); // Clear form fields
				},
				error: function(error) {
					alert("Something went wrong. ❌");
					console.error("Error:", error);
				}
			});
		});

		// ✅ Tableau Visualization Integration
		var divElement = document.getElementById("viz171232");
		if (divElement) {
			var vizElement = divElement.getElementsByTagName("object")[0];
			if (vizElement) {
				vizElement.style.width = "100%";
				vizElement.style.height = (divElement.offsetWidth * 0.75) + "px"; // Maintain aspect ratio
			}
		}
	});

})(jQuery);
