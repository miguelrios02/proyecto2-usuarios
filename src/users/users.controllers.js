const userDB = []

let baseId = 1

const findAllUsers = async ()=>{
    return await userDB
}

const findUserById = async (id)=> {
    const data = userDB.find(User => User.id === id)
    return data
}
const createNewUser = async (dataObj) => {
    const newUser = {
        id: ++baseId,
        firstName: dataObj.firstName,
        lastName: dataObj.lastName,
        email: dataObj.email,
        password: dataObj.password,
        age: dataObj.age
    }
    await userDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}