import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.interceptors.request.use(function(config) {
	Toast.loading('Loading', 0);
	return config;
});

axios.interceptors.response.use(function(config) {
	Toast.hide();
	return config;
});