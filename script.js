// Sample data for the website
let services = [
    {
        id: 1,
        name: "Cataract Surgery",
        description: "Advanced cataract removal with premium intraocular lenses for clear vision.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "LASIK Surgery",
        description: "Precise laser vision correction to reduce or eliminate dependence on glasses.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Retina Services",
        description: "Comprehensive diagnosis and treatment for retinal disorders and diseases.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Glaucoma Treatment",
        description: "Early detection and management of glaucoma to preserve your vision.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Pediatric Ophthalmology",
        description: "Specialized eye care for children to ensure healthy visual development.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Cornea Services",
        description: "Advanced treatment for corneal diseases including corneal transplantation.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

let gallery = [
    {
        id: 1,
        title: "Hospital Exterior",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        title: "Reception Area",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        title: "Operation Theater",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        title: "Consultation Room",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        title: "Diagnostic Equipment",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        title: "Medical Team",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

let blogPosts = [
    {
        id: 1,
        title: "Understanding Cataracts: Symptoms and Treatment Options",
        author: "Kanjnetra Eye Hospital Team",
        date: "2025-05-15",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        excerpt: "Cataracts are a common eye condition that affects millions of people worldwide. In this article, we explore the symptoms, causes, and treatment options available...",
        content: "Full blog content goes here..."
    },
    {
        id: 2,
        title: "Protecting Your Eyes in the Digital Age",
        author: "Kanjnetra Eye Hospital Team",
        date: "2025-04-28",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        excerpt: "With increased screen time, digital eye strain has become a common problem. Learn how to protect your eyes and maintain good vision while using digital devices...",
        content: "Full blog content goes here..."
    },
    {
        id: 3,
        title: "Advances in LASIK Surgery: What You Need to Know",
        author: "Kanjnetra Eye Hospital Team",
        date: "2025-04-10",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        excerpt: "LASIK technology has evolved significantly over the years. Discover the latest advancements in laser vision correction and find out if you're a good candidate...",
        content: "Full blog content goes here..."
    }
];

let appointments = [
    {
        id: 1,
        name: "Rajesh Kumar",
        email: "rajesh@example.com",
        phone: "9876543210",
        service: "General Eye Checkup",
        date: "2025-06-15",
        time: "10:00",
        message: "I have been experiencing blurry vision for the past few weeks."
    },
    {
        id: 2,
        name: "Priya Singh",
        email: "priya@example.com",
        phone: "8765432109",
        service: "Cataract Consultation",
        date: "2025-06-16",
        time: "11:00",
        message: "My mother has been diagnosed with cataracts and we would like to discuss treatment options."
    }
];

// DOM Elements
const ownerLoginBtn = document.getElementById('ownerLoginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const adminDashboard = document.getElementById('adminDashboard');
const adminTabs = document.querySelectorAll('.admin-tab');
const adminTabContents = document.querySelectorAll('.admin-tab-content');
const appointmentForm = document.getElementById('appointmentForm');
const loadMoreGallery = document.getElementById('loadMoreGallery');
const loadMoreBlog = document.getElementById('loadMoreBlog');

// Event Listeners
ownerLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (in a real application, this should be done server-side)
    if (username === 'admin' && password === 'password') {
        loginModal.style.display = 'none';
        adminDashboard.style.display = 'block';
        loadAdminData();
    } else {
        alert('Invalid username or password');
    }
});

// Admin Tab Switching
adminTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        adminTabs.forEach(t => t.classList.remove('active'));
        adminTabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    });
});

// Service Form Submission
document.getElementById('serviceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const serviceId = document.getElementById('serviceForm').getAttribute('data-id');
    const serviceData = {
        name: document.getElementById('serviceName').value,
        description: document.getElementById('serviceDescription').value,
        image: document.getElementById('serviceImage').value
    };
    
    if (serviceId) {
        // Update existing service
        const index = services.findIndex(s => s.id == serviceId);
        if (index !== -1) {
            services[index] = { ...services[index], ...serviceData };
        }
    } else {
        // Add new service
        const newService = {
            id: services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1,
            ...serviceData
        };
        services.push(newService);
    }
    
    // Reset form
    document.getElementById('serviceForm').reset();
    document.getElementById('serviceForm').removeAttribute('data-id');
    
    // Reload services list
    loadServicesList();
    
    alert('Service saved successfully!');
});

// Gallery Form Submission
document.getElementById('galleryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const galleryData = {
        title: document.getElementById('galleryTitle').value,
        image: document.getElementById('galleryImage').value
    };
    
    const newGalleryItem = {
        id: gallery.length > 0 ? Math.max(...gallery.map(g => g.id)) + 1 : 1,
        ...galleryData
    };
    gallery.push(newGalleryItem);
    
    // Reset form
    document.getElementById('galleryForm').reset();
    
    // Reload gallery list
    loadGalleryList();
    
    alert('Image added to gallery successfully!');
});

// Blog Form Submission
document.getElementById('blogForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const blogId = document.getElementById('blogForm').getAttribute('data-id');
    const blogData = {
        title: document.getElementById('blogTitle').value,
        author: "Kanjnetra Eye Hospital Team",
        date: document.getElementById('blogDate').value,
        image: document.getElementById('blogImage').value,
        excerpt: document.getElementById('blogExcerpt').value,
        content: document.getElementById('blogContent').value
    };
    
    if (blogId) {
        // Update existing blog post
        const index = blogPosts.findIndex(b => b.id == blogId);
        if (index !== -1) {
            blogPosts[index] = { ...blogPosts[index], ...blogData };
        }
    } else {
        // Add new blog post
        const newBlogPost = {
            id: blogPosts.length > 0 ? Math.max(...blogPosts.map(b => b.id)) + 1 : 1,
            ...blogData
        };
        blogPosts.push(newBlogPost);
    }
    
    // Reset form
    document.getElementById('blogForm').reset();
    document.getElementById('blogForm').removeAttribute('data-id');
    
    // Reload blog list
    loadBlogList();
    
    alert('Blog post saved successfully!');
});

// Appointment Form Submission
appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const appointmentData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('message').value
    };
    
    const newAppointment = {
        id: appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1,
        ...appointmentData
    };
    appointments.push(newAppointment);
    
    // Reset form
    appointmentForm.reset();
    
    alert('Appointment booked successfully! We will contact you shortly to confirm.');
});

// Load More Gallery
loadMoreGallery.addEventListener('click', () => {
    // In a real application, this would load more items from the server
    alert('More gallery items would be loaded here in a real application.');
});

// Load More Blog
loadMoreBlog.addEventListener('click', () => {
    // In a real application, this would load more items from the server
    alert('More blog posts would be loaded here in a real application.');
});

// Functions to load admin data
function loadAdminData() {
    loadServicesList();
    loadGalleryList();
    loadBlogList();
    loadAppointmentsList();
}

function loadServicesList() {
    const servicesList = document.getElementById('servicesList');
    servicesList.innerHTML = '';
    
    services.forEach(service => {
        const listItem = document.createElement('div');
        listItem.className = 'admin-list-item';
        listItem.innerHTML = `
            <div>
                <strong>${service.name}</strong>
                <p>${service.description}</p>
            </div>
            <div class="admin-actions">
                <button class="btn-small btn-edit" onclick="editService(${service.id})">Edit</button>
                <button class="btn-small btn-delete" onclick="deleteService(${service.id})">Delete</button>
            </div>
        `;
        servicesList.appendChild(listItem);
    });
}

function loadGalleryList() {
    const galleryList = document.getElementById('galleryList');
    galleryList.innerHTML = '';
    
    gallery.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'admin-list-item';
        listItem.innerHTML = `
            <div>
                <strong>${item.title}</strong>
                <p><img src="${item.image}" alt="${item.title}" width="100"></p>
            </div>
            <div class="admin-actions">
                <button class="btn-small btn-delete" onclick="deleteGalleryItem(${item.id})">Delete</button>
            </div>
        `;
        galleryList.appendChild(listItem);
    });
}

function loadBlogList() {
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '';
    
    blogPosts.forEach(post => {
        const listItem = document.createElement('div');
        listItem.className = 'admin-list-item';
        listItem.innerHTML = `
            <div>
                <strong>${post.title}</strong>
                <p>By ${post.author} on ${post.date}</p>
                <p>${post.excerpt}</p>
            </div>
            <div class="admin-actions">
                <button class="btn-small btn-edit" onclick="editBlogPost(${post.id})">Edit</button>
                <button class="btn-small btn-delete" onclick="deleteBlogPost(${post.id})">Delete</button>
            </div>
        `;
        blogList.appendChild(listItem);
    });
}

function loadAppointmentsList() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = '';
    
    appointments.forEach(appointment => {
        const listItem = document.createElement('div');
        listItem.className = 'admin-list-item';
        listItem.innerHTML = `
            <div>
                <strong>${appointment.name}</strong>
                <p>${appointment.email} | ${appointment.phone}</p>
                <p>Service: ${appointment.service}</p>
                <p>Date: ${appointment.date} at ${appointment.time}</p>
                <p>Message: ${appointment.message}</p>
            </div>
            <div class="admin-actions">
                <button class="btn-small btn-delete" onclick="deleteAppointment(${appointment.id})">Delete</button>
            </div>
        `;
        appointmentsList.appendChild(listItem);
    });
}

// Functions for CRUD operations
function editService(id) {
    const service = services.find(s => s.id === id);
    if (service) {
        document.getElementById('serviceName').value = service.name;
        document.getElementById('serviceDescription').value = service.description;
        document.getElementById('serviceImage').value = service.image;
        document.getElementById('serviceForm').setAttribute('data-id', id);
    }
}

function deleteService(id) {
    if (confirm('Are you sure you want to delete this service?')) {
        services = services.filter(s => s.id !== id);
        loadServicesList();
        alert('Service deleted successfully!');
    }
}

function deleteGalleryItem(id) {
    if (confirm('Are you sure you want to delete this gallery item?')) {
        gallery = gallery.filter(g => g.id !== id);
        loadGalleryList();
        alert('Gallery item deleted successfully!');
    }
}

function editBlogPost(id) {
    const post = blogPosts.find(b => b.id === id);
    if (post) {
        document.getElementById('blogTitle').value = post.title;
        document.getElementById('blogDate').value = post.date;
        document.getElementById('blogImage').value = post.image;
        document.getElementById('blogExcerpt').value = post.excerpt;
        document.getElementById('blogContent').value = post.content;
        document.getElementById('blogForm').setAttribute('data-id', id);
    }
}

function deleteBlogPost(id) {
    if (confirm('Are you sure you want to delete this blog post?')) {
        blogPosts = blogPosts.filter(b => b.id !== id);
        loadBlogList();
        alert('Blog post deleted successfully!');
    }
}

function deleteAppointment(id) {
    if (confirm('Are you sure you want to delete this appointment?')) {
        appointments = appointments.filter(a => a.id !== id);
        loadAppointmentsList();
        alert('Appointment deleted successfully!');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
