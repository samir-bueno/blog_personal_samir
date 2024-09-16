import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient("https://ommcbzdzspgafltwqtpd.supabase.co/", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tbWNiemR6c3BnYWZsdHdxdHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ4OTYsImV4cCI6MjA0MTQ4MDg5Nn0.SQxDZqPYOl1tnMcAAzKIgq1r84ME-rXbSVMUmcsqItk"
);

export default supabase;
 