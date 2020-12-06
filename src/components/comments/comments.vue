<template>
	<view>
		<uni-card 
		v-for="item in comments"
		:key='item.id'
		    :title="item.nickname" 
		    mode="title" 
		    :is-shadow="true" 
		    :thumbnail="item.head_img === null ? defaultHeadImg : item.head_img" 
		    :extra="item.publish_time" 
		>
		    {{item.cm_content}}
		</uni-card>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card-comment.vue'
	export default {
		components: {uniCard},
		props:['comments'],
		data() {
			return {
				defaultHeadImg: 'http://18.219.200.138:3001/uploads/1607252832831.jpg'
				
			};
		}
	}
</script>

<style lang="scss">

</style>
