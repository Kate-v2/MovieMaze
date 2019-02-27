// This file is in the entry point in your webpack config.

import DOMTools from './tools/dom_tools.js'
const tool = new DOMTools

import NavBar from './classes/nav_bar.js'
const navBar = new NavBar

import Welcome from './classes/welcome.js'
const welcome = new Welcome

navBar.loadNav()

welcome.loadWelcome()
