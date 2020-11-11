<template>
	<view class="container">
		<notice-item :noticesList="noticesList" @tabItem="onTabItemFn" v-if="!pageLoading && noticesList.length"></notice-item>
		<no-data v-if="!pageLoading && noticesList.length === 0"></no-data>
	</view>
</template>

<script>
	import noticeItem from './components/noticeItem.vue';
	import noData from '@/components/noData.vue';
	
	import { getRamdon } from '@/assets/util.js';
	export default {
		name: 'scrollList',
		components: {
			noticeItem,
			noData
		},
		data() {
			return {
				noticesList: [],
				pageObj: {
					page: 1,
					pageSize: 10,
					total: 0
				},
				pageLoading: true
			}
		},
		methods: {
			async getData(callback) {
				console.log('进来加载数据啦~~~~~~~~~~~~');
				let ary = this.noticesList;
				if(this.pageObj.page === 1) {
					ary = this.makeData(10);
				} else {
					ary = ary.concat(this.makeData(10));
				}
				console.log(ary);
				setTimeout(() => {
					this.noticesList = ary;
					this.pageObj.total = ary.length;
					this.pageLoading = false;
					callback && callback();
				}, 1000);
			},
			onTabItemFn(e) {
				console.log(e);
			},
			makeData(num) {
				let newAry = [];
				for(let i = 0; i < num; i++) {
					newAry.push({
						title: '标题' + new Date().getTime(),
						desc: '描述~~~~可能会很长的描述' + getRamdon(100),
						date: '2020-10-01 12:51:42',
						status: 1
					})
				}
				return newAry;
			}
		},
		onLoad() {
			console.log('Page onLoad');
			this.getData();
		},
		onShow() {
			console.log('Page onShow');
		},
		onReady() {
			console.log('Page onReady');
		},
		onHide() {
			console.log('Page onHide');
		},
		onUnload() {
			console.log('Page onUnload');
		},
		onResize() {
			console.log('Page onResize');
		},
		onPullDownRefresh() {
			uni.startPullDownRefresh();
			console.log('Page onPullDownRefresh');
			uni.showNavigationBarLoading();
			this.pageObj.page = 1;
			this.getData(() => {
				// 隐藏导航栏加载框
				uni.hideNavigationBarLoading();
				// 停止下拉动作
				uni.stopPullDownRefresh();
			});
		},
		onReachBottom() {
			console.log('Page onReachBottom');
			uni.showLoading({ title: '玩命加载中' });
			this.pageObj.page += 1;
			this.getData(() => {
				uni.hideLoading();
			});
		},
		onTabItemTap() {
			console.log('Page onTabItemTap');
		},
		onShareAppMessage() {
			console.log('Page onShareAppMessage');
		},
		onPageScroll() {
			console.log('Page onPageScroll');
		},
		onNavigationBarButtonTap() {
			console.log('Page onNavigationBarButtonTap');
		},
		onBackPress() {
			console.log('Page onBackPress');
		},
		onNavigationBarSearchInputChanged() {
			console.log('Page onNavigationBarSearchInputChanged');
		},
		onNavigationBarSearchInputConfirmed() {
			console.log('Page onNavigationBarSearchInputConfirmed');
		},
		onNavigationBarSearchInputClicked() {
			console.log('Page onNavigationBarSearchInputClicked');
		},
		onShareTimeline() {
			console.log('Page onShareTimeline');
		},
		onAddToFavorites() {
			console.log('Page onAddToFavorites');
		}
	}
</script>

<style scoped>
	
</style>
