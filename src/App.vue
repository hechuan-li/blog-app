<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.wrapper{
		margin:0;
		padding: 0;
		width: 750rpx;
		margin: 0 auto;
		background-color: #b3eeee;
		overflow-x: hidden;
		overflow-y: hidden;
		scrollbar-width: none;
	}
</style>
