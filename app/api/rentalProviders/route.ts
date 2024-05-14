import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
    
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase
        .from('rentalProvider')
        .select('*');

    if (error) {
        // Return a NextResponse with a 500 status code and error message
        return new NextResponse(JSON.stringify({ error: 'Fehler beim Abrufen der Daten' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    return NextResponse.json(data);
}







