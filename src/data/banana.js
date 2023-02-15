import bananaGif from '../assets/index/banana_banner.gif';
import banana_logo from '../assets/index/banana_logo.svg';
import banana_logo_en from '../assets/index/banana_logo_en.svg';
import reweima_icon from '../assets/index/reweima_icon.svg';
import dingtong from '../assets/index/dingtong_logo_cn.png';
import dingtong_banner from '../assets/index/dingtong_banner.gif';
import weixin_ercode from '../assets/er_code_hover.svg';
import  dingtong_en from '../assets/index/dingtong_logo en.png';
import link_icon_b from '../assets/index/link_icon_b.svg';


export default {
  cn: [
    {
      title: '叮咚决策',
      cardLogo: dingtong,
      des: '不要纠结啦，叮咚决策器帮你做决定。这是一个非常可爱、便捷的微信小程序，里有抛硬币、掷骰子、大转盘等工具帮助你做决策。',
      cardColor: '#EFEDEA',
      tag: '小程序',
      buttonTextD: '网站主页',
      buttonTextG: '微信小程序',
      isTagWhite: true,
      tagColor: 'rgba(0,0,0,0.08)',
      isButton: true,
      btnIconD: link_icon_b,
      btnIconG: weixin_ercode,
      isGhostButton: true,
      isTitle: true,
      isDes: true,
      isBlack: false,
      isWhiteBotton: true,
      isTag: true,
      bgImg: dingtong_banner,
      hrefG: 'https://dingdong.framer.website/',
    },
    {
      title: '小蕉 BANANA',
      cardLogo: banana_logo,
      des: '生活如此多蕉，听听小香蕉的故事，自己设计的第一个卡通形象。',
      cardColor: ' #FC85A1',
      tag: '主题/表情设计',
      buttonTextD: '项目详情',
      buttonTextG: '表情包下载',
      isTagWhite: true,
      tagColor: 'rgba(0,0,0,0.08)',
      isButton: true,
      btnIconD: '',
      btnIconG: reweima_icon,
      isGhostButton: true,
      isTitle: true,
      isDes: true,
      isBlack: true,
      isWhiteBotton: true,
      isTag: true,
      bgImg: bananaGif,
      hrefD: '/banana',
    }
  ],
  en: [
    {
      title: '叮咚决策',
      cardLogo: dingtong_en,
      des: "Don't worry, TinkleTools will help you make a decision. This is a cute program of Wechat. There are tools such as coin toss, dice roll, prize wheel and more.",
      cardColor: '#EFEDEA',
      tag: '小程序',
      buttonTextD: 'Website',
      buttonTextG: 'Mini Program',
      isTagWhite: true,
      tagColor: 'rgba(0,0,0,0.08)',
      isButton: true,
      btnIconD: link_icon_b,
      btnIconG: weixin_ercode,
      isGhostButton: true,
      isTitle: true,
      isDes: true,
      isBlack: false,
      isWhiteBotton: true,
      isTag: true,
      bgImg: dingtong_banner,
      hrefG: 'https://dingdong.framer.website/',
    },
    {
    title: '小蕉 BANANA',
    cardLogo: banana_logo_en,
    des: 'Life is "so much banana". Let\'s listen to the story of my first original cartoon image "Little Banana".',
    cardColor: ' #FC85A1',
    tag: 'Cartoon Design',
    buttonTextD: 'Details',
    buttonTextG: 'Stickers',
    isTagWhite: true,
    tagColor: 'rgba(0,0,0,0.08)',
    isButton: true,
    btnIconD: '',
    btnIconG: reweima_icon,
    isGhostButton: true,
    isTitle: true,
    isDes: true,
    isBlack: true,
    isWhiteBotton: true,
    isTag: true,
    bgImg: bananaGif,
    hrefD: '/banana',
  }],
};
