import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://akcenftojeymnkukbftu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrY2VuZnRvamV5bW5rdWtiZnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MDAzMDQsImV4cCI6MjA1MjQ3NjMwNH0.FwLfoE1g2vptgJ471ki3LlzU2mQXP28R0pQiEWwgY0k'
)
