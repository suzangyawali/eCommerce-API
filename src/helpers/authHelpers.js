import jwt from "jsonwebtoken"

function createAuthToken(data) {
  const token = jwt.sign(data,process.env.JWT_SECRET,{
    expiresIn: 86400,
  });
  return token; 
}

export {createAuthToken};