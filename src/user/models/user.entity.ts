import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { WalletEntity } from "src/wallets/models/wallet.entity";


@Entity()
export class UserEntity {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;
    

    @Column({select: false})
    password: string;

    @Column({unique: true})
    cpf: string;

    @OneToMany(() => WalletEntity, wallet => wallet.user)
    wallets: WalletEntity[];

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
}