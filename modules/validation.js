function validateUserInput(user, isIdRequired = false) {
  if (!user || typeof user !== "object") return false;

  // Check for required fields
  const requiredFields = ["name", "email", "username"];
  if (isIdRequired) {
    requiredFields.push("id");
  }

  requiredFields.forEach((field) => {
    if (!(field in user)) return false;
  });

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

function validateTodoInput(todo, isIdRequired = false) {
  if (!todo || typeof todo !== "object") return false;

  // Check for required fields
  const requiredFields = ["userId", "title", "completed"];
  // if (isIdRequired) {
  //   requiredFields.push("id");
  // }

  requiredFields.forEach((field) => {
    if (!(field in todo)) return false;
  });

  // Check if title is a non-empty string
  if (typeof todo.title !== "string" || todo.title.trim() === "") return false;

  // Check if userId is a non-negative integer
  if (typeof todo.userId !== "number" || !Number.isInteger(todo.userId) || todo.userId < 0) return false;

 
  return true;
}

function validatePostInput(post, isIdRequired = false) {
  if (!post || typeof post !== "object") return false;

  // Check for required fields
  const requiredFields = ["userId", "title"];
  if (isIdRequired) {
    requiredFields.push("id");
  }

  requiredFields.forEach((field) => {
    if (!(field in post)) return false;
  });

  // Check if title is a non-empty string
  if (typeof post.title !== "string" || post.title.trim() === "") return false;

  // Check if userId is a non-negative integer
  if (typeof post.userId !== "number" || !Number.isInteger(post.userId) || post.userId < 0) return false;

  // Check if body is a non-empty string
  if (post.body && (typeof post.body !== "string" || post.body.trim() === "")) return false;

  return true;
}

function validateCommentInput(comment, isIdRequired = false) {
  if (!comment || typeof comment !== "object") return false;

  // Check for required fields
  const requiredFields = ["postId", "name", "email", "body"];
  if (isIdRequired) {
    requiredFields.push("id");
  }

  requiredFields.forEach((field) => {
    if (!(field in comment)) return false;
  });

  // Check if name is a non-empty string
  if (typeof comment.name !== "string" || comment.name.trim() === "") return false;

  // Check if postId is a non-negative integer
  if (typeof comment.postId !== "number" || !Number.isInteger(comment.postId) || comment.postId < 0) return false;

  // Check if username is a non-empty string
  if (typeof comment.body !== "string" || comment.body.trim() === "") return false;

   // Check if email is valid
   if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/.test(comment.email)) return false;

  return true;
}

function validatePasswordInput(password, isIdRequired = true) {
  if (!password || typeof password !== "object") return false;

  // Check for required fields
  const requiredFields = ["password"];
  if (isIdRequired) {
    requiredFields.push("userId");
  }

  requiredFields.forEach((field) => {
    if (!(field in password)) return false;
  });

  // Check if password is a non-empty string
  if (typeof password.password !== "string" || password.password.trim() === "") return false;

  return true;
}

function validateLoginInput(body) {
  
  if (!body || typeof body !== "object") return false;

  // Check for required fields
  const requiredFields = ["userId", "password"];
  requiredFields.forEach((field) => {
    if (!(field in body)) return false;
  });

  // Check if password is a non-empty string
  if (typeof body.password !== "string" || body.password.trim() === "") return false;

  return true;

}


module.exports = {
  validateUserInput,
  validateTodoInput,
  validatePostInput,
  validateCommentInput,
  validatePasswordInput,
  validateLoginInput
};
