import bcrypt from "bcryptjs";
const password = "mypass123";
const saltRounds = 10;

function hashString(arg: string): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    try {
      let salt = await bcrypt.genSalt(saltRounds);
      let hash = await bcrypt.hash(arg, salt);
      resolve(hash);
    } catch (err) {
      reject(err);
    }
  });
}

function compare(plainString: string, hashString: string): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      let ok = await bcrypt.compare(plainString, hashString);
      resolve(ok);
    } catch (err) {
      reject(err);
    }
  });
}

export { hashString, compare };
