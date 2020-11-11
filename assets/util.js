// 获取num以内的随机数
export function getRamdon(num = 100) {
	return Math.ceil(Math.random(10) * num);
}

// 手机号正则
export const mobilePattren = /^(?:(?:\+|00)86)?1[3|4|5|7|8|9]\d{9}$/;

// 密码正则 - 8~15个数字英文
export const pwdPattern = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{8,15}$/;


/**
 * 构造参数
 * query 参数对象
 * 返回 ?x=1&y=2
 */
export function handleParams(query) {
    let params = '';
    if (query) {
        params = '?';
        for (let i in query) {
            if (params == '?') {
                params += i + '=' + query[i]
            } else {
                params += '&' + i + '=' + query[i];
            }
        }
    }
    return params;
}