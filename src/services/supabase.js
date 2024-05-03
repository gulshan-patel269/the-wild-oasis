import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dlnqlnchhqxvqlqoazph.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsbnFsbmNoaHF4dnFscW9henBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MDMyOTIsImV4cCI6MjAyNzI3OTI5Mn0.0Y7teL2bxyCNmKwJcLEa_1Yi3wMHJzo6zAl5lb2mkOE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
