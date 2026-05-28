import type { Request, Response } from "express";
import { signupmodel } from "./models.js";
import { db } from "../../db/index.js";
import { usersTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { createHmac, randomBytes } from "node:crypto";

class AuthenticationController {
  public async handleSignup(req: Request, res: Response) {
    const validationResult = await signupmodel.safeParseAsync(req.body);

    if (validationResult.error)
      return res.status(400).json({
        message: `cross check the details`,
        error: validationResult.error.issues,
      });
    const { firstName, lastName, email, password } = validationResult.data;

    const userEmailResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (userEmailResult.length > 0)
      return res.status(400).json({
        error: "duplicate entry",
        message: `user with this email ${userEmailResult} already exist`,
      });
 
      const salt = randomBytes(32).toString("hex")
      const hash = createHmac("sha256", salt).update(password).digest("hex")
     const [result] = await db.insert(usersTable).values({
        firstName,
        lastName,
        email,
        password: hash,
        salt
     }).returning({id:usersTable.id})

     return res.status(201).json({message: `user has been created successfully`, data: {id: result?.id}})
  }
}
export default AuthenticationController;
// alt + z -wordwrap
