<template>
  <div id="app">
    <el-container>
    <el-header>
        <!-- 导航菜单 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" text-color="#67C23A" mode="horizontal" background-color="#FAEBD7" active-text-color="#ffb61e" @select="handleSelect">
            <el-menu-item index="/"><i class="el-icon-s-home"></i>主页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">填志愿</template>
                <el-menu-item index="2-1"><i class="el-icon-mouse"></i>院校优先</el-menu-item>
                <el-menu-item index="2-2"><i class="el-icon-coordinate"></i>专业优先</el-menu-item>
                <el-menu-item index="2-3"><i class="el-icon-search"></i>测录取概率</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><i class="el-icon-ship"></i>找学校</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-discover"></i>找专业</el-menu-item>
            <el-menu-item index="/user"><i class="el-icon-s-promotion"></i>用户中心</el-menu-item>
            <el-menu-item index="/login"><i class="el-icon-s-check"></i>登录</el-menu-item>
            <el-menu-item index="/register"><i class="el-icon-thumb"></i>注册</el-menu-item>
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
