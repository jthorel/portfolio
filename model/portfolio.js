var Portfolio = function () {
  this.projects = [
    {
      id: 1,
      title: "black friday",
      thumb: "splash3.png",
      shortdesc:
        "A competitive top-down pixel-art action local multiplayer game developed in Unity3D for PC and Mac",
      desc: "A competitive top-down pixel-art action local multiplayer game developed in Unity3D for PC and Mac. Did most of the programming together with another team member. Design decisions and ideas toghether with whole team. Created and presented a satirical trailer.",
      tags: ["Game Design", "Unity3D", "C#"],
      images: ["bl.png", "blackfriday.png", "bl_combat.png"],
      embed: ["https://player.vimeo.com/video/194662010"],
    },
    {
      id: 11,
      title: "braking point",
      thumb: "braking.png",
      shortdesc:
        "Split screen car game on breakable ice, created in Unreal Engine during Nordic Game Jam 2018",
      desc: "Split screen car game on breakable ice, created in Unreal Engine during Nordic Game Jam 2018. Drive around, use power-ups, bump and break the ice for the other player while avoiding going through the ice",
      tags: ["Unreal Engine", "Game Design"],
      images: [],
      videos: ["braking"],
    },

    {
      id: 12,
      title: "collaborative virtual reality infrastructure planner",
      thumb: "exjobb.jpg",
      shortdesc:
        "Master thesis project. Created a VR prototype for collaborative planning of roads, with user studies. Made in Unreal Engine",
      desc: 'Master thesis project. Created a VR prototype for collaborative planning of roads, with user studies. Made in Unreal Engine. Prototype is fully functional with "multiplayer" support.',
      tags: ["Unreal Engine", "Game Design", "User Study"],
      images: ["exjobb.jpg"],
      embed: [],
      videos: ["vr2"],
    },
    {
      id: 5,
      title: "labyrinth",
      thumb: "labyrinth.jpeg",
      shortdesc:
        "VR game developed in Unity. Presented and tested at several exhibitions.",
      desc: "VR game developed in Unity. Presented and tested at several exhibitions.",
      tags: [
        "Unity3D",
        "Game Design",
        "Virtual Reality",
        "Advanced Graphics",
        "Interaction",
      ],
      images: [],
      videos: ["labyrinth"],
      // link: {url: "https://labyrinth.christianabdelmassih.com", text: "Project website"}
    },
    {
      id: 2,
      title: "kälk-nisse",
      thumb: "kalk1.png",
      shortdesc:
        "AR game prototype created in ARKit for iOS. Draw lines on paper and ride them with your character.",
      desc: "Line Rider in Augmented Reality. Developed in Unity3D using ARKit on iOS. Draw lines in the real world and ride them on your phone.",
      tags: ["Augmented Reality", "C#", "Unity3D", "ARKit"],
      images: ["kalk1.png"],
      videos: ["kalk"],
    },

    {
      id: 8,
      title: "kopps",
      thumb: "kopps.png",
      shortdesc:
        "Redesign of a course planning system with an interactive prototype, with user studies.",
      desc: "Redesign of a course planning system with an interactive prototype",
      tags: [
        "Interaction Design",
        "Prototyping",
        "UX",
        "HTML5",
        "JavaScript",
        "CSS",
        "Balsamiq",
      ],
      images: ["kopps.png"],
      link: {
        url: "http://xml.csc.kth.se/~jthorel/ixd-metod/prototyp/schedule_fin.html",
        text: "Test prototype",
      },
    },

    {
      id: 4,
      title: "tracklists",
      thumb: "tracks2.png",
      shortdesc: "Web app for saving tracklists of music sets.",
      desc: "Webapp to save sets of music. Created for a interaction programming course. Fully functional with user functions and a document-oriented (MongoDB) database.",
      tags: ["React", "Backbone", "HTML5", "CSS", "JavaScript"],
      images: ["tracks1.png", "tracks2.png", "tracks3.png"],
      // link: {url: "https://intprogkth.herokuapp.com/", text:"Online demo"}
    },
    {
      id: 6,
      title: "activities",
      thumb: "act1.png",
      shortdesc:
        "Mobile web app for creating activities. Other nearby users can join using geolocation.",
      desc: "Create activities using geolocation. Users can join by checking nearby activities or byt using the map. User functions and chat function in the activity. Not actively maintained, some function might not work.",
      tags: ["React", "Backbone", "HTML5", "CSS", "JavaScript", "Mobile"],
      images: ["act1.png", "act2.png", "act3.png"],
      // link: {url: "https://activitiesmopub.herokuapp.com", text: "Online demo (made for mobile in mind)"}
    },
    {
      id: 13,
      title: "Folksam mobile app",
      thumb: "app8.png",
      shortdesc: "Folksam's first native mobile app for iOS and Android",
      desc: "Folksam's first native mobile app for iOS and Android. Released to App Store. Built with SwitUI in MVVM and Clean architecture, with a GraphQL backend in Node and Typescript. Backend deployed and managed in OpenShift cluster and DevOps in Gitlab.",
      tags: [
        "iOS",
        "SwiftUI",
        "MVVM",
        "Node",
        "Typescript",
        "GraphQL",
        "Kubernetes",
        "DevOps",
        "Gitlab",
      ],
      images: [
        "app1.png",
        "app2.png",
        "app3.png",
        "app4.png",
        "app5.png",
        "app6.png",
        "app7.png",
        "app8.png",
      ],
      embed: [],
      videos: [],
      link: {
        url: "https://apps.apple.com/us/app/folksam-försäkringsbolag/id6468263762",
        text: "View on App Store",
      },
    },
    {
      id: 14,
      title: "Back To Office",
      thumb: "backtooffice.PNG",
      shortdesc:
        "Native iOS for Folksam employees to check the occupancy of different floors in the Folksam office during covid. Tracked anonymously with iBeacons.",
      desc: "Native iOS for Folksam employees to check the occupancy of different floors in the Folksam office during covid. Tracked anonymously with iBeacons.",
      tags: ["iOS", "UIKit", "iBeacon"],
      images: ["backtooffice.PNG"],
      embed: [],
      videos: [],
    },
    {
      id: 3,
      title: "waypoint tracker",
      thumb: "katt.gif",
      shortdesc:
        "Bachelor thesis. Iphone app utilizing spatial sound from GPS positions as direction for navigation, with user testing.",
      desc: "Bachelor thesis. Iphone app using spatial sound GPS beacons for navigation, with user testing. ",
      tags: ["Xcode", "Swift", "User Testing", "Usability"],
      images: ["katt.gif"],
      link: {
        url: "https://github.com/jthorel/Waypoint-tracker",
        text: "Source code on Github",
      },
    },
    {
      id: 15,
      title: "traffic accidents in augmented reality",
      thumb: "arkholmen.png",
      shortdesc: "Check history of traffic accidents in live view!",
      desc: "Visualize where traffic accidents happened in live view. More details are also available when the pin is pressed. Prototype built in a day in Swift and ARKit, with real data from Folksam.",
      tags: ["iOS", "Swift", "ARKit"],
      videos: ["ARKholmen_sd"],
    },
    {
      id: 7,
      title: "bussfeed",
      thumb: "bussfeed/first.png",
      shortdesc:
        "Design prototype for a new bus commute planning app in Stockholm, specifically for users with a baby stroller.",
      desc: "Design prototype for a new bus commute planning app in Stockholm, specifically for users with a baby stroller.",
      tags: ["Interaction Design", "Prototyping", "UX", "Balsamiq", "Flinto"],
      images: ["bussfeed/drop_sture.jpg", "bussfeed/graf_sture.jpg"],
    },

    {
      id: 9,
      title: "Folksam Student",
      thumb: "student1.png",
      shortdesc: "Folksam student home insurance app, released to customers",
      desc: "Folksam student home insurance app, released to customers",
      tags: [
        "React Native",
        "Node.js",
        "REST / GraphQL",
        "Azure B2C",
        "Oauth2/OpenID/SAML",
        "Cloud",
        "CI/CD",
        "Terraform",
      ],
      images: ["student1.png", "student2.png", "student3.png", "student4.png"],
      videos: ["student"],
      link: {
        url: "https://apps.apple.com/us/app/student/id1478732172",
        text: "View on App Store",
      },
    },
    // {
    // 	id: 9,
    // 	title: "this site",
    // 	thumb: "skele.png",
    // 	shortdesc: "Very simple webapp for a personal page/portfolio with easy portfolio managing. Built with React and modified Bootstrap v4",
    // 	desc: "",
    // 	tags: ["React", "HTML5", "CSS", "JavaScript"]
    // },
    {
      id: 13,
      title: "quiz web app",
      thumb: "olquiz.jpg",
      shortdesc:
        "A quiz web app created for the student union paper. Modular, statistics, cloud-backend and built for ease of modification for different quizes. Made with React and Redux",
      desc: "",
      tags: ["React", "Redux", "HTML5", "CSS", "JavaScript"],
      link: {
        url: "https://quiz.osqledaren.se",
        text: "Take the quiz (swedish)",
      },
      images: ["olquiz.jpg"],
    },
    {
      id: 10,
      title: "bertil",
      thumb: "bertil.png",
      shortdesc:
        "A smart water bottle that tracks water intake and reminds you to drink. A physical prototype created with a water bottle, arduino and sensors",
      desc: "Tracks water intake and when you should drink. Talks to an app that show how much you have drank, how much water in bottle, and when you should drink. Made with Arduino with different sensors (accelerometer, gyro, pressure, wifi module)",
      tags: [
        "Arduino",
        "C++",
        "Physical interaction",
        "HTML5",
        "CSS",
        "JavaScript",
      ],
      images: ["bertil.png"],
      videos: ["bertil"],
    },
    {
      id: 14,
      title: "mindful breathing app",
      thumb: "mindful.png",
      shortdesc: "An interactive prototype for guided mindful breathing",
      desc: "An interactive prototype for guided mindful breathing",
      tags: ["Interaction Design", "iOS protoype", "Origami", "User Tests"],
      images: ["mindful.png"],
      videos: ["mindful"],
    },
  ];

  var _this = this;

  this.addProject = function (projectObject) {
    var newid = this.projects[this.projects.length - 1].id + 1;
    projectObject.id = newid;
    this.projects.push(projectObject);
  };

  this.removeProject = function (id) {
    for (i in this.projects) {
      if (this.projects[i].id == id) {
        this.projects.splice(i, 1);
      }
    }
  };

  this.changeRating = function (id) {};

  this.findProjectById = function (id) {
    var project = this.projects.filter(function (obj) {
      return obj.id == id;
    })[0];
    return project;
  };

  this.addComment = function (id, commentObj) {
    for (var i in this.projects) {
      if (this.projects[i].id == id) {
        if (this.projects[i].comments.length < 1) {
          commentObj.id = 1;
          this.projects[i].comments.push(commentObj);
          break;
        } else {
          var newid =
            this.projects[i].comments[this.projects[i].comments.length - 1].id +
            1;
          commentObj.id = newid;
          this.projects[i].comments.push(commentObj);
          break;
        }
      } else {
        console.log("error, wrong Project id");
      }
    }
  };

  this.getProjects = function () {
    return this.projects;
  };
};
