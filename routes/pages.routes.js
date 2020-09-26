// jshint esversion: 7
const pages = require(`../controllers/pages.controller`);
module.exports = app => {
    // about page
   app.route(`/about`)
       .get(pages.about);

    // services page
   app.route(`/services`)
       .get(pages.services);
       
    // contact us page
   app.route(`/contact`)
       .get(pages.contact);

    // project page
   app.route(`/team`)
        .get(pages.team);

    app.route(`/projects`)
        .get(pages.project);

};