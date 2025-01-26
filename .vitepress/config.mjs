import {defineConfig} from 'vitepress'
import { set_sidebar } from "../docs/utils/auto-gen-sidebar.mjs";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/hfl-blog/',
    title: "方雷技术站",
    description: "A VitePress Site",
    head: [["link", { rel: "icon", href: "/docs/public/logo.png" }]],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: '家',
                items: [
                    {text: '首页', link: '/'},
                    {text: '示例', link: '/docs/posts/markdown-examples'}
                ]
            },
            {
                text: '项目',
                items: [
                    {text: 'Java', link: '/docs/posts/api-examples'},
                    {text: 'python', link: '/docs/posts/markdown-examples'}
                ]
            },
            {
                text: '后端',
                items: [
                    {text: 'Java', link: '/docs/posts/api-examples'},
                    {text: 'python', link: '/docs/posts/markdown-examples'}
                ]
            },
            {
                text: 'AI',
                items: [
                    {text: 'Java', link: '/docs/posts/api-examples'},
                    {text: 'python', link: '/docs/posts/markdown-examples'}
                ]
            },
            {
                text: '前端',
                items: [
                    {text: 'vue', link: '/docs/posts/api-examples.md'},
                    {text: 'react', link: '/docs/posts/markdown-examples'},
                    {text: '小程序', link: '/docs/posts/markdown-examples'}
                ]
            },
            {text: '示例', link: '/docs/posts/markdown-examples'}
        ],
        sidebar: false, // 关闭侧边栏
        aside: "left", // 设置右侧侧边栏在左侧显示
        socialLinks: [
            {icon: 'github', link: 'https://github.com/hufanglei'}
        ],
        footer: {
            copyright: 'Copyright © 2025-present 方雷'
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        }
    }
})
