// personal module for date

//exported function to app.js
exports.getDate = function (){
    let today = new Date();
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let day = days[today.getDay()];
    
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    let day = today.toLocaleDateString("en-US", options);

    return day;
};

//each function needs to be exported
exports.getDay = function(){
    let today = new Date();
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let day = days[today.getDay()];
    
    let options = {
        weekday: 'long',
    };
    
    let day = today.toLocaleDateString("en-US", options);

    return day;
};