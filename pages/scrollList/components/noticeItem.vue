<template>
	<view class="component">
	    <block v-for="(item, index) in noticesList" :key="index">
	        <view class="list-item" @click="onTabNoticeFn" :item="item">
	            <view class="item-header">
	                <text class="item-title">{{item.title}}</text>
	            </view>
	            <view class="item-main clearfix">
	                <view class="info-box">
	                    <view class="pay-info">{{ item.desc }}</view>
	                    <view class="pay-time">时间：{{ item.date }}</view>
	                </view>
	                <button class="btn-bar">点击</button>
	            </view>
	        </view>
	    </block>
	</view>
</template>

<script>
	export default {
		props: {
			noticesList: {
				type: Array,
				default: function() {
					return [];
				}
			}
		},
		mounted() {
			console.log(this.noticesList);
			console.log('noticeItem');
		},
		methods: {
			onTabNoticeFn(e) {
				console.log(e);
				// let item = e.currentTarget.dataset;
				// console.log(item);
				// this.$emit('tabItem', item);
			}
		}
	};
</script>

<style scoped>
	.list-item {
	    margin: 20upx;
	    background-color: #fff;
	    border-radius: 10upx;
	}
	
	.item-header {
	    display: flex;
	    justify-content: space-between;
	}
	
	.item-title {
	    font-size: 32upx;
	    color: #333;
	}
	
	.item-main {
		display: flex;
		justify-content: space-between;
	}
	
	.info-box {
	    flex: 1;
	}
	
	.pay-info {
	    font-size: 20upx;
	    color: #999;
	}
	
	.pay-info text {
	    margin-right: 10upx;
	}
	
	.pay-time {
	    font-size: 20upx;
	    color: #999;
	}
	
	.btn-bar {
		width: 180upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 32upx;
		margin: 0;
	}
</style>
