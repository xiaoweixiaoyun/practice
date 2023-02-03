<template>
  <div class="scroll-container scan-container">
    <div class="scan-none-1"></div>
    <div class="scan-box-container">
      <div class="scan-none-2"></div>
      <div class="scan-box">
        <div class="scan-box-area">
          <div class="top-left"></div>
          <div class="top-right"></div>
          <div class="bottom-left"></div>
          <div class="bottom-right"></div>
          <div class="light" @click="onLightTrigger">
            <i :class="['iconfont', light ? 'icon-shoudiantong-dakai' : 'icon-shoudiantong-guanbi']"></i>
            <span>轻触 {{ light ? '关闭' : '打开' }}</span>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="scan-none-2"></div>
    </div>
    <div class="scan-none-1">
      放入框内，自动扫描
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scan',
  data () {
    return {
      light: false
    }
  },
  beforeCreate () {
    // 将网页背景设置透明
    document.getElementById('app').style.backgroundColor = 'transparent'
    document.querySelector('body').style.backgroundColor = 'transparent'
  },
  beforeDestroy () {
    // 恢复之前的背景
    document.getElementById('app').style.backgroundColor = '#f6f6f6'
    document.querySelector('body').style.backgroundColor = '#f6f6f6'
    try {
      if (this.light) {
        this.onLightTrigger()
      }
      QRScanner.hide(status => {
        console.log('[Scan.vue] 关闭扫描' + JSON.stringify(status))
      })
      QRScanner.destroy(function (status) {
        console.log('[Scan.vue] 销毁扫码' + JSON.stringify(status))
      })
    } catch (e) {
      console.log('[Scan.vue]' + JSON.stringify(e))
    }
  },
  mounted () {
    this.onScan()
  },
  methods: {
    onScan () {
      try {
        QRScanner.show(status => {
          console.log('[Scan.vue onScan] 显示扫描' + JSON.stringify(status))
        })
        QRScanner.scan((err, contents) => {
          if (err) {
            this.$router.push(
              {
                path: '/',
                query: {
                  status: '500',
                  msg: '扫描失败'
                }
              })
          } else {
            this.$router.push(
              {
                path: '/',
                query: {
                  status: '200',
                  msg: contents
                }
              })
          }
        })
      } catch (e) {
        this.$router.push(
          {
            path: '/',
            query: {
              status: '500',
              msg: '打开失败'
            }
          })
      }
    },
    onLightTrigger () {
      try {
        if (!this.light) {
          QRScanner.enableLight((err, status) => {
            err && console.log('[Scan.vue] 打开手电筒状态错误：' + JSON.stringify(err))
            console.log('[Scan.vue] 打开手电筒状态：' + JSON.stringify(status))
          })
        } else {
          QRScanner.disableLight((err, status) => {
            err && console.log('[Scan.vue] 关闭手电筒状态错误：' + JSON.stringify(err))
            console.log('[Scan.vue] 关闭手电筒状态：' + JSON.stringify(status))
          })
        }
      } catch (e) {
        console.log('[Scan.vue] ' + JSON.stringify(e))
        return
      }
      this.light = !this.light
    }
  }
}
</script>

<style scoped lang="less">
@primary: blue;

//可滚动内容区域
.scroll-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
}

.scan-container {
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;

  .scan-none-1 {
    flex: 1;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    padding-top: 0.32rem;
    color: rgba(255, 255, 255, 0.8);

    &:first-child {
      flex: 0.6;
      flex: constant(safe-area-inset-top);
      flex: env(safe-area-inset-top);
    }
  }

  .scan-box-container {
    display: flex;

    .scan-none-2 {
      flex: 1;
      height: calc(8rem + 2px);
      background: rgba(0, 0, 0, 0.4);
    }

    .scan-box {
      width: 18rem;
      height: 8rem;
      border: 1px solid @primary;
      background: rgba(0, 0, 0, 0);

      .scan-box-area {
        width: 18rem;
        height: 8rem;
        position: relative;

        .light {
          width: 18rem;
          position: absolute;
          color: rgba(255, 255, 255, 0.8);
          flex-direction: column;
          bottom: 0.32rem;
          text-align: center;
          i {
            font-size: 0.8rem;
            line-height: 0.8rem;
          }
        }
        @keyframes dong {
          0% {
            transform: translate(0px, 0px)
            }
          50% {
            transform: translate(0px, 4rem)
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
        .line {
          height: 1px;
          background: linear-gradient(to right,
            rgba(243, 2, 2,0.1) 0%,
            rgba(243, 2, 2) 50%,
            rgba(243, 2, 2,0.1) 100%);
          position: relative;
          top: 2rem;
          animation: dong 2s infinite
        }
        .top-left {
          position: absolute;
          top: -3px;
          left: -3px;
          width: 1rem;
          height: 1rem;
          border-top: 6px solid @primary;
          border-left: 6px solid @primary;
        }
        .top-right {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 1rem;
          height: 1rem;
          border-top: 6px solid @primary;
          border-right: 6px solid @primary;
        }

        .bottom-left {
          position: absolute;
          bottom: -3px;
          left: -3px;
          width: 1rem;
          height: 1rem;
          border-bottom: 6px solid @primary;
          border-left: 6px solid @primary;
        }

        .bottom-right {
          position: absolute;
          bottom: -3px;
          right: -3px;
          width: 1rem;
          height: 1rem;
          border-bottom: 6px solid @primary;
          border-right: 6px solid @primary;
        }
      }
    }
  }
}
</style>
