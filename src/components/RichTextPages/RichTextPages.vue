<template>
	<view class="rich-text-page-wrapper">
		 <view class="rich-text-page-wrapper-title">
		 	<text class="pageTitle">{{articles.articleDetail.title}}</text>
			<text class="pageAuthor">Author: {{articles.author}}</text>
			<text class="pageDate">{{articles.articleDetail.publish_date}}</text>
		 </view>
		 <view class="line">
		 	
		 </view>
		 <view class="rich-text-page-wrapper-content">
			 <view class="u-content">
			 		<u-parse :html="articles.content"></u-parse>
			 	</view>
		 </view>
	</view>
</template>

<script>
	
	export default {
		props:['articles'],
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss">
.rich-text-page-wrapper{
	width: 100%;
	
	&-title{
		width: 100%;
		text-align: center;
		display: flex;
		flex-flow: column nowrap;
		
		.pageTitle{
			font-size: 50rpx;
			font-weight: blod;
			font-style: italic;
			font-family: Lora,"Times New Roman",serif;
			text-transform: uppercase;
		}
		.pageAuthor{
			font-size: 30rpx;
			font-style: italic;
			font-family: Lora,"Times New Roman",serif;
			color: #313233;
			margin-top: 16px;
		}
		.pageDate{
			font-size: 25rpx;
			font-style: italic;
			font-family: Lora,"Times New Roman",serif;
			color: #808080;

		}
	}
	
	&-content{
		width: 90%;
		margin: 80rpx auto;
		.u-content {
			font-size: 26rpx;
				
				text-indent: 30rpx;
				text-align:justify;
				letter-spacing:3rpx;
			}
	}
	
	.line{
		width: 90%;
		margin: 20rpx auto;
		border: 1rpx solid #0f526d;
		border-radius: 1rpx;
	}
}
</style>
