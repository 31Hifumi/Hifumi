import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像（使用 Firefly 默认头像，后续替换）
	avatar: "assets/images/avatar.avif",

	// 名字
	name: "Hifumi",

	// 个人签名
	bio: "记录日常、摄影与阅读",

	// 链接配置
	links: [
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};