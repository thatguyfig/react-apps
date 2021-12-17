import fetchComment from "../../lib/fetchComment"
import createComment from "../../lib/createComment"
import deleteComment from "../../lib/deleteComment"

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return fetchComment(req, res)
        case 'POST':
            return createComment(req, res)
        case 'DELETE':
            return deleteComment(req, res)
        default:
            return res.status(400).json({ message: 'Invalid method.'})
    }
}