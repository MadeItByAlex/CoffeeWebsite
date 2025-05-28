import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    imageUrl: string;

    @Column({type: 'float'})
    price: number;
}