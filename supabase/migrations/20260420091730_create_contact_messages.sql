/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required) - sender's full name
      - `email` (text, required) - sender's email address
      - `message` (text, required) - message content
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `contact_messages` table
    - Allow anonymous users to INSERT (public contact form)
    - No public SELECT policy (only admins should read messages)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
