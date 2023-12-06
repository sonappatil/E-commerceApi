import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "../utility/common/users-roles.enum";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    name : string;
    @Column()
    email : string;
    @Column()
    password: string;
    @Column({type : 'enum', enum: Roles, array: true, default:[Roles.USER]})
    roles: Roles[];
}


console.log('table ');