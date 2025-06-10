import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Typography, Paper, Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const API_TOKEN : string = (process.env.REACT_APP_OPEN_AI_TOKEN as string);

if (!API_TOKEN) {
  console.error('API_TOKEN is undefined. Check your .env file and restart the development server.');
}

type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
};

export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome to Engraving4All! How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemMessage = {
        role: 'system',
        
        content: 
        
       `
        System Instructions:
    
        You are an AI assistant integrated into the website of "Engraving4All." Your role is to answer user questions about the company's offerings and services in a concise, professional, and natural tone. Provide relevant details from the knowledge base, and when users ask for more information about a product, direct them to the store to explore examples. Limit responses to 1-3 sentences, staying neutral and clear.

        Key Guidelines for Responses:
        1. Provide concise answers limited to 1-3 sentences.
        2. Deliver relevant details from the knowledge base first
        3. Maintain a professional and approachable tone, avoiding excessive enthusiasm or emotional language.
        4. Encourage follow-up questions when applicable.

        Knowledge Base:

        1. **Company Overview:**
          - Name: Engraving4All
          - Services: Specializes in engraving, CNC carving, 3D printing, laser cutting, and glass etching.
          - Location: Orlando, Florida.
          - Equipment: Five lasers, two 3D printers, a plasma cutter, and a UV printer.

        2. **Product Offerings:**
          - **Custom Drinkware:** 
            - Personalized Stanley tumblers and YETI mugs.
            - Options include single-sided, double-sided, or wrap-around engravings.
            - Customers can add pictures, messages, or unique designs.
          - **Artisanal Cutting Boards:**
            - Engraved cutting boards suitable as gifts or decorative kitchen tools.
            - Personalization options include names, dates, or special messages.
          - **Unique Coasters and Keychains:**
            - Customizable with specific designs or text.
            - Suitable for gifts or events.
          - **Corporate Gifts and Signage:**
            - Engraving services for business cards, promotional items, and signage.
            - Materials include wood, metal, glass, and acrylic.
          - **Custom Handles for Tumblers:**
            - Durable 3D-printed handles compatible with 14 oz. and 20 oz. tumblers.
            - Available in various colors for added style and functionality.

        3. **Services Offered:**
          - Personalized Design Services:
            - Collaboration with customers to create custom designs for laser engraving and other services.
            - Suitable for corporate gifts, consumer products, and unique requests.
          - Laser Cutting:
            - Works with metals, plastics, wood, and more.
            - File formats accepted: .ai, .dxf, .dwg, .svg, .pdf. Contact for other formats.
            - Turnaround time varies by project complexity; estimates provided upon submission.

        4. **FAQs:**
          - **What materials can be cut with the laser cutting service?**
            - "We cut metals, plastics, wood, and more. Visit our store to explore how these materials are used in our products."
          - **What file formats are accepted for projects?**
            - "We accept .ai, .dxf, .dwg, .svg, and .pdf. If you have another format, just let us know."
          - **What is the turnaround time for a project?**
            - "Turnaround times vary based on complexity, but we’ll provide an estimate when you submit your project."

        5. **Customer Interaction Examples:**
          - User: "Do you do coasters?"
            Response: "Yes, we offer custom coasters that can be engraved with text or designs. You can see examples of our work in the store if you’d like to learn more."
          - User: "What types of drinkware can you customize?"
            Response: "We customize Stanley tumblers and YETI mugs with various engraving options, like single or double-sided designs. Check out our store for examples and ideas!"
          - User: "Can I get an engraved cutting board as a gift?"
            Response: "Yes, we can personalize cutting boards with names, dates, or messages. To see our available designs and options, visit our store."
        General Behavior:
        - Be neutral and professional in tone.
        - Avoid repeating phrases or over-explaining.
        - Only direct users to the store when their explicitly ask to see examples or what we offer 
        - If a customer explicitly asks for more information about custom jobs, direct them to the contact page
        `
          ,
      };

      // Make the API request with the system message included
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [systemMessage, ...messages, userMessage].map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.choices[0].message.content,
          timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, there was an error. Please try again.',
          timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleToggleChat}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 48,
          height: 48,
          backgroundColor: '#1976d2',
          color: '#fff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#1976d2', // Slightly lighter shade of the original color
          },
        }}
      >
        {isChatOpen ? <CloseIcon fontSize="small" /> : <ChatBubbleOutlineIcon fontSize="small" />}
      </IconButton>

      {isChatOpen && (
        <Paper
          elevation={4}
          sx={{
            position: 'fixed',
            bottom: 90,
            right: 40,
            width: 460,
            height: 600,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ padding: 1, backgroundColor: '#1976d2', color: '#fff', textAlign: 'center'}}>
            <Typography variant="subtitle1" fontWeight="bold" fontFamily="'Segoe UI', sans-serif">
              Contact Us
            </Typography>
            <Typography variant="caption" fontFamily="'Segoe UI', sans-serif">
              We'll respond as soon as we can.
            </Typography>
            <IconButton
                onClick={handleToggleChat}
                sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                color: '#fff',
                padding: '9px',
                fontSize: '50rem',
                }}
            >
            <ExpandMoreIcon fontSize="medium" />
        </IconButton>
          </Box>

          <Box sx={{ flex: 1, padding: 1, overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-start',
                  marginBottom: 1,
                  gap: 1,
                }}
              >
                {message.role === 'assistant' && (
                  <Avatar sx={{ bgcolor: '#9c27b0', color: '#fff', width: 32, height: 32, marginTop: '16px'}}>
                    <PersonIcon fontSize="small" />
                  </Avatar>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: message.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      padding: '12px 16px',
                      borderRadius: 8,
                      backgroundColor: message.role === 'user' ? '#1976d2' : '#FAF9EC',
                      color: message.role === 'user' ? '#fff' : '#444',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      minWidth: '12px',
                      maxWidth: '100%',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                      marginTop: '16px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        fontFamily: "'Segoe UI', sans-serif",
                        lineHeight: 1.5,
                        textAlign: 'left',
                      }}
                    >
                      {message.content}
                    </Typography>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#888',
                      fontSize: '0.75rem',
                      textAlign: message.role === 'user' ? 'right' : 'left',
                      marginTop: '4px',
                    }}
                  >
                    {message.role === 'assistant' ? `Engraving4All  ${message.timestamp}` : message.timestamp}
                  </Typography>
                </Box>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ padding: 1, borderTop: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
            <input
                type="text"
                placeholder="Enter your question or message here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '0.85rem',
                fontFamily: "'Segoe UI', sans-serif",
                padding: '8px',
                color: '#444',
                backgroundColor: 'transparent',
                }}
            />
            <IconButton type="submit" sx={{ color: '#1976d2' }} disabled={isLoading}>
                <SendIcon fontSize="small" />
            </IconButton>
          </Box>

        </Paper>
      )}
    </>
  );
};