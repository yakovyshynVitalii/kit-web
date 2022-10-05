import { ref } from "vue";

export function use() {
  const projects = ref([
    {
      url: "https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg",
      tags: ["HTML", "CSS", "VUE", "GSAP"],
      size: "-size-l",
      title: "Cybersport Bets",
      previewPc: "/image/projects/1.jpg",
      previewMob: "/image/projects/1-mobile.jpg",
      description:
        "Any ranking system is bound to be subjective, and our ratings for the major esports gambling sites are no exception.",
    },
    {
      url: "https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg",
      tags: ["HTML", "CSS", "VUE", "GSAP"],
      size: "-size-s",
      title: "Cybersport Bets",
      previewPc: "/image/projects/2.jpg",
      previewMob: "/image/projects/2-mobile.jpg",
      description:
        "Any ranking system is bound to be subjective, and our ratings for the major esports gambling sites are no exception.",
    },
    {
      url: "https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg",
      tags: ["HTML", "CSS", "VUE", "GSAP"],
      size: "-size-m",
      title: "Cybersport Bets",
      previewPc: "/image/projects/3.jpg",
      previewMob: "/image/projects/3-mobile.jpg",
      description:
        "Any ranking system is bound to be subjective, and our ratings for the major esports gambling sites are no exception.",
    },
    {
      url: "https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg",
      tags: ["HTML", "CSS", "VUE", "GSAP"],
      size: "-size-m",
      title: "Cybersport Bets",
      previewPc: "/image/projects/3.jpg",
      previewMob: "/image/projects/3-mobile.jpg",
      description:
        "Any ranking system is bound to be subjective, and our ratings for the major esports gambling sites are no exception.",
    },
    {
      url: "https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg",
      tags: ["HTML", "CSS", "VUE", "GSAP"],
      size: "-size-s",
      title: "Cybersport Bets",
      previewPc: "/image/projects/2.jpg",
      previewMob: "image/projects/2-mobile.jpg",
      description:
        "Any ranking system is bound to be subjective, and our ratings for the major esports gambling sites are no exception.",
    },
  ]);

  return {
    projects,
  };
}
