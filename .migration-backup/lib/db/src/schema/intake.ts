import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const intakeSubmissionsTable = pgTable("intake_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  reflection: text("reflection").notNull(),
  email: text("email").notNull(),
  receivedAt: timestamp("received_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertIntakeSchema = createInsertSchema(intakeSubmissionsTable).omit({
  id: true,
  receivedAt: true,
});

export type InsertIntake = z.infer<typeof insertIntakeSchema>;
export type IntakeSubmission = typeof intakeSubmissionsTable.$inferSelect;
