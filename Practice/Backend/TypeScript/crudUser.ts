interface IUser {
  id: string;
  name: string;
  age: number;
}

type UserID = number;

class UserCrud {
  private _db: Map<UserID, IUser>;

  constructor() {
    this._db = new Map();
  }

  public insertUser(data: IUser): IUser {
    if (this._db.has(+data.id)) throw new Error("UserID allready exist");
    this._db.set(+data.id, data);
    return data;
  }

  public updateUser(id: UserID, data: Omit<IUser,'id'>): IUser {
    const existingUser = this._db.get(id);
    if (!existingUser) throw new Error("Not id available");
    const updatedData:IUser = {
      ...existingUser,
      ...data
    }
    this._db.set(id, updatedData);
    return this._db.get(id)!;
  }

  public deleteUser(id: number): string {
    if (!this._db.has(id)) throw new Error("this id is not available");
    this._db.delete(id);
    return `${id} - User Deleted`;
  }

  public getUser() {
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
  name: "Abc",
  age: 18,
});

const user = userCrud.getUser();
console.log(user);