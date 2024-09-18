import dbSerials from "@/lib/dbSerials"
import Link from "next/link"

export default async () => {
    let serials = await dbSerials()
    return (
        <div>
            <h1>Библиотека сериалов</h1>
            <ul>
                {
                    serials.map((serial, key) => {
                        return (
                            <li key={key}>
                                <Link href={'/show/' + serial._id}> {serial.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}