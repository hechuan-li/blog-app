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
			this.getDetail(Options.id)
			
		},
		methods:{
			getDetail(article_id){
				this.$http.get('api/article/detail',{
					params:{
						article_id: article_id
					}
				}).then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
