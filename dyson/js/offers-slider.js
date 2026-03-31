export const offersSlider = () => {
	new Swiper(".offers__slider", {
		slidesPerView: 2,
		grid: {
			rows: 2,
			fill: "row",
		},
		spaceBetween: 10,

		// If we need pagination
		pagination: {
			type: "fraction",
			el: ".swiper-pagination",
			renderFraction: function (currentClass, totalClass) {
				return (
					'<span class="' +
					currentClass +
					'"></span>' +
					" из " +
					'<span class="' +
					totalClass +
					'"></span>'
				);
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".offers__slider-next",
			prevEl: ".offers__slider-prev",
		},

		breakpoints: {
			577: {
				slidesPerView: 2,
				grid: {
					rows: 2,
					fill: "row",
				},
				spaceBetween: 10,
			},

			710: {
				slidesPerView: 3,
				grid: {
					rows: 2,
					fill: "row",
				},
				spaceBetween: 10,
			},

			769: {
				slidesPerView: 2,
				grid: {
					rows: 2,
					fill: "row",
				},
				spaceBetween: 20,
			},

			851: {
				slidesPerView: 3,
				grid: {
					rows: 2,
					fill: "row",
				},
				spaceBetween: 20,
			},

			993: {
				slidesPerView: 2,
				grid: {
					rows: 2,
					fill: "row",
				},
				spaceBetween: 20,
			},

			1301: {
				slidesPerView: 3,
				grid: {
					rows: 2,
					fill: "row",
				},
				spaceBetween: 20,
			},
		},
	});
};
