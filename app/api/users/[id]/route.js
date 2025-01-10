import { query } from "../../../../lib/db";

export async function GET(request, { params }) {
  const { id } = params; // Extract `id` from the URL
  try {
    // Query to select the user with dynamic string id
    const user = await query("SELECT * FROM users WHERE id = $1;", [id]);

    if (user.length === 0) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(user[0]), {
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
