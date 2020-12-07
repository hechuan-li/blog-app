<template>
	<view >
		<!-- article part -->
		<RichTextPages :articles='articleInfo'></RichTextPages>
		
		<!-- divider -->
		<u-divider color="#0f526d" half-width="270" border-color="#0f526d">comment</u-divider>
		
		<!-- login page redirect part -->
		<text v-if="loginStatus === 0">Login to comment</text>
		
		<!-- comments type in part -->
		<view class="comment-input" v-else>
			<textarea class="comment-input-text"/>
			<view class="comment-input-button">
				<u-button shape="square" 
					:ripple="true" 
					ripple-bg-color="#909399"  
					type='primary' 
					:onclick='submitComment'>Submit</u-button>
			</view>
		</view>
		
		<!-- comments part -->
		<view>
			<Comments :comments='commentInfo'></Comments>
		</view>
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
				commentInfo:[],
				loginStatus: Number,
				comment_content:''
			};
		},
		onLoad(Options) {
			console.log(Options.id);
			this.articleId = Options.id
			this.getDetail(Options.id)
			this.getCommentList(Options.id)
			this.loginStatus = this.$store.state.isSignIn
			console.log(this.loginStatus);
			
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
			},
			submitComment(){
			// 	this.$http.post('api/comment/public',{
   //      params:{
   //        article_id:this.articleId,
   //        content: this.comment_content,
   //        user_id: this.userInfo.id,
   //        head_img:this.userInfo.head_img,
   //        nickname: this.userInfo.nickname
   //      }
   //    }).then(res=>{
   //      if(res.data.code === 0){
   //        console.log('post success')
        
   //      }
   //    })
			}
		}
	}
</script>

<style lang="scss">
.comment-input{
	padding: 30rpx;
	text-align: center;
	
	&-text{
		width: 90%;
		height: 200rpx;
		margin: 0 auto;
		padding: 26rpx;
		border: 1px solid #0f526d;
	}
	
	&-button{
		width: 50%;
		height: 60rpx;
		margin: 30rpx auto;
		
	}
	
	
}
</style>
