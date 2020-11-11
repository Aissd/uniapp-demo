<script>
	export default {
		name: 'App',
		onLaunch: function() {
			console.log('App onLaunch');
		},
		onShow: function() {
			console.log('App onShow');
		},
		onHide: function() {
			console.log('App onHide');
		},
		onError: function() {
			console.log('App onError');
		},
		onUniNViewMessage: function() {
			console.log('App onUniNViewMessage');
		},
		onUnhandledRejection: function() {
			console.log('App onUnhandledRejection');
		},
		onPageNotFound: function() {
			console.log('App onPageNotFound');
		},
		onThemeChange: function() {
			console.log('App onThemeChange');
		}
	}
</script>

<style scoped>
	/*每个页面公共css */
</style>
