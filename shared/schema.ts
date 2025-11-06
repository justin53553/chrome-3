import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const verificationTokens = pgTable("verification_tokens", {
  token: varchar("token", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  username: text("username").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  verified: timestamp("verified"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertVerificationTokenSchema = createInsertSchema(verificationTokens).omit({
  createdAt: true,
});

export type InsertVerificationToken = z.infer<typeof insertVerificationTokenSchema>;
export type VerificationToken = typeof verificationTokens.$inferSelect;
