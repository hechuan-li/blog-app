<template>
	<view>
		<text>detail</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleId:Number
			};
		},
		onLoad(Options) {
			console.log(Options.id);
			this.articleId = Options.id
			
		},
		methods:{
			getDetail(){
				this.$http
			}
		}
	}
</script>

<style lang="scss">

</style>
