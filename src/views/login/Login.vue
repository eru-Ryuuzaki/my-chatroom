<template>
  <div class="login">
    <img class="logo" src="../../assets/img/logo.svg" alt="" />
    <div class="main">
      <div class="userInfo">
        <span class="userName">USERENAME: </span>
        <input type="text" placeholder="游客登录" />
      </div>
      <div class="tips">
        <a href="#">设置</a>
        -
        <a href="#">常见问题解答</a>
        -
        <a href="#">聊天守则</a>
      </div>
      <div class="enter">
        <button>ENTER</button>
      </div>
      <div class="wechat">
        <!-- 这个链接到时候要改为自己的 -->
        <a
          href="https://open.weixin.qq.com/connect/qrconnect?appid=wxb6a3d3490ab4c2cd&redirect_uri=https://zi.pongj.com/oauth/wechat/login&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect"
        >
          <img
            title="微信"
            alt="微信"
            src="../../assets/img/wechat-logo.svg"
            class="oauth-btn"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background-color: black;
  padding: 30px 0;
  .logo {
    width: 366px;
    height: 366px;
    margin: 50px 0;
  }
  .main {
    div {
      margin: 20px 0;
    }
    .userInfo {
      .userName {
        color: white;
      }
      input {
        border-radius: 25px;
        line-height: 1.4;
        text-align: center;
      }
    }
    .tips {
      text-align: center;
      a {
        color: #777;
      }
    }
    .enter {
      button {
        width: 30%;
        width: 193px;
        background: #666;
        border-radius: 12px;
        line-height: 1.4;
        font-size: 14px;
        border: 2px solid #fff;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
    .wechat {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
