<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sai Medisales - Wholesale & Retail Veterinary Medicine Distributors</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Light blue-gray background */
        }
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #e2e8f0;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #34d399; /* Emerald-500 for scrollbar */
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #059669; /* Emerald-600 for scrollbar hover */
        }

        /* Abstract pattern for Hero Section */
        .hero-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM12 34v-4h-2v4H6v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4H6v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
    </style>
</head>
<body class="text-gray-800">

    <!-- Header Section -->
    <header class="bg-white shadow-md py-4 px-6 md:px-12 lg:px-24 rounded-b-lg">
        <nav class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="text-2xl font-bold text-emerald-600 hover:text-emerald-800 transition duration-300 ease-in-out">
                Sai Medisales
            </a>
            <ul class="hidden md:flex space-x-6">
                <li><a href="index.html#home" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Home</a></li>
                <li><a href="index.html#offerings" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Our Offerings</a></li>
                <li><a href="index.html#about" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">About Us</a></li>
                <li><a href="contact_us.html" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Contact Us</a></li>
                <li><a href="contact.html" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Queries</a></li>
            </ul>
            <!-- Mobile Menu Button -->
            <button class="md:hidden text-gray-600 hover:text-emerald-600 focus:outline-none" aria-label="Toggle navigation">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="bg-gradient-to-r from-emerald-600 to-cyan-700 text-white py-20 md:py-32 text-center rounded-lg m-4 shadow-xl hero-pattern">
        <div class="container mx-auto px-6">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                Sai Medisales: Your Trusted Partner in Veterinary Care
            </h1>
            <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Wholesale & Retail Distributors of Quality Veterinary Medicines & Animal Care Products Since 1999.
            </p>
            <a href="#offerings" class="bg-white text-emerald-700 hover:bg-emerald-100 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                Explore Our Range
            </a>
        </div>
    </section>

    <!-- Our Offerings Section -->
    <section id="offerings" class="py-16 md:py-24 container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800">Our Comprehensive Offerings</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <!-- Offering Card 1: Large Farm Animals -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="https://placehold.co/600x400/10b981/ffffff?text=Cattle+Health" alt="Large Farm Animals" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900">Large Farm Animal Medicines</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        Comprehensive range of medicines and health solutions for cattle, horses, and other large farm animals.
                    </p>
                </div>
            </div>

            <!-- Offering Card 2: Dairy Nutrition -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="https://placehold.co/600x400/06b6d4/ffffff?text=Dairy+Cow+Nutrition" alt="Dairy Nutrition" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900">Dairy Nutrition & Supplements</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        High-quality nutritional supplements and feed additives to boost dairy animal health and productivity.
                    </p>
                </div>
            </div>

            <!-- Offering Card 3: Poultry Medicines & Vaccines -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="https://placehold.co/600x400/ef4444/ffffff?text=Healthy+Poultry" alt="Poultry Medicines & Vaccines" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900">Poultry Medicines & Vaccines</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        Essential medicines and vaccines for healthy poultry farming, ensuring disease prevention.
                    </p>
                </div>
            </div>

            <!-- Offering Card 4: Pet Food -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="https://placehold.co/600x400/f97316/ffffff?text=Dog+Food+Bowl" alt="Pet Food" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900">Premium Pet Food</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        Nutritious and delicious food options for dogs, cats, and other beloved pets.
                    </p>
                </div>
            </div>

            <!-- Offering Card 5: Pet Medicines -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="https://placehold.co/600x400/8b5cf6/ffffff?text=Pet+Pills" alt="Pet Medicines" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900">Pet Medicines & Health Care</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        A wide array of medicines and health products to keep your pets healthy and happy.
                    </p>
                </div>
            </div>

            <!-- Offering Card 6: Pet Accessories & Care -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img src="https://placehold.co/600x400/ec4899/ffffff?text=Pet+Toys" alt="Pet Accessories" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900">Pet Accessories & Animal Care Items</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        Everything from grooming tools to toys and other essential accessories for animal well-being.
                    </p>
                </div>
            </div>

        </div>
        <!-- Single "Inquire Now" button for the entire section -->
        <div class="text-center mt-12">
            <a href="contact.html" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                Inquire About Our Offerings
            </a>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="bg-emerald-50 py-16 md:py-24 rounded-lg m-4 shadow-md">
        <div class="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
            <div class="md:w-1/2">
                <img src="https://placehold.co/600x400/34d399/ffffff?text=Veterinary+Clinic" alt="Sai Medisales Team" class="rounded-xl shadow-lg w-full h-auto">
            </div>
            <div class="md:w-1/2 text-center md:text-left">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">About Sai Medisales</h2>
                <p class="text-gray-700 text-lg leading-relaxed mb-4">
                    Sai Medisales has been a trusted name in veterinary medicine distribution since 1999. We operate as both wholesale and retail distributors, committed to providing high-quality products for the health and well-being of all animals.
                </p>
                <p class="text-gray-700 text-lg leading-relaxed mb-4">
                    Our extensive range covers the needs of large farm animals, dairy nutrition, poultry medicines & vaccines, pet food, pet medicines, pet accessories, and various other items crucial for animal care & treatment. We pride ourselves on our deep understanding of animal health and our dedication to serving our customers.
                </p>
                <p class="text-700 text-lg leading-relaxed">
                    With over two decades of experience, Sai Medisales is your reliable partner for all veterinary pharmaceutical and animal care requirements.
                </p>
            </div>
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-8 px-6 md:px-12 lg:px-24 rounded-t-lg">
        <div class="container mx-auto text-center">
            <p class="text-sm">&copy; 2025 Sai Medisales. All rights reserved.</p>
            <div class="flex justify-center space-x-4 mt-4">
                <a href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Terms of Service</a>
                <!-- Admin Login Button -->
                <a href="admin_login.html" class="text-gray-400 hover:text-white transition duration-300 ease-in-out font-medium">Admin Login</a>
            </div>
        </div>
    </footer>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Queries - Sai Medisales</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Light blue-gray background */
        }
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #e2e8f0;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #34d399; /* Emerald-500 for scrollbar */
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #059669; /* Emerald-600 for scrollbar hover */
        }
    </style>
</head>
<body class="text-gray-800">

    <!-- Header Section -->
    <header class="bg-white shadow-md py-4 px-6 md:px-12 lg:px-24 rounded-b-lg">
        <nav class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="text-2xl font-bold text-emerald-600 hover:text-emerald-800 transition duration-300 ease-in-out">
                Sai Medisales
            </a>
            <ul class="hidden md:flex space-x-6">
                <li><a href="index.html#home" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Home</a></li>
                <li><a href="index.html#offerings" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Our Offerings</a></li>
                <li><a href="index.html#about" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">About Us</a></li>
                <li><a href="contact_us.html" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Contact Us</a></li>
                <li><a href="contact.html" class="text-emerald-600 font-medium transition duration-300 ease-in-out">Queries</a></li>
            </ul>
            <!-- Mobile Menu Button (Optional: Add JavaScript for toggle functionality) -->
            <button class="md:hidden text-gray-600 hover:text-emerald-600 focus:outline-none" aria-label="Toggle navigation">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
    </header>

    <!-- Queries Section (Main Content of this page) -->
    <section id="contact" class="py-16 md:py-24 container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800">Send Your Queries to Sai Medisales</h2>
        <div class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <p class="text-center text-gray-600 mb-6">
                Have a question about our products, need a specific medicine, or want to discuss a bulk order? Fill out the form below, and our team will get back to you promptly. You can also attach relevant files.
            </p>
            <form action="#" method="POST" enctype="multipart/form-data" class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" id="name" name="name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="e.g., John Doe" required>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input type="email" id="email" name="email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="e.g., your.email@example.com" required>
                </div>
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="e.g., +91 9876543210" required>
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" id="subject" name="subject" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="e.g., Inquiry about Poultry Vaccines" required>
                </div>
                <div>
                    <label for="attachments" class="block text-sm font-medium text-gray-700 mb-1">
                        Attach Files (Optional): You can add an image or any file related to your problem.
                    </label>
                    <input type="file" id="attachments" name="attachments[]" multiple class="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-emerald-50 file:text-emerald-700
                        hover:file:bg-emerald-100"
                    >
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Query</label>
                    <textarea id="message" name="message" rows="6" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="Please describe your query in detail..." required></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transform hover:scale-105 transition duration-300 ease-in-out">
                        Send Query
                    </button>
                </div>
            </form>
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-8 px-6 md:px-12 lg:px-24 rounded-t-lg">
        <div class="container mx-auto text-center">
            <p class="text-sm">&copy; 2025 Sai Medisales. All rights reserved.</p>
            <div class="flex justify-center space-x-4 mt-4">
                <a href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Terms of Service</a>
                <!-- Admin Login Button -->
                <a href="admin_login.html" class="text-gray-400 hover:text-white transition duration-300 ease-in-out font-medium">Admin Login</a>
            </div>
        </div>
    </footer>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Sai Medisales</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Light blue-gray background */
            min-height: 100vh; /* Ensure full height for consistent footer placement */
            display: flex;
            flex-direction: column;
        }
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #e2e8f0;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #34d399; /* Emerald-500 for scrollbar */
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #059669; /* Emerald-600 for scrollbar hover */
        }
        main {
            flex-grow: 1; /* Allows main content to take available space */
        }
    </style>
</head>
<body class="text-gray-800">

    <!-- Header Section -->
    <header class="bg-white shadow-md py-4 px-6 md:px-12 lg:px-24 rounded-b-lg">
        <nav class="container mx-auto flex justify-between items-center">
            <a href="index.html" class="text-2xl font-bold text-emerald-600 hover:text-emerald-800 transition duration-300 ease-in-out">
                Sai Medisales
            </a>
            <ul class="hidden md:flex space-x-6">
                <li><a href="index.html#home" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Home</a></li>
                <li><a href="index.html#offerings" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Our Offerings</a></li>
                <li><a href="index.html#about" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">About Us</a></li>
                <li><a href="contact_us.html" class="text-emerald-600 font-medium transition duration-300 ease-in-out">Contact Us</a></li>
                <li><a href="contact.html" class="text-gray-600 hover:text-emerald-600 font-medium transition duration-300 ease-in-out">Queries</a></li>
            </ul>
            <!-- Mobile Menu Button (Optional: Add JavaScript for toggle functionality) -->
            <button class="md:hidden text-gray-600 hover:text-emerald-600 focus:outline-none" aria-label="Toggle navigation">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </nav>
    </header>

    <main class="py-16 md:py-24 container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800">Contact Sai Medisales</h2>
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Reach Out To Us</h3>
                    <p class="text-gray-700 mb-2">
                        <strong>Address:</strong> Namokar Heights, Mahalaxmi Nagar, Near Sahyog Society, Shriram Nagar Chowk, Bhigwan Rd, Baramati, Pune, Maharashtra - 413102
                    </p>
                    <p class="text-gray-700 mb-2">
                        <strong>Phone:</strong> <a href="tel:+919822514631" class="text-emerald-600 hover:underline">+91 9822514631</a>
                    </p>
                    <p class="text-gray-700 mb-2">
                        <strong>Email:</strong> <a href="mailto:saimedisales2013@gmail.com" class="text-emerald-600 hover:underline">saimedisales2013@gmail.com</a>
                    </p>
                    <p class="text-gray-700 mb-4">
                        Feel free to contact us during our business hours for any inquiries, product information, or assistance.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                    <p class="text-gray-700"><strong>Monday - Saturday:</strong> 10:00 A.M. - 03:00 P.M. & 05:00 P.M. - 09:00 P.M.</p>
                    <p class="text-gray-700"><strong>Sunday:</strong> Closed</p>
                    <p class="text-gray-700 mt-4">
                        For specific product queries or bulk orders, please visit our <a href="contact.html" class="text-emerald-600 hover:underline font-medium">Queries page</a>.
                    </p>
                </div>
            </div>

            <!-- How to Reach Us Section with Map Embed and Get Directions Button -->
            <div class="mt-8">
                <h3 class="text-2xl font-semibold text-gray-900 mb-4 text-center">How to Reach Us</h3>
                <div class="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?q=Namokar+Heights,+Bhigwan+Rd,+Sahyog+Society,+Baramati,+Maharashtra+413102&output=embed&zoom=20"
                        width="100%"
                        height="450"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        class="w-full h-full"
                    ></iframe>
                </div>
                <p class="text-center text-gray-600 text-sm mt-4">
                    The map above shows our exact location.
                </p>
                <div class="text-center mt-6">
                    <a href="https://maps.app.goo.gl/BzspMAiXPDNi8yUN7" target="_blank" rel="noopener noreferrer" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        Get Directions
                    </a>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-8 px-6 md:px-12 lg:px-24 rounded-t-lg mt-auto">
        <div class="container mx-auto text-center">
            <p class="text-sm">&copy; 2025 Sai Medisales. All rights reserved.</p>
            <div class="flex justify-center space-x-4 mt-4">
                <a href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Privacy Policy</a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300 ease-in-out">Terms of Service</a>
                <!-- Admin Login Button -->
                <a href="admin_login.html" class="text-gray-400 hover:text-white transition duration-300 ease-in-out font-medium">Admin Login</a>
            </div>
        </div>
    </footer>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Sai Medisales</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8fafc; /* Light blue-gray background */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Full viewport height */
            margin: 0;
        }
        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #e2e8f0;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #34d399; /* Emerald-500 for scrollbar */
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #059669; /* Emerald-600 for scrollbar hover */
        }
    </style>
</head>
<body class="text-gray-800">

    <div class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold text-center mb-8 text-emerald-800">Admin Login</h2>
        <form id="adminLoginForm" action="#" method="POST" class="space-y-6">
            <div>
                <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input type="text" id="username" name="username" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="Enter your username" required>
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" id="password" name="password" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" placeholder="Enter your password" required>
            </div>
            <div id="loginMessage" class="text-center text-red-600 text-sm hidden"></div>
            <div class="text-center">
                <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transform hover:scale-105 transition duration-300 ease-in-out">
                    Login
                </button>
            </div>
        </form>
    </div>

    <script>
        // This is a client-side script for demonstration.
        // Actual authentication MUST be handled on a secure backend server.
        document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('loginMessage');

            // --- IMPORTANT: This is for demonstration ONLY. ---
            // In a real application, you would send these credentials to a server
            // for validation and receive a response.
            // DO NOT hardcode usernames/passwords in client-side JavaScript for production.
            if (username === 'admin' && password === 'password123') {
                loginMessage.textContent = 'Login successful! (Redirecting...)';
                loginMessage.classList.remove('text-red-600', 'hidden');
                loginMessage.classList.add('text-green-600');
                // In a real app, you'd redirect to an admin dashboard
                // window.location.href = 'admin_dashboard.html'; // Example redirect
            } else {
                loginMessage.textContent = 'Invalid username or password.';
                loginMessage.classList.remove('hidden', 'text-green-600');
                loginMessage.classList.add('text-red-600');
            }
        });
    </script>

</body>
</html>
