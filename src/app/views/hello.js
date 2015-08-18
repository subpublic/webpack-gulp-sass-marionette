import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

export default Marionette.ItemView.extend({

  template: _.template('Helluooo <%= name %> !'),

  serializeData() {
    return {
      name: 'worlsd'
    };
  }

});
