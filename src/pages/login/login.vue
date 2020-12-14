<template>
	<view class="login-wrapper">
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="login-content">
			<view class="login-input">
				<input type="text" placeholder="Username" v-model="form.acc" />
				<input type="password" placeholder="Password" v-model="form.pass" />

			</view>
			<view class="login-button">
				<button type="default" class="debounce" @click="$u.debounce(singUpButton, 500)">Sing Up</button>
				<button type="default" class="debounce" @click="$u.debounce(loginButton, 500)">Login</button>


			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				form: {
					acc: '',
					pass: ''
				},
				rules: {
					acc: [{
						required: true,
						message: 'please type your username',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					pass: [{
						min: 5,
						message: 'password cannot less then 5 letters',
						trigger: 'change'
					}]
				}

			}
		},
		methods: {
			loginButton() {
				//rule check 
				if (this.$u.test.isEmpty(this.form.acc) || this.$u.test.isEmpty(this.form.pass)) {
					this.$refs.uTips.show({
						title: 'Please type Username and Password',
						type: 'error',
						duration: '2000'
					})
				} else if (!this.$u.test.rangeLength(this.form.acc, [4, 10]) || !this.$u.test.rangeLength(this.form.pass, [4, 10])) {
					console.log('111');
					this.$refs.uTips.show({
						title: 'Input length must between 5 - 10 letters',
						type: 'warning',
						duration: '2000'
					})
				} else {
					//login request
					this.$http.post('api/users/login', this.form).then(res => {
						console.log(res);
						let status = res.data;
						//user did not sing up
						if (status.code === "-1") {
							this.$refs.uTips.show({
								title: status.msg,
								type: 'warning',
								duration: '2000'
							})
							uni.navigateTo({
								url: '../singUp/singUp',
							})
						} else if (status.code === 0) {
							//登陆成功时
							
							//save data at local
							uni.setStorageSync('token', status.token)
							uni.setStorageSync('user_id', status.user_id)
							uni.setStorageSync('username', status.username)
							
							//save data at vuex
							this.$store.commit("setToken", status.token);
							this.$store.commit("changeSignState", 1)
							this.$store.commit('setUser', status.username)
							
							//success notification
							this.$refs.uTips.show({
								title: status.msg,
								type: 'success',
								duration: '1000'
							})
							
							//jump to home page
							setTimeout(()=>{
								uni.switchTab({
									url:'../index/index',
								})
							},1000)
							
							
						} else if (status.code === "-2") {
							alert(status.msg);
						}
					})
				}
			},
			singUpButton() {
				uni.navigateTo({
					url: '../singUp/singUp',
				})
			}

		}

	}
</script>

<style scoped lang="scss">
	.login-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, #0f526d, #05d0aa, #0f526d);
		padding-top: 100rpx;

		.login-content {
			width: 100%;
			position: absolute;
			top: 40%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			-o-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);

			.login-input {
				display: flex;
				flex-flow: column nowrap;

				input {
					width: 60%;
					height: 80rpx;
					margin: 20rpx auto;
					border: 1px silid #0f526d;
					border-radius: 40rpx;
					background: #0f526d;
					color: #05d0aa;
					text-align: center;

					.uni-input-placeholder {
						color: #05d0aa;
					}
				}

			}

			.login-button {
				margin-top: 50rpx;
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;


				button {
					width: 250rpx;
					height: 80rpx;
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
