const express = require ("express");
const path = require ("path");
const session = require ("express-session");
const exphbs = require ("express-handlebars");
const helpers = require ("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require ("./config/connection");