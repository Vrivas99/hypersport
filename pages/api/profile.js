import { verify } from "jsonwebtoken"

export default function profileHandler(req, res) {

    //console.log(req.cookies)
    const { myTokenName } = req.cookies
    if (!myTokenName) {
        return res.status(401).json({ error: 'invalid token' })
    }
    try {
        const user = verify(myTokenName, 'secret')
        console.log(user.email)

        return res.json({ user: user.email })
    } catch (error) {
        return res.status(401).json({ error: "invalid token" });
    }
}