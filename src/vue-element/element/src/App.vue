<template>
  <div id="app">
    <el-container>
    <el-header>
        <!-- 导航菜单 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" text-color="#44cef6" mode="horizontal" background-color="#75878a" active-text-color="#ffb61e" @select="handleSelect">
            <el-menu-item index="/">主页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">填志愿</template>
                <el-menu-item index="2-1">院校优先</el-menu-item>
                <el-menu-item index="2-2">专业优先</el-menu-item>
                <el-menu-item index="2-3">测录取概率</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">找学校</el-menu-item>
            <el-menu-item index="4">找专业</el-menu-item>
            <el-menu-item index="/user">用户中心</el-menu-item>
            <el-menu-item index="/login">登录</el-menu-item>
            <el-menu-item index="/register">注册</el-menu-item>
        </el-menu>
    </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
        return {
                activeIndex: this.$route.path,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push(key);
            }
        }
}
</script>

<style>

</style>
