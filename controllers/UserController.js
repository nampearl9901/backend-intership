export const userController = (req, res)=>{
    res.Send('user page')
}


export const detailsUserController = (req, res)=>{
    res.Send('user detail page')
}

export const createUserController = (req, res)=>{
    console.log('req.body',req.body)
}