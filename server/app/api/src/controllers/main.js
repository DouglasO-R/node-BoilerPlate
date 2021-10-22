import { mainService } from "../services";
import { validateFunc } from "../utils/joiValidate";
async function index (req,res,next){
    try {
        // const result = await mainService.index();
        // res.status(200).send(result);
        const { password } = req.body;
        const verifiObj = {
            isNumber: (item)=> isNaN(item * 1) ? true : false ,
            isUpper: (item) =>  item === item.toUpperCase() ? true : false ,
            isLower: (item) =>  item === item.toLowerCase() ? true : false ,
            isSpecial: (item) => item === item.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? true : false 
        }
        // tirar espaços em branco
        const newPass = password.replace(/\s+/g, '');
        // criar array de letras
        const dataArr = [...newPass];
       

        // dataArr.map((item)=>{
        //     verifiObj.isNumber(item);
        //     verifiObj.isLower(item);
        //     verifiObj.isUpper(item);
        //     verifiObj.isSpecial(item);
        //     // console.log (`isNumber:${verifiObj.isNumber(item)}`);
        //     // console.log (`isUpper:${verifiObj.isUpper(item)}`);
        //     // console.log (`isLower:${verifiObj.isLower(item)}`);
        //     // console.log (`isEspecial:${verifiObj.isSpecial(item)}`);
        // })

        dataArr.reduce((acc,item)=>{
            if(acc === item){
                acc[item]=1
            }else{
                acc[item]++;
            }
        },[])
        
        res.json(dataArr);

    } catch (error) {
        next(error);
    } 
}

async function show (req,res,next){
    try {
        const result = await mainService.show();
        res.status(200).send(result);
    } catch (error) {
        next(error);
    } 
}

async function create (req,res,next){
    try {
        const data = req.body;
        const result = await mainService.create(data);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    } 
}

async function update (req,res,next){
    try {
        const result = await mainService.update();
        res.status(200).send(result);
    } catch (error) {
        next(error);
    } 
}

async function delet (req,res,next){
    try {
        const result = await mainService.delet();
        res.status(200).send(result);
    } catch (error) {
        next(error);
    } 
}

export default {
    index,
    show,
    create,
    update,
    delet
}