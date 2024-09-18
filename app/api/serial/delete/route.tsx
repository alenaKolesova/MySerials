import dbConnect from '@/lib/dbConnect'
import Serial from '@/models/Serial'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    let serial = await request.json()

    await Serial.findByIdAndDelete(serial._id)
    let serials = await Serial.find()
    return NextResponse.json({
        'status': true
    })
}