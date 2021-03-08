import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('account')
export class AccountDTO {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    email: string

    @Column()
    name: string

    @Column()
    password: string

}