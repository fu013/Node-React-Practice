// async function
async function findAndSaveUser (Users) {
    let user = await Users.find0ne({}); // resolve 될때까지 기다린 뒤 다음 로직으로 넘어간다.
    user.name = 'zero';
    user = await user.save();
    user = await Users.find0ne ({ gender: 'm' });
}

async function findAndSaveUser(Users) {
    try {
        let User = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'})
    } catch (error) {
        console.error(error);
    }
}
