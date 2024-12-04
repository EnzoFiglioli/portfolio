export const handlerServices = (data: string []) => {
    return new Promise((resolve, reject) => {
        try{
            resolve(data)
        }catch(err){
            reject(err)
        }
    })
}