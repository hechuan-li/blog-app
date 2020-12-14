<template>
	<view class="my-article-wrapper">
		<!-- popup window -->
		<u-modal v-model="show" content="Please Login First" @confirm="confirm" @cancle='cancel' title ='Alert' show-cancel-button confirm-text='Go Login' cancel-text='Cancel'></u-modal>
		
		<!-- show when user is't login' -->
		<u-empty text="Please Login !!!" mode="permission" :show='loginStatus === true ? false : true' class='u-empty' margin-top='250'></u-empty>
		
		<!-- show when user has loged in -->
		<!-- <uni-card v-for='item in myArticleList' :title="item.title" :sub-title="item.publish_date" :key='item.id'>
			<u-read-more show-height="50" :shadow-style="shadowStyle" :toggle='true' close-text="Read more" open-text='close'>
					<rich-text :nodes="item.content"></rich-text>
				</u-read-more>
			<view class="" slot="foot"><u-button>月落</u-button></view>
		</uni-card> -->
		<ReadMore :readlist='myArticleList'></ReadMore>
		<u-back-top :scroll-top="scrollTop" top="200"></u-back-top>
	</view>
	
</template>

<script>
	import ReadMore from '../../components/ReadMore/ReadMore.vue'
	export default {
		components:{
			ReadMore
		},
		data() {
			return {
				show:false,
				loginStatus: false,
				myArticleList:[],
				scrollTop: 0
			}
		},
		methods: {
			confirm(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			getMyArticleList(){
				this.$http.get('api/article/myArticle', {
					params: {
						username: this.$store.state.username
					}
					
				}).then(res=>{
					console.log(res);
					this.myArticleList = res.data.list
				})
			}
		},
		onShow() {
			if(this.$store.state.isSignIn){
				this.show = false
				this.loginStatus = true
				this.getMyArticleList()
			}else{
				this.loginStatus = false
				this.show = true
			}
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			}
	}
</script>

<style scoped lang="scss">
.my-article-wrapper{
	
	.uni-card_content{
		// height: 350rpx;
	}
	
	.u-card-wrap { 
			background-color: $u-bg-color;
			padding: 1px;
		}
		
		.u-body-item {
			font-size: 32rpx;
			color: #333;
			padding: 20rpx 10rpx;
		}
}
</style>
