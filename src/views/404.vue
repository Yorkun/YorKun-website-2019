<template>
  <div class="not-found">
    <video loop autoplay muted src="../assets/404.webm"></video>
    <h1>The page you are looking for can't be found</h1>
    <p>
      You can try refreshing the page, or return to the
      <router-link to="/">yorkun.com</router-link>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  width: calc(100vw -  40px);
  height: 100vh;
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  video {
    max-width: 400px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 60px;
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    color: hsla(0, 0%, 100%, 0.8);
    margin-top: 8px;

    a {
        font-weight: 700;
        text-decoration: underline;
        transition: all 0.3s ease;

        &:hover {
            opacity: 0.7;
        }
    }
  }
}
</style>