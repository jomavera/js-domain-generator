/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our", "their", "his", "her"];
const adj = ["great", "big", "good", "bad", "huge", "little", "cool"];
const noun = ["jogger", "racoon", "car", "house", "store", "center", "depot"];
const extensions = [".com", ".net", ".org", ".io", ".gov"];

window.onload = function() {
  let pronoun_ix = Math.floor(Math.random() * pronoun.length);
  let adj_ix = Math.floor(Math.random() * adj.length);
  let noun_ix = Math.floor(Math.random() * noun.length);
  let ext_ix = Math.floor(Math.random() * extensions.length);
  domain.innerHTML =
    pronoun[pronoun_ix] + adj[adj_ix] + noun[noun_ix] + extensions[ext_ix];
};
