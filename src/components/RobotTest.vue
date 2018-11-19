<template>
    <div>
      <p>
        提问：
        <input type="text" v-model="question">
      </p>
      <p>
        {{ answer }}
      </p>
    </div>
</template>

<script>
export default {
  name: 'RobotTest',
  data () {
    return {
      question: '',
      answer: '你还没有问人家啊'
    }
  },
  watch: {
    question: function () {
      this.answer = '等待发问~~'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') !== -1) {
        this.answer = '思考中~~~'
        let that = this
        that.$axios.post('http://robottest.uneedzf.com/api/talk2Robot', {
          token: 'dca20bf9e152341b6aa764dabfe94b3b',
          message: that.question
        }).then(function (res) {
          if (res.data.code === 0) {
            that.answer = res.data.data
          } else {
            that.answer = res.data.message
          }
        }).catch(function (err) {
          console.log(err)
        }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
