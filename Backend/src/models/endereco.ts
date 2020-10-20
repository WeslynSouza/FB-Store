import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Usuario from './usuario';

@Entity("Endereço")
export default class Endereço {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    estado: string;

    @Column()
    cidade: string;

    @Column()
    cep: number;

    @Column()
    rua: string;

    @Column()
    numero: number;

    @Column()
    complemento: string;

    @ManyToOne(() => Usuario, usuario => usuario.endereços)
    @JoinColumn({ name: 'usuarioEmail'})
    usuario: Usuario;
}