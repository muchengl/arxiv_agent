import { NextRequest, NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import OpenAI from 'openai';

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const cron = req.nextUrl.pathname.split('/')[3]
  console.log(cron)
  if (!cron) return new Response('No cron provided', { status: 400 })
  const response = await update(cron)
  return new NextResponse(JSON.stringify(response), {
    status: 200,
  })
}

async function update(interval: string) {
  const client = new OpenAI({
      apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });

  const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
  });

  console.log(`LLM response${chatCompletion.choices[0].message.content}`)

  return new Response(`${chatCompletion.choices[0].message.content}`);
}
