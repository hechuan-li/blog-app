<template>
	<view>
		<u-modal v-model="show" content="Please Login First" @confirm="confirm" @cancle='cancel' show-cancel-button></u-modal>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				loginStatus: false
			}
		},
		methods: {
			confirm(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
		},
		onShow() {
			if(this.$store.state.isSignIn){
				this.show = false
				this.loginStatus = true
			}else{
				this.loginStatus = false
				this.show = true
			}
		}
	}
</script>

<style>

</style>
