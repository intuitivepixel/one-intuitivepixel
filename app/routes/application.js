import Ember from 'ember';
//import { default as math } from 'math';

const { getOwner } = Ember;

export default Ember.Route.extend({
    someNumber: 0,

    beforeModel() {
        this._super(... arguments);
        //this.set('someNumber', math.random());
    },

    setupController(controller) {
        this._super(...arguments);
        controller.set('currentLocation', getOwner(this).lookup('data:location'));
    }
});
