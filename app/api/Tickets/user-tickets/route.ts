import Ticket from "../../../models/Ticket";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    
    const userObjectId = new mongoose.Types.ObjectId(userId);



    const tickets = await Ticket.find({ userId:userObjectId });

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
