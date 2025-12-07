const asyncHandler = (requestHandler) =>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}







export {asyncHandler}


  //for understanding(diff method)--->
  
// const asyncHandler = (fn) => async (req, req, next) => {
//     try {
//         await fn(req, res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }