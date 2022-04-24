<template>
  <div class="chat-hall">
    <div class="credit-card">
      <div class="avatar">
        <img
          src="https://eru-ryuuzaki.github.io/my-blog/Camille.jpg"
          alt="更换头像"
        />
      </div>
      <div>
        <div class="user-name">用户名</div>
        <div class="logout">登出</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.chat-hall {
  .credit-card {
    text-align: start;
    .avatar {
      float: left;
      img {
        height: 46px;
        width: 46px;
      }
    }
    .user-name,
    .logout {
      line-height: 23px;
    }
  }
}
</style>
