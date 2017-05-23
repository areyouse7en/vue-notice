<template lang="pug">
    #app
</template>

<script>
export default {
    mounted(){
        var data = {
            title:'会议室开会',
            desc:'关于本轮开发的需求讨论，项目进度计划安排等，全体都要参加，带好笔记本。'
        }
        this.$notice(data,'info')
    }
}
</script>

<style lang="scss" src="./assets/styles/notice.scss"></style>
<style src="./assets/font/iconfont.css"></style>
