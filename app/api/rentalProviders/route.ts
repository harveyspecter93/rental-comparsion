
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
   
    const { data, error } = await supabase
        .from('rentalProvider')
        .select('*');

    if (error) {
        return { status: 500, body: { error: 'Fehler beim Abrufen der Daten' } };
    }

    return NextResponse.json(data);
}