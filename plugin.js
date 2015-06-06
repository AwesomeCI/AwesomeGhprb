'use strict';

var AwesomeGithubApi = require("awesome-github-api");
var GithubPullRequestBuilder = function(){
    var models = {};
};

GithubPullRequestBuilder.prototype.slug = function (){
    return "ghprb";
};

GithubPullRequestBuilder.prototype.name = function (){
    return "Github Pull Request Builder";
};


GithubPullRequestBuilder.prototype.models = function (db){
    models.github = AwesomeGithubApi.models(db);
    return null;
};

GithubPullRequestBuilder.prototype.dependencies = function (){
    return [
        "awesome-github"
    ];
};


GithubPullRequestBuilder.prototype.middleware = function (req, res, next){
    next();
};


GithubPullRequestBuilder.prototype.router = function (router){
    router.get("/webhook/", function (req, res){
        res.json({
            error : false,
            route : "get webhook"
        });
    });
    router.post("/webhook/", function (req, res){
        res.json({
            error : false,
            route : "post webhook"
        });
    });
};

GithubPullRequestBuilder.prototype.menu = function (){
    return {
        "icon" : "ti-github",
        "text" : "Github Pull Request Builder",
        "href" : "/ghprb/",
        "submenu" : [
            {
                "icon" : "",
                "text" : "Configure",
                "href" : "/ghprb/configure"
            }
        ]
    };
};

module.exports = GithubPullRequestBuilder;