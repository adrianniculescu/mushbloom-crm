import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Mushbloom'

interface NewLeadProps {
  name?: string
  email?: string
  service_interest?: string
  budget?: string
  message?: string
}

const NewLeadNotificationEmail = ({
  name,
  email,
  service_interest,
  budget,
  message,
}: NewLeadProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New lead from {name || 'someone'} via {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New lead received</Heading>
        <Text style={text}>
          You have a new inquiry from the {SITE_NAME} contact form.
        </Text>

        <Section style={card}>
          <Text style={row}><strong>Name:</strong> {name || '—'}</Text>
          <Text style={row}><strong>Email:</strong> {email || '—'}</Text>
          <Text style={row}><strong>Service:</strong> {service_interest || '—'}</Text>
          <Text style={row}><strong>Budget:</strong> {budget || '—'}</Text>
        </Section>

        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Text style={messageBox}>{message || '—'}</Text>

        <Hr style={hr} />
        <Text style={footer}>
          Sent automatically by {SITE_NAME}. Reply directly to the lead at {email || 'their email above'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewLeadNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New lead: ${data?.name || 'Unknown'}${data?.service_interest ? ' — ' + data.service_interest : ''}`,
  displayName: 'New lead notification',
  to: 'office@mushbloom.co.uk',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    service_interest: 'AI Automation',
    budget: '£15,000 – £50,000',
    message: 'We are interested in deploying AI agents across our support team.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#334155', lineHeight: '1.5', margin: '0 0 16px' }
const card = { backgroundColor: '#f8fafc', borderRadius: '8px', padding: '16px 20px', border: '1px solid #e2e8f0' }
const row = { fontSize: '14px', color: '#0f172a', margin: '4px 0' }
const hr = { borderColor: '#e2e8f0', margin: '24px 0' }
const label = { fontSize: '12px', textTransform: 'uppercase' as const, color: '#64748b', margin: '0 0 6px', letterSpacing: '0.05em' }
const messageBox = { fontSize: '14px', color: '#0f172a', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, margin: '0 0 16px' }
const footer = { fontSize: '12px', color: '#94a3b8', margin: '16px 0 0' }
