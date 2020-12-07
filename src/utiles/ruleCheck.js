
	 function ruleCheck (username, password){
		 console.log(this);
		if(this.$u.test.isEmpty(username) || this.$u.test.isEmpty(password)){
			this.$refs.uTips.show({
							title: 'Please type Username and Password',
							type: 'warning',
							duration: '2000'
						})
		}
		if(!this.$u.test.rangeLength(username, [5, 10]) || !this.$u.test.rangeLength(password, [5, 10])){
			console.log('111');
			this.$refs.uTips.show({
							title: 'Input length must between 5 - 10 letters',
							type: 'warning',
							duration: '2000'
						})
		}
	}


module.export = ruleCheck