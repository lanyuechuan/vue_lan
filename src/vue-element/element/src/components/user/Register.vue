<template>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
  <el-form-item label="账号/用户名/邮箱" prop="account">
    <el-col :span='6'>
      <el-input v-model.number="ruleForm.account"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-col :span='6'>
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-col :span='6'>
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-col>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <el-button type="primary" plain>忘记密码？</el-button>
  </el-form-item>

  <el-col :span=5 :offset='2'>
   <el-popover
    placement="bottom"
    width="8"
    trigger="hover">
    <el-button slot="reference" style="background-color:yellow">客服微信</el-button>
    <img width="140px" height="100px" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jigao616.com%2Fupload%2Fpatent%2F2017%2F9%2F9%2F32336933.gif&refer=http%3A%2F%2Fimg.jigao616.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621672941&t=108c8b90ea6952cf6694e9f4f6bd5f0d' />
  </el-popover>
  </el-col>
  <el-popover
    placement="bottom"
    width="3"
    trigger="hover"
    content="18180844310">
    <el-button slot="reference" style="background-color:yellow">咨询电话</el-button>
  </el-popover>
</el-form>
</template>
<script>
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          account: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          account: [
            { validator: checkAccount, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>