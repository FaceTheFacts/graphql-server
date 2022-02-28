import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Sidejob } from "./Sidejob";
import { SidejobOrganization } from "./SidejobOrganization";

@Entity("city", { schema: "public" })
export class City extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  public id: number;

  @Column("varchar", { name: "entity_type" })
  public entityType: string;

  @Column("varchar", { name: "label" })
  public label: string;

  @Column("varchar", {
    name: "api_url",
    unique: true,
  })
  public apiUrl: string;

  @OneToMany(() => Sidejob, (sidejob) => sidejob.fieldCity)
  public sidejobs: Sidejob[];

  @OneToMany(
    () => SidejobOrganization,
    (sidejobOrganization) => sidejobOrganization.fieldCity,
  )
  public sidejobOrganizations: SidejobOrganization[];
}
