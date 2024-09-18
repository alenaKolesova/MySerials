import dbConnect from '@/lib/dbConnect'
import Serial from '@/models/Serial'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    await dbConnect()
    let serial = await request.json()
    let foundSerials = await Serial.findById(serial.id)
    return NextResponse.json(foundSerials)
}
