// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ElmInitController from "./elm_init_controller"
application.register("elm-init", ElmInitController)

import ReactInitController from "./react_init_controller"
application.register("react-init", ReactInitController)
