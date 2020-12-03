<template>
	<view class="content">
		<view class="content-list" v-for="item in articles" :key='item.id' @click="clickArticle(item.id)">
			<uni-card :title="item.title"
				:extra="item.publish_date.substr(0,10)" 
				:is-shadow="true">
			    {{item.content.substr(0,100)}}
			</uni-card>
		</view>
	</view>
</template>

<script>
		import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		components: {
					 uniCard
					 },
		data() {
			return {
				articles:[]
			}
		},
		onLoad() {
			this.getArticleList()
		},
		methods: {
			getArticleList(){
				uni.request({
				    url: "http://18.219.200.138:3001/api/article/allArticle",
				    success: (res) => {
				        // console.log(res.data);
				        this.articles = res.data.list
				    }
				});
			},
			clickArticle(id){
				console.log(id);
				uni.navigateTo({
					url:"../aricleDetail/aricleDetail?id="+id,
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		width:750rpx;
		
		&-list{
			width: 100%;
			flex-flow: column nowrap;
		}
	}
	
</style>
