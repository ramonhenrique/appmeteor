Router.route('/', {
    name: 'welcome'
});
Router.route('/convenio', {
    waitOn: function() {
        return Meteor.subscribe('post');
    },

    action: function() {
        if (this.ready())
        // if the sub handle returned from waitOn ready() method returns
        // true then we're ready to go ahead and render the page.
            this.render('convenio')
        else
        // otherwise render the loading template.
            this.render('carregando');
    }
});


if (Meteor.isClient) {

    Template.app_content.helpers({
        process: function() {
            return 'welcome';
        }
    });

}

if (Meteor.isServer) {
    Meteor.publish('post', function() {
        var self = this;
        // send the ready message in a few seconds
        setTimeout(function() {
            self.ready();
        }, 3000);
    });
}
