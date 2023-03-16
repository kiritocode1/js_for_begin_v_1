

function get_priveleges(Developer) {
    if (Developer == "user") {
        //! do some user stuff here 10000 . 
        // developer == admin 
        return "read";
    }
    else if (Developer == "admin") {
        return "write and read ";
        //! do some admin stuff here
    }
    else if (Developer =="imposter") {
        return "read";
        //! do some imposter stuff here
    }
    else {
        return "no priveleges";
    }
}




