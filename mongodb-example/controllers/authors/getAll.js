const {author: service} = require("../../services");
/*
const service = obj.author;
*/
// /api/v1/authors?name="Скотт Бэккер"
const getAll = async (req, res, next) => {
    const {query} = req;
    /*
    {
        name: "Скотт Бэккер"
    }
    */
    try {
        const result = await service.getAll(query);
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        next(error)
    }
}

module.exports = getAll;