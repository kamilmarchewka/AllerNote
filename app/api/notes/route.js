import { query } from "../../../lib/db";

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
