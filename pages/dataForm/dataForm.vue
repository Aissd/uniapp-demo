<template>
	<view class="container">
		<uni-forms ref="form" v-model="formData" :rules="rules" validate-trigger="bind" err-show-type="undertext" @validate="validate">
			<uni-forms-item label="手机号" name="mobile">
				<input type="tel" placeholder="请输入手机号" maxlength="11" autocomplete="off" v-model="formData.mobile" @input="binddata('mobile', $event.detail.value, 'form')" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<input type="password" placeholder="请输入密码" maxlength="15" autocomplete="off" v-model="formData.password" @input="binddata('password', $event.detail.value, 'form')" />
			</uni-forms-item>
			<button @click="submit('form')">submit</button>
		</uni-forms>
	</view>
</template>

<script>
	import { mobilePattren, pwdPattern } from '@/assets/util.js';
	export default {
		name: 'dataForm',
		created() {
			this.fetchMobileFn();
		},
		data() {
			return {
				formData: {
					mobile: '',
					password: ''
				},
				rules: {
					mobile: {
						rules: [
							{ required: true, errorMessage: '请输入手机号' },
							{ pattern: mobilePattren, errorMessage: '请输入正确的手机号' }
						]
					},
					password: {
						rules: [
							{ required: true, errorMessage: '请输入密码' },
							{ pattern: pwdPattern, errorMessage: '请输入正确的密码' }
						]
					}
				}
			}
		},
		methods: {
			fetchMobileFn() {
				this.$store.dispatch('fetchMobile', { id: 123 }).then(res => {
					console.log(res);
					let { mobile, password } = res;
					this.formData.mobile = mobile;
					this.formData.password = password;
				});
			},
			// 手动提交表单
			submit(form) {
				this.$refs[form].submit().then((res) => {
					console.log('表单的值：', res);
					console.log(this.$store);
					let _params = {
						mobile: res.mobile,
						password: res.password
					};
					this.$store.dispatch('login', _params)
					uni.showToast({
						title: '验证成功'
					});
				}).catch((errors) => {
					console.error('验证失败：', errors);
				});
			},
			/**
			 * 触发校验
			 * @param {Object} event
			 */
			validate(event) {
				// TODO 返回校验结果
				console.log('触发校验：', event);
			},
			/**
			 * 手动重置表单
			 */
			resetForm() {
				this.$refs.form.resetFields()
			},
			/**
			 * 清除表单校验
			 * @param {Object} form
			 * @param {Object} name
			 */
			clearValidate(form, name) {
				if (!name) name = []
				this.$refs[form].clearValidate(name)
			}
		}
	};
</script>

<style scoped>
	
</style>
