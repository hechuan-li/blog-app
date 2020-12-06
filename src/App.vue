<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.$store.commit('changeSignState', 1)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
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
		font-family: abcsans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
