import AppDispatcher from '../../dispatcher/AppDispatcher';
import addConstants '../../constants/core/constant';

var add = {
  invokeCounter: function () {
    //dispatch action
    AppDispatcher.handleViewAction({
      actionType: addConstants.ADD,
      data: 'Sampledata',
    });
  },
};

export default add;