<template>
	<view class="read-list">
		<view class="read-list-item" v-for="item in readlist" :key='item.id'>
			<view class="read-list-item-title">
				{{item.title}}
			</view>

			<view class="read-list-item-content">
				<u-read-more show-height="250" :toggle='true' close-text="Read more" open-text='close' color='#0f526d'>
					<rich-text :nodes="item.content"></rich-text>
				</u-read-more>
			</view>

			<view class="read-list-item-footer">
				<button type="default">modify</button>
				<button type="default">delete</button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: ['readlist'],
		data() {
			return {};
		}
	}
</script>

<style scoped lang="scss">
	.read-list {
		width: 750rpx;
		display: flex;
		flex-flow: column nowrap;
		padding: 20rpx 0;

		&-item {
			width: 94%;
			margin: 12rpx auto;
			padding: 20rpx;
			display: flex;
			flex-flow: column nowrap;
			border-color: #c8c7cc;
			border-style: solid;
			border-width: 1px;
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
			border-radius: 3px;

			&-title {
				width: 100%;
				height: 60rpx;
				border-bottom: 1rpx solid #c8c7cc;
				text-align: center;
			}

			&-content {
				margin: 20rpx 0;
				border-bottom: 1rpx solid #c8c7cc;

			}

			&-footer {
				width: 100%;
				display: flex;
				justify-content: space-around;

				button {
					width: 150rpx;
					height: 50rpx;
					font-size: 20rpx;
					border-radius: 40rpx;
					background: #0f526d;
					color: #05d0aa;
					text-align: center;
					line-height: 2.2;
				}
			}

		}
	}
</style>
