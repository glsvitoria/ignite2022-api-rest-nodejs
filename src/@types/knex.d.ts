import { Knex } from "knex";

declare module "knex/types/table" {
  export interface Tables {
    transactions: {
      id: string;
      type: string;
      amount: number;
      title: string;
      created_at: string;
      session_id?: string;
    };
  }
}
