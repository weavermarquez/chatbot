import { pgTable, serial, text } from "drizzle-orm/pg-core";
import {
  integer,
  primaryKey,
  jsonb,
  timestamp,
  char,
} from "drizzle-orm/pg-core";

export const tabScribe = pgTable("tabScribe", {
  id: serial().primaryKey(),
  title: text(),
  character_name: text().notNull(),
  starting_state: text().notNull(),
  central_imbalance: text().notNull(),
  additional_notes: text().notNull(),
  story_structure: text().notNull(),
});

export const tabBeats = pgTable(
  "tabBeats",
  {
    scribeId: integer()
      .notNull()
      .references(() => tabScribe.id),
    idx: integer().notNull(),
    symbol: char({ length: 1 }).notNull(),
    label: text(),
    summary: text(),
  },
  (table) => [primaryKey({ columns: [table.scribeId, table.idx] })],
);
