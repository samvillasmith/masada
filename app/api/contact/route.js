import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log('API route hit'); // Add logging
  console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY); // Check if key is loaded
  
  try {
    const { name, email, phone, company, service, message } = await request.json();
    
    console.log('Form data received:', { name, email, service }); // Log what we got

    const emailContent = `
New Security Consultation Request

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Message:
${message || 'No message provided'}
    `;

    console.log('Attempting to send email...'); // Before send
    
    const data = await resend.emails.send({
      from: 'Masada Systems <onboarding@resend.dev>',
      to: ['svillasmith2@gmail.com'],
      subject: `New Consultation Request from ${name}`,
      text: emailContent,
    });

    console.log('Resend response:', data); // See what Resend returns

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Full email error:', error); // More detailed error
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    return Response.json({ 
      error: 'Failed to send email',
      details: error.message 
    }, { status: 500 });
  }
}