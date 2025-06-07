<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221219/e2fba4798c544678b229915b312732b5.png) no-repeat center bottom / 100% auto,#f6f6f6","height":"auto"}'>
		<form :style='{"width":"100%","padding":"100rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"12rpx 24rpx","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}'>
				<xia-editor :style='{"minHeight":"240rpx","padding":"0","margin":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","height":"auto"}' v-model="content" @editorChange="contentChange" placeholder="回复"></xia-editor>
			</view>
			<view :style='{"width":"100%","justifyContent":"center","display":"flex","height":"auto"}'>
				<button :style='{"border":"0","padding":"0 40rpx","margin":"48rpx 20rpx","color":"#069ffa","borderRadius":"16rpx","background":"radial-gradient(circle, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"216rpx","height":"80rpx"}' @tap="onReplyTap" class="bg-red margin-tb-sm">提交回复</button>
			</view>
		</form>
	</view>
</view>
</template>

<script>
    import xiaEditor from '@/components/xia-editor/xia-editor'
	export default {
		data() {
			return {
				pid: '',
				content: '',
				username: '',
                avatarurl: '',
				user: {},
			}
		},
        components: {
            xiaEditor
        },
		async onLoad(options) {
			this.pid = options.pid;
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
            if(table == `yonghu`){
                this.username = this.user.zhanghao
            }
            if(table == `yisheng`){
                this.username = this.user.yishengbianhao
            }
		},
		methods: {
            contentChange(e) {
                this.content = e
            },
			async onReplyTap() {
                this.avatarurl = uni.getStorageSync('headportrait')?uni.getStorageSync('headportrait'):'';
                var sensitiveWords = "";
                var sensitiveWordsArr = [];
                if(sensitiveWords) {
                    sensitiveWordsArr = sensitiveWords.split(",");
                }
                for(var i=0; i<sensitiveWordsArr.length; i++){
                    //全局替换
                    var reg = new RegExp(sensitiveWordsArr[i],"g");
                    //判断内容中是否包括敏感词
                    if (this.content.indexOf(sensitiveWordsArr[i]) > -1) {
                        // 将敏感词替换为 **
                        this.content = this.content.replace(reg,"**");
                    }
                }
				await this.$api.save('forum',{
					parentid: this.pid,
					content: this.content,
                    avatarurl: this.avatarurl,
					username: this.username
				});
				this.$utils.msgBack('回复成功');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
