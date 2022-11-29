export const signup =async (user,pass)=>{
    const response=await fetch(  ,
        {
            method: "POST",
            body:JSON.stringify({ email:user,password:pass}),
        }
    );
    if (response.status=== 201){
        return "User registered";
    }
    throw new Error('Couldn´t registered user. Status: $(response.status}');
};