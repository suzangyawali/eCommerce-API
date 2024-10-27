const roleBasedAuth=(role)=>{
 return (req,res,next)=>{
   //
   
    //authorize using user roles
  if(req.user.roles.includes(roles)) return res.status(403).send("Access Denied");
   console.log(role);
   console.log(req.user)
    next();
 };
}
export default roleBasedAuth;