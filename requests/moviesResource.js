let axios = require('axios')
let defaults = require('./default')
let apiKey = 

module.exports = {
    topRated : function(){
        return axios({
            ...defaults,
            method:'get' , 
            url: '/movie/top_rated',
            params: {
                language : 'en-US',
                
            }
        })
    }
}