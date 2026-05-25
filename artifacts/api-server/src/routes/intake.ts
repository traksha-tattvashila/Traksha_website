import { Router } from "express";

const router = Router();

const submissions: Array<{ id: string; reflection: string; email: string; receivedAt: string }> = [];

router.post("/intake", (req, res) => {
  const { reflection, email } = req.body as { reflection?: string; email?: string };

  if (!reflection || typeof reflection !== "string" || reflection.trim().length === 0) {
    res.status(422).json({ detail: "reflection is required" });
    return;
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(422).json({ detail: "a valid email is required" });
    return;
  }
  if (reflection.trim().length > 600) {
    res.status(422).json({ detail: "reflection must be 600 characters or fewer" });
    return;
  }

  const record = {
    id: crypto.randomUUID(),
    reflection: reflection.trim(),
    email: email.trim().toLowerCase(),
    receivedAt: new Date().toISOString(),
  };

  submissions.push(record);

  res.status(201).json({ id: record.id, received_at: record.receivedAt });
});

export default router;
