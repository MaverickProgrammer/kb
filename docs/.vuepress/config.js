module.exports = {
    title: 'KM 的个人博客',
    description: 'Sow nothing， reap nothing',
    base: '/',   // 设置站点根路径
    port: 9090,
    head: [],
    plugins: [],
    themeConfig: {
    nav: [
    // 国际化
    //   {
    //     text: 'Languages',
    //     items: [
    //       { text: 'Chinese', link: '/language/chinese' },
    //       { text: 'Japanese', link: '/language/japanese' }
    //     ]
    //   },
        // 导航栏
        { text: '首页', link: '/' },
        { text: '后端技术', items: [
            { text: 'YII2.0框架', link: '/backend/php/' },
            { text: 'go语言', link: '/backend/go/' },
        ]},
        { text: '前端技术', link: '/frontend/' },
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    sidebar: {
        '/backend/php/': [
            {
                title: 'YII2.0 框架',
                children: [
                ]
            }
        ],
        '/backend/go/': [
            {
                title: 'Go 语言',
                children: [
                ]
            }
        ],
        '/frontend/':  [
            {
                title: '前端',
                children: [ 
                ]
            }
        ]
    }
  }
}