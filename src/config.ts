import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
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
		  src: '/favicon/favicon.png',    // favicon 的路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅在您有亮色和暗色模式的不同 favicon 时设置
		//   sizes: '32x32',              // （可选）favicon 的尺寸，仅在您有不同尺寸的 favicon 时设置
		}
	],
};
export const navBarConfig: NavBarConfig = {
	links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About],
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
