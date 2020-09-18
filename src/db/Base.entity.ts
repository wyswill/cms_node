import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class BaseEntity {
  @PrimaryGeneratedColumn() private readonly id: number;
}
