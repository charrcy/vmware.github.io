import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(private router: Router) {
    }

    ossTagline = "Building Open Source for Everyone";
    ossAbout = "Collaboration, community, and curiosity - essential ingredients to a vibrant open source community and part of VMware's culture. VMware's developers participate in a wide variety of open source projects through technical contributions, community leadership, and project innovation. This page highlights a few of the open source projects created and released by our engineers."

    projects = [
    {
      "name" : "Harbor",
      "image" : "harbor.png",
      "description" : "An Enterprise-class Container Registry Server based on Docker Distribution",
      "url" : "https://vmware.github.io/harbor/"
    },
    {
      "name" : "Admiral™",
      "image" : "admiral.png",
      "description" : "Highly Scalable Container Management Platform",
      "url" : "https://vmware.github.io/admiral/"
    },
    {
      "name": "Hatchway",
      "image": "github_icon.svg",
      "description": "Persistent Storage for Cloud Native Applications. Enterprise grade, Storage and Data services for Docker & Kubernetes",
      "url": "https://vmware.github.io/hatchway/documentation/"
    },
    {
      "name" : "Clarity",
      "image" : "clarity.svg",
      "description" : "UX guidelines, HTML/CSS framework, and Angular 2 components working together to craft exceptional experiences",
      "url" : "https://vmware.github.io/clarity"
    },
    {
      "name" : "vSphere Automation SDKs",
      "image" : "vsphere-automation-sdks.png",
      "description" : "Software Development Kits for accessing vSphere’s Automation endpoint APIs",
      "url" : "https://vmware.github.io/vsphere-automation-sdk"
    },
    {
      "name" : "Weathervane",
      "description" : "Virtual-Infrastructure and Cloud Performance Benchmark",
      "image" : "weathervane.png",
      "url" : "https://github.com/vmware/weathervane"
    },
    {
      "name" : "Chap",
      "description" : "Analyzes un-instrumented core files for leaks, memory growth, and corruption",
      "image" : "chap.png",
      "url" : "https://github.com/vmware/chap"
    },
    {
      "name" : "vSphere Integrated Containers Engine",
      "image" : "vic.png",
      "description" : "Container runtime for vSphere Integrated Containers",
      "url" : "https://vmware.github.io/vic/"
    },
    {
      "name" : "Lightwave™",
      "image" : "lightwave.png",
      "description" : "Identity services for traditional infrastructure, applications and containers",
      "url" : "https://vmware.github.io/lightwave/"
    },
    {
      "name" : "LIOTA",
      "image" : "liota.png",
      "description" : "IoT solution developers in creating IoT Edge System data orchestration applications",
      "url" : "https://github.com/vmware/liota"
    },
    {
      "name" : "Photon OS™",
      "image" : "photon.png",
      "description" : "Minimal Linux Container Host",
      "url" : "https://vmware.github.io/photon/"
    },
    {
      "name" : "Photon Controller™",
      "image" : "photon.png",
      "description" : "Distributed, multi-tenant host controller and scheduler",
      "url" : "https://vmware.github.io/photon-controller/"
    },
    {
      "name" : "Xenon™",
      "image" : "xenon.png",
      "description" : "Decentralized Control Plane Framework",
      "url" : "https://vmware.github.io/xenon/"
    },
    {
      "name": "vSphere Docker Volume Service (vDVS)",
      "image": "github_icon.svg",
      "description": "Enterprise grade, Storage and Data services for Stateful Cloud Native Applications",
      "url": "https://vmware.github.io/vsphere-storage-for-docker/"
    },
    {
      "name" : "tdnf",
      "image" : "github_icon.svg",
      "description" : "Tiny Dandified Yum",
      "url" : "https://github.com/vmware/tdnf/"
    },
    {
      "name" : "vagrant-guest-photon",
      "image" : "github_icon.svg",
      "description" : "Vagrant plugin that adds VMware Photon guest support",
      "url" : "https://github.com/vmware/vagrant-guests-photon"
    }
    ];

    trackByFn(index, item) {
    	return item.id;
    }
}
