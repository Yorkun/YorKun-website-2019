<template>
  <div
    class="card"
    :style="'background-color:' + cardColor"
    :class="{fontBlack: isBlack, whiteBotton: isWhiteBotton}"
  >
    <div
      class="tag"
      v-if="isTag"
      :class="{whiteTag: isTagWhite}"
      :style="'background-color:' + tagColor"
    >{{tag}}</div>
    <div class="card_wrap">
      <div class="des">
        <img v-if="isTitle" :src="cardLogo" />
        <span v-if="isDes">{{des}}</span>
        <slot></slot>
      </div>
      <div class="img-area" :style="`background-image: url(${bgImg})`">
        <div class="avatar-content">
          <img src="../assets/index/avatar.png" alt="avatar" class="avatar" />
          <a class="ghostButton" href="https://bento.me/yorkun" target="_blank">
            <div class="wrap">
              <span class="title">{{profile}}</span>
              <span class="link-icon"></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultButton from './defaultButton.vue';
import ghostButton from './ghostButton.vue';

export default {
  name: 'card',
  props: {
    title: String,
    cardLogo: String,
    des: String,
    cardColor: String,
    tag: String,
    isButton: Boolean,
    isTitle: Boolean,
    isDes: Boolean,
    isBlack: Boolean,
    isWhiteBotton: Boolean,
    isTag: Boolean,
    isTagWhite: Boolean,
    isGhostButton: Boolean,
    tagColor: String,
    bgImg: String,
    btnIconD: String,
    btnIconG: String,
    buttonTextG: String,
    buttonTextD: String,
    hrefD: String,
    hrefG: String,
    avatar: String,
    profile: String,
  },
  components: {
    defaultButton,
    ghostButton,
  },
};
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.fontBlack {
  h1 {
    color: $font-color-white-1 !important;
  }
  span,
  p {
    color: $font-color-white-3 !important;
  }
}

.whiteTag {
  color: white !important;
}

.whiteBotton {
  .defaultButton {
    background-color: $white !important;
    color: $font-color-black-1 !important;
  }
}

.card {
  opacity: 0;
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 420px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: $white;
  overflow: hidden;
  animation-delay: 1s;
  animation: showCard 1s ease forwards;
  transform: translateY(10%);
  @include flex-all-center;

  @keyframes showCard {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .tag {
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 16px;
    background-color: #d9dbdf;
    border-radius: 50px;
    @include font(12px, $font-color-black-2, 400);
  }

  &_wrap {
    position: relative;
    width: 100%;
    @include flex-all-center {
      justify-content: space-between;
    }
    .des {
      z-index: 1;
      position: absolute;
      left: 120px;
      @include flex-column {
        align-items: flex-start;
      }

      .btn-wrap {
        .defaultButton {
          margin-right: 20px;
        }
        @include flex-all-center {
          align-items: flex-start;
        }
      }

      h1 {
        word-break: keep-all;
        margin-bottom: 10px;
        @include font(40px, $font-color-black-1, 700) {
          line-height: 56px;
        }
      }

      img {
        height: 30px;
        margin-bottom: 24px;
      }
      span {
        display: inline-block;
        width: 410px;
        margin-bottom: 50px;
        @include font(14px, $font-color-black-2, 400) {
          line-height: 20px;
        }
      }
    }
  }

  .img-area {
    z-index: 0;
    position: absolute;
    right: 0;
    opacity: 1;
    background-size: cover;
    height: 420px;
    width: 590px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* animation: showMe 2s ease forwards;

    @keyframes showMe {
      to {
        opacity: 1;
        transform: scale(1);
      }
    } */
  }
}

.ghostButton {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 43px;
  border-radius: 6px;
  border: 1px solid #ffffff;
  background-color: transparent;
  transition: all 0.3s ease;
  @include font(14px, $font-color-black-1, 400);

  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      transition: all 0.2s ease;
    }
    .link-icon {
      background-image: url('../assets/index/link_icon_w.svg');
      width: 10px;
      height: 10px;
      background-repeat: no-repeat;
    }
  }

  /* 
  &:hover {
    background: white;
    color: #3a4151;

    .link-icon {
      filter: invert(1);
    }
  } */

  &:hover {
    background: white;
    p {
      color: rgba(23, 23, 23, 1) !important
    }
    .link-icon {
      background-image: url('../assets/index/link_icon_b.svg');
    }
  }

  a {
    width: 100%;
    height: 100%;
    @include flex-all-center;

    .wrap {
      display: flex;
      align-items: center;

      .ghostButton-icon {
        width: 14px;
        height: 14px;
        margin-left: 5px;
        position: relative;
        top: 1px;
      }
    }
  }
}

.avatar {
  width: 120px;
  height: 120px;
  margin-bottom: 28px;
  filter: brightness(0.86);
}

.avatar-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: -200px;
}

.link-icon {
  transition: all 0.2s ease;
  margin-left: 10px;
}
</style>
