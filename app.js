Router.route('/', {
    name: 'welcome'
});

if (Meteor.isClient) {
    Template.app_menu.helpers({
        menuItens: [{
            title: "Convêssssnio",
            route: '/convenio'
        }, {
            title: "Paciddddente",
            route: '/cadastropaciente'
        }]
    })
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
