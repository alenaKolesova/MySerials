import dbConnect from '@/lib/dbConnect'
import Serial from '@/models/Serial'
import mongoose from 'mongoose'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    
    const url = new URL(request.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const id = searchParams.get('id')

    await dbConnect()
    let serials = []
    let foundSerials = await Serial.findById(id)
    serials.push(foundSerials)
    return NextResponse.json(serials)
}

export async function POST(request: Request) {
    let serial = await request.json()

    if (!serial._id) serial._id = new mongoose.Types.ObjectId()

    await Serial.findByIdAndUpdate(serial._id, serial, { upsert: true })
    return NextResponse.json({
        'status': true
    })
}
