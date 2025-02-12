CREATE TYPE "public"."borrow_status" AS ENUM('Borrowed', 'Returned');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('User', 'Admin');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('Pending', 'Approved', 'Reject');--> statement-breakpoint
CREATE TABLE "users" (
	"ID" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"FullName" varchar(255) NOT NULL,
	"Email" varchar NOT NULL,
	"Password" varchar NOT NULL,
	"StudentId" integer NOT NULL,
	"UniversityCard" text NOT NULL,
	"Status" "status" DEFAULT 'Pending',
	"Role" "role" DEFAULT 'User',
	"LastActivityDate" date DEFAULT now(),
	"CreatedAt" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_ID_unique" UNIQUE("ID"),
	CONSTRAINT "users_Email_unique" UNIQUE("Email"),
	CONSTRAINT "users_StudentId_unique" UNIQUE("StudentId")
);
