/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  // Handle Basics
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  // Handle Extras
  'GET /faq':                { view:   'pages/faq' },
  'GET /legal/terms':        { view:   'pages/legal/terms' },
  'GET /legal/privacy':      { view:   'pages/legal/privacy' },
  'GET /contact':            { view:   'pages/contact' },

  // Handle Registration
  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  // Handle Outsiders
  'GET /lobby':              { action: 'entrance/view-lobby' },
  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  // Handle Admin
  'GET /admin':              { action: 'admin/view-admin-overview' },
  'GET /admin/horizon':              { action: 'admin/view-horizon-overview' },
  'GET /admin/change/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/change/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/change/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/change/delete':              { action: 'dashboard/view-edit-user' },
  'GET /admin/appointment/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/appointment/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/appointment/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/appointment/delete':              { action: 'dashboard/view-edit-user' },
  'GET /admin/event/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/event/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/event/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/event/delete':              { action: 'dashboard/view-edit-user' },
  'GET /admin/order/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/order/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/order/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/order/delete':              { action: 'dashboard/view-edit-user' },
  'GET /admin/product/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/product/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/product/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/product/delete':              { action: 'dashboard/view-edit-user' },
  'GET /admin/staff/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/staff/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/staff/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/staff/delete':              { action: 'dashboard/view-edit-user' },
  'GET /admin/task/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/task/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/task/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/task/delete':              { action: 'dashboard/view-edit-user' },
  'GET /admin/timecard/create':              { action: 'dashboard/view-edit-user' },
  'GET /admin/timecard/read':              { action: 'dashboard/view-edit-user' },
  'GET /admin/timecard/update':              { action: 'dashboard/view-edit-user' },
  'GET /admin/timecard/delete':              { action: 'dashboard/view-edit-user' },
  
  // Handle Operator
  'GET /operator':              { action: 'operator/view-operator-overview' },
  'GET /operator/dashboard':              { action: 'admin/view-horizon-overview' },
  'GET /operator/appointment/create':              { action: 'admin/view-edit-user' },
  'GET /operator/appointment/read':              { action: 'admin/view-edit-user' },
  'GET /operator/appointment/update':              { action: 'admin/view-edit-user' },
  'GET /operator/appointment/delete':              { action: 'admin/view-edit-user' },
  'GET /operator/product/create':              { action: 'admin/view-edit-user' },
  'GET /operator/product/read':              { action: 'admin/view-edit-user' },
  'GET /operator/product/update':              { action: 'admin/view-edit-user' },
  'GET /operator/product/delete':              { action: 'admin/view-edit-user' },
  'GET /operator/task/create':              { action: 'admin/view-edit-user' },
  'GET /operator/task/read':              { action: 'admin/view-edit-user' },
  'GET /operator/task/update':              { action: 'admin/view-edit-user' },
  'GET /operator/task/delete':              { action: 'admin/view-edit-user' },
  'GET /operator/timecard/create':              { action: 'admin/view-edit-user' },
  'GET /operator/timecard/read':              { action: 'admin/view-edit-user' },
  'GET /operator/timecard/update':              { action: 'admin/view-edit-user' },
  'GET /operator/timecard/delete':              { action: 'admin/view-edit-user' },
  
  // Handle Account
  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  // Handle Logs
  'GET /log/':               { action: 'log/view-logs' },
  'GET /log/changes':        { action: 'log/view-log-changes' },
  'GET /log/events':         { action: 'log/view-log-events' },
  'GET /log/orders':         { action: 'log/view-log-orders' },
  'GET /log/tasks':          { action: 'log/view-log-tasks' },


  // Handle Users
  'GET /user':   { view: 'pages/user/user-view' },
  'GET /dashboard/user/:unused?':   { action: 'dashboard/view-record-user' },
  'GET /dashboard/users':   { action: 'dashboard/view-summary-users' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },

};
