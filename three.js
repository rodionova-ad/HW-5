const generate = (structure, parent) => {
	parent.append("<ul></ul>");

	if (!structure) return;

	for (let i = 0; i < structure.length; i++) {
		parent
			.children("ul")
			.append(
				`<li><span>${structure[i].text}</span> <span class="count"></span></li>`
			);
		generate(
			structure[i].childs,
			parent.children("ul").children("li:last-child")
		);
	}
};

const count = (element) => {
	return element.find("li").length;
};

window.onload = () => {
	const all = [animals, fish];
	const root = $("#root");

	generate(all, root);

	$("li").each(function () {
		const counter = count($(this));
		$(this)
			.children(".count")
			.addClass(counter > 0 ? "red" : "gray")
			.html(`[${counter}]`);
	});

	$("li").click(function () {
		$(this).children().not("span").slideToggle();
		event.stopPropagation();
	});
};
