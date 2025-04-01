import { getAllCustomers } from "../../../../dblib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const customers=await getAllCustomers();
        return NextResponse.json(customers,{status:200});
        
    } catch (error) {
        return NextResponse.json({error:"Hiba a lekérdezés során!"})
    }
}