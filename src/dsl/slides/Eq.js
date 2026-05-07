export default class Eq {
	constructor(slide, builder) {
		this.slide = slide;

		this.builder = builder;
	}

	line(
		content,
		showAt,
		spItems = []
	) {
		this.slide.data.push({
			name: "line",

			content,

			showAt,

			spItems
		});

		return this;
	}

	math(
		content,
		showAt,
		spItems = []
	) {
		this.slide.data.push({
			name: "math",

			content,

			showAt,

			spItems
		});

		return this;
	}

	title(
		content,
		showAt,
		spItems = []
	) {
		this.slide.data.push({
			name: "title",

			content,

			showAt,

			spItems
		});

		return this;
	}

	done() {
		return this.builder;
	}
}