import {
  Component,
  ElementRef,
  ViewChild,
  input
} from '@angular/core';

import { Project } from '../../../../../dto';

@Component({
  selector: 'app-project-card-preview-component',
  standalone: true,
  imports: [],
  templateUrl: './project-card-preview-component.html',
  styleUrl: './project-card-preview-component.css'
})
export class ProjectCardPreviewComponent {

  readonly project = input.required<Project>();

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef<HTMLVideoElement>;

  isPlaying = false;

  playVideo(): void {

    const video = this.videoPlayer?.nativeElement;

    if (!video) return;

    video.currentTime = 0;

    video.play();

    this.isPlaying = true;

  }

  pauseVideo(): void {

    const video = this.videoPlayer?.nativeElement;

    if (!video) return;

    video.pause();

    video.currentTime = 0;

    this.isPlaying = false;

  }

  toggleVideo(): void {

    const video = this.videoPlayer?.nativeElement;

    if (!video) return;

    if (video.paused) {

      video.play();

      this.isPlaying = true;

    } else {

      video.pause();

      this.isPlaying = false;

    }

  }

}