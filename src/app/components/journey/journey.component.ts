import { Component } from '@angular/core';
import { SkillCardComponent } from '../shared/skill-card/skill-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journey',
  imports: [SkillCardComponent, CommonModule],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.css',
})
export class JourneyComponent {
  skills = [
    // Frontend
    { icon: 'fab fa-js', label: 'JavaScript' },
    { icon: 'fab fa-angular', label: 'Angular' },
    { icon: 'fab fa-react', label: 'React' },

    // Backend
    { icon: 'fab fa-java', label: 'Java' },
    { icon: 'fab fa-python', label: 'Python' },
    { icon: 'fas fa-code', label: 'C#' },
    { icon: 'fab fa-node-js', label: 'Node.js' },
    { icon: 'fas fa-bolt', label: 'FastAPI' },

    // Databases
    { icon: 'fas fa-database', label: 'SQL' },
    { icon: 'fas fa-leaf', label: 'MongoDB' },

    // Tools
    { icon: 'fab fa-git-alt', label: 'Git' },
  ];
}
