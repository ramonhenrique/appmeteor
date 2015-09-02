Router.plugin('loading', {
    loadingTemplate: 'carregando'
});

Router.plugin('dataNotFound', {
    notFoundTemplate: 'DataNotFound'
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


Router.route('/paciente', {
    name: 'paciente'
});
