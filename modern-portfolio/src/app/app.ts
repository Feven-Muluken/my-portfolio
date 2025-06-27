import { Component } from '@angular/core';
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
export class App {
  protected title = 'Feven Muluken Ejigu - Software Engineer';
  protected isDarkMode = false;
  protected contactForm: FormGroup;

  // Social Media Links - Updated with real URLs
  protected socialLinks = {
    linkedin: 'https://www.linkedin.com/in/feven-muluken-542281323/',
    github: 'https://github.com/Feven-Muluken',
    telegram: 'https://t.me/veben5',
    instagram: 'https://www.instagram.com/fevt_5/',
    email: 'fivamuluken@gmail.com',
    shecodes: 'https://www.shecodes.io/graduates/feven-muluken',
    delac: 'https://delac.foundation/'
  };

  // Enhanced Skills Data for Fullstack Developer
  protected skills = [
    { name: 'HTML5 & Semantic Markup', level: 95 },
    { name: 'CSS3 & Responsive Design', level: 90 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'React.js', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'RESTful APIs', level: 80 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code & Dev Tools', level: 90 },
    { name: 'Web Hosting & Deployment', level: 75 },
    { name: 'AI Integration', level: 70 },
    { name: 'Accessibility (WCAG)', level: 85 },
    { name: 'Problem Solving', level: 90 }
  ];

  // Enhanced Projects Data
  protected projects = [
    {
      title: 'Accessible Weather Application',
      description: 'A comprehensive weather app designed with accessibility in mind, featuring real-time data, voice support, and WCAG compliance.',
      icon: 'wb_sunny',
      technologies: ['React', 'Weather API', 'Accessibility', 'CSS3'],
      link: 'https://weather-app.example.com',
      github: 'https://github.com/feven-muluken/accessible-weather-app'
    },
    {
      title: 'Task Management System',
      description: 'A full-featured productivity tool with task organization, reminders, progress tracking, and collaborative features.',
      icon: 'task_alt',
      technologies: ['JavaScript', 'Local Storage', 'CSS3', 'Responsive Design'],
      link: 'https://task-manager.example.com',
      github: 'https://github.com/feven-muluken/task-management-system'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing projects, skills, and achievements with Material Design principles.',
      icon: 'web',
      technologies: ['Angular', 'Material Design', 'TypeScript', 'Responsive'],
      link: 'https://feven-portfolio.example.com',
      github: 'https://github.com/feven-muluken/portfolio-website'
    },
    {
      title: 'AI-Powered Chat Interface',
      description: 'An intelligent chat application integrating AI capabilities for enhanced user interaction and support.',
      icon: 'smart_toy',
      technologies: ['React', 'AI Integration', 'API Development', 'JavaScript'],
      link: 'https://ai-chat.example.com',
      github: 'https://github.com/feven-muluken/ai-chat-interface'
    }
  ];

  // Education & Background
  protected education = {
    current: 'Third-year Software Engineering student at Addis Ababa University',
    exchange: 'Studied at Ningbo University (Exchange Program)',
    location: 'Addis Ababa, Ethiopia',
    foundation: 'Fully supported by Delac Foundation'
  };

  // Certifications
  protected certifications = [
    'SheCodes Basics & Basics Add-on',
    'SheCodes Plus & Plus Add-on',
    'SheCodes Plus AI',
    'Featured in SheCodes Hall of Fame'
  ];

  // Achievements
  protected achievements = [
    'Featured in SheCodes Hall of Fame as high-performing graduate',
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

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
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
      const mailtoLink = `mailto:${this.socialLinks.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
      window.open(mailtoLink);

      this.snackBar.open('Email client opened! Please send your message.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });

      this.contactForm.reset();
    } else {
      this.snackBar.open('Please fill all fields correctly.', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }
}
