<template>
  <div class="smallCard2" :style="`background: url(${cardBg})`">
    <img :src="bgImg" class="bgImg" />
    <img :src="cover" class="cover" />
  </div>
</template>

<script>
export default {
  name: "smallCard2",
  props: {
    title: String,
    cardBg: String,
    footer: String,
    bgImg: String,
    tag: String,
    tagColor: String,
    isTag: Boolean,
    cover: String
  }
};
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.link {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.smallCard2 {
  position: relative;
  max-width: 590px;
  width: calc(50% - 10px);
  height: 400px;
  border-radius: 10px;
  background-color: #594f76 !important;
  overflow: hidden;
  margin-top: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  transform: translateY(10%);
  animation: showCard 1s ease forwards;
  @include flex-all-center;
  cursor: default;
  background-size: cover !important;
  margin-bottom: 10px;

  @keyframes showCard {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    .bgImg {
      /* transform: scale(1.02); */
    }
    .cover {
      transform: scale(1.02);
    }
  }

  &_text {
    z-index: 1;
    @include flex-all-center;

    h1 {
      @include font(40px, $font-color-white-1, 700);
    }
    span {
      position: relative;
      bottom: -170px;
      align-self: center;
      @include font(14px, $font-color-white-3, 400);
    }
  }

  .tag {
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 16px;
    // color: white !important;
    background-color: #d9dbdf;
    border-radius: 50px;
    @include font(12px, $font-color-white-2, 400);
  }

  .bgImg {
    z-index: 9;
    position: absolute;
    height: 90px;
    left: 30px;
    top: 30px;
    transition: all 0.3s ease;
  }

  .cover {
    height: 142%;
    transition: all 0.3s ease;
  }

  .centerImg {
    height: 90px;
    position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    bottom: 0;
    margin: 0 auto;
  }
}
</style>
