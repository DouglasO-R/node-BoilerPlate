async function findAll (){
    return "index";
}

async function findById (){
    return `show `;
}

async function insert (data){
    return `create ${JSON.stringify(data)}`;
    console.log(data);
}

async function update (){
    return `update `;
}

async function delet (){
    return `delet `;
}

export default {
    findAll,
    findById,
    insert,
    update,
    delet
}