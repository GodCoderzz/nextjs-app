import Books from '../../models/Books'
import connectDb from '../../middleware/mongoose'

const handler = async (req, res) =>{

    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {

            let p = new Books({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                price: req.body[i].price,
                author: req.body[i].author

            })
            await p.save()
            res.status(200).json({ success: "Books added successfully!" })
        }
    }

    else {
        res.status(400).json({ error: "This is not right way to request!" })
    }

}
export default connectDb(handler);
