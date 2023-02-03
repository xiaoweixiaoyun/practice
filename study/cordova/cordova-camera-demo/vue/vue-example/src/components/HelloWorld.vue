<template>
  <div style="text-align: center;margin: 0 auto;padding: 20px;">
    <button @click="scan" style="font-size: 30px;width: 100%;">打开扫描</button>
    <br>
    <br>
    扫描结果：
    <br>
    <input style="font-size: 2rem;width: 100%;text-align: center;" v-model="code" />
  </div>
</template>

<script>
export default {
  name: 'Scan',
  data () {
    return {
      code: ''
    }
  },
  created () {
    if (this.$route.query.status === '500') {
      console.log(this.$route.query.msg)
    } else {
      this.code = this.$route.query.msg
    }
  },
  methods: {
    scan () {
      this.$router.push('/qr')
    }
  }
}
</script>
<style scoped lang="scss"></style>
