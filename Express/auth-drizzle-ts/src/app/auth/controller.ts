import type { Request, Response } from "express";
import { signupmodel, singinmodel } from "./models.js";
import { db } from "../../db/index.js";
import { usersTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { createHmac, randomBytes } from "node:crypto";
 
import { createToken, type userToken } from "./utils/token.js";

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

    const salt = randomBytes(32).toString("hex");
    const hash = createHmac("sha256", salt).update(password).digest("hex");
    const [result] = await db
      .insert(usersTable)
      .values({
        firstName,
        lastName,
        email,
        password: hash,
        salt,
      })
      .returning({ id: usersTable.id });

    return res.status(201).json({
      message: `user has been created successfully`,
      data: { id: result?.id },
    });
  }

  public async handleSingin(req: Request, res: Response) {
    const validationSigninResult = await singinmodel.safeParseAsync(req.body);

    if (validationSigninResult.error)
      return res.status(400).json({
        message: `invalid email or password`,
        error: validationSigninResult.error.issues,
      });

    const { email, password } = validationSigninResult.data;

    const [userSelect] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (!userSelect)
      return res
        .status(404)
        .json({ message: `user with email ${email} does not exist` });

    const salt = userSelect.salt!;

    const hash = createHmac("sha256", salt).update(password).digest("hex");

    if (userSelect.password !== hash)
      return res
        .status(400)
        .json({ message: `email or password is incorrect` });

       //todo: token

       const token = createToken({id: userSelect.id})

       
    return res.json({ message: `signin Success`, data: { token } });
  }

  public async handleMe(req: Request, res: Response){
    const {id} = req.user! as userToken

    const [userResult] = await db.select().from(usersTable).where(eq(usersTable.id, id))

    return res.json({
      firstName: userResult?.firstName,
      lastName: userResult?.lastName,
      email: userResult?.email
    })
  }
}

export default AuthenticationController;
// alt + z -wordwrap
