import Ember from 'ember'
import layout from '../templates/components/fred-modal'

export default Ember.Component.extend({
    actions:{
        toggleModal: () => {
            this.toggleProperty('enabled')
        }
    },
    layout: layout
})
