import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cat } from 'src/cats/cat.model';

@Table({ underscored: true, tableName: 'mice', timestamps: false })
export class Mouse extends Model {
  @Column
  declare name: string;

  @ForeignKey(() => Cat)
  @Column
  declare catId: number;

  @BelongsTo(() => Cat, 'cat_id')
  cat: Cat;
}
