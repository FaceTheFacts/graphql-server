import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { PoliticianSexEnum } from "../enums/entities";
import { Party } from "./Party";

@ObjectType()
@Entity()
export class Politician extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column("varchar")
  public entityType: string;

  @Column("varchar")
  public label: string;

  @Column("varchar")
  public apiUrl: string;

  @Column("varchar")
  public abgeordnetenwatchUrl: string;

  @Column("varchar")
  public firstName: string;

  @Column("varchar")
  public lastName: string;

  @Column("varchar", { nullable: true })
  public birthName?: string;

  @Field()
  @Column({
    type: "enum",
    enum: PoliticianSexEnum,
    nullable: true,
  })
  public sex?: PoliticianSexEnum;

  @Field(() => Int, { nullable: true })
  @Column("integer", { nullable: true })
  public yearOfBirth?: number;

  @Field(() => Party)
  @ManyToOne(() => Party, (party) => party.politicians)
  public party: Party;

  @Column("varchar", { nullable: true })
  public partyPast?: string;

  @Column("boolean", { nullable: true })
  public deceased?: boolean;

  @Column("date", { nullable: true })
  public deceasedDate?: Date;

  @Column("varchar")
  public education: string;

  @Column("varchar", { nullable: true })
  public residence?: string;

  @Column("varchar", { nullable: true })
  public occupation?: string;

  // public statistic_questions?: string;
  // public statistic_questions_answered?: string;

  @Column("varchar", { nullable: true })
  public qid_wikidata?: string;

  @Column("varchar", { nullable: true })
  public fieldTitle?: string;
}
