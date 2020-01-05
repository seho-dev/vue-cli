import axios from "axios";
/**
 * 封装的通用请求类
 * @param {*} url 
 * @param {*} data 请求参数
 * @param {*} method 请求类型
 * @param {*} locktype 加密类型
 */

export default function request(url, data, method, locktype) {
    return new Promise((resolve, reject) => {
        axios.request({
            url,
            method,
            data,
        }).then(res => {
            console.log(res);
            if (res.data.code === 200 && res.status === 200) {
                resolve(res.data.data);
            }
        }).catch(error => {
            console.log(error);
            reject();
        })
    })

}