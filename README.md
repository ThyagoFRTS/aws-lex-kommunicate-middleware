# Kommunicate AWS-Lex Middleware

This middleware serves as a bridge between Kommunicate, a customer support platform, and AWS Lex V2, a natural language understanding service. The project addresses the limitation of Kommunicate's integration with AWS Lex, which lacks support for other non default Kommunicate language list, like Brazilian Portuguese language configuration.

## Purpose

Kommunicate offers integration with AWS Lex for conversational AI capabilities. However, the native integration does not cover Brazilian Portuguese language settings. This middleware fills the gap by enabling seamless communication between Kommunicate and AWS Lex for Brazilian Portuguese and other languages interactions.

## Technologies Used

- Next.js
- TypeScript

## Setup

### Prerequisites

1. **AWS Lex Bot**: Create an AWS Lex bot and obtain necessary information.
2. **API Credentials**: Generate API credentials with appropriate permissions.

### Environment Variables

Ensure you have the following environment variables set. Refer to the `.env.example` file for a template.

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `AWS_BOT_REGION_SERVER`: The AWS region where your Lex bot is deployed.
- `LEX_BOT_ID`: The unique identifier for your AWS Lex bot.
- `AWS_BOT_ALIAS_ID`: AWS bot alias id.
- `AWS_BOT_LOCALE_ID`: The language that bot was builded. See [aws lex supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)

For newer versions of the application, the environment variables starting with `AWS_IAM_` may no longer be required.

### Installation

1. Clone the repository.

```bash
git clone https://github.com/ThyagoFRTS/aws-lex-kommunicate-middleware.git
```

2. Install dependencies

```bash
npm install
```

### Usage

Start the middleware server.

```bash
npm run dev
```

By default, the server runs on port 3000. You can configure the port using the PORT environment variable.

### Integration with Kommunicate

1. In your Kommunicate dashboard, navigate to Bot Integration settings.
2. Choose "Custom Bot" and provide the webhook URL pointing to your middleware server.
3. Configure other settings as per your requirements.
4. Save the configuration.
