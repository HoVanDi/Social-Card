export function getLocalData() {
  const localData = localStorage.getItem("cardData");
  return localData ? JSON.parse(localData) : [];
}

export function getData() {
  return [
    {
      Name: "Phu Nguyen",
      Birthday: "14/08/2023",
      Profile: "Images/Nguyen-img.svg",
      Description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: "Images/NguyenContent-img.svg",
    },
    {
      Name: "Varen",
      Birthday: "14/08/2023",
      Profile: "Images/Varen-profile.svg",
      Description:
        "Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông tin: Avatar, Name, Description, Image.",
      img: "Images/Varen-img.svg",
    },

    {
      Name: "Mio",
      Birthday: "14/08/2023",
      Profile: "Images/Mio-profile.svg",
      Description:
        "Next, you select one property. It doesn’t matter which one you choose, yet it’s best to pick one that seems totally unrelated to your challenge..",
      img: "Images/Mio-img.svg",
    },
  ];
}
