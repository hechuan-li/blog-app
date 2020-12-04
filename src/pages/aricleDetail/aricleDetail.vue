<template>
	<view>
		<RichTextPages :articles='articleInfo'></RichTextPages>
	</view>
</template>

<script>
	import RichTextPages from '../../components/RichTextPages/RichTextPages.vue'
	import marked from 'marked'
	export default {
		components:{
			RichTextPages
		},
		data() {
			return {
				articleId:Number,
				articleInfo:{
					articleDetail:[],
					author:'',
					content:""
				}
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
					this.articleInfo.articleDetail = res.data.article
					this.articleInfo.author = res.data.author
					this.articleInfo.content = marked(res.data.article.content)
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
