const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const contentTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(function(req, res) {
  
// Handle contact form submission
  if (req.url === '/submit-contact' && req.method === 'POST') {
    let body = '';
    
    req.on('data', function(chunk) {
      body += chunk.toString();
    });
    
    req.on('end', function() {
      // Parse the form data
      const formData = new URLSearchParams(body);
      
      // Capture ALL form fields dynamically
      const contactInfo = {};
      for (const [key, value] of formData.entries()) {
        contactInfo[key] = value;
      }
      
      // SERVER-SIDE VALIDATION
      const errors = [];
      
      // Validate name
      if (!contactInfo.name || contactInfo.name.trim() === '') {
        errors.push('Name is required');
      }
      
      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!contactInfo.email || contactInfo.email.trim() === '') {
        errors.push('Email is required');
      } else if (!emailPattern.test(contactInfo.email)) {
        errors.push('Email format is invalid');
      }
      
      // Validate phone (if provided)
      if (contactInfo.phone && contactInfo.phone.trim() !== '') {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(contactInfo.phone.replace(/\D/g, ''))) {
          errors.push('Phone must be 10 digits');
        }
      }
      
      // Validate country
      if (!contactInfo.country || contactInfo.country === '') {
        errors.push('Country is required');
      }
      
      // Validate topic
      if (!contactInfo.topic || contactInfo.topic === '') {
        errors.push('Topic is required');
      }
      
      // Validate message
      if (!contactInfo.message || contactInfo.message.trim() === '') {
        errors.push('Message is required');
      } else if (contactInfo.message.length > 500) {
        errors.push('Message must not exceed 500 characters');
      }
      
      // Check if there are validation errors
      if (errors.length > 0) {
        // Return validation errors
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          success: false,
          errors: errors
        }));
        
        console.log('Form submission failed validation:');
        console.log(errors);
        return;
      }
      
      // Add timestamp if validation passed
      contactInfo.timestamp = new Date().toISOString();
      
      // Log successful submission
      console.log('Contact form submitted successfully:');
      console.log(contactInfo);
      
      // Save to file
      fs.appendFile('contact-submissions.txt', 
        JSON.stringify(contactInfo, null, 2) + '\n---\n', 
        function(err) {
          if (err) console.log('Error saving:', err);
        }
      );
      
      // Return success with validated data
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        data: contactInfo
      }));
    });
    
    return;
  }
  
  // Serve files (existing code)
  let filePath = '.' + req.url;
  
  if (filePath === './') {
    filePath = './index.html';
  }
  
  const extname = path.extname(filePath);
  const contentType = contentTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, function(err, content) {
    if (err) {
      if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('Page not found');
      } else {
        res.statusCode = 500;
        res.end('Server error: ' + err.code);
      }
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(content);
    }
  });
});

server.listen(PORT, function() {
  console.log('Server running at http://localhost:3000/');
});

