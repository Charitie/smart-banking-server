import bcrypt from "bcrypt";

class EncryptData {
	static generateHash(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
	}

	static async compareHash(inputPassword, hashedPassword) {
		return bcrypt.compare(inputPassword, hashedPassword);
	}
}

export default EncryptData;
