Meteor.publish('convenio', function(params) {
    var self = this;
    setTimeout(function() {
        if (params._id == 1) {
            self.added("UM");
            self.ready();
        } else {
            self.added("Não encontrado esse ID");
            self.ready();
        }
    }, 2000);
});
