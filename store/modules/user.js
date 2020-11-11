const user = {
	state: {
		mobile: '',
		password: ''
	},
	mutations: {
		setMobile: (state, mobile) => {
			state.mobile = mobile;
		},
		setPassword: (state, password) => {
			state.password = password;
		}
	},
	actions: {
		fetchMobile({ dispatch, commit }, params) {
			console.log(params);
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('setMobile', '13288474393');
					commit('setPassword', 'zaq123456');
					resolve({ mobile: '13288474393', password: 'zaq123456' });
				}, 1000);
			}, () => {
				reject();
			});
		}
	},
	getters: {
		getFullMobile: state => {
			return '86' + state.mobile;
		}
	}
};

export default user;