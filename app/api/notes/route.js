import { query } from "../../../lib/db";

export async function POST(request, { params }) {
  try {
    const { date } = params; // Extract date from URL params
    // const { note_content } = await request.json(); // Parse request body
    // const userId = 3; // Replace this with logic to fetch the authenticated user ID

    // Validate the input
    // if (!note_content || !date) {
    //   return new Response(
    //     JSON.stringify({
    //       error: "Missing required fields: note_content or date.",
    //     }),
    //     {
    //       status: 400,
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    // }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return new Response(
        JSON.stringify({ error: "Invalid date format. Use YYYY-MM-DD." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // SQL query for inserting a new note
    const INSERT_NOTE = `
      INSERT INTO public.note (user_id, content)
      VALUES (3, 'kurwa maccccc')
      RETURNING *;
    `;

    // Execute the query
    const { rows } = await query(INSERT_NOTE);

    // Return the newly created note
    return new Response(JSON.stringify({ success: true, note: rows[0] }), {
      status: 201, // Use 201 for successful resource creation
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

export async function GET() {
  try {
    const notes = await query("SELECT * FROM note;");
    return new Response(JSON.stringify(notes), {
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
