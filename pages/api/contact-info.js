// File: pages/api/contact-info.js
export default function handler(req, res) {
  res.status(200).json({
    address: {
      building: "110, Natwala Building",
      road: "Swatantrya Veer Savarkar Rd",
      landmark: "Near Makhdoom Shah Baba Darga",
      area: "Mahim West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400016",
      // Add formatted version for easy use
      formatted:
        "110, Natalwala Building, Swatantrya Veer Savarkar Rd,  Mahim West, Mumbai, Maharashtra 400016",
    },
    social: {
      facebook: "https://www.facebook.com/people/Zeeshanaliorg/61568583455772/",
      instagram: "https://www.instagram.com/zacharityfeedfoundation/",
      linkedin: "https://www.linkedin.com/company/za-charity-feed-foundation/",
      youtube: "https://www.youtube.com/@Zazeeshanali-org",
      quora: "https://www.quora.com/profile/Zeeshan-Ali-4965",
      reddit: "https://www.reddit.com/r/Zeeshanali_org/",
      pinterest:
        "https://in.pinterest.com/zacharity/?invite_code=00301de30eae413bae3a9d8b7df0700d&sender=1060809024636959048",
      x: "https://x.com/za_charity",
    },
  });
}
