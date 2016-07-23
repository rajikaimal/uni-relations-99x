import AppDispatcher from '../../dispatcher/AppDispatcher';
import loginConstants from '../../constants/core/constant';
import { browserHistory } from 'react-router';

const login = {
	login: function () {
		browserHistory.push('/dashboard');
	},
};

export default login;