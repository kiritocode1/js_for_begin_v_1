function user_priveleges(Developer) {
    if (Developer == "user") {
        console.log("You are a user");
        /// 100000 lines of code 
        return { Developer: "user", data: "hello admin" };
    }
    else if (Developer == "admin") {
        console.log("You are an admin");
        return { Developer: "admin", data: "hello admin" };
    }
    else if (Developer == "imposter") {
        console.log("You are an imposter");
        return { Developer: "imposter" };
    }
    else {
        throw new Error("You are not a user, admin or imposter");
    }
}
;
