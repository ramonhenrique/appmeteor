    Template.action.helpers({
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