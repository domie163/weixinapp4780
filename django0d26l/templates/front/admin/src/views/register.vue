<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221010/3d359a9094d045b5a445e8d903a25a5c.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"30px 20px 30px","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"0","borderRadius":"20px  120px","background":"-webkit-linear-gradient(top,#fff,#ccc)","width":"800px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"margin":"0 0 20px 0","color":"#4d90ef","textAlign":"center","width":"100%","letterSpacing":"5px","lineHeight":"44px","fontSize":"32px","textShadow":"0px 0px 0px #4d90ef"}' class="title">医笙小程序设计与前端开发注册</div>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">账号</div>
					<el-input  v-model="ruleForm.zhanghao"  autocomplete="off" placeholder="账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">姓名</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yonghuxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">手机</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">身份证</div>
					<el-input  v-model="ruleForm.shenfenzheng"  autocomplete="off" placeholder="身份证"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yonghu'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="yonghutouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">医生编号</div>
					<el-input  v-model="ruleForm.yishengbianhao"  autocomplete="off" placeholder="医生编号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">医生姓名</div>
					<el-input  v-model="ruleForm.yishengxingming"  autocomplete="off" placeholder="医生姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in yishengxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">科室名称</div>
                    <el-select v-model="ruleForm.keshimingcheng" placeholder="请选择科室名称" >
                        <el-option
                            v-for="(item,index) in yishengkeshimingchengOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">职称</div>
					<el-input  v-model="ruleForm.zhicheng"  autocomplete="off" placeholder="职称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">联系电话</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 10px","height":"auto"}' class="list-item" v-if="tableName=='yisheng'">
					<div v-if="true" :style='{"margin":"0px 0px 40px -24px","color":"#666","left":"0","textAlign":"right","width":"104px","lineHeight":"44px","fontSize":"16px","position":"absolute"}' class="lable">科室图片</div>
                    <file-upload
                        tip="点击上传科室图片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.keshitupian?ruleForm.keshitupian:''"
                        @change="yishengkeshitupianUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px #74b0e2","margin":"20px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"4px 20px","background":"-webkit-linear-gradient(top,#038afb,#116dba)","width":"120px","fontSize":"14px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 20%","color":"#fff","display":"inline-block","lineHeight":"1","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
                xingbie: '',
                keshimingcheng: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            yonghuxingbieOptions: [],
            yishengxingbieOptions: [],
            yishengkeshimingchengOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.yonghuxingbieOptions = "男,女".split(',')
        this.yishengxingbieOptions = "男,女".split(',')
        this.$http({
            url: `option/keshimingcheng/keshimingcheng`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code === 0) {
                this.yishengkeshimingchengOptions = data.data;
            } else {
                this.$message.error(data.msg);
            }
        });
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        yonghutouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        yishengkeshitupianUploadChange(fileUrls) {
            this.ruleForm.keshitupian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.zhanghao) && `yonghu` == this.tableName){
						this.$message.error(`账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `yonghu` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yonghu` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.xingming) && `yonghu` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
						this.$message.error(`身份证应输入身份证格式`);
						return
					}
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yonghu` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
						this.$message.error(`余额应输入数字`);
						return
					}
					
					
					
					
					
					
				
					if((!this.ruleForm.yishengbianhao) && `yisheng` == this.tableName){
						this.$message.error(`医生编号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `yisheng` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `yisheng` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.yishengxingming) && `yisheng` == this.tableName){
						this.$message.error(`医生姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yisheng` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.keshitupian!=null) {
                this.ruleForm.keshitupian = this.ruleForm.keshitupian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`yisheng` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
						this.$message.error(`余额应输入数字`);
						return
					}
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20221010/3d359a9094d045b5a445e8d903a25a5c.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 85%;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 10px 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #ddd;
						border-radius: 80px  40px;
						padding: 0 10px 0 24px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						margin: 0px 0px 0px  85px;
						color: #bbb;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #ffffff;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 0px 0px 0px  85px;
		  		  color: #ffffff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #ffffff;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 0px 0px 0px  85px;
		  		  color: #ffffff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #ffffff;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 0px 0px 0px  85px;
		  		  color: #ffffff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
	}
</style>
