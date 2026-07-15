import { Component, input,ViewChild , ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../dto';


@Component({

  selector: 'app-project-card',

  standalone: true,

  imports: [],

  templateUrl: './project-card-component.html',

  styleUrl: './project-card-component.css'

})

export class ProjectCardComponent {

  project = input.required<Project>();

  @ViewChild('videoPlayer')

  videoPlayer!: ElementRef<HTMLVideoElement>;

  isPlaying = false;

  playVideo(): void {

    const video = this.videoPlayer.nativeElement;

    video.play();

    this.isPlaying = true;

  }

  pauseVideo(): void {

    const video = this.videoPlayer.nativeElement;

    video.pause();

    video.currentTime = 0;

    this.isPlaying = false;

  }

  toggleVideo(): void {

    const video = this.videoPlayer.nativeElement;

    if (video.paused) {

      video.play();

      this.isPlaying = true;

    } else {

      video.pause();

      this.isPlaying = false;

    }

  }

}