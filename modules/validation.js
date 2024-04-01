function validateUserInput(user, isIdRequired = false) {
    if (!user || typeof user !== "object") return false;

    // Check for required fields
    const requiredFields = ["name", "email", "username"];
    if (isIdRequired) {
        requiredFields.push("id");
    }

    requiredFields.forEach((field) => {
        if (!(field in user)) return false;
    })
    
  // Check if name is a non-empty string
    if (typeof user.name !== "string" || user.name.trim() === "") return false;
    
  // Check if username is a non-empty string
    if (typeof user.username !== "string" || user.username.trim() === "") return false;
    
  // Check if email is valid
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(user.email)) return false;
    
  // Check if phone are valid
    if (user.phone && !/^\d+$/.test(user.phone)) return false;
    
  return true;
}    

module.exports = {
  validateUserInput  
}