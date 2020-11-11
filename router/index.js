import { handleParams } from '@/assets/util.js';

const router = {
	index: '/pages/index/index',
	dataForm: '/pages/dataForm/dataForm',
	scrollList: '/pages/scrollList/scrollList'
};

export default {
	// 
	navigateTo: (url, query) => {
		uni.navigateTo({
			url: router[url] + handleParams(query)
		})
	},
	
	// 
	reLaunchTo: url => {
		uni.reLaunch({
			url: url
		})
	},
	
	// 
	navigateBack: (delta = 1) => {
		uni.navigateBack({
			delta: delta
		})
	},
	
	// 
	redirectTo: url => {
		uni.redirectTo({
			url: url
		})
	},
	
	// 
	switchTab: url => {
		uni.switchTab({
			url: url
		})
	}
};