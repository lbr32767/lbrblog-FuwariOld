import { visit } from "unist-util-visit";

function escapeHtml(text) {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function mdastToHtml(node) {
	if (!node) return "";
	if (node.type === "text") {
		return escapeHtml(node.value).replace(/\n/g, "<br>");
	}
	if (node.type === "inlineCode") {
		return `<code>${escapeHtml(node.value)}</code>`;
	}
	if (node.type === "strong") {
		return `<strong>${node.children.map(mdastToHtml).join("")}</strong>`;
	}
	if (node.type === "emphasis") {
		return `<em>${node.children.map(mdastToHtml).join("")}</em>`;
	}
	if (node.type === "delete") {
		return `<del>${node.children.map(mdastToHtml).join("")}</del>`;
	}
	if (node.type === "link") {
		return `<a href="${escapeHtml(node.url)}">${node.children.map(mdastToHtml).join("")}</a>`;
	}
	if (node.type === "break") {
		return "<br>";
	}
	if (node.type === "paragraph") {
		return `<p>${node.children.map(mdastToHtml).join("")}</p>`;
	}
	if (node.type === "heading") {
		const tag = `h${node.depth}`;
		return `<${tag}>${node.children.map(mdastToHtml).join("")}</${tag}>`;
	}
	if (node.type === "list") {
		const tag = node.ordered ? "ol" : "ul";
		return `<${tag}>${node.children.map(mdastToHtml).join("")}</${tag}>`;
	}
	if (node.type === "listItem") {
		return `<li>${node.children.map(mdastToHtml).join("")}</li>`;
	}
	if (node.type === "blockquote") {
		return `<blockquote>${node.children.map(mdastToHtml).join("")}</blockquote>`;
	}
	if (node.type === "code") {
		return `<pre><code class="language-${node.lang}">${escapeHtml(node.value)}</code></pre>`;
	}
	if (node.children) {
		return node.children.map(mdastToHtml).join("");
	}
	return "";
}

export function remarkDisclaimer() {
	return (tree, file) => {
		let hasDisclaimer = false;
		let customContent = "";

		visit(tree, (node) => {
			if (
				(node.type === "textDirective" || node.type === "containerDirective") &&
				node.name === "disclaimer"
			) {
				hasDisclaimer = true;
				customContent = mdastToHtml(node).trim();
				// 替换为空段落，使其不在正文中渲染
				node.type = "paragraph";
				node.children = [];
				delete node.name;
				delete node.attributes;
				delete node.data;
			}
		});

		if (hasDisclaimer) {
			const data = file.data.astro ?? (file.data.astro = {});
			data.frontmatter ??= {};
			data.frontmatter.needsDisclaimer = true;
			if (customContent) {
				data.frontmatter.customDisclaimer = customContent;
			}
		}
	};
}
