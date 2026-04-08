"use strict";
class UserCrud {
    _db;
    constructor() {
        this._db = new Map();
    }
    insertUser(data) {
        if (this._db.has(+data.id))
            throw new Error("UserID allready exist");
        this._db.set(+data.id, data);
        return data;
    }
    updateUser(id, data) {
        const existingUser = this._db.get(id);
        if (!existingUser)
            throw new Error("Not id available");
        const updatedData = {
            ...existingUser,
            ...data
        };
        this._db.set(id, updatedData);
        return this._db.get(id);
    }
    deleteUser(id) {
        if (!this._db.has(id))
            throw new Error("this id is not available");
        this._db.delete(id);
        return `${id} - User Deleted`;
    }
    getUser() {
        return this._db;
    }
}
const userCrud = new UserCrud();
userCrud.insertUser({
    id: "101",
    name: "Abc",
    age: 10,
});
// userCrud.deleteUser(101);
userCrud.updateUser(101, {
    id: "100",
    name: "Abc",
    age: 18,
});
const user = userCrud.getUser();
console.log(user);
