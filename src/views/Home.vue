<template>
  <div class="home" id="top" v-show="ok" :class="{ en: isEn }">
    <div class="head">
      <nav class="nav-1 my-header-nav" id="nav-1">
        <div class="nav-wrap">
          <ul>
            <li>
              <a href="#project">{{ nav1[0] }}</a>
            </li>
            <li>
              <a href="#works">{{ nav1[1] }}</a>
            </li>
            <li>
              <a href="#about">{{ nav1[2] }}</a>
            </li>
          </ul>
        </div>
        <div class="lang" @click="langSwitch()">
          <div class="lang_now">
            <div class="lang_inner">
              <i :class="{ langSwitch: isActive }"></i>
            </div>
          </div>
        </div>
      </nav>
      <nav class="nav-2 nav-1 my-header-nav" id="nav-2">
        <div class="nav-wrap">
          <ul>
            <li>
              <a href="#project">{{ nav1[0] }}</a>
            </li>
            <li>
              <a href="#works">{{ nav1[1] }}</a>
            </li>
            <li>
              <a href="#about">{{ nav1[2] }}</a>
            </li>
          </ul>
        </div>
        <div class="lang" @click="langSwitch()">
          <div class="lang_now">
            <div class="lang_inner">
              <i :class="{ langSwitch: isActive }"></i>
            </div>
          </div>
        </div>
      </nav>
      <div class="head_container">
        <img src="../assets/index/logo_banner.png" alt class="logo" />
        <div class="motion">
          <div class="logo-path">
            <img src="../assets/index/path-1.svg" alt class="motion_logo" />
            <img src="../assets/index/path-2.svg" alt class="motion_logo" />
            <img src="../assets/index/path-3.svg" alt class="motion_logo" />
            <img src="../assets/index/path-4.svg" alt class="motion_logo" />
            <img src="../assets/index/path-5.svg" alt class="motion_logo" />
            <img src="../assets/index/path-6.svg" alt class="motion_logo" />
          </div>
        </div>
      </div>
      <video src="../assets/banner_video.webm" autoplay muted loop></video>
    </div>
    <div class="container">
      <avatarCard
        :title="avatarCard.title"
        :des="avatarCard.des"
        :cardColor="avatarCard.cardColor"
        :tag="avatarCard.tag"
        :isTitle="avatarCard.isTitle"
        :isButton="avatarCard.isButton"
        :isDes="avatarCard.isDes"
        :isBlack="avatarCard.isBlack"
        :isWhiteBotton="avatarCard.isWhiteBotton"
        :isTag="avatarCard.isTag"
        :bgImg="avatarCard.bgImg"
        :profile="avatarCard.profile"
        class="card-profile"
      >
        <h1>{{ cnMeDes[0] }}</h1>
        <p class="mb-40">{{ cnMeDes[1] }}</p>
        <h1>{{ cnMeDes[2] }}</h1>
        <p>{{ cnMeDes[3] }}</p>
      </avatarCard>
      <span id="project"></span>
      <card
        v-for="(banana, i) in cnBanana"
        :key="`${i}_bannernormal`"
        :title="banana.title"
        :cardLogo="banana.cardLogo"
        :des="banana.des"
        :cardColor="banana.cardColor"
        :tag="banana.tag"
        :isTagWhite="banana.isTagWhite"
        :tagColor="banana.tagColor"
        :isTitle="banana.isTitle"
        :isButton="banana.isButton"
        :isDes="banana.isDes"
        :isBlack="banana.isBlack"
        :isWhiteBotton="banana.isWhiteBotton"
        :isTag="banana.isTag"
        :bgImg="banana.bgImg"
        :isGhostButton="banana.isGhostButton"
        :btnIconD="banana.btnIconD"
        :btnIconG="banana.btnIconG"
        :buttonTextD="banana.buttonTextD"
        :buttonTextG="banana.buttonTextG"
        :hrefD="banana.hrefD"
        :hrefG="banana.hrefG"
        :class="`banana_${i}`"
        id="banana"
      />
      <card
        v-for="(item, i) in cards"
        :key="`${i}_banner`"
        :title="cards[i].title"
        :cardLogo="cards[i].cardLogo"
        :des="cards[i].des"
        :cardColor="cards[i].cardColor"
        :tag="cards[i].tag"
        :isTagWhite="cards[i].isTagWhite"
        :tagColor="cards[i].tagColor"
        :isTitle="cards[i].isTitle"
        :isButton="cards[i].isButton"
        :isDes="cards[i].isDes"
        :isBlack="cards[i].isBlack"
        :isWhiteBotton="cards[i].isWhiteBotton"
        :isTag="cards[i].isTag"
        :bgImg="cards[i].bgImg"
        :isGhostButton="cards[i].isGhostButton"
        :btnIconD="cards[i].btnIconD"
        :btnIconG="cards[i].btnIconG"
        :buttonTextD="cards[i].buttonTextD"
        :buttonTextG="cards[i].buttonTextG"
        :hrefD="cards[i].hrefD"
        :hrefG="cards[i].hrefG"
        :class="`card_banner_${i}`"
      />
      <!-- <card
        :title="character.en.title"
        :cardLogo="character.en.cardLogo"
        :des="character.en.des"
        :cardColor="character.en.cardColor"
        :tag="character.en.tag"
        :isTagWhite="character.en.isTagWhite"
        :tagColor="character.en.tagColor"
        :isTitle="character.en.isTitle"
        :isButton="character.en.isButton"
        :isDes="character.en.isDes"
        :isBlack="character.en.isBlack"
        :isWhiteBotton="character.en.isWhiteBotton"
        :isTag="character.en.isTag"
        :bgImg="character.en.bgImg"
        :isGhostButton="character.en.isGhostButton"
        :btnIconD="character.en.btnIconD"
        :btnIconG="character.en.btnIconG"
        :buttonTextD="character.en.buttonTextD"
        :buttonTextG="character.en.buttonTextG"
        :hrefD="character.en.hrefD"
        :hrefG="character.en.hrefG"
        id="character"
      /> -->
      <span id="works"></span>

      <div class="smallCards">
        <smallCard
          v-for="(item, i) in cnSmallCard"
          :key="i"
          :title="cnSmallCard[i].title"
          :cardColor="cnSmallCard[i].cardColor"
          :footer="cnSmallCard[i].footer"
          :tag="cnSmallCard[i].tag"
          :isTag="cnSmallCard[i].isTag"
          :logo="cnSmallCard[i].logo"
          :isLogo="cnSmallCard[i].isLogo"
          :bgImg="cnSmallCard[i].bgImg"
          :tagColor="cnSmallCard[i].tagColor"
          :isCenterImg="cnSmallCard[i].isCenterImg"
          :link="cnSmallCard[i].link"
        />
        <smallCard2
          v-for="(item, j) in cnSmallCard2"
          :key="'info-' + j"
          :cardColor="cnSmallCard2[j].cardColor"
          :bgImg="cnSmallCard2[j].bgImg"
          :cardBg="cnSmallCard2[j].cardBg"
          :cover="cnSmallCard2[j].cover"
          :link="cnSmallCard2[j].link"
        />
      </div>

      <span class="break-line"></span>

      <motionCard
        :title="cnMotionCardData.title"
        :des="cnMotionCardData.des"
        :cardColor="cnMotionCardData.cardColor"
        :btnColor="cnMotionCardData.btnColor"
        :btnIcon="cnMotionCardData.btnIcon"
        :tag="cnMotionCardData.tag"
        :isTitle="cnMotionCardData.isTitle"
        :isButton="cnMotionCardData.isButton"
        :isDes="cnMotionCardData.isDes"
        :isBlack="cnMotionCardData.isBlack"
        :isWhiteBotton="cnMotionCardData.isWhiteBotton"
        :isTag="cnMotionCardData.isTag"
        :hrefD="cnMotionCardData.hrefD"
        :buttonText="cnMotionCardData.buttonText"
      />

      <div class="xsCards">
        <xsCard
          v-for="(item, i) in cnXsCardData"
          :key="i"
          :title="cnXsCardData[i].title"
          :bgImg="cnXsCardData[i].bgImg"
          :cardColor="cnXsCardData[i].cardColor"
          :isCenterImg="cnXsCardData[i].isCenterImg"
          :link="cnXsCardData[i].link"
        />
      </div>
      <div class="info" id="about">
         
        <div class="info_about">
          <h1>{{ cnInfo.about[0] }}</h1>
          <div class="des" v-html="cnInfo.about[1]"></div>
        </div>
        <div class="info_contact">
          <h1>{{ cnInfo.contact.title }}</h1>
          <div class="social">
            <div class="links">
              <a href="https://www.figma.com/@yorkun" target="_blank"></a>
              <a href="https://dribbble.com/yorkun" target="_blank"></a>
              <a href="http://yorkun.lofter.com/" target="_blank"></a>
              <a href="https://yorkun.dribbble.com/" target="_blank"></a>
              <a href="https://weibo.com/chengyork" target="_blank"></a>
              <a href="https://www.instagram.com/yorkun_cheng/" target="_blank"></a>
              <a href="https://okjk.co/NaQpmM" target="_blank"></a>
              <a href="https://twitter.com/YorKun_c" target="_blank"></a>
              <a href="https://github.com/Yorkun" target="_blank"></a>
              <a href="https://www.oculus.com/deeplink/?action=view&path=%2Fprofile%2F103487554304308&utm_medium=share&utm_source=oculus" target="_blank"></a>
              <!-- <a href="https://www.behance.net/yorkun" target="_blank"></a> -->
            </div>
            <div class="contact-wrap">
              <div
                class="mail"
                @click="btnClick('email')"
                :class="{ 'default-cur': email }"
              >
                <i></i>
                <p>
                  <transition name="fade">
                    <span v-if="email" key="email">yorkuncheng@gmail.com</span>
                    <span v-else key="text">{{
                      isEn ? "Show My E-mail" : "查看我的邮箱"
                    }}</span>
                  </transition>
                </p>
              </div>
              <div
                class="wechat"
                @click="btnClick('weixin')"
                :class="{ 'default-cur': weixin }"
              >
                <i></i>
                <p>
                  <transition name="fade">
                    <span v-if="weixin" key="weixin">yorkun123</span>
                    <span v-else key="text2">{{
                      isEn ? "Show My WeChat" : "查看我的微信"
                    }}</span>
                  </transition>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <globalFooter />
    </div>
    <top />
  </div>
</template>

<script>
import defaultButton from "../components/defaultButton.vue";
import ghostButton from "../components/ghostButton.vue";
import card from "../components/card.vue";
import avatarCard from "../components/avatarCard.vue";
import motionCard from "../components/motionCard.vue";
import smallCard from "../components/smallCard.vue";
import smallCard2 from "../components/smallCard2.vue";
import xsCard from "../components/xsCard.vue";
import globalFooter from "../components/globalFooter.vue";
import top from "../components/top.vue";
import link from "../assets/index/button-icon/link_icon.svg";
import geetestweb from "../assets/index/geetestweb.png";
import ui_captcha from "../assets/index/ui_captcha.gif";
import app_onelogin from "../assets/index/app_onelogin.png";
import Portrait from "../assets/index/banner_1_bg.png";
import link_icon_b from "../assets/index/link_icon_b.svg";
import geetestweb_logo from "../assets/index/geetestweb_logo.svg";
import captcha_logo from "../assets/index/captcha_logo.svg";
import wangguan_logo from "../assets/index/wangguan_logo.svg";
import cnDate from "../data/cn.js";
import enDate from "../data/en.js";
import info from "../data/info.js";
import nav from "../data/nav.js";
import meDes from "../data/cardMe.js";
import banana from "../data/banana.js";
import smallCardData from "../data/smallCard.js";
import smallCardData2 from "../data/smallCard2.js";
import motionCardData from "../data/motionCard.js";
import xsCardData from "../data/xsCard.js";
import footerTextData from "../data/footerText.js";
import character_banner from "../assets/character_banner.png";
import character_logo from "../assets/character_logo.svg";
import sketchFigma_icon from "../assets/sketchFigma_icon.png";

export default {
  name: "home",
  props: ["buttonIcon"],
  components: {
    defaultButton,
    ghostButton,
    card,
    motionCard,
    smallCard,
    smallCard2,
    xsCard,
    globalFooter,
    top,
    avatarCard,
  },
  methods: {
    langSwitch() {
      this.isActive = !this.isActive;

      if (this.isActive) {
        // window.localStorage.setItem('lang', 0);
        this.cnMeDes = this.meDes.en;
        this.avatarCard = this.avatarCardEN;
        this.cards = this.enDate;
        this.cnInfo = this.info.en;
        this.nav1 = this.nav.en;
        this.cnBanana = this.banana.en;
        this.cnSmallCard = this.smallCardData.en;
        this.cnSmallCard2 = this.smallCardData2.en;
        this.cnMotionCardData = this.motionCardData.en;
        this.cnXsCardData = this.xsCardData.en;
        this.cnFooterLinkText = this.footerTextData.en;
        this.character.en = this.characterData;
        this.isEn = true;
      }

      if (this.isActive == 0) {
        // window.localStorage.setItem('lang', 1);
        this.avatarCard = this.avatarCardCN;
        this.cnMeDes = this.meDes.cn;
        this.cards = this.cnDate;
        this.cnInfo = this.info.cn;
        this.nav1 = this.nav.cn;
        this.cnBanana = this.banana.cn;
        this.cnSmallCard = this.smallCardData.cn;
        this.cnSmallCard2 = this.smallCardData2.cn;
        this.cnMotionCardData = motionCardData.cn;
        this.cnXsCardData = this.xsCardData.cn;
        this.cnFooterLinkText = this.footerTextData.cn;
        // this.character.en = this.character.cn;
        this.isEn = false;
      }
    },
    // 按钮点击获取信息
    btnClick(e) {
      this.currentInfo = e === "email";
      !this[e] && this.captchaObj && this.captchaObj.showBox();
    },
    // 初始化验证码
    initCaptcha(e) {
      window.initGeetest4(
        {
          captchaId: "c366396a62477f4def90c18b075983ad",
          product: "bind",
          bgColor: "#00000099",
        },
        (captchaObj) => {
          // captcha为验证码实例
          captchaObj
            .onReady(() => {
              this.captchaObj = captchaObj;
            })
            .onSuccess(() => {
              const e = this.currentInfo ? "email" : "weixin";
              this[e] = true;
            });
        }
      );
    },
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        const that = this;
        setTimeout(() => {
          // 打印screenWidth变化的值
          // console.log(that.screenWidth);

          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    // this.isActive = window.localStorage.getItem("lang");
    const lang = navigator.language.indexOf("zh");
    if (lang !== -1) {
      this.isActive = 1;
    } else {
      this.isActive = 0;
    }
    this.ok = true;
    this.langSwitch();
    const nav = document.getElementById("nav-1");
    const mobileNav = document.getElementById("nav-2");
    const headerOffset = nav.offsetTop + nav.offsetHeight + 20;
    const mobileHeaderOffset =
      mobileNav.offsetTop + mobileNav.offsetHeight + 100;
    const project = document.getElementById("project");
    const works = document.getElementById("works");

    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= headerOffset) {
        nav.classList.add("nav-move");
      }
      if (window.scrollY >= headerOffset) {
        nav.classList.add("nav-move");
      } else {
        nav.classList.remove("nav-move");
      }

      if (window.scrollY >= mobileHeaderOffset) {
        mobileNav.classList.add("nav-move", "m-nav-move");
      } else {
        mobileNav.classList.remove("nav-move", "m-nav-move");
      }

      if (window.scrollY === project.offsetTop) {
        nav.classList.add("anchorOn");
      } else {
        nav.classList.remove("anchorOn");
      }
      if (window.scrollY === works.offsetTop) {
        nav.classList.add("anchorOn2");
      } else {
        nav.classList.remove("anchorOn2");
      }
      if (window.scrollY === 3828 || window.scrollY === 3768) {
        nav.classList.add("anchorOn3");
      } else {
        nav.classList.remove("anchorOn3");
      }
    });

    function tag(val) {
      const tags = document.querySelectorAll(".tag");

      if (val < "600" || document.body.clientWidth < "600") {
        [].forEach.call(tags, (tag) => {
          tag.style.display = "none";
        });
      } else {
        [].forEach.call(tags, (tag) => {
          tag.style.display = "block";
        });
      }
    }

    tag();

    const that = this;
    window.onresize = () =>
      (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;

        tag(that.screenWidth);
      })();
    this.initCaptcha();
  },
  data() {
    return {
      characterData: {
        title: "Gee me",
        cardLogo: character_logo,
        des: "GEE! ME is a great set of flat graphics required for any design tasks, 100 cartoon characters and over 400 coolest objects!",
        cardColor: " #F5F6F8",
        tag: "Cartoon Design",
        buttonTextD: "",
        buttonTextG: "See the live",
        isTagWhite: true,
        tagColor: "rgba(0,0,0,0.08)",
        isButton: false,
        btnIconD: "",
        btnIconG: link_icon_b,
        isGhostButton: true,
        isTitle: true,
        isDes: true,
        isBlack: true,
        isWhiteBotton: true,
        isTag: true,
        bgImg: character_banner,
        hrefG: "https://geeme.now.sh/",
      },
      character: {
        cn: {},
        en: {
          title: "小蕉 BANANA",
          cardLogo: character_logo,
          des: "Character Kit is a great set of flat graphics required for any design tasks, 100 cartoon characters and over 450 coolest objects!",
          cardColor: " #F5F6F8",
          tag: "Cartoon Design",
          buttonTextD: "",
          buttonTextG: "Coming soon",
          isTagWhite: true,
          tagColor: "rgba(0,0,0,0.08)",
          isButton: false,
          btnIconD: "",
          btnIconG: "",
          isGhostButton: true,
          isTitle: true,
          isDes: true,
          isBlack: true,
          isWhiteBotton: true,
          isTag: true,
          bgImg: character_banner,
          hrefD: "/banana",
        },
      },
      screenWidth: document.body.clientWidth,
      isEn: true,
      ok: false,
      cnDate,
      enDate,
      info,
      cnInfo: info.cn,
      nav,
      nav1: nav.cn,
      meDes,
      cnMeDes: meDes.cn,
      banana,
      cnBanana: banana.cn,
      cnSmallCard: smallCardData.cn,
      cnSmallCard2: smallCardData2.cn,
      smallCardData,
      smallCardData2,
      motionCardData,
      cnMotionCardData: motionCardData.cn,
      cnXsCardData: xsCardData.cn,
      xsCardData,
      // 首页语言切换 En:F Cn:T
      isActive: true,
      // 首页语言切换
      footerTextData,
      cnFooterLinkText: footerTextData.cn,
      cardMe: {
        title: " ",
        des: " ",
        cardColor: "#141516",
        tag: "tag",
        isButton: false,
        isTitle: false,
        isDes: false,
        isBlack: true,
        isWhiteBotton: false,
        isTag: false,
        bgImg: Portrait,
      },
      avatarCard: {
        title: " ",
        des: " ",
        cardColor: "#141516",
        tag: "tag",
        isButton: false,
        isTitle: false,
        isDes: false,
        isBlack: true,
        isWhiteBotton: false,
        isTag: false,
        bgImg: Portrait,
        profile: "profile",
      },
      avatarCardEN: {
        title: " ",
        des: " ",
        cardColor: "#141516",
        tag: "tag",
        isButton: false,
        isTitle: false,
        isDes: false,
        isBlack: true,
        isWhiteBotton: false,
        isTag: false,
        bgImg: Portrait,
        profile: "Links Page",
      },
      avatarCardCN: {
        title: " ",
        des: " ",
        cardColor: "#141516",
        tag: "tag",
        isButton: false,
        isTitle: false,
        isDes: false,
        isBlack: true,
        isWhiteBotton: false,
        isTag: false,
        bgImg: Portrait,
        profile: "相关链接",
      },
      cards: cnDate,
      buttons: {
        href: {
          href1: "https://baidu.com",
        },
        buttonIcon: link,
      },
      email: false,
      weixin: false,
      captchaObj: null,
      currentInfo: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/style/global.scss";
@import "./src/style/mobile.scss";
@import "./src/style/en.scss";

#character {
  ::v-deep .des {
    span {
      width: 482px;
      color: #2c313e !important;
    }
  }
  ::v-deep .ghostButton {
    cursor: pointer;
    &:hover {
      filter: none;
      border: 1px solid #3a4151;
      // border: 1px solid transparent;
    }
    a {
      width: 100%;
      height: 45px;
      border-radius: 6px;
      transition: all 0.3s ease;
      &:hover {
        filter: invert(1);

        background: white;
      }
    }
    position: relative;
    .ghostButton-icon {
      // display: none;
    }
    &::before {
      cursor: default;
      position: absolute;
      top: 4px;
      right: -120px;
      content: "";
      display: block;
      width: 92px;
      height: 35px;
      background: url("../assets/sketchFigma_icon.png") no-repeat;
      background-size: cover;
    }
  }
  ::v-deep .img-area {
    img {
      width: 459px;
      height: 323px;
      margin-right: 52px;
    }
  }
}

.langSwitch {
  background-image: url("../assets/index/language_cn.svg") !important;
}

.anchorOn {
  ul {
    li {
      &:nth-of-type(1) {
        a {
          color: white !important;
        }
      }
    }
  }
}

.anchorOn2 {
  ul {
    li {
      &:nth-of-type(2) {
        a {
          color: white !important;
        }
      }
    }
  }
}
.anchorOn3 {
  ul {
    li {
      &:nth-of-type(3) {
        a {
          color: white !important;
        }
      }
    }
  }
}

.nav-2 {
  transform: translateY(-110%);
  opacity: 0;

  .nav-wrap {
    &::before {
      left: -24px !important;
    }
  }
}

.m-nav-move {
  transform: translateY(0);
  opacity: 1;
}

.nav-move {
  z-index: 99999;
  padding: 24px 24px;
  background-color: $black;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 48px) !important;
  max-width: none !important;
  border-bottom: 1px solid rgba(76, 79, 84, 0.6);
  background-color: rgba(20, 21, 22, 0.85);
  backdrop-filter: blur(20px);

  .nav-wrap {
    justify-content: flex-end !important;

    &::before {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }

  ul {
    animation: ulMove 0.8s cubic-bezier(0.4, 0, 0, 1) forwards;

    li {
      margin: 20px !important;
    }
  }

  @keyframes ulMove {
    0% {
      opacity: 0;
    }
    100% {
      transform: translateX(-51px);
    }
  }
}

.home {
  width: 100%;
  /* background-color: $gray; */
  background-color: hsl(210, 3%, 24%);
  @include flex-column;

  .head {
    position: relative;
    width: 100%;
    height: 680px;
    background-color: $black;
    overflow: hidden;
    @include flex-column;
    @include font(14px, $font-color-white-3, 400);
    overflow: hidden;

    video {
      width: 100vw;
      bottom: 0;
      z-index: 0;
      position: absolute;
      filter: blur(4px) contrast(1.07);
      transform: scale(1.2);
      top: 0;
      transform-origin: top;
    }

    .nav-1 {
      z-index: 99999;
      position: fixed;
      width: 100%;
      padding-top: 24px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
      @include flex-all-center;

      .nav-wrap {
        z-index: 999;
        position: relative;
        max-width: 1200px;
        width: 90%;

        &::before {
          opacity: 0;
          content: "";
          position: absolute;
          left: 0;
          display: block;
          width: 51px;
          height: 26px;
          background-image: url("../assets/index/small_logo.svg");
          background-size: cover;
          transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);
          transform: translateY(-200%);
        }

        > ul {
          transition: all 0.6s cubic-bezier(0.4, 0, 0, 1);

          li {
            display: inline;
            margin: 0 40px;

            a {
              @include font(14px, $font-color-white-3, 400);
              transition: all 0.3s ease;

              &:hover {
                color: white;
              }
            }

            &:first-child {
              margin-left: 53px;
            }
          }
        }

        @include flex-all-center;
      }
    }

    &_container {
      @include flex-column;
      margin-top: 120px;

      .logo {
        z-index: 111;
        position: absolute;
        opacity: 0;
        animation: showLogo2 1s linear forwards;
        animation-delay: 0.6s;
        width: 160px;
        top: 148px;

        @keyframes showLogo2 {
          to {
            opacity: 1;
          }
        }
      }

      .motion {
        z-index: 9;
        position: absolute;
        bottom: 0;
        overflow: hidden;
        transform-origin: bottom;

        .motion_logo {
          margin: 0 8px;
          transform: translateY(150%);
          animation: pathShow 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;

          &:nth-of-type(1) {
            animation-delay: 0.9s;
          }
          &:nth-of-type(2) {
            animation-delay: 0.85s;
          }
          &:nth-of-type(3) {
            animation-delay: 0.8s;
          }
          &:nth-of-type(4) {
            animation-delay: 0.75s;
          }
          &:nth-of-type(5) {
            animation-delay: 0.7s;
          }
          &:nth-of-type(6) {
            animation-delay: 0.65s;
          }

          @keyframes pathShow {
            to {
              transform: translateY(0);
            }
          }
        }

        &_logo {
          position: relative;
          margin-top: 60px;
          bottom: -2px;
        }
      }
    }

    .lang {
      width: 100vw;
      position: absolute;
      right: 0;
      height: 15px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
      @include flex-all-center;

      &_now {
        width: 90%;
        height: 20px;
        max-width: 1200px;
        position: relative;
        right: 0;
        @include flex-all-center;
        @include font(14px, rgba(255, 255, 255, 0.6), 400);

        .lang_inner {
          z-index: 1000;
          position: absolute;
          right: 0;
        }

        i {
          cursor: pointer;
          position: relative;
          top: 1px;
          margin-left: 4px;
          display: inline-block;
          width: 23px;
          height: 20px;
          background-image: url("../assets/index/language_icon.svg");
          background-repeat: no-repeat;
          transition: all 0.3s ease;

          &:hover {
            filter: contrast(2);
          }
        }
      }
    }
  }

  .container {
    width: 90%;
    padding-top: 10px;
    @include flex-column;

    .mb-40 {
      margin-bottom: 40px;
    }

    /*********** card btn hover  **************/
    ::v-deep .card {
      &:nth-of-type(3) {
        .defaultButton {
          &:hover {
            background-color: $white;
            color: $blue;
            border: 1px solid $blue;
          }
        }

        .ghostButton {
          &:hover {
            filter: invert(1);
            // border-color: white;
          }
        }
      }
      &:nth-of-type(4) {
        span {
          // color: rgba(255, 255, 255, 0.76) !important;
        }

        .defaultButton {
          &:hover {
            background-color: $white;
            color: $blue;
            border: 1px solid $blue;
          }
        }
      }
      &:nth-of-type(5) {
        .defaultButton {
          &:hover {
            border: 1px solid #fff;
            background-color: #3973ff !important;
            color: #fff !important;
          }
        }
      }
      &:nth-of-type(6) {
        .ghostButton {
          background: #eeeff0;
        }
        .defaultButton {
          &:hover {
            background-color: $white;
            color: $blue;
            border: 1px solid $blue;
          }
        }
      }
    }

    .card {
      &:nth-of-type(3) {
        &::v-deep .des {
          span {
            width: auto;
          }
          img {
            height: 40px;
          }
        }
      }
      &:nth-of-type(4) {
        &::v-deep .defaultButton {
          img {
            display: none;
          }
        }
      }
      &.card_banner_1 {
        &::v-deep .defaultButton {
          margin-left: 0;
          img {
            display: none;
          }
        }
      }

      &.card_banner_2 {
        ::v-deep .des {
          span {
            width: 400px;
          }
        }
        ::v-deep .defaultButton {
          margin-left: 0;
        }
      }

      &:nth-of-type(2) {
        ::v-deep .des {
          img {
            width: 170px;
            height: auto;
          }

          span {
            width: 440px !important;
          }
        }
      }
      &.card-profile {
        ::v-deep .wrap .title {
          color: white !important;
        }
        ::v-deep a.ghostButton:hover .wrap .title {
          color: #2c313e !important;
        }
      }
      &.card_banner_3 {
        // ::v-deep .ghostButton {
        //   border-color: #4F46E5;
        //   color:#4F46E5
        // }
      }
    }

    .smallCards {
      margin-top: 10px;
      max-width: 1200px;
      width: 100%;
      flex-wrap: wrap;

      ::v-deep .smallCard {
        &:first-child {
          .tag {
            color: white;
          }
          &:hover {
            .bgImg {
              transform: scale(1.04);
            }
          }
        }
      }

      .smallCard {
        &:first-child {
          &::v-deep .smallCard_text {
            position: absolute;
            top: 90px;
          }
          &::v-deep img {
            position: absolute;
            bottom: 80px;
            width: 100%;
            height: auto;
          }
        }

        &:last-child {
          margin-right: 0;
          filter: brightness(1.2) hue-rotate(1deg) saturate(1.2);

          &::v-deep span {
            font-size: 12px;
          }

          &::v-deep .tag {
            opacity: 0.8;
          }
        }
      }
      @include flex-all-center {
        justify-content: space-between;
      }
    }

    .motionCard {
      ::v-deep .motionCard_wrap {
        .defaultButton {
          &:hover {
            background-color: #141516 !important;
            border-color: rgb(64, 69, 75);
          }
        }
      }
    }

    .xsCards {
      max-width: 1200px;
      width: 100%;
      margin-top: 10px;

      .xsCard {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;

          ::v-deep h2 {
            letter-spacing: -0.7px;
            color: #403825;
          }
        }
      }

      @include flex-all-center {
        justify-content: space-between;
      }
    }

    .info {
      width: 100%;
      margin-top: 150px;
      margin-bottom: 120px;
      &_about {
        @include flex-all-center {
          align-items: flex-start;
        }
        h1 {
          margin-right: 110px;
          @include font(30px, $font-color-white-1, 700);
        }

        .des {
          max-width: 720px;
          @include font(14px, $font-color-white-3, 400) {
            line-height: 20px;
          }
        }
      }
      &_contact {
        width: 100%;
        margin-top: 80px;
        @include flex-all-center {
          align-items: flex-start;
        }
        h1 {
          margin-right: 110px;
          @include font(30px, $font-color-white-1, 700);
        }

        .social {
          width: 100%;
          max-width: 720px;

          .links {
            a {
              display: inline-block;
              width: 22px;
              height: 22px;
              margin-right: 20px;
              background-position: center center;
              background-size: 22px 22px;
              transition: all 0.3s ease;

              &:hover {
                filter: contrast(2);
              }

              &:nth-of-type(1) {
                background-image: url("../assets/index/links/figma_icon.svg");
              }

              &:nth-of-type(2) {
                background-image: url("../assets/index/links/dribbble_icon.svg");
              }

              &:nth-of-type(3) {
                background-image: url("../assets/index/links/lofter_icon.svg");
              }

              &:nth-of-type(4) {
                background-image: url("../assets/index/links/designworks_icon.svg");
              }

              &:nth-of-type(5) {
                background-image: url("../assets/index/links/weibo_icon.svg");
              }

              &:nth-of-type(6) {
                background-image: url("../assets/index/links/ig_icon.svg");
              }

              &:nth-of-type(7) {
                background-image: url("../assets/index/links/jike_icon.svg");
              }

              &:nth-of-type(8) {
                background-image: url("../assets/index/links/twitter_icon.svg");
              }

              &:nth-of-type(9) {
                background-image: url("../assets/index/links/github_icon.svg");
              }

              &:nth-of-type(10) {
                background-image: url('../assets/index/links/mate_icon.svg');
              }
            }
          }

          .contact-wrap {
            margin-top: 30px;
            @include flex-all-center {
              justify-content: flex-start;
            }

            div {
              padding: 12px 16px;
              background-color: #40454b;
              border-radius: 8px;
              @include font(12px, $font-color-white-3, 400);
              @include flex-all-center {
                justify-content: flex-start;
              }

              &:first-child {
                margin-right: 20px;
              }
            }

            .mail {
              transition: all 0.3s ease;
              cursor: pointer;
              &:hover {
                filter: brightness(1.05);
              }
              i {
                width: 16px;
                height: 16px;
                display: inline-block;
                margin-right: 8px;
                background-image: url("../assets/index/links/mail_icon.svg");
                background-position: center center;
                background-size: 16px 16px;
                transition: all 0.3s ease;
              }
            }
            .wechat {
              position: relative;
              transition: all 0.3s ease;
              cursor: pointer;
              &:hover {
                filter: brightness(1.1);
              }
              i {
                width: 16px;
                height: 16px;
                display: inline-block;
                margin-right: 8px;
                background-image: url("../assets/index/links/wechat_icon.svg");
                background-position: center center;
                background-size: 16px 16px;
                transition: all 0.3s ease;
              }
            }
            .default-cur {
              cursor: default;
            }
          }
        }
      }
    }
  }

  .break-line {
    height: 1px;
    width: 100%;
    max-width: 1200px;
    opacity: 0.1;
    background-color: #ffffff;
    margin: 60px 0;
  }

  #banana {
    ::v-deep .card_wrap {
      .des {
        span {
          width: 420px;
        }
      }
    }
  }
  ::v-deep .banana_0 {
    .defaultButton {
      background-color: white !important;
      img {
        display: inline-block;
        width: 10px !important;
      }
      position: relative;
      border: 1px solid transparent;
      &:hover {
        filter: invert(1);
      }
    }
    .ghostButton {
      position: relative;
      color: #ff7a00;
      border: 1px solid #ff7a00;
      background-color: transparent;
      &:hover {
        background-color: #ff7a00 !important;
        filter: none !important;
        color: white;

        img {
          opacity: 0;
        }
        &::before {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        &::after {
          opacity: 1;
        }
      }
      &::after {
        right: 23px;
        top: 15px;
        content: "";
        opacity: 0;
        position: absolute;
        display: block;
        width: 14px;
        height: 14px;
        right: 22px;
        background-image: url("../assets/er_code.svg");
        background-size: cover;
        transition: all 0.3s ease;
      }
      &::before {
        content: "";
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: -145px;
        left: 0px;
        top: -148px;
        display: block;
        width: 136px;
        height: 141px;
        background-image: url("../assets/index/weixin_ercode.png");
        background-size: 100% 100%;
        transition: all 0.3s ease-in-out;
        transform: translateY(-6px);
      }
    }
  }
  ::v-deep .banana_1 {
    .defaultButton {
      img {
        display: none;
      }
      &:hover {
        border: 1px solid #fff !important;
        background-color: rgb(252, 133, 161) !important;
        color: #fff !important;
      }
    }
    .ghostButton {
      position: relative;
      color: white;
      background-color: transparent;
      border: 1px solid white;
      &:hover {
        background-color: #ffde4a !important;
        filter: none !important;
        border-color: transparent;
        color: #b76011;

        img {
          opacity: 0;
        }
        &::before {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        &::after {
          opacity: 1;
        }
      }
      &::after {
        content: "";
        opacity: 0;
        position: absolute;
        display: block;
        width: 14px;
        height: 14px;
        right: 24px;
        top: 15px;
        background-image: url("../assets/index/reweima_icon-2.svg");
        background-size: cover;
        transition: all 0.3s ease;
      }
      &::before {
        content: "";
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: -145px;
        left: 0px;
        top: -148px;
        display: block;
        width: 136px;
        height: 141px;
        background-image: url("../assets/index/reweima_hover.png");
        background-size: 100% 100%;
        transition: all 0.3s ease-in-out;
        transform: translateY(-6px);
      }
    }
    .des {
      span {
        color: rgba(255, 255, 255, 0.8) !important;
      }
    }
  }
  #project {
    opacity: 0;
    position: relative;
    bottom: 70px;
  }

  #works {
    opacity: 0;
    position: relative;
    bottom: 70px;
  }
}

.card2 {
  &:last-child {
    ::v-deep .cover {
      position: relative;
      top: 86px;
      left: -45px;
      right: auto;
      width: 650px;
    }
    ::v-deep .bgImg {
      right: 40px;
      top: 50px;
      left: auto;
      height: 99px;
      width: auto;
    }
  }
}
</style>
