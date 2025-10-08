const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
const compression = require('compression');
const app = express();
const PORT = 9888;

// Paystack Configuration
const PAYSTACK_SECRET_KEY = 'sk_test_1859e1310eZe77b484847cd86364';
const PAYSTACK_PUBLIC_KEY = 'pk_test_ed183c6cKb4bZZz68a74';

// Middleware
app.use(compression()); // Enable gzip compression
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, {
    maxAge: '1d', // Cache static files for 1 day
    etag: true
}));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        // Allow only specific file types
        const allowedTypes = /pdf|doc|docx/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only PDF, DOC, and DOCX files are allowed!'));
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Database simulation (in-memory storage)
let applications = [];
let bookings = [];
let contacts = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/travel', (req, res) => {
    res.sendFile(path.join(__dirname, 'travel.html'));
});

app.get('/recruitment', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// CV Upload endpoint
app.post('/api/upload-cv', upload.single('cv'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ 
                success: false, 
                message: 'No file uploaded' 
            });
        }

        const application = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            field: req.body.field,
            cvFile: req.file.filename,
            timestamp: new Date().toISOString(),
            status: 'pending'
        };

        applications.push(application);

        // Log application
        console.log('📄 New CV Application:', {
            name: application.name,
            email: application.email,
            field: application.field,
            file: application.cvFile
        });

        res.json({
            success: true,
            message: 'CV uploaded successfully! We\'ll contact you within 24 hours.',
            applicationId: application.id
        });

    } catch (error) {
        console.error('❌ CV Upload Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error uploading CV'
        });
    }
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    try {
        const contact = {
            id: Date.now(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            interest: req.body.interest,
            message: req.body.message,
            timestamp: new Date().toISOString()
        };

        contacts.push(contact);

        // Log contact
        console.log('📧 New Contact Message:', {
            name: `${contact.firstName} ${contact.lastName}`,
            email: contact.email,
            interest: contact.interest
        });

        res.json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('❌ Contact Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error sending message'
        });
    }
});

// Booking endpoint
app.post('/api/book-tour', (req, res) => {
    try {
        const booking = {
            id: Date.now(),
            tour: req.body.tour,
            travelers: parseInt(req.body.travelers),
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            specialRequests: req.body.specialRequests,
            timestamp: new Date().toISOString(),
            status: 'pending'
        };

        bookings.push(booking);

        // Log booking
        console.log('🎫 New Tour Booking:', {
            tour: booking.tour,
            travelers: booking.travelers,
            startDate: booking.startDate,
            endDate: booking.endDate
        });

        res.json({
            success: true,
            message: 'Booking request submitted successfully!',
            bookingId: booking.id
        });

    } catch (error) {
        console.error('❌ Booking Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting booking'
        });
    }
});

// Search endpoint
app.get('/api/search', (req, res) => {
    try {
        const query = req.query.q.toLowerCase();
        
        // Mock search results
        const destinations = [
            { name: 'Malaysia', type: 'destination', image: 'Web images/Malaysia_Arch Print_12.jpg' },
            { name: 'Sri Lanka', type: 'destination', image: 'Web images/Sri Lanka_Arch Print_52-topaz-low resolution-4x.jpg' },
            { name: 'Thailand', type: 'destination', image: 'Web images/IMG_5181.jpg' },
            { name: 'Philippines', type: 'destination', image: 'Web images/IMG_0728-Pano.jpg' },
        { name: 'Vietnam', type: 'destination', image: 'Web images/IMG_1517.jpg' },
        { name: 'Indonesia', type: 'destination', image: 'Web images/IMG_3319.jpg' }
        ];

        const tours = [
            { name: 'Malaysia Classic – 12 Day Tour', type: 'tour', destination: 'Malaysia' },
            { name: 'Sri Lanka Classic – 12 Day Tour', type: 'tour', destination: 'Sri Lanka' },
            { name: 'Thailand Classic – 14 Day Tour', type: 'tour', destination: 'Thailand' }
        ];

        const results = [
            ...destinations.filter(d => d.name.toLowerCase().includes(query)),
            ...tours.filter(t => t.name.toLowerCase().includes(query) || t.destination.toLowerCase().includes(query))
        ];

        res.json({
            success: true,
            results: results.slice(0, 10)
        });

    } catch (error) {
        console.error('❌ Search Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error performing search'
        });
    }
});

// Get applications (admin endpoint)
app.get('/api/applications', (req, res) => {
    try {
        res.json({
            success: true,
            applications: applications
        });
    } catch (error) {
        console.error('❌ Get Applications Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving applications'
        });
    }
});

// Get bookings (admin endpoint)
app.get('/api/bookings', (req, res) => {
    try {
        res.json({
            success: true,
            bookings: bookings
        });
    } catch (error) {
        console.error('❌ Get Bookings Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving bookings'
        });
    }
});

// Get contacts (admin endpoint)
app.get('/api/contacts', (req, res) => {
    try {
        res.json({
            success: true,
            contacts: contacts
        });
    } catch (error) {
        console.error('❌ Get Contacts Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving contacts'
        });
    }
});

// Update application status
app.put('/api/applications/:id/status', (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const application = applications.find(app => app.id === parseInt(id));
        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found'
            });
        }

        application.status = status;
        application.updatedAt = new Date().toISOString();

        res.json({
            success: true,
            message: 'Application status updated',
            application
        });

    } catch (error) {
        console.error('❌ Update Application Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating application'
        });
    }
});

// Update booking status
app.put('/api/bookings/:id/status', (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const booking = bookings.find(book => book.id === parseInt(id));
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found'
            });
        }

        booking.status = status;
        booking.updatedAt = new Date().toISOString();

        res.json({
            success: true,
            message: 'Booking status updated',
            booking
        });

    } catch (error) {
        console.error('❌ Update Booking Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating booking'
        });
    }
});

// Paystack Payment Endpoints
app.post('/api/payment/initialize', async (req, res) => {
    try {
        const { email, amount, reference, payment_for } = req.body;
        
        const paystackData = {
            email: email,
            amount: amount * 100, // Convert to kobo
            reference: reference,
            callback_url: `${req.protocol}://${req.get('host')}/api/payment/verify/${reference}`,
            metadata: {
                payment_for: payment_for
            }
        };

        const response = await axios.post('https://api.paystack.co/transaction/initialize', paystackData, {
            headers: {
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('💳 Payment Initialized:', {
            email: email,
            amount: amount,
            reference: reference,
            payment_for: payment_for
        });

        res.json({
            success: true,
            data: response.data.data
        });

    } catch (error) {
        console.error('❌ Payment Initialization Error:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'Error initializing payment'
        });
    }
});

app.get('/api/payment/verify/:reference', async (req, res) => {
    try {
        const { reference } = req.params;
        
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
            }
        });

        console.log('🔍 Verifying payment reference:', reference);

        if (response.data.data.status === 'success') {
            // Update booking status to paid
            const booking = bookings.find(b => b.reference === reference);
            if (booking) {
                booking.status = 'paid';
                booking.paymentVerified = true;
            }

            console.log('✅ Payment Verified Successfully');
            
            res.json({
                success: true,
                data: response.data.data
            });
        } else {
            res.json({
                success: false,
                message: 'Payment verification failed'
            });
        }

    } catch (error) {
        console.error('❌ Payment Verification Error:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'Error verifying payment'
        });
    }
});

app.post('/api/payment/webhook', (req, res) => {
    try {
        const event = req.body;
        
        if (event.event === 'charge.success') {
            const transaction = event.data;
            const reference = transaction.reference;
            
            // Update booking status
            const booking = bookings.find(b => b.reference === reference);
            if (booking) {
                booking.status = 'paid';
                booking.paymentVerified = true;
                console.log('💰 Payment completed for booking:', booking.id);
            }
        }
        
        res.status(200).json({ received: true });
        
    } catch (error) {
        console.error('❌ Webhook Error:', error);
        res.status(500).json({ error: 'Webhook processing failed' });
    }
});

// Analytics endpoint
app.get('/api/analytics', (req, res) => {
    try {
        const stats = {
            totalApplications: applications.length,
            totalBookings: bookings.length,
            totalContacts: contacts.length,
            pendingApplications: applications.filter(app => app.status === 'pending').length,
            pendingBookings: bookings.filter(book => book.status === 'pending').length,
            recentApplications: applications.slice(-5),
            recentBookings: bookings.slice(-5),
            recentContacts: contacts.slice(-5)
        };

        res.json({
            success: true,
            stats
        });

    } catch (error) {
        console.error('❌ Analytics Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving analytics'
        });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('❌ Server Error:', error);
    
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File too large. Maximum size is 5MB.'
            });
        }
    }
    
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 UBUNTUVoyage-Recruitment & Travel Agency server running on http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🌐 Open your browser and navigate to: http://localhost:${PORT}`);
    console.log(`⏹️  Press Ctrl+C to stop the server`);
    console.log(`\n📊 Available endpoints:`);
    console.log(`   POST /api/upload-cv - Upload CV application`);
    console.log(`   POST /api/contact - Submit contact form`);
    console.log(`   POST /api/book-tour - Submit tour booking`);
    console.log(`   GET  /api/search - Search destinations and tours`);
    console.log(`   POST /api/payment/initialize - Initialize Paystack payment`);
    console.log(`   GET  /api/payment/verify/:reference - Verify payment`);
    console.log(`   POST /api/payment/webhook - Paystack webhook`);
    console.log(`   GET  /api/applications - Get all applications (admin)`);
    console.log(`   GET  /api/bookings - Get all bookings (admin)`);
    console.log(`   GET  /api/contacts - Get all contacts (admin)`);
    console.log(`   GET  /api/analytics - Get website analytics`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down server...');
    process.exit(0);
});

module.exports = app; 