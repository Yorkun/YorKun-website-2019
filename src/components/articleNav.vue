<template>
  <div class="article-nav">
    <div class="nav-wrap">
      <router-link to="/">
        <img src="../assets/index/small_logo.svg" alt />
      </router-link>
      <router-link to="/">
        <img src="../assets/back.svg" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleNav",
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.article-nav {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 68px;
  border-bottom: 1px solid rgba(76, 79, 84, 0.6);
  background-color: rgba(20, 21, 22, 0.85);
  backdrop-filter: blur(20px);
  @include flex-all-center;

  .nav-wrap {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 16px;
    @include flex-all-center {
      justify-content: space-between;
    }

    a {
      cursor: pointer;

      &:last-child {
        &:hover {
          img {
            filter: contrast(2);
          }
        }
      }

      img {
        transition: all 0.3s ease;
        cursor: pointer;
      }
    }

    img {
      width: 51px;
      height: 26px;
    }
  }
}

@media screen and (max-width: 600px) {
  .nav-wrap {
    a {
      &:first-child {
        &::after {
          content: "建议使用桌面设备观看";
          color: #9fa5af;
          font-size: 12px;
          position: relative;
          top: -6px;
          left: 14px;
        }
      }
    }
  }
}
</style>
