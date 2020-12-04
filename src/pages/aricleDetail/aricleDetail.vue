<template>
	<view>
		<RichTextPages :articles='articleInfo'></RichTextPages>
		<text>go login</text>
		<text>
			<Comments :comments='commentInfo'></Comments>
		</text>
	</view>
</template>

<script>
	import RichTextPages from '../../components/RichTextPages/RichTextPages.vue'
	import Comments from '../../components/comments/comments.vue'
	import marked from 'marked'
	export default {
		components:{
			RichTextPages,
			Comments
		},
		data() {
			return {
				articleId:Number,
				articleInfo:{
					articleDetail:[],
					author:'',
					content:""
				},
				commentInfo:[]
			};
		},
		onLoad(Options) {
			console.log(Options.id);
			this.articleId = Options.id
			this.getDetail(Options.id)
			this.getCommentList(Options.id)
			
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
			},
			getCommentList(article_id){
				this.$http.get('api/comment/list',{
					params:{
						id:article_id
					}
				}).then(res=>{
					console.log(res);
					this.commentInfo = res.data.list
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
