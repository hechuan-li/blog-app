const baseUrl = 'http://18.219.200.138:3001'

module.exports = function(url,api,data,headerInfo){
	uni.request({
	    url: url + api, 
	    data: {
	        text: data
	    },
	    header: {
	        'custom-header': headerInfo //自定义请求头信息
	    },
	    success: (res) => {
	        console.log(res.data);
	        this.text = 'request success';
	    }
	});
}