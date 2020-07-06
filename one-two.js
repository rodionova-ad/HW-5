const formation = (top, block) => {
		let cur = document.createElement("li");

		cur.innerHTML = block.text;

		if (block.hasOwnProperty("childs")) {
			let child = document.createElement("ul");

			for (let i of block.childs) 
				formation(child, i);

			cur.appendChild(child);
		}
		top.appendChild(cur);
	},
	recursion = (parent_node) => {
		console.log(parent_node);
		let s = parent_node.children;

		if (s.length > 0) {
			for (let i = 0; i < s.length; i++) {
				recursion(s[i]);
			}
		}
	};

window.onload = () => {
	let lis = document.createElement("ul");
	let body = document.getElementsByTagName("body");

	formation(lis, animals);
	formation(lis, fish);

	body[0].appendChild(lis);
	recursion(document.getElementById("html"));
};
