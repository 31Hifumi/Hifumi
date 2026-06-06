import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像（使用 Firefly 默认头像，后续替换）
	avatar: "assets/images/avatar.jpg",

	// 名字
	name: "Hifumi",

	// 个人签名
	bio: "我们的故事是怎样的走向，由我们自己来决定！",

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