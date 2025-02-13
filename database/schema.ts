import {
  integer,
  text,
  boolean,
  pgTable,
  uuid,
  date,
  varchar,
  pgEnum,
  timestamp,
} from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", ["Pending", "Approved", "Reject"]);
export const ROLE_ENUM = pgEnum("role", ["User", "Admin"]);
export const BORROW_STATUS_ENUM = pgEnum("borrow_status", [
  "Borrowed",
  "Returned",
]);

export const users = pgTable("users", {
  id: uuid("ID").notNull().primaryKey().defaultRandom().unique(),
  fullname: varchar("FullName", { length: 255 }).notNull(),
  email: varchar("Email").notNull().unique(),
  password: varchar("Password").notNull(),
  studentId: integer("StudentId").notNull().unique(),
  universityCard: text("UniversityCard").notNull(),
  status: STATUS_ENUM("Status").default("Pending"),
  role: ROLE_ENUM("Role").default("User"),
  lastActivityDate: date("LastActivityDate").defaultNow(),
  CreatedAt: timestamp("CreatedAt", { withTimezone: true }).defaultNow(),
});
