import Deals from '../../models/Deals'
import connectDb from '../../middleware/mongoose'

const handler = async (req, res) =>{

    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {

            let p = new Deals({
                oid: req.body[i].oid,
                title: req.body[i].title,
                desc: req.body[i].desc,
                img: req.body[i].img,
                brand: req.body[i].brand,
                category: req.body[i].category,
                price: req.body[i].price,
                discount: req.body[i].discount
            })
            await p.save()
            res.status(200).json({ success: "Deals added successfully!" })
        }
    }

    else {
        res.status(400).json({ error: "This is not right way to request!" })
    }

}
export default connectDb(handler);
