import request from "supertest";
import { app } from "../../api/src/App";

describe("test app integration",()=>{

    const body = {
        name:"admin",
        email:"ad@admin.com"
    };

    test("GET::Index",async()=>{
        const res = await request(app).get('/api/main').send();
        expect(res.status).toBe(200);
    })

    test("GET::Show",async()=>{
        const res = await request(app).get('/api/main/5').send();
        expect(res.status).toBe(200);
    })

    test("POST::Create",async()=>{
        const res = await request(app).post('/api/main').send(body);
        expect(res.status).toBe(201);
    })

    test("PUT::Update",async()=>{
        const res = await request(app).put('/api/main/5').send();
        expect(res.status).toBe(200);
    })

    test("DELETE::Delete",async()=>{
        const res = await request(app).delete('/api/main/5').send();
        expect(res.status).toBe(200);
    })
})