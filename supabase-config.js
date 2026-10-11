
const SUPABASE_URL = "https://mevtmjynqbhrukggyonq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_IO7gPvdPC7T5eesvA4GAEA_i7b5u4t4";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
