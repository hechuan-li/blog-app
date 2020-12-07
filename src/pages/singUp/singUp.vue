<template>
	<view class="login-wrapper">
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="login-content">
			<view class="login-input">
				<input type="text" placeholder="Username (4-10 letters)"  v-model="form.username"/>
				<input type="text" placeholder="Nickname" v-model="form.nickname"/>
				<input type="password" placeholder="New Password" v-model="form.password"/>
				<input type="password" placeholder="Confirm Password" v-model="form.checkPass"/>
				
			</view>
			<view class="login-button">
				<button type="default" class="debounce" @click="$u.debounce(loginButton, 500)">GO Login</button>
				<button type="default" class="debounce" @click="$u.debounce(registerBTN, 500)">Register</button>

				
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		 
		data() {
			return {
				form:{
					username:'',
					password:'',
					nickname:'',
					checkPass:''
				}
				
			}
		},
		methods: {
			registerBTN(){
				
				//rule check 
				if(this.$u.test.isEmpty(this.form.username) || this.$u.test.isEmpty(this.form.password)){
					this.$refs.uTips.show({
									title: 'Please type Username and Password',
									type: 'error',
									duration: '2000'
								})
				}else if(!this.$u.test.rangeLength(this.form.username, [4, 10]) || !this.$u.test.rangeLength(this.form.password, [4, 10])){
					console.log('111');
					this.$refs.uTips.show({
									title: 'Input length must between 5 - 10 letters',
									type: 'warning',
									duration: '2000'
								})
				}else if(this.form.password !== this.form.checkPass){
					this.$refs.uTips.show({
									title: 'Password Not Match, Please Type Again!',
									type: 'error',
									duration: '2000'
								})
					
				}else{
					this.$http.post('api/users/register', this.form).then(res=>{
						 let status = res.data.code;
						              if (status === "0") {
						                this.$refs.uTips.show({
						                				title: 'Register Success!!!',
						                				type: 'success',
						                				duration: '2000'
						                			})
						              } else if (status === "-1") {
														this.$refs.uTips.show({
																		title: 'This username has been registed!!!',
																		type: 'warning',
																		duration: '2000'
																	})
						              }
					})
				}
			},
			loginButton(){
				uni.switchTab({
					url:'../login/login'
				})
			}
			
		}
		
	}
</script>

<style scoped lang="scss">
	.login-wrapper{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;	
		background: linear-gradient(to bottom, #0f526d, #05d0aa, #0f526d);
		padding-top: 100rpx;
		
		.login-content{
			width: 100%;
			position: absolute;
			top: 40%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			-o-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			
			.login-input{
				display: flex;
				flex-flow: column nowrap;
				input{
					width: 60%;
					height: 80rpx;
					margin: 20rpx auto;
					border: 1px silid #0f526d;
					border-radius: 40rpx;
					background: #0f526d;
					color: #05d0aa;
					text-align: center;
					.uni-input-placeholder{
						color: #05d0aa;
					}
				}
				
			}
			.login-button{
				margin-top: 50rpx;
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				
					
				button{
					width: 250rpx;
					height: 80rpx;
					border-radius: 40rpx;
					background: #0f526d;
					color: #05d0aa;
					text-align: center;
					line-height: 2.2;
				}
			}
			
			.u-alert-tips{
				width: 60% ;
				text-align: center;
				margin: 0 auto;
				background-color: #05d0aa;
			}
		}
	}
</style>

