import { mainRepository } from "../repositories";

async function index (){
    return await mainRepository.findAll();
}

async function show (){
    return await mainRepository.findById();
}

async function create (data){
    return await mainRepository.insert(data);
}

async function update (){
    return await mainRepository.update();
}

async function delet (){
    return await mainRepository.delet();
}

export default {
    index,
    show,
    create,
    update,
    delet
}