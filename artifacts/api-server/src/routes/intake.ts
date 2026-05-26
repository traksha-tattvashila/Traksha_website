import { Router } from "express";
import { db, intakeSubmissionsTable, insertIntakeSchema } from "@workspace/db";
import { count } from "drizzle-orm";

const router = Router();

router.post("/intake", async (req, res) => {
  const parsed = insertIntakeSchema.safeParse({
    reflection: req.body?.reflection,
    email: req.body?.email,
  });

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    const field = firstIssue?.path?.[0] ?? "field";
    const msg = firstIssue?.message ?? "Invalid input";
    res.status(422).json({ detail: `${field}: ${msg}` });
    return;
  }

  const { reflection, email } = parsed.data;

  const [record] = await db
    .insert(intakeSubmissionsTable)
    .values({ reflection: reflection.trim(), email: email.trim().toLowerCase() })
    .returning({ id: intakeSubmissionsTable.id, receivedAt: intakeSubmissionsTable.receivedAt });

  res.status(201).json({ id: record.id, received_at: record.receivedAt });
});

router.get("/intake/count", async (_req, res) => {
  const [row] = await db.select({ count: count() }).from(intakeSubmissionsTable);
  res.json({ count: Number(row?.count ?? 0) });
});

export default router;
