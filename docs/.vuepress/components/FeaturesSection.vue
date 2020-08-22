<template>
  <div class="features-section">
    <section class="wish yesterday">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="./images/04.svg" alt="">
        </div>
        <div class="text-wrapper">
          <h1>{{ features[0].title }}</h1>
          <p class="description">{{ features[0].details }}</p>
        </div>
      </div>
    </section>

    <section class="wish today">
      <div class="wish-inner">
        <div class="text-wrapper">
          <h1>{{ features[1].title }}</h1>
          <p class="description">{{ features[1].details }}</p>
        </div>
        <div class="img-wrapper">
          <img src="./images/02.svg" alt="">
        </div>
      </div>
    </section>

    <section class="wish tomorrow">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="./images/03.svg" alt="">
        </div>
        <div class="text-wrapper">
          <h1>{{ features[2].title }}</h1>
          <p class="description">{{ features[2].details }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FeaturesSection",
  computed: {
    features () {
      return [
        {
          title: '多种对接方式',
          details: '企业服务号快速部署，HTML5 轻应用无缝适配，原生应用跳转，第三方业务系统对接，丰富的公共、私有应用商店。'
        },
        {
          title: '平台能力',
          details: 'WorkPlus 平台作为企业移动应用的统一入口，提供了用户身份集成，应用接入等基础能力接口。'
        },
        {
          title: '前端 JS-SDK',
          details: '提供 JS-SDK，为部署在 WorkPlus 应用中心的轻应用提供访问移动 App 功能的能力。'
        },
      ]
    },
  }
}
</script>

<style lang="stylus" scoped>
.features-section{
  section{
    &.wish {
      &.yesterday, &.tomorrow {
        background: rgba(27,31,35, 0.02);
      }
      overflow: hidden;
      .wish-inner {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 2rem;
        max-width: 56rem;
        width: 100%;
        min-height: 25rem;
        display: flex;
        align-items: center;

        > div {
          flex: auto;

          &.img-wrapper {
            max-width: 22rem;

            img {
              width: 1000px;
              display: block;
            }
          }

          &.text-wrapper {
            box-sizing: border-box;
            padding: 0 2rem;

            h1{
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .features-section {
    section {
      padding: 2rem;
      &.wish {
        &.yesterday{
          margin-top: 8rem;
        }
        .wish-inner {
          display: block;
          padding: 2rem 0;

          .img-wrapper {
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>

