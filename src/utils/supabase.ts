import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PULISHABLE_DEFAULT_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);