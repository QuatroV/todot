import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://diymtjheemqytybbdxgl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDc2Mzc1NCwiZXhwIjoxOTQ2MzM5NzU0fQ.6MMCfR64JaxxmQ0NYPtQv2pZM39mvexYulXTq-CC7mE"
);

export default supabase;
