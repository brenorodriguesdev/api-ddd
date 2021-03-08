import { Encrypter } from "../../data/contracts/encrypter";
import * as bcrypt from 'bcrypt'

export class BCryptAdapter implements Encrypter {

    constructor(private readonly salt: number) { }

    async encrypt(value: string): Promise<string> {
        return await bcrypt.hash(value, this.salt);
    }
    
}