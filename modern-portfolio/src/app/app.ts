import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  protected title = 'Feven Portfolio';
  protected isDarkMode = false;
  protected contactForm: FormGroup;
  protected image = 'assets/7F1A0686.JPG'; // Correct Angular assets path
  protected imageLoaded = false;

  // Social Media Links - Updated with real URLs
  protected socialLinks = {
    linkedin: 'https://www.linkedin.com/in/feven-muluken-542281323/',
    github: 'https://github.com/Feven-Muluken',
    AA: 'https://www.google.com/maps/place/Addis+Ababa/@8.9631768,38.7781448,12z/data=!3m1!4b1!4m6!3m5!1s0x164b85cef5ab402d:0x8467b6b037a24d49!8m2!3d9.0191936!4d38.7524635!16zL20vMGR0dGY?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
    AAU: 'https://www.aau.edu.et/',
    telegram: 'https://t.me/veben5',
    instagram: 'https://www.instagram.com/fevt_5/',
    email: 'fivamuluken@gmail.com',
    shecodes: 'https://www.shecodes.io/graduates/feven-muluken',
    delac: 'https://delac.foundation/'
  };

   // education
  protected education = {
    main: {
      description: 'Fourth-year Software Engineering and AI streem student at Addis Ababa University',
      location: 'Addis Ababa, Ethiopia',
      relevantCourses: [
        'AI and ML',
        'HCI',
        'Software Architecture',
        'Database Systems',
        'Web Development'
      ],
    },
    internatinalexp: {
      description: 'Frontier Tech Leaders Ethiopia:',   
      about:' Remote Machine Learning Bootcamp with Intensive training in AI, Machine Learning, and Deep Learning fundamentals.'   
    },
    shecodes: {
      description: 'Frontend website development using CSS, HTML and Javascript.',    
      foundation: 'Supported by Delac Foundation'  
    },
    location: 'Remote',
  };

  //  Skills Data
  protected skills = [
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'Bootstrap and Tailwind CSS', level: 80 },
    { name: 'React', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Node express', level: 90 },
    { name: 'Django', level: 75 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'VS Code, Git & GitHub and Deployment', level: 90 },
    { name: 'Web Hosting & Deployment', level: 75 },
    { name: 'AI Integration', level: 70 },
    { name: 'Accessibility (WCAG)', level: 85 },
    { name: 'Problem Solving', level: 90 }
  ] 
  protected certifications = [
    {
      certificate: 'SheCodes',
      link: 'https://drive.google.com/file/d/1mnPMYtfsb5v5bKfWUXhRB80PsirJQQho/view?usp=sharing'
    } ,
    {
      certificate: 'Corsera',
      link: 'https://drive.google.com/file/d/1ITK_hXvkCUGaU03gUpFhH65KjXlhbKnn/view?usp=sharing'
    } ,
    {
      certificate: 'FTL',
      link: 'https://drive.google.com/file/d/1Kc0HvxdnyVlY8zdi3ULgVBKGTlOrcsxV/view?usp=sharing'
    } ,
     {
      certificate: 'Graphics design',
      link: 'https://drive.google.com/file/d/1hlCiSRLNZyJh6m_7_2gj4qnDfRVSd2Lo/view?usp=sharing'
     }
  ];

  //  Projects Data
  protected projects = [
    {
      title: 'SMS campaign Platform',
      description: 'A full-stack SMS marketing platform for Afroel company using the MERN stack and TailwindCSS. Implemented campaign creation, contact management, and bulk messaging features with real-time delivery analytics.',
      icon: 'message',
      technologies: ['MERN stack', 'TailwindCSS', 'Africa\'s talking API', 'bycript and JWT for authorization and autentication,'],
      link: 'https://ai-chat.example.com',
      github: 'https://github.com/Feven-Muluken/SMS-campagn'
    },
    {
      title: 'Accessible Weather Application',
      description: 'A comprehensive weather app designed with accessibility in mind and featuring real-time data.',
      icon: 'wb_sunny',
      technologies: ['Javascript', 'Html', 'CSS3', 'Weather API', 'Accessibility'],
      link: 'https://wheather-application-virid.vercel.app/',
      github: 'https://github.com/Feven-Muluken/wheather-application'
    },
    {
      title: 'Ecommerce application',
      description: 'A secure e-commerce backend system with role-based access control, and transaction-safe inventory management with robust error handling.',
      icon: 'web',
      technologies: ['Django', 'JWT-based authentication', 'SQLite'],
      link: 'https://feven-portfolio.example.com',
      github: 'https://github.com/Feven-Muluken/ecommerce_backend'
    },
    {
      title: 'Task Management System',
      description: 'Full-Stack personal project with task organization, notifications, progress tracking and collaborative features.',
      icon: 'task_alt',
      technologies: ['MERN stack', 'Local Storage', 'tailwindCSS', 'Responsive Design'],
      link: 'https://task-manager.vercel.com',
      github: 'https://github.com/feven-muluken/task-management-system'
    },
    {
      title: 'To Do List Application',
      description: 'A modern front end aaplication with responsive, search icon ',
      icon: 'web',
      technologies: ['Angular', 'Material Design', 'TypeScript', 'Responsive'],
      link: 'https://to-do-list-app-nu-one.vercel.app/',
      github: 'https://github.com/Feven-Muluken/To-Do-List-app'
    },
    
  ];

  // Achievements
  protected achievements = [
    'Graduating FTL bootcomp',
    'Earned top ratings (4-5 stars) across multiple SheCodes workshops',
    'Active on GitHub with ~40 repositories showcasing diverse projects',
    'Passionate about developing accessible applications for people with disabilities'
  ];

  // Future Goals
  protected futureGoals = [
    'Contribute to open-source projects',
    'Take on internships in web/app development',
    'Build accessible digital solutions with real-world impact',
    'Participate in group projects and pair programming sessions'
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    // Initialize component logic
  }

  ngAfterViewInit() {
    // Set up intersection observer for skills animation
    this.setupSkillsAnimation();
  }

  setupSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animatePercentageCounters();
            skillsSection.classList.add('animate-skills');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      observer.observe(skillsSection);
    }
  }

  animatePercentageCounters() {
    const counters = document.querySelectorAll('.percentage-counter');

    counters.forEach((counter, index) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current).toString();
      }, 16);
    });
  }

  onImageError(event: any) {
    console.log('Image failed to load:', event);
    // You can set a fallback image here if needed
    // event.target.src = 'assets/fallback-image.jpg';
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openSocialLink(platform: string) {
    const url = this.socialLinks[platform as keyof typeof this.socialLinks];
    if (url) {
      window.open(url, '_blank');
    }
  }

  openProject(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Create email content
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `
Hello Feven,

You have received a new message from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
      `.trim();

      // Create mailto link with proper encoding
      const mailtoLink = `mailto:${this.socialLinks.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open default email client
      window.open(mailtoLink, '_blank');

      // Show success message
      this.snackBar.open('Email client opened! Please send your message.', 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['success-snackbar']
      });

      // Reset form
      this.contactForm.reset();
    } else {
      // Show error message for invalid form
      this.snackBar.open('Please fill all fields correctly.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['error-snackbar']
      });

      // Mark all invalid fields as touched to show errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}
