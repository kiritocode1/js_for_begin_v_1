
type user_type = {
    Developer: "user", 
    data:string

}



type admin_type = {
    Developer: "admin",
    data: string
}


type imposter_type = {
    Developer: "imposter",
}



function user_priveleges (Developer: "user" | "admin" | "imposter"): user_type | admin_type | imposter_type {

    if (Developer == "user") {
    
        console.log("You are a user");
/// 100000 lines of code 

       return {Developer : "user", data :"hello admin"} as user_type;
    }
    else if (Developer == "admin") {
        
            console.log("You are an admin");
        
       return {Developer : "admin", data :"hello admin"} as admin_type;
        
    }
    else if (Developer == "imposter") {
            
                console.log("You are an imposter");
            
        return {Developer : "imposter"} as imposter_type;
    }
    else {
                
                    throw new Error("You are not a user, admin or imposter");
                
                }
}; 