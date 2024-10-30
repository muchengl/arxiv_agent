# arXiv Sentinel 🤖
This is an LLM Agent system, which can be deployed in a [Vercel](https://vercel.com/) serverless function. It can scan arXiv, summarizes papers, and sends you report emails.


Let LLM agent help you automatically configure this robot!
```shell
python tool.py
```

## Manual Configuration
NodeJS Env
```shell
nvm install v22.11.0
nvm use v22.11.0
```

Deploy:
```shell
 vercel deploy --prod
```

Test Locally:
```shell
pnpm build
pnpm dev

curl http://localhost:3000/api/cron/openai
```

Env var setup:
```shell
vercel env pull

# modify .env.local file
```


