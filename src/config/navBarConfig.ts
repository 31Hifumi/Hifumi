import {
	LinkPreset,
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";

// 导航栏链接配置
const links = [
	// 主页
	LinkPreset.Home,
	// 归档
	LinkPreset.Archive,
	// 标签
	LinkPreset.Tags,
	// 关于
	LinkPreset.About,
];

export const navBarConfig: NavBarConfig = { links } as NavBarConfig;

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
