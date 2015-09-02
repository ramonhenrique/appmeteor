var menuItens = new ReactiveVar([]);
var data = new ReactiveVar([]);
var permissoes = {};

Router.configure({
    loadingTemplate: 'carregando',
    notFoundTemplate: 'DataNotFound'
});


window.registraPermissao = function registraPermissao(nome, titulo) {
    permissoes[nome] = {
        titulo: titulo
    };
}
registraPermissao("executar", "Executar");
registraPermissao("cadastrar", "Cadastrar");
registraPermissao("modificar", "Modificar");
registraPermissao("excluir", "Excluir");

window.registraMenuItem = function registraMenuItem(route, module, title, roles) {

    var arr = menuItens.get();

    arr.push({
        title: title,
        route: route
    });

    menuItens.set(arr);

    Router.route(route, {
        waitOn: function() {
            return Meteor.subscribe(module, this.params);
        },
        action: function(res) {
            if (this.ready()) {
                this.set('data', res);
                this.render(module)
            } else
                this.render('carregando');
        }
    });
}


Router.route('/paciente', {
    name: 'paciente'
});

Router.route('/', {
    name: 'welcome'
});



Template.app_menu.helpers({
    menuItens: function() {
        return menuItens.get();
    }
})
Template.app_content.helpers({
    process: function() {
        return 'welcome';
    }
});
