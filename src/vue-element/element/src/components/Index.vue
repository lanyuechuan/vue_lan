<template>
<div>
    
    <el-carousel :interval="4000" type="card" height="180px">
        <el-carousel-item v-for="item in imgs" :key="item">
        <el-image
            :src="item"
            style="height: 180px"
            fit="cover">
        </el-image>
        </el-carousel-item>
    </el-carousel>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <el-row type="flex" justify="space-between">
        <el-col >
            <el-form :inline="true" :model="formInline" class="demo-form-inline" style="height:160px">
                <el-form-item label="高考分数">
                    <el-input style="width:200px" v-model="formInline.score" placeholder="高考分数"></el-input>
                </el-form-item>
                <br>
                <el-form-item label="高考省份">
                    <el-select style="width:200px" v-model="formInline.region" placeholder="高考省份">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <br>
                <el-form-item>
                    <el-col :offset="16">
                    <el-button type="primary" @click="onSubmit">立即登录</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-col>
        <el-divider class="el-divider--vertical" direction="vertical"></el-divider>
        <el-col>
            <div>33</div>
        </el-col>
        <el-divider direction="vertical"></el-divider>
        <el-col >
            
        </el-col>
    </el-row>  
    <el-divider><i class="el-icon-s-flag"></i></el-divider>
    
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="院校推荐">
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-form-item label="推荐更合适你的学校，登录添加成绩信息,大数据 + AI 智能准确">
        </el-form-item>
    </el-form>
    <el-divider><i class="el-icon-s-cooperation"></i></el-divider>

</div>

</template>
<script>
    import homeImg1 from "../assets/indexImgs/1.jpg";
    import homeImg2 from "../assets/indexImgs/2.jpg";
    import homeImg3 from "../assets/indexImgs/3.jpg";
    import homeImg4 from "../assets/indexImgs/4.jpg";
    import homeImg5 from "../assets/indexImgs/5.jpg";
    import homeImg6 from "../assets/indexImgs/6.jpg";
    export default {
        name: 'Index',
        data() {
            return {
                imgs: [homeImg1, homeImg2, homeImg3, homeImg4, homeImg5, homeImg6],
                formInline: {
                score: '',
                region: ''
                }
            }
        },
        methods: {
        onSubmit() {
            console.log('submit!');
        }
        }
    }
</script>
<style scoped>
.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 10em;
    margin: 0 8px;
    vertical-align: middle;
    position: relative;
}
</style>