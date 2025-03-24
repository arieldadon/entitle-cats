import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Mouse } from 'src/mouse/mouse.model';

@Table({ underscored: true })
export class Cat extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  declare firstName: string;

  @Column
  declare lastName: string;

  @Column
  declare imageUrl: string;

  @Column
  declare description: string;

  @HasMany(() => Mouse, { foreignKey: 'catId' })
  mice: Mouse[];
}
