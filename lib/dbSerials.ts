import dbConnect from '@/lib/dbConnect'
import Serial from '@/models/Serial'

export default async function dbSerials(){
    await dbConnect()
    let serials = await Serial.find()
    return(serials)

}