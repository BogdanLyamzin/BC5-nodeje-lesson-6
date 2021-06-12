const {Author} = require("../models");

const getAll = (query)=>{
    return Author.find(query);
}

const getOne = (id)=>{
    return Author.findById(id);
}

const add = (body)=>{
    return Author.create(body);
}

const update = (id, body) => {
    return Author.findByIdAndUpdate(id, body);
}

const updateStatus = (id, status) => {
    return Author.findByIdAndUpdate(id, {status});
}

const del = (id)=>{
    return Author.findByIdAndDelete(id);
}

const service = {
    getAll,
    getOne,
    add,
    update,
    del,
    updateStatus
}

module.exports = service