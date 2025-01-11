import { query } from "../../../../lib/db";

export async function GET(request, { params }) {
  try {
    const { date } = params;
    const userId = 3; // Replace with actual logic for fetching user_id (e.g., from auth)

    // Validate date format (e.g., YYYY-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return new Response(
        JSON.stringify({ error: "Invalid date format. Use YYYY-MM-DD." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Query to fetch the user's notes for the specific date
    const QUERY = `
        SELECT * FROM public.note WHERE user_id = $1 AND DATE(created_at) = $2;
    `;

    // Execute the query
    const notes = await query(QUERY, [userId, date]);

    return new Response(JSON.stringify({ success: true, notes }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database error:", error.message);
    console.error("Stack trace:", error.stack);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
