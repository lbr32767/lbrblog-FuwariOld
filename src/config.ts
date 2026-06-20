import type {
	BeianConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FriendConfig,
	FriendGroup,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	ScriptConfig,
	SiteConfig,
	SponsorConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "LbrBlog",
	subtitle: "这里是lbr的个人博客",
	lang: "zh_CN", // 语言代码，例如 'en'、'zh_CN'、'ja' 等
	themeColor: {
		hue: 250, // 主题色的默认色相，范围从0到360。例如：红色为0，蓝绿色为200，青色为250，粉色为345
		fixed: true, // 是否为访问者隐藏主题色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top'、'center'、'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的署名文字
			text: "", // 要显示的署名文字
			url: "", // （可选）指向原始作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，范围为 1 到 3
	},
	favicon: [
		{
			src: "/favicon/favicon.png", // favicon 的路径，相对于 /public 目录
			//   theme: 'light',              // （可选）'light' 或 'dark'，仅在您有亮色和暗色模式的不同 favicon 时设置
			//   sizes: '32x32',              // （可选）favicon 的尺寸，仅在您有不同尺寸的 favicon 时设置
		},
	],
};
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		LinkPreset.Sponsor,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Lbr",
	bio: "这里是lbr的个人博客",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/lbr32767/",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=vOQBiYYKF_FHtzDG8rJIrkbXCm3I-i5J&authKey=xCFlXWrw3l0V1XNKLkwlgMCva8FAip1AVxu2vfPYwqRqHugue3%2BI%2FEhPuFLSlqRL&noverify=0&group_code=512186514",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.gg/taBUBxGv7",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）已被覆盖，请参阅 astro.config.mjs 文件
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: true,
	repo: "lbr32767/LbrBlog-CommentSection",
	repoId: "R_kgDOSmGMYg",
	category: "Announcements",
	categoryId: "DIC_kwDOSmGMYs4C9tJI",
	mapping: "pathname",
	lang: "zh-CN",
};

export const friendConfig: FriendConfig = {
	enable: true,
};

export const sponsorConfig: SponsorConfig = {
	enable: true,
	description: "",
	methods: [],
};

export const beianConfig: BeianConfig = {
	enable: false, // 备案模式：开启后将隐藏赞助、友链、个人、评论区、联系方式（用于备案过程中临时开启）
	icp: "", // ICP备案号，留空则不显示
	icpUrl: "https://beian.miit.gov.cn/#/Integrated/recordQuery",
	gongan: "", // 公安备案号，留空则不显示
	gonganUrl: "https://beian.mps.gov.cn/#/query/webSearch?code=44090402441273",
};

export const scriptConfig: ScriptConfig = {
	enable: true, // 是否启用自定义脚本
	scripts: [
		{
			// Umami 追踪
			src: "https://cloud.umami.is/script.js",
			defer: true,
			"data-website-id": "1f165bb4-f03d-4e0d-b651-677294c14d10",
		},
		// 外部脚本示例：
		// { src: "https://example.com/script.js", async: true },
	],
};

export const friendGroups: FriendGroup[] = [
	{
		title: "项目",
		description: "Lbr 维护的项目",
		priority: 1,
		links: [
			{
				name: "hexcasting.cn",
				url: "https://hexcasting.cn/",
				avatar: "",
				description: "由lbr维护的hexcasting工具网站",
			},
		],
	},
	{
		title: "友链",
		description: "用于seo的友链",
		priority: 10000,
		links: [
			{
				name: "二叉树树",
				url: "https://2x.nz/",
				avatar: "",
				description: "二叉树树的博客",
			},
		],
	},
];
export const postConfig = {
	// 声明弹窗标题
	disclaimerTitle: "阅读声明",
	// 声明内容段落
	disclaimerContent: [
		"本站发布的所有技术内容、代码示例及教程仅供学习、研究与合法用途。",
		"任何用户因违反法律法规或滥用本站内容而导致的后果，均由使用者自行承担，与本站及作者无关。",
		"请在使用前仔细阅读并理解相关法律法规，确保您的行为符合当地法律要求。",
	],
};

/* 
# 配置功能说明

## siteConfig - 网站基础配置
- title: 网站标题
- subtitle: 网站副标题
- lang: 语言代码
- themeColor: 主题色配置
- banner: 横幅配置
- toc: 目录配置
- favicon: 网站图标

## navBarConfig - 导航栏配置
- links: 导航链接列表，支持预设链接和自定义链接

## profileConfig - 个人信息配置
- avatar: 头像路径
- name: 昵称
- bio: 简介
- links: 社交链接列表

## licenseConfig - 文章许可配置
- enable: 是否启用
- name: 许可证名称
- url: 许可证链接

## commentConfig - 评论系统配置 (Giscus)
- enable: 是否启用评论
- repo: GitHub 仓库名
- repoId: 仓库 ID（从 giscus.app 获取）
- category: Discussion 分类
- categoryId: 分类 ID（从 giscus.app 获取）
- mapping: 页面映射方式
- lang: 语言

## friendConfig - 友链开关
- enable: 是否启用友链页面

## sponsorConfig - 赞助开关
- enable: 是否启用赞助页面

## beianConfig - 备案配置
- enable: 备案模式开关（开启后隐藏赞助、友链、个人、评论区、联系方式） (有些内容出现不让备案)
- icp: ICP 备案号（留空不显示）
- gongan: 公安备案号（留空不显示）

## scriptConfig - 自定义脚本配置
- enable: 是否启用自定义脚本
- scripts: 脚本列表，支持两种形式：
  - 内联脚本：{ content: "JS代码" }
  - 外部脚本：{ src: "https://example.com/script.js", async: true, defer: false }

## friendGroups - 友链分组配置
- title: 分组标题
- description: 分组描述
- priority: 优先级（数字越小越靠前）
- links: 友链列表

# 关于部分
文字内容src\content\spec\about.md

# 赞助部分
文字内容src\content\spec\sponsor.md
支付方式src\content\spec\sponsor-methods.json
赞助感谢src\content\spec\sponsor-thanks.json
支付图片等资源放在public\sponsor目录下

# 关于一些资源
网站图标public\favicon\favicon.png
头像public\assets\images\avatar.png

# 请关闭追踪相关配置
*/
