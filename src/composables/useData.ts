/*
 * @Author: dushuai
 * @Date: 2024-03-11 14:40:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-11 16:04:34
 * @description: 一些配置数据
 */

type Website = {
  name: string,
  href: string,
  icon: string,
  iconType?: 'icon' | 'img'
}

export const useData = () => {
  /**
   * 网站列表
   */
  const websites = ref<Website[]>([
    { name: 'homepage', href: 'https://onedayxyy.cn/', icon: 'mdi:web-check' },
    { name: '博客', href: 'http://47.100.215.163:8090/', icon: 'fa6-solid:blog' },
    // { name: 'create-kd', href: 'https://create-keep-design.dshuais.com/', icon: 'k' },
    { name: '知识库', href: 'https://onedayxyy.cn/docusaurus/', icon: 'https://files.dshuais.com/images/logo/k.png', iconType: 'img' },
    { name: '导航', href: 'https://onedayxyy.cn/docusaurus/docs/tool/', icon: 'https://files.dshuais.com/images/logo/dm.png', iconType: 'img' },
  ])

  return {
    websites
  }
}
