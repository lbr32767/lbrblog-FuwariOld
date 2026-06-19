import { visit } from "unist-util-visit";

export function remarkTableDirective() {
	return (tree) => {
		visit(tree, "paragraph", (node, index, parent) => {
			if (!node.children || node.children.length === 0) return;

			const firstChild = node.children[0];
			let styleName = null;

			if (
				firstChild.type === "textDirective" &&
				firstChild.name.startsWith("table/")
			) {
				styleName = firstChild.name.slice(6);
			} else if (
				firstChild.type === "textDirective" &&
				firstChild.name === "table" &&
				node.children[1]?.type === "text" &&
				node.children[1].value.startsWith("/")
			) {
				styleName = node.children[1].value.slice(1).trim().split(/\s/)[0];
			}

			if (!styleName) return;

			const className =
				"Table" + styleName.charAt(0).toUpperCase() + styleName.slice(1);

			// 在后续兄弟节点中查找第一个 table
			for (let i = index + 1; i < parent.children.length; i++) {
				const sibling = parent.children[i];
				if (sibling.type === "table") {
					sibling.data = sibling.data || {};
					sibling.data.hProperties = sibling.data.hProperties || {};
					const existingClass = sibling.data.hProperties.class || "";
					sibling.data.hProperties.class = existingClass
						? `${existingClass} ${className}`
						: className;
					break;
				}
			}

			// 删除该指令段落
			parent.children.splice(index, 1);
			return index;
		});
	};
}
