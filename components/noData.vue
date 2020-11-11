<template>
	<view class="container">
		<view>{{noDataTitle}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			noDataTitle: {
				type: String,
				default: function() {
					return '暂无数据';
				}
			}
		}
	};
</script>

<style scoped>
	
</style>
